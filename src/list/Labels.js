import React, { useContext, useRef, useState } from 'react'

import './Labels.css'
import { MyContext } from './List'

function Labels(props) {
    const showlabel=useContext(MyContext)
    let [mouse,mouseset]=useState(false)
    let refobj=useRef()
    // console.log(refobj)
    const { isActive, onAction } = props

    const style = isActive ? { background: 'green' } : { background: 'orange' }
    if(showlabel==false){
        return null
    }
    function mousein(e){
        mouseset(true)
        console.log("mousein")
        console.log(refobj.current)
        const width=e.target.getBoundingClientRect().width
        const width2=refobj.current.getBoundingClientRect().width
        console.log(width,width2)
        refobj.current.style.left=`${-(width2-width)/2}px`
        
    }
    function mouseout(){
        console.log("mouseout")
        mouseset(false)
    }

    return (
        <div className='labelfull'>
            <span onClick={() => {
            onAction(isActive ? "active" : "nonactive");
        }}
         className='list-label-item' style={style} onMouseEnter={mousein} onMouseLeave={mouseout} > {isActive ? "Active" : "Non-Active"}
         </span>
         
         <label className={`${mouse? "tipshow": "tiphide"}`} ref={refobj}>
            
            This is an {isActive ?"Active":"Non-Active"} tooltip
            </label>

        </div>
        
    )
}
export default Labels