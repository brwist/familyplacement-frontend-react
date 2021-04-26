import Loader from 'components/Loader'
import MatchedFamiliesTable from 'components/MatchedFamiliesTable'
import TabSelectionBar from 'components/TabSelectionBar'
import queryString from 'query-string'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FormGroup, Input } from 'reactstrap'
import NavigationActions from 'store/actions/NavigationActions'
import PlacementMiddlewares from 'store/middlewares/PlacementMiddlewares'
import './index.scss'

const Placement = ({ location }) => {
  const {
    placements: {
      placement: { isLoading, data: placement, isError },
    },
  } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      NavigationActions.setActiveRoute({
        isPlacement: true,
        isFamily: false,
        currentRoute: true,
      }),
    )
    const parsed = queryString.parse(location.search)
    dispatch(PlacementMiddlewares.getPlacement(parsed.id))
    console.log('location', parsed, dispatch)
  }, [])

  return (
    <main className="placement-screen container container-padding section-centered">
      <TabSelectionBar btnText="Create Placement" btnLink="create-placement" />
      {isLoading && !isError && <Loader />}
      {!isLoading && !isError && (
        <div className="w-100 content-section">
          <div className="edit-link pb-2 w-100 font-weight-bold text-right">
            <Link to={`/edit-placement?id=${placement._id}`}>Edit</Link>
          </div>
          {[
            { text: 'Placement ID', value: placement._id },
            { text: 'Creation date', value: placement.createdAt },
            { text: 'Name', value: placement.name },
            { text: 'Country', value: placement.country },
          ].map(({ text, value }) => (
            <div key={text} className="d-flex placement-attr">
              <p>{text} :</p>
              <p className="ml-5">{value}</p>
            </div>
          ))}

          <div className="placement-characteristics">
            <h2>Criteria</h2>
            {Object.keys(placement.criteria).map((key) => (
              <div className="d-flex" key={key}>
                <FormGroup check>
                  <Input
                    type="checkbox"
                    name="check"
                    id="exampleCheck"
                    checked={placement.criteria[key]}
                  />
                </FormGroup>
                <p>{key}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {!isLoading && !isError && (
        <div className="w-100 matched-families">
          <h2 className="pb-2">Matched Families</h2>
          {placement?.families?.length > 0 && (
            <MatchedFamiliesTable data={placement.families} tableOf="family" />
          )}
        </div>
      )}
      {isError && <p className="pt-4 text-danger">No Placement Found!</p>}
    </main>
  )
}

export default Placement
