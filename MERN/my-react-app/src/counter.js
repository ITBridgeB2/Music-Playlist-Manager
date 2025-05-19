import { Component } from "react";

export default class Counter extends Component {
    // The constructor is the first method called when a component is created.
    // We use it to initialize the component's state and bind methods to `this`.
  constructor() {
    // 1. `super()` is required to call the parent class (Component) constructor.
    super();
    // 2. `this.state` is used to define initial values (like `buttonClicked` and `btn`).
    this.state = {
      buttonClicked: 100,
      btn: 'save visitor',
      msg:'hello world',
      msg1:'hola amigo',
      currentTime: new Date().toLocaleTimeString()

    };
    // 3. We bind methods like `changeCounter`, `display`, etc., to ensure they use the correct `this`
//    (otherwise, they won't have access to the component's `state` or `props` when called in JSX).
//method 1 of binding and fastest
    this.changeCounter = this.changeCounter.bind(this);
    this.display = this.display.bind(this);
    this.buttonChange = this.buttonChange.bind(this); 
    this.dchangeCounter = this.dchangeCounter.bind(this);
    this.mdisplay = this.mdisplay.bind(this);
    this.crTime=this.crTime.bind(this);
  }

  render() {
    console.log("Render Called Counter");
    return (
      <div>
        <h2>Button Count: {this.state.buttonClicked}</h2>
        <br />

        <button 
          onClick={this.changeCounter} 
          //button get disabled when this.state.buttonClicked >= 110
          disabled={this.state.buttonClicked >= 110}
        >
          Increment
        </button>

        <button onClick={this.display}>Display</button>

        <button onClick={this.buttonChange}>
          {this.state.btn}
        </button>

        <button 
          onClick={this.dchangeCounter} 
          //button get disabled when this.state.buttonClicked <= 90
          disabled={this.state.buttonClicked <= 90}
        >
          Decrement
        </button>
        <div>message is : {this.state.msg}</div>
        <button onClick = {this.mdisplay}>change</button>
        <div>message is : {this.state.msg1}</div>
        <button onClick={this.ddisplay}>render</button>
        <button onClick ={this.crTime}>time</button><span>{this.state.currentTime}</span>
      </div>
    );
  }

  changeCounter() {
    //when this.state.buttonClicked < 110  value wont be incremented 
    if (this.state.buttonClicked < 110) {
      this.setState(prevState => ({
        buttonClicked: prevState.buttonClicked + 1
      }));
    }
  }

  dchangeCounter() {
    //when this.state.buttonClicked > 90 button value wont increment
    if (this.state.buttonClicked > 90) {
      this.setState(prevState => ({
        buttonClicked: prevState.buttonClicked - 1
      }));
    }
  }

  display() {
    //we put the value of buttonclicked in prevstate to increase functionality instead of using this.state
    this.setState(prevState => ({
      buttonClicked: prevState.buttonClicked + 100
    }));
    console.log("convert called: " + this.convert());
  }

  convert() {
    return "tufail".toUpperCase();
  }

  buttonChange() {
    this.setState({
      btn: 'saved!'
    });
  }
  mdisplay(){
    this.setState({
        msg:'world is beautiful'
    });
  }
  //method two of binding when creating a class or function
  ddisplay=()=>{
    this.setState({
        msg1:'it bridge'
    });

  }
  crTime(){
    this.setState({currentTime: new Date().toLocaleTimeString()
  });
  }

}
