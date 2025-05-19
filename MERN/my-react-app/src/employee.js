import{Component }from "react"
export default class Employee extends Component{
    render(){
        const {employeeName,salary}=this.props;
        return<h2>{employeeName}&nbsp;your salary is&nbsp;{salary}</h2>
    }
}