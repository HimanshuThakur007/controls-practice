import React from 'react'
import  "./FormCard.css"

const FormCard = (props) => {
    const classes = 'FormCard ' + props.className;
  return (
    <div className={classes}>{props.children}</div>
  )
}

export default FormCard