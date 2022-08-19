import React from "react";


const Accordion=({items})=>{
  const [activeIndex,setActiveIndex]=React.useState(null)
  const renderedItems=items.map((item,index)=>{
   const active=activeIndex===index ? 'active':"" 
   //esli activeIndex raven indeksu togda stav class active
const handleActiveItem=()=>{
  setActiveIndex(index)
}
    return(
      <React.Fragment key={item.id}>
        <div onClick={()=>handleActiveItem(index)}className={`title ${active}`}>
        <i className="dropdown icon"></i>
         {item.title}
         </div>
         <div className={`content ${active}`}>
           <p>{item.content}</p>
      </div>
      </React.Fragment>
    )
  })
  return(
    <div className="ui styled accordion">
     {renderedItems}
    </div>
  )
}
export default Accordion