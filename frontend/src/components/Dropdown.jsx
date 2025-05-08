import React from 'react';
import { useState } from 'react';

const Dropdown = ({ item }) => {

    // const [active, setActive]  = useState(false);

    // const links = item.subText;

    console.log(item);

  return (

    <>
    { item.map((item)=>(
       
            <div key={item.id} className='relative px-[1rem] z-50 border-white' 

            >
                <a className='text-dark-2 text-3xl px-[1rem]'>{item.text}</a>


            </div>



            
        
    ))}
    </>

  )
}

export default Dropdown;
