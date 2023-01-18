import React from 'react'
// import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
function Card(props) {
  const stylesHead = {
    height:'150px',
    width: '130px',
    color: 'green',
    // borderBottomLeftRadius:'17px',
    // borderBottomRightRadius:'17px',
    boxShadow: '10px 0px 0px rgb(0,0,0,0.11)',
    background: "linear-gradient(#ffffff, rgb(0,0,0,0.11))",
  };

  const stylesTail={
    background: "linear-gradient( rgb(0,0,0,0.11),#ffffff)",
    // backgroundColor:'rgb(0,0,0,0.09)',
    height:'150px',
    width: '130px',
    color: 'green',
    // borderTopLeftRadius:'17px',
    // borderTopRightRadius:'17px',
    boxShadow: 'rgb(0,0,0,0.11) 0px 0px 5px',
  }
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
        <div style={{width:'10px',heigth:'10px',backgroundColor:'black'}}></div>
       <div style={headStyle}></div>
       <div style={stylesHead}>
        <span>logo</span>
       <p style={{color:'black',textAlign:'center'}}>{props.content}</p>
       </div></div>:<div style={defaultStyle}></div>}
      
      {!myVal ? <div>
        <div style={stylesTail}>
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