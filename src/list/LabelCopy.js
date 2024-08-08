import React, { Component } from 'react'
import './Labels.css'
import { MyContext } from './List';

export class LabelCopy extends Component {
    render() {
        const style = this.props.isActive ? { background: 'green' } : { background: 'orange' }

        return (
            <MyContext.Consumer>
                {
                    (val)=>{
                        if(val==false){
                            return null;
                        }
                        return(
                            
                            <span onClick={() => {
                                this.props.onAction(this.props.isActive ? "active" : "nonactive");
                            }}
                                className='list-label-item' style={style} >{this.props.isActive ? "Active" : "Non-Active"}
                            </span>

                        )
                    }
                }
            
            </MyContext.Consumer>
        )


    }
}

export default LabelCopy