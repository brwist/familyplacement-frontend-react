import React from 'react'
import { Button } from 'reactstrap'
import './index.scss'

const CustomButton = ({ children, ...props }) => (
  <Button className="button" {...props}>
    {children}
  </Button>
)

export default CustomButton
