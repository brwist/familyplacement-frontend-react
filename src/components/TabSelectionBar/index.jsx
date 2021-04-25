import React from 'react'
import { useHistory } from 'react-router-dom'
import CustomTabs from 'components/CustomTabs'
import CustomButton from 'components/CustomButton'

const TabSelectionBar = ({ btnText, btnLink }) => {
  const history = useHistory()
  return (
    <div className="d-flex justify-content-between w-100 mb-5">
      <CustomTabs />
      <CustomButton onClick={() => history.push(`${btnLink}`)}>
        {btnText}
      </CustomButton>
    </div>
  )
}

export default TabSelectionBar
