import{Component }from "react"
export default class Calculator extends Component{
    add()
    {
        return Number(this.props.num1)+Number(this.props.num2);
    }
    render(){
        return( <h2> the sum of two number&nbsp; {this.props.num1} + &nbsp;
        {this.props.num2} =  {this.add()}</h2>)
    }
}