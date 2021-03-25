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

class Assignment extends React.Component {

    constructor() {
        super();
        this.state = {
          questionQuiz: [],
          score: 0,
          responses: 0,
          right:"none",
          wrong:"none",
          currentQuestion:0
        };
      }
      getQuestions = () => {
        data().then(question => {
          this.setState({questionQuiz: question});
        });
      };

     selectOption(p1,p2) {
        if(p1 === p2){
            console.log("right")
            this.setState({
                right:""
            })
        } 
        else{
            console.log("wrong")
            this.setState({
                wrong:""
            })
        }
    }
    nextQuestion(){
        var temp=this.state.currentQuestion+1
        this.setState({
           currentQuestion:temp,
           right:"none",
           wrong:"none"
        })
    }
    

    render() {
        var rating=0;
        if(data[this.state.currentQuestion].rating === "easy"){
            rating=3
        }else if (data[this.state.currentQuestion].rating === "hard"){
            rating=5
        }else if (data[this.state.currentQuestion].rating === "medium"){
            rating=4
        }
      return (
<>


        <progress value={(this.state.currentQuestion/20)*100} max="100" className="quizProgressBar"></progress>
        <div className="body">
        <h2>Question Number {this.state.currentQuestion+1} of 20</h2>
        
        <h6>Entertaiment Board Exam</h6>
      
          <h4>{data[this.state.currentQuestion].question}</h4>
          
          <Rater total="5" rating={rating} />
  
          <Container>
            <Row xs="2">
              <Col className="button1"><button onClick={() => this.selectOption(data[this.state.currentQuestion].correct_answer,data[this.state.currentQuestion].correct_answer)}>{data[this.state.currentQuestion].correct_answer}</button></Col>
              <Col className="button1"><button onClick={() => this.selectOption(data[this.state.currentQuestion].incorrect_answers[0],data[this.state.currentQuestion].correct_answer)}>{data[this.state.currentQuestion].incorrect_answers[0]}</button></Col>
              <Col className="button1"><button onClick={() => this.selectOption(data[this.state.currentQuestion].incorrect_answers[1],data[this.state.currentQuestion].correct_answer)}>{data[this.state.currentQuestion].incorrect_answers[1]}</button></Col>
              <Col className="button1"><button onClick={() => this.selectOption(data[this.state.currentQuestion].incorrect_answers[2],data[this.state.currentQuestion].correct_answer)}>{data[this.state.currentQuestion].incorrect_answers[2]}</button></Col>
            </Row>
           
          </Container>

          <h1 style={{display: this.state.right}}>Correct</h1>
          <button style={{display: this.state.right}}  onClick={() => this.nextQuestion()}>Next Question</button>
          <h1 style={{display: this.state.wrong}}>Wrong</h1>
          <progress value="30" max="100" className="progressBar"/>
        </div>
       </>
        
        /*<progress value="30" max="100" className="quizProgressBar"/>
        
        <div className="body">
        <h2>Question Number  of 20</h2>
        
        <h6>Entertaiment Board Exam</h6>
      
          <h4>hi</h4>
      
          <Rater total="5" rating="3" />
      
          <Container>
            <Row xs="2">
              <Col className="button1"><button onClick={() => selectOption(data[qNmumber].correct_answer,qNmumber)}>{data[qNmumber].correct_answer}</button></Col>
              <Col className="button1"><button onClick={() => selectOption(data[qNmumber].incorrect_answers[0],qNmumber)}>{data[qNmumber].incorrect_answers[0]}</button></Col>
              <Col className="button1"><button onClick={() => selectOption(data[qNmumber].incorrect_answers[1],qNmumber)}>{data[qNmumber].incorrect_answers[1]}</button></Col>
              <Col className="button1"><button onClick={() => selectOption(data[qNmumber].incorrect_answers[2],qNmumber)}>{data[qNmumber].incorrect_answers[2]}</button></Col>
            </Row>
           
          </Container>
          <progress value="30" max="100" className="progressBar"/>
        </div>*/
      );
    }
  }
  export default Assignment;