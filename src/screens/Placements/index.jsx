import CustomTable from 'components/CustomTable'
import TabSelectionBar from 'components/TabSelectionBar'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import placementsData from 'site-data/placements'
import PlacementMiddlewares from 'store/middlewares/PlacementMiddlewares'
import './index.scss'
import Loader from 'components/Loader'

const Placements = () => {
  const {
    placements: {
      totalPlacements: { isLoading, data: placements },
    },
  } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    if (placements && placements.length < 1) {
      dispatch(PlacementMiddlewares.getPlacements())
    }
  }, [])

  console.log('isLoading, placements', { isLoading, placements })
  return (
    <div className="placements h-100 container container-padding">
      <TabSelectionBar btnText="Create Placement" btnLink="create-placement" />
      {isLoading && <Loader />}
      {!isLoading && (
        <CustomTable
          thead={placementsData.tableData.thead}
          data={placementsData.tableData.data(placements)}
          tableOf="placement"
        />
      )}
    </div>
  )
}

export default Placements
