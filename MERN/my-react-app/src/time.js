// when you click on button todyas time should come 
import {Component} from 'react';
export default class NowTime extends Component{
    constructor(){
        super();
        
        this.state={
            time:''
        }
    this.crTime=this.crTime.bind(this)}

        render(){
            return <div>
            
                Time is 
                <button onClick={this.crTime}>Click HERE for time.</button><span>{this.state.time}</span>
            </div>
    }

    crTime(){
        this.setState({
            time:new Date().toLocaleTimeString()
        })
    }

}