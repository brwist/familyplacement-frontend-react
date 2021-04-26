import CustomTable from 'components/CustomTable'
import Loader from 'components/Loader'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import familiesData from 'site-data/families'
import FamilyMiddlewares from 'store/middlewares/FamilyMiddlewares'
import './index.scss'
import TabSelectionBar from 'components/TabSelectionBar'

const Families = () => {
  const {
    families: {
      totalFamilies: { isLoading, data: families, isError },
    },
  } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    if (families && families.length < 1) {
      dispatch(FamilyMiddlewares.getFamilies())
    }
  }, [])

  console.log('isLoading, families', { isLoading, families })

  return (
    <div className="families h-100 container container-padding">
      <TabSelectionBar btnText="Create Family" btnLink="create-family" />
      {isLoading && !isError && <Loader />}
      {!isLoading && !isError && (
        <CustomTable
          thead={familiesData.tableData.thead}
          data={familiesData.tableData.data(families)}
          tableOf="family"
        />
      )}
      {isError && <p className="pt-4 text-danger">No Families Found!</p>}
    </div>
  )
}

export default Families
