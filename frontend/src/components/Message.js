import React from 'react'
import { Alert } from 'react-bootstrap'
// two props
const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>
}

Message.defaultProps = {
  variant: 'iNfO',
}

export default Message
