import React from 'react'
import Card from './Card'

function FullStackDevelopment({course}) {
 const Fsddata=course.filter(item=>item.type==="FullStack Development");
 
  return <>
 <div className="row row-cols-1 row-cols-md-3 g-4" id="card">
{
  Fsddata.map((CardData,i)=>{
return <Card CardData={CardData} key={i}/>
  })
}
 
  </div>

  </>
}

export default FullStackDevelopment