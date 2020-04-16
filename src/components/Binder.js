import React, { Component } from 'react'

class Binder extends Component{
    constructor(){
        super()
        this.state ={
            text:'Hello State',
            somethingText:'yerrr'
        }
        // this.onClickMe = this.onClickMe.bind(this)
    }

    
    onClickMe =()=>{
        console.log(this)
    }

    handleSomething=(text)=>{
        this.setState({
            somethingText:'click did something'
        })
        
        
    }

   render(){
       
       return (
           <div>
              <h1> {this.state.somethingText}</h1>
               <button className='ui primary button'
                onClick ={this.onClickMe}
                style={{margin:"10px 15px"}}>
                
                Click Me
                </button>
               
               <button className='ui primary button'
                onClick ={()=>this.handleSomething(this.state.somethingText)}
                style={{margin:"10px 15px"}}>
                
                Do Something
                </button>


           </div>
       )
   }
}

export default Binder