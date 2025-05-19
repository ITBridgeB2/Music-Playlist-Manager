import { Component } from "react";
export default class Clock extends Component{
constructor(){
    super();
    this.state ={
        date:new Date()
    };
    this.tick = this.tick.bind(this);
}
render(){
    return <div>
        <h2>hello</h2>
        <h2>it is{this.state.date.toLocaleTimeString()}</h2>
        </div>
}
componentDidMount(){
   this.timerID= setInterval(this.tick,1000);
}
componentWillUnmount(){
    clearInterval(this.timerID);
}
tick(){
    this.setState({
        date:new Date()
    })
}
}