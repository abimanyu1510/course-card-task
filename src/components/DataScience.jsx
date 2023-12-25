import React from 'react'
import Card from './Card'

function DataScience({course}) {
  const Datascience=course.filter(item1=>item1.type==="DataScience")
  return <><div className="row row-cols-1 row-cols-md-3 g-4"id="card3">
  {
  Datascience.map((CardData,i)=>{
return <Card CardData={CardData} key={i}/>
  })
}
 
  </div>
  </>
}

export default DataScience