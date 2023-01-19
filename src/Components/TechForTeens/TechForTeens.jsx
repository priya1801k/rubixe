import React from 'react'
import Card from './Card';
import './TechForTeens.css';
function TechForTeens() {
    const nums = [1,2,3,4,5];
    const myColArray = ['#212b6e','#96275b','#e57e15','#246c42','#d4ba00']
    const content = ["Introducing AI to children in an age appropriate manner.", "Gain awareness on AI and build an interactive story around it","Acquire programming skills in a user-friendly format","Exposure to mini projects on diverse topics","Train the teachers programme"] 
      
      return <div className='techforteensBox'>
        <h3 style={{marginBottom:'40px'}}>TECH FOR TEENS - A RUBOXE &reg; INITIATIVE</h3>
        <div  className='cards'>
        {
          nums.map(num => <Card key={num} content={content[num-1]} cardColo={myColArray[num-1]} num={num}/>)
        }
        </div>
      </div>;
}

export default TechForTeens