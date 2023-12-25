import React from 'react'
import Card from './Card'

function Career({course}) {
  const Career1=course.filter(item4=>item4.type==="Career")
  return <><div className="row row-cols-1 row-cols-md-3 g-4"id="card4">
    {
      Career1.map((CardData,i)=>{
return <Card CardData={CardData} key={i}/>
      })
    }
    
    
    
    </div>
  </>
}

export default Career