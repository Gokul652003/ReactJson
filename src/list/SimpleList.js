import React from 'react'
import ListItem from './ListItem'


function SimpleList({newdata,deleteaction,onLabelclick}){
    
    let co

    
    return(
        <div className='aap-list' >{
            newdata.map((a) => <ListItem key={a.title} title={a.title} descr={a.descr} isActive={a.isActive} ondelete={() => deleteaction(a)} onLabelclick={onLabelclick}/>)
        }</div>

    )
    
}

export default SimpleList