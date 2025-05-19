import React from 'react';
import ReactDOM  from 'react-dom/client';
import './index.css'
/*import  Customer from './customer'

import Calculator from './addnumbers';
import ITBridgeConvertor from './convertor';
import CheckOddEven from './mathoperation';*/
/*import Employee from './employee'
import Counter from './counter';
import Message from './message';
import NowTime from './time';
import LCMethods from './lifecyclemethods';
import CnTime from './countrytime';
import CnTime2 from './Countrytime2';
import Clock from './clock';*/
//import Cemi from './EMIcalculator';
import CEMI from './EMIcalculator2';
import FMHG from './Formhandling';
//import UserForm from './validform';
//import PrintName from './fcomponent'
import Comment from './activity-1';
import ProductLists from './productlist';

/*function Welcome({ name }) {
  return <h1> Hello, {name}! </h1>;
}*/
 const root = ReactDOM.createRoot(
  document.getElementById('root'));
 root.render(<p>Hello good morning</p>)
 const itb = ReactDOM.createRoot(
  document.getElementById('itb'));
  //jsx expressions must have only one parent and multiple children 
  itb.render(<div>{/*<p>IT BRIDGE</p><p>IT-BRIDGE is a training program 
    created by honorable and generous individuals 
    to help underprevileged kids to develop industry-relevent 
    skills and become job ready</p>
    <Welcome fullname="Mukthar Ahmed Ali"city="mangaluru"></Welcome>
    <Customer customerName="mukthar" billAmount="909090"></Customer>
    
    <Calculator num1="3" num2="4"></Calculator>
    <ITBridgeConvertor name ="russel"></ITBridgeConvertor>
    <CheckOddEven num="2"></CheckOddEven>
    <CheckOddEven num="11"></CheckOddEven>*/}
    {/*<Welcome name="mukthar"></Welcome>
    <Employee employeeName="mukthar"salary ="500000"></Employee>
    <Counter></Counter>
    <Message>

    </Message>
    <NowTime></NowTime>
    <LCMethods></LCMethods>
    <CnTime></CnTime>
    <CnTime2 country="India" />
      <CnTime2 country="USA" />
      <CnTime2 country="Australia" />
      <Clock></Clock>*/}
      {/*<Cemi></Cemi>*/}
      <CEMI></CEMI>
      <FMHG></FMHG>
      {/*<UserForm></UserForm>
      <PrintName></PrintName>*/}
      <Comment></Comment>
      <ProductLists></ProductLists>
      
    </div>);
 
