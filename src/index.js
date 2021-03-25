import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import data from './questions.json';
import Assignment from './Assignment.js'
/*
var questionNumber = 0
const Quiz = (qNmumber) =>{
  console.log(qNmumber)
  
var rating = 0
if(data.difficulty == "easy"){
  rating = 1
}
else if(data.difficulty == "medium"){
  rating = 2
}
else if(data.difficulty == "hard"){
  rating = 3
}
var progressValue = (qNmumber/20)*100
  return(
    
    <>

  </>
  )
}*/


ReactDOM.render(
<>
    <Assignment />
  </>
  ,
  document.getElementById('root')
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
