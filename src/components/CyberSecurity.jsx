import React from 'react'
import Card from './Card'

function CyberSecurity({course}) {
  const Cyberdata=course.filter(cyber=>cyber.type==="CyberSecurity");
  return <> <div className="row row-cols-1 row-cols-md-3 g-4"id="card2">
    {
     Cyberdata.map((CardData,i)=>{
   return <Card CardData={CardData} key={i}/>
     })

    }
    </div>
  </>
}

export default CyberSecurity