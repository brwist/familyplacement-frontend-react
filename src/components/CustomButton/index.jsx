import React from 'react';
import { Button } from 'reactstrap'
import './index.scss'

const CustomButton = ({ children }) => (
  <Button className="button">{children}</Button>
)

export default CustomButton
