import React, { Component } from 'react'
import './Textbox.css'


class Textbox extends Component {
    constructor(props){
        super(props)
        this.state={
            title:"",
            descr:"",
            isActive:false
        }
    }
    readtextbox=(e)=>{
        const tarvalue=e.target.value
        this.setState({
            title:tarvalue
        })
        
    }
    readdescrbox=(e)=>{
        
        const descrvalue=e.target.value
        this.setState({
            descr:descrvalue
        })


    }
    readcheckbox=(e)=>{
        const valuechecked=e.target.checked
        this.setState({
            isActive:valuechecked
        })


    }
    readbutton=(x)=>{
        this.props.onAdd({
            id: Math.floor(Math.random() * 100) + 10,
            title: this.state.title,
            descr: this.state.descr,
            isActive: this.state.isActive
        });

        

        this.setState({
            title: '',
            descr: '',
            isActive: false
        });
       

    }


    render() {
        return (
            <div className='add-data'>
                
                <input value={this.state.title} type="text" className='textbox' onChange={this.readtextbox} placeholder='Title' />
            
                <input value={this.state.descr} type="text" className='textbox' onChange={this.readdescrbox} placeholder='Description' />
                <label>IsActive</label>
                <input checked={this.state.isActive} type="checkbox" className='textbox' onChange={this.readcheckbox} />
                <button onClick={()=>this.readbutton()}>ADD</button>
            </div>
        )
    }

}


export default Textbox