import React, { useState } from 'react'
function Card({CardData}) {
  let{Toggle,setTogle}=useState(true)
  return <>
   <div className="col">
    <div className="card h-100">
      <img src={CardData.image} className="card-img-top"/>
      <div className="card-body">
        <h5 className="card-title">{CardData.title}</h5>
        <p className="card-text">{CardData.text}</p>
        <a href={CardData.link} target='_blank'  id="Readmore"className="btn btn-success">Read More<i className="fa-solid fa-angles-right"></i></a>
      
        </div>
      <div className="card-footer">
          <small className="text-body-secondary p-2">{CardData.footer}</small>
          <span><i className="fa-regular fa-comment"></i> No Comments</span>
      </div>
    </div>
  </div> 
  
  </>
   

}

export default Card