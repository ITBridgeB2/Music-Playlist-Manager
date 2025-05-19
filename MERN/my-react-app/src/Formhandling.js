import {Component } from 'react';
import './index.css'
export default class FMHG extends Component{
    constructor(){
        super();
        this.state={
            value:'hello',
            message:''
        }
    this.handlechange=this.handlechange.bind(this)
    this.takeInputData=this.takeInputData.bind(this)
}
        render(){
            return <form  onSubmit={this.takeInputData}>
                <label>
                    Name : 
                    <input type ="text" value ={this.state.value} onChange={this.handlechange}></input>
                </label>
                <input type ="submit" value="submit"></input>
                <div className="highlight">{this.state.message}</div>

            </form>
        }
        handlechange(inputName){
            this.setState({
                value:inputName.target.value
            })
        }
        takeInputData(event){
            event.preventDefault();
            this.setState({
                message:'name submitted successfully'
            })

        }
    }
    
