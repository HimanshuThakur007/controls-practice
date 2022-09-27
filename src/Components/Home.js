// import React from 'react'
// import ResponsiveAppBar from './ResponsiveAppBar'
// import pic from "../Images/pic.jpg"
// import photo from "../Images/photo.jpg"

// const Home = (props) => {
//   return (
//     <div>
//     <div className='grid'>
//       <div className='row'>
//         <ResponsiveAppBar  title = "Thakur" 
//         img ={pic}
//         description = "Some quick example text to build on the card title and make up the bulk of the card's content."/>
//        </div>
//        <div className='row'>
//         <ResponsiveAppBar title = "Himanshu" 
//         description = "lorem lipsum" 
//         img = {photo}/>
//         </div>
//         </div>
//     </div>
//   )
// }

// export default Home


import React from 'react'
import "./Home.css"
import pic from "../Images/pic.jpg"
import photo from "../Images/photo.jpg"
import Card from '../UI/Card';
import Button from '../UI/Button';

const Home = () => {
  return (
    <>
 
        <h5 className='header'>Portfolio</h5>
        
        <div className='cardgrid'>
       <Card className='row'>
       <img src={pic} alt="Pic" />
       </Card>
       <Card className="row">
       <img src={photo} alt="Pic" />
       </Card>
       <Card className='row'>
       <img src={photo} alt="Pic" />
       </Card>
       {/* <Card className='row'> */}

       {/* </Card> */}
       </div>
      <div className='modal_button'>
    <Button className="select primary" title ="Selected"/>
    </div>
    
        
    </>
  )
}

export default Home


