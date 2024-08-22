import React from 'react'
import { useState } from 'react'

const Accordian = ({item}) => {

    const[activeIndex , setActiveIndex] = useState();

  return (
    <div>
      {item.map((index,text)=>{
        <div>
            <div id={index} onClick={()=>setActiveIndex(index)}>{text}</div>
            <div className = {`${index === activeIndex ? 'block':'hidden'}`}>
                {item.text.map((subIndex,subText)=>{
                    <a id={subIndex}>{subText}</a>
                })}
            </div> 
        </div>

        
      })}
    </div>
  )
}

export default Accordian
