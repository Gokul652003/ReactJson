import React, { Component } from 'react'
import Navbar from './Navbar'

import Footer from './Footer'
import DummyPage from './DummyPage'
import Usage from './Usage'
import List from './List'

class Main extends Component {
    constructor(){
        super()
        this.state={
            currentpage:'home'

        }
    }
    componentDidMount(){
        console.log("componentdidmount")
    }
    // componentWillUnmount(){
    //     // console.log("componentUnmount")
    // }


    selectpage=(x)=>{
        console.log(x)
        this.setState({
            currentpage:x
        })
    }

    getpage=()=>{
        switch (this.state.currentpage) {
            case 'home':
                return <List />
                
                
            case 'usage':
                return <Usage />
                
        
            case 'setting':
                return <DummyPage name="Setting" />
                    
        
            case 'logout':
                return <DummyPage name="Logout" />
                        
                break;
        
            default:
                break;
        }
    }
  render() {
    return (
      <div>
        <Navbar nav={this.selectpage} />
        {this.getpage()}
        <Footer />
      </div>
    )
  }
}

export default Main