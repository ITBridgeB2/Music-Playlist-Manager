import {Component} from 'react';
import img from './cr-7.jpg'
export default class Comment extends Component{
    constructor(){
        super();
        this.state={
            like:700000000000000,
            unlike:1
        }
        this.like=this.like.bind(this)
        this.unlike=this.unlike.bind(this)
    }
    render(){
        return(
        <div>
        <img src={img} alt="My Pic" width="200" />
        <div><span><input type = "button" value="like"onClick={this.like}></input>{this.state.like}</span><span><input type="button" value="unlike"onClick={this.unlike}></input>{this.state.unlike}</span></div>
        </div>
       
    )}
    like(){
        this.setState({
            like:this.state.like+1
        })
    }
    unlike(){
        this.setState({
            unlike:this.state.unlike+1
        })
    }
}