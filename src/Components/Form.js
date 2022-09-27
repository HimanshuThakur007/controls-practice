
import React from 'react'
import FormCard from '../UI/FormCard'
import classes from "../UI/FormCard.css"

const Form = (props) => {
  return (
    <FormCard className = {classes.main}>
        <form>
          <label>Name</label>
          <input type= "text" id = "name"/>
          <label>Age</label>
          <input type = "Number" id = "age"/>

        </form>
        
    </FormCard>
  )
}

export default Form