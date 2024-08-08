import React from 'react';
import './Tool.css'
import Textbox from './Textbox';

const Tool = ({ children,onAction,labelvalue,onAdd,count}) => {
    
    
    

    
    // const count=React.Children.count(count2)
    
    return (
        <div className='list-tools'>
            <div className='list-header'>
                <select value={labelvalue} name="status" onChange={onAction}>
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="nonactive">Non-Active</option>
                </select>
                <Textbox onAdd={onAdd}/>
            </div>
            {children}
            <div className='list-footer'>
                Total count is {count}
            </div>
        </div>
    )
};

export default Tool;