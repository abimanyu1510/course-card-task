import React from 'react'
import Card from './Card'

function All({course}) {
  return <> <div className="row row-cols-1 row-cols-md-3 g-4">
   {course.map((CardData,i)=>{
    return <Card CardData={CardData} key={i}/>
  })
   }
  
  </div>
  </>
}

export default All