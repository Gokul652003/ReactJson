import React, { Component } from 'react'
import Tool from './Tool'
import SimpleList from './SimpleList'
import './List.css'
import Justinfo from './Justinfo'



let newdata
let co
const MyContext=React.createContext()

class List extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            activestate: 'all',
            showlabel:true
        }
    }
    componentDidMount() {
        
        
        fetch('./data.json')
            .then((data) => {
                return data.json()
            })
            .then((data) => {
                this.setState({
                    data: data
                });
            })
    }
    onListchange = (e) => {

        const selectvalue = e.target.value

        this.setState({
            activestate: selectvalue

        }

        )
    }
    handlecheck = (ar) => {
        this.setState({
            activestate: ar


        },
            () => {
                console.log(this.activestat)
            }


        )


    }
    showlabeltick=(e)=>{
        this.setState({
            showlabel:e.target.checked
          
        })
        
    }

    handledelete = (obj) => {
        newdata = this.state.data.filter(item => item.id !== obj.id)
        this.setState({
            data: newdata
        })
    }
    onAdd = (x) => {
        newdata.push(x)
        this.setState({
            data: newdata
        })


    }
    
    render() {
        
        if (this.state.activestate == 'active') {
            newdata = this.state.data.filter(item => item.isActive == true)


        }
        else if (this.state.activestate == 'nonactive') {
            newdata = this.state.data.filter(item => item.isActive == false)


        }
        else {
            newdata = this.state.data.filter(item => item)


        }
        co=newdata.length
        
        let obj={
            "key":"hi"
        }
        
        return (
            
            
            <div className='List-js'>
                <div className='showlabel'>
                <input type='checkbox' checked={this.state.showlabel} onChange={this.showlabeltick} ></input>
                <label>Show Label</label>
                </div>
                
                <MyContext.Provider value={this.state.showlabel} >
                <Tool labelvalue={this.state.activestate} onAction={this.onListchange} onAdd={this.onAdd} count={co}>
                    <SimpleList onLabelclick={this.handlecheck} newdata={newdata} deleteaction={this.handledelete} />

                </Tool>
            
                </MyContext.Provider>
                
            </div>
           
            
        )
    }

}

export default List

export{
    MyContext
}