import TabSelectionBar from 'components/TabSelectionBar'
import React, { useEffect } from 'react'
import { FormGroup, Input } from 'reactstrap'
import './index.scss'
import { useDispatch, useSelector } from 'react-redux'
import queryString from 'query-string'
import FamilyMiddlewares from 'store/middlewares/FamilyMiddlewares'
import Loader from 'components/Loader'

const Family = ({ location }) => {
  const {
    families: {
      family: { isLoading, data: family },
    },
  } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    const parsed = queryString.parse(location.search)
    dispatch(FamilyMiddlewares.getFamily(parsed.id))
  }, [])
  console.log('location', family)
  return (
    <main className="family-screen container container-padding section-centered">
      <TabSelectionBar btnText="Create Family" btnLink="create-family" />
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="w-100 content-section">
          {[
            { text: 'Family ID', value: family._id },
            { text: 'Creation date', value: family.createdAt },
            { text: 'Name', value: family.name },
            { text: 'Country', value: family.country },
          ].map(({ text, value }) => (
            <div key={text} className="d-flex family-attr">
              <p>{text} :</p>
              <p className="ml-5">{value}</p>
            </div>
          ))}

          <div className="family-characteristics">
            <h2>Characteristics</h2>
            {Object.keys(family.characteristics).map((key) => (
              <div className="d-flex" key={key}>
                <FormGroup check>
                  <Input
                    type="checkbox"
                    name="check"
                    id="exampleCheck"
                    checked={family.characteristics[key]}
                  />
                </FormGroup>
                <p>{key}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  )
}

export default Family
