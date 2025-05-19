import React, { Component } from 'react';
import VisitorTable from './VisitorTable'; 
import VisitorList from './VisitorList';
import visitorService from './VisitorService';

export default class ProductLists extends Component {
  constructor() {
    super();
    this.state={
        visitors:[]
    }
   console.log( visitorService.getVisitors());
   this.refreshVisitors=this.refreshVisitors.bind(this)
  }
  refreshVisitors(){
    visitorService.getVisitors().then(
        response=>{
            this.setState({
                visitors:response.data
            })
        },error=>{}
    )

}
componentDidMount(){
    this.refreshVisitors()}
  render() {
    return (
      <div>
       
        <VisitorTable visitors={this.state.visitors} />
        <VisitorList visitors={this.state.visitors}></VisitorList>
      </div>
    );
  }
}
