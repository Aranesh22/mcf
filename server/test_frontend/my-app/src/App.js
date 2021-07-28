import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 30,
      data: [],
      question_1: {},
      question_2: {},
      question_3: {},
      question_4: {},
      answer_1: [],
      answer_2: [],
      answer_3: [],
      answer_4: []
    };
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      if (this.state.count === 0) {
        this.componentWillUnmount();
        return;
      }
      this.setState(prevState => ({
        count: prevState.count - 1
      }));
    }, 1000);
    fetch('/sendQuestions')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            data: result,
            question_1: result[0],
            question_2: result[1],
            question_3: result[2],
            question_4: result[3],
            answer_1: result[0].answers,
            answer_2: result[1].answers,
            answer_3: result[2].answers,
            answer_4: result[3].answers    
          });
        }
      )
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  clicked() {
    const { count } = this.state;
    return (
        <h1>Current count: {count}</h1>
    )
  }

  render() {
    const { question_1 } = this.state;
    const { answer_1 } = this.state;
    const { question_2 } = this.state;
    const { answer_2 } = this.state;
    const { question_3 } = this.state;
    const { answer_3 } = this.state;
    const { question_4 } = this.state;
    const { answer_4 } = this.state;
    const { count } = this.state;

    return (
      <Router>
        <div className="form">
          <Switch>
            <Route exact path="/quiz/question_1">
              <form action='/question/1' method='POST'>
                <label>What is your age?</label><br/>
                <input type="number" id="age" name="current_age" min="0" max="100"/><br/><br/>
                <input type="submit" value="Submit"/>
              </form>
            </Route>

            <Route exact path="/quiz/question_2">
                <form action='/question/2' method='POST'>
                  <label for="bio_sex">{question_1.question}</label><br/>
                  <select id="bio_sex" name={question_1.question}>
                    <option value="male">{answer_1[0]}</option>
                    <option value="female">{answer_1[1]}</option>
                    <option value="other">{answer_1[2]}</option>
                  </select><br/><br/>
                  <input type="submit" value="Submit"/>
                </form>
              </Route>

              <Route exact path="/quiz/question_3">
                <form action='/question/3' method='POST'>
                  <label>What is your height in feet and centimeters?</label><br/>
                  <input type="number" id="height_ft" name="feet" min="0" max="10" placeholder="feet"/>
                  <input type="number" id="height_ft" name="cms" min="0" max="400" placeholder="cms"/><br/><br/>
                  <input type="submit" value="Submit"/>
                </form>
              </Route>

              <Route exact path="/quiz/question_4">
                <form action='/question/4' method='POST'>
                  <label>What is your CURRENT weight in kilograms and pounds?</label><br/>
                  <input type="number" id="weight_kg" name="kgs" min="0" max="300" placeholder="kgs"/>
                  <input type="number" id="weight_pds" name="pounds" min="0" max="500" placeholder="pounds"/><br/><br/>
                  <input type="submit" value="Submit"/>
                </form>
              </Route>

              <Route exact path="/quiz/question_5">
                <form action='/question/5' method='POST'>
                  <label>What is your IDEAL weight in kilograms and pounds?</label><br/>
                  <input type="number" id="weight_kg_ideal" name="ideal_kgs" min="0" max="300" placeholder="kgs"/>
                  <input type="number" id="weight_pds_ideal" name="ideal_pounds" min="0" max="500" placeholder="pounds"/><br/><br/>
                  <input type="submit" value="Submit"/>
                </form>
              </Route>

              <Route exact path="/quiz/question_6">
                <form className='form-field' action='/question/6' method='POST'>
                  <p>{question_2.question}</p>
                  <label className="container">
                      <input type="radio" id='goal_1' name="What's your goal?" value='Muscle build and get stronger'/>
                      <label for='goal_1'>{answer_2[0]}</label>
                      <span className="checkmark"></span><br></br>
                  </label>

                  <label className="container">
                      <input type="radio" id='goal_2' name="What's your goal?" value='Fat loss and get leaner'/>
                      <label for='goal_2'>{answer_2[1]}</label>
                      <span className="checkmark"></span><br></br>
                  </label>

                  <label className="container">
                      <input type="radio" id='goal_3' name="What's your goal?" value='Athletic optimization (A protocol to support long + intense performance)'/>
                      <label for='goal_3'>{answer_2[2]}</label>
                      <span className="checkmark"></span><br></br>
                  </label>

                  <label className="container">
                      <input type="radio" id='goal_4' name="What's your goal?" value='Sweat have fun and develop healthy eating lifestyle'/>
                      <label for='goal_4'>{answer_2[3]}</label>
                      <span className="checkmark"></span><br></br>
                  </label>

                  <input type="submit" value="Submit"/>
                </form>
              </Route>

              <Route exact path="/quiz/question_7">
                <form action='/question/7' method='POST'>
                  <p>{question_3.question}</p>
                  <label className="container">
                      <input type="radio" id='time_1' name='Making time for exercise + workout is...' value='Easy for me to do'/>
                      <label for='time_1'>{answer_3[0]}</label>
                      <span className="checkmark"></span><br></br>
                  </label>

                  <label className="container">
                      <input type="radio" id='time_2' name='Making time for exercise + workout is...' value='Has been tough so far'/>
                      <label for='time_2'>{answer_3[1]}</label>
                      <span className="checkmark"></span><br></br>
                  </label>
                  
                  <label className="container">
                      <input type="radio" id='time_3' name='Making time for exercise + workout is...' value="I'm very busy, but I will make time"/>
                      <label for='time_3'>{answer_3[2]}</label>
                      <span className="checkmark"></span><br></br>
                  </label>

                  <input type="submit" value="Submit"/>
                </form>
              </Route>

              <Route exact path="/quiz/question_8">
                <form action='/question/8' method='POST'>
                  <label>What is your activity level?</label><br/>
                  <input type="number" id="activity_lvl" name="activity" min="0" max="10"/><br/><br/>
                  <input type="submit" value="Submit"/>
                </form>
              </Route>

              <Route exact path="/quiz/question_9">
                <form action='/question/9' method='POST'>
                  <p>{question_4.question}</p>

                  <label className="container">
                      <input type="radio" id='diet_1' name='What best describes your diet?' value='No restriction'/>
                      <label for='diet_1'>{answer_4[0]}</label>
                      <span className="checkmark"></span><br></br>
                  </label>

                  <label className="container">
                      <input type="radio" id='diet_2' name='What best describes your diet?' value='Vegan or vegetarian'/>
                      <label for='diet_2'>{answer_4[1]}</label>
                      <span className="checkmark"></span><br></br>
                  </label>

                  <label className="container">
                      <input type="radio" id='diet_3' name='What best describes your diet?' value='Paleo-keto'/>
                      <label for='diet_3'>{answer_4[2]}</label>
                      <span className="checkmark"></span><br></br>
                  </label>
                  
                  <label className="container">
                      <input type="radio" id='diet_4' name='What best describes your diet?' value='Mediterranean'/>
                      <label for='diet_3'>{answer_4[3]}</label>
                      <span className="checkmark"></span><br></br>
                  </label>

                  <label className="container">
                      <input type="radio" id='diet_5' name='What best describes your diet?' value='Other'/>
                      <label for='diet_3'>{answer_4[4]}</label>
                      <span className="checkmark"></span><br></br>
                  </label>
                  
                  <input type="submit" value="Submit"/>
                </form>
              </Route>

              <Route exact path="/quiz/question_10">
                <form action='/question/10' method='POST'>
                  <p>Do as many squats as you can for 30 seconds. Press start to begin!"</p>
                  <input type="submit" value="Start"/>
                </form>
              </Route>

              <Route exact path="/quiz/question_11">
                <form action='/question/11' method='POST'>
                  <h1>Current count: {count}</h1>
                  <label>Enter the amount of squats.</label><br/>
                  <input type="number" id="squat_lvl" name="squat" min="0" max="100"/><br/><br/>
                  <input type="submit" value="Submit"/>
                </form>
              </Route>

              <Route exact path="/quiz/question_12">
                <form action='/question/12' method='POST'>
                  <label for="email">Please enter your email: </label><br/>
                  <input type="text" id="user_email" name="email" placeholder="Enter email"/><br/><br/>
                  <input type="submit" value="Submit"/>
                </form>
              </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
