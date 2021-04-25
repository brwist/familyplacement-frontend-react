import React, { useEffect } from 'react'
import TabSelectionBar from 'components/TabSelectionBar'
import PlacementMiddlewares from 'store/middlewares/PlacementMiddlewares'
import queryString from 'query-string'
import { useDispatch, useSelector } from 'react-redux'
import { FormGroup, Input } from 'reactstrap'
import './index.scss'
import Loader from 'components/Loader'
import NavigationActions from 'store/actions/NavigationActions'
import MatchedFamiliesTable from 'components/MatchedFamiliesTable'

const Placement = ({ location }) => {
  const {
    placements: {
      placement: { isLoading, data: placement },
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
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="w-100 content-section">
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
      <div className="w-100 matched-families">
        <h2 className="pb-2">Matched Families</h2>
        {placement?.families?.length > 0 && (
          <MatchedFamiliesTable data={placement.families} tableOf="family" />
        )}
      </div>
    </main>
  )
}

export default Placement
