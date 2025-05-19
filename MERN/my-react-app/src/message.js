import{Component}from "react";
export default class Message extends Component{
    constructor(){
        super();
        this.state={
            msg : "honesty is the best policy"
        }
    }
    render(){
        return <div> <div>
          message is : {this.state.msg}
            </div> 
            <button onClick={()=>this.changeMessage()}>
                change message
            </button>
              </div>
    }
 changeMessage(){
this.setState({
        msg : "too much honesty leads to betrayal"
    })
 }
}