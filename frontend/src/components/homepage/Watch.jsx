import React, { useState ,useContext} from 'react'
import { DataContext } from 'src/context/DataContext';

const Watch = () => {


const [data,setdata] = useState();

const query = useContext(DataContext);
// setdata(query);

console.log(query,"QUERY")

  return (
    <div>
      
    </div>
  )
}

export default Watch
