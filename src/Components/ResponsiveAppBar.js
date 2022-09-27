
import Card  from '../UI/Card'
import React from 'react'

const ResponsiveAppBar = (props) => {
  return (
    <>
      <div className='row'>
      <Card className="card" style="width: 18rem;">
      <img src={props.img} alt="Pic" />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <a to="#" className="btn btn-primary">Go somewhere</a>
  </div>
</Card>
</div>
      </>
  )
}

export default ResponsiveAppBar