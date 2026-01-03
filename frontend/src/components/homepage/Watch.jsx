import React, { useState, useContext, useEffect } from 'react'
import { DataContext } from 'src/context/DataContext';

const Watch = () => {


  const [data, setData] = useState();

  const { sections,loading } = useContext(DataContext);



  useEffect(() => {

    if (sections) {

        console.log(sections.watch,"QUERY");
        setData(sections.watch);



    }


  }, [sections])

  return (
    <div>

    </div>
  )
}

export default Watch
