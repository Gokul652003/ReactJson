import React from 'react'
import Labels from './Labels'
import './Listitem.css'
import LabelCopy from './LabelCopy'

function ListItem(props) {
    const { title, descr, isActive, ondelete,onLabelclick } = props

    return (
        <div className='List-item'>
            <hr />
            <div className='list-title'>
                <h4>{title}</h4>
                <label onClick={ondelete}>Delete</label>
            </div>
            <div className='list-descr'>
                {descr}
            </div>
            <div className='list-label'>
                <Labels onAction={onLabelclick} isActive={isActive} />

            </div>
            <hr />
        </div>

    )
}

export default ListItem