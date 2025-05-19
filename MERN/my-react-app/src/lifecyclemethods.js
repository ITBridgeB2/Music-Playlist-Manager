import {Component} from 'react';
export default class LCMethods extends Component{
    constructor(){
        super();
        
        this.state={
            time:''
        }
    this.crTime=this.crTime.bind(this)}

        render(){
            console.log("3. render called ")
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
    static getDerivedStateFromProps(){
        console.log("2. getDerivedStateFromProps")
    }
    componentDidMount(){
        console.log("4. Component did mount")
    }
    shouldComponentUpdate(){
        console.log("component should update")
        return false;
    }
    componentDidUpdate(){
        console.log("component did update")
    }

}