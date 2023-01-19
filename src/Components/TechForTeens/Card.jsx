import React from 'react'
import './TechForTeens';
import EngineeringIcon from '@mui/icons-material/Engineering';
function Card(props) {

  const myVal = props.num%2;

  const headStyle={
    backgroundColor:`${props.cardColo}`,
    height:'30px',
    borderTopLeftRadius:'17px',
    borderTopRightRadius:'17px',
  }
  const tailStyle={
    backgroundColor:`${props.cardColo}`,
    height:'30px',
    borderBottomLeftRadius:'17px',
    borderBottomRightRadius:'17px',
  }
  const defaultStyle = {
    height:'30px',
  }
  return (
    <div>
      {myVal ? <div>
       <div style={headStyle}></div>
       <div className='card card-top'>
        <EngineeringIcon sx={{ fontSize: "60px" }} />
       <p style={{color:'black',textAlign:'center'}}>{props.content}</p>
       </div></div>:<div style={defaultStyle}></div>}
      
      {!myVal ? <div>
        <div className='card card-bottom'>
        <p style={{color:'black',textAlign:'center'}}>{props.content}</p>
        <span>logo</span>
       </div>
        <div style={tailStyle}>
         </div>
      </div>:<div style={defaultStyle}></div>}
    </div>
  )
}

export default Card