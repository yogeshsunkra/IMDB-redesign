import React, { useState, useContext, useEffect } from 'react'
import { DataContext } from 'src/context/DataContext';

const Watch = () => {


  const [weektopTen, setWeekTopTen] = useState();
  const [fanFav, setFanFav] = useState();

  const { sections,loading } = useContext(DataContext);



  useEffect(() => {

    if (sections) {

        console.log(sections.watch,"QUERY");
        console.log(loading,"QUERY loading");

        setWeekTopTen(sections.watch);
    }


  }, [sections])

  return (
    <div>

    </div>
  )
}

export default Watch
