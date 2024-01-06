import React,{Component} from 'react';
import './CC.css';
class CC extends React.Component{
    constructor(){
        super();
        this.state={
            number:0
        }
    }
    updateadd=()=>{
        this.setState({number:this.state.number+1});
    }
    updatesubtract=()=>{
        this.setState({number:this.state.number-1});
    }
    render(){
    
        return(
            <div>
               <h3>{this.state.number}</h3>
               <button className='btn' onClick={this.updateadd}>Add</button>
               <button className='btn' onClick={this.updatesubtract}>Subtract</button>
            </div>
        )
    }
}
export default CC;