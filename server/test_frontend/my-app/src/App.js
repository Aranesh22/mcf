import './App.css';
import React from "react";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    const { question_1 } = this.state;
    const { answer_1 } = this.state;
    const { question_2 } = this.state;
    const { answer_2 } = this.state;
    const { question_3 } = this.state;
    const { answer_3 } = this.state;
    const { question_4 } = this.state;
    const { answer_4 } = this.state;

    return (
      <div className="form">
        <form action='/questions' method='POST'>
          <label>What is your age?</label>
          <input type="number" id="age" name="current_age" min="0" max="100"/><br/><br/>

          <label for="bio_sex">{question_1.question}</label>
          <select id="bio_sex" name="bio_sex">
            <option value="male">{answer_1[0]}</option>
            <option value="female">{answer_1[1]}</option>
            <option value="other">{answer_1[2]}</option>
          </select><br/><br/>

          <label>What is your height in feet and centimeters?</label>
          <input type="number" id="height_ft" name="feet" min="0" max="10" placeholder="feet"/>
          <input type="number" id="height_ft" name="cms" min="0" max="400" placeholder="cms"/><br/><br/>

          <label>What is your CURRENT weight in kilograms and pounds?</label>
          <input type="number" id="weight_kg" name="kgs" min="0" max="300" placeholder="kgs"/>
          <input type="number" id="weight_pds" name="pounds" min="0" max="500" placeholder="pounds"/><br/><br/>

          <label>What is your IDEAL weight in kilograms and pounds?</label>
          <input type="number" id="weight_kg_ideal" name="ideal_kgs" min="0" max="300" placeholder="kgs"/>
          <input type="number" id="weight_pds_ideal" name="ideal_pounds" min="0" max="500" placeholder="pounds"/><br/><br/>

          <p>{question_2.question}</p>
          <input type="radio" id='goal_1' name="What's your goal?" value='Muscle build and get stronger'/>
          <label for='goal_1'>{answer_2[0]}</label><br/>
          <input type="radio" id='goal_2' name="What's your goal?" value='Fat loss and get leaner'/>
          <label for='goal_2'>{answer_2[1]}</label><br/>
          <input type="radio" id='goal_3' name="What's your goal?" value='Athletic optimization (A protocol to support long + intense performance)'/>
          <label for='goal_3'>{answer_2[2]}</label><br/>
          <input type="radio" id='goal_4' name="What's your goal?" value='Sweat have fun and develop healthy eating lifestyle'/>
          <label for='goal_4'>{answer_2[3]}</label><br/><br/>

          <p>{question_3.question}</p>
          <input type="radio" id='time_1' name='Making time for exercise + workout is...' value='Easy for me to do'/>
          <label for='time_1'>{answer_3[0]}</label><br/>
          <input type="radio" id='time_2' name='Making time for exercise + workout is...' value='Has been tough so far'/>
          <label for='time_2'>{answer_3[1]}</label><br/>
          <input type="radio" id='time_3' name='Making time for exercise + workout is...' value="I'm very busy, but I will make time"/>
          <label for='time_3'>{answer_3[2]}</label><br/><br/>

          <label>What is your activity level?</label>
          <input type="number" id="activity_lvl" name="activity" min="0" max="10"/><br/><br/>

          <p>{question_4.question}</p>
          <input type="radio" id='diet_1' name='What best describes your diet?' value='No restriction'/>
          <label for='diet_1'>{answer_4[0]}</label><br/>
          <input type="radio" id='diet_2' name='What best describes your diet?' value='Vegan or vegetarian'/>
          <label for='diet_2'>{answer_4[1]}</label><br/>
          <input type="radio" id='diet_3' name='What best describes your diet?' value='Paleo-keto'/>
          <label for='diet_3'>{answer_4[2]}</label><br/>
          <input type="radio" id='diet_4' name='What best describes your diet?' value='Mediterranean'/>
          <label for='diet_3'>{answer_4[3]}</label><br/>
          <input type="radio" id='diet_5' name='What best describes your diet?' value='Other'/>
          <label for='diet_3'>{answer_4[4]}</label><br/><br/>

          <label for="email">Please enter your email: </label><br/>
          <input type="text" id="user_email" name="email" placeholder="Enter email"/><br/><br/>

          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default App;
