import { Component } from "react";
export default class CheckOddEven extends Component{
    render(){
        var num = this.props.num;
        if(Number(num)%2===0){
        return <h2>{num} is even</h2>
    }
    else{
        return <h2>{num} is odd</h2>
    }
}
}