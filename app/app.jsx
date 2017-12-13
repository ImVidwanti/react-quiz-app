import React from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './components/QuestionList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          question: 'Who is Batman?',
          options: [
            {
              id: 'a',
              text: 'Bruce'
            },
            {
              id: 'b',
              text: 'Steve'
            },
            {
              id: 'c',
              text: 'Clark'
            },
            {
              id: 'd',
              text: 'Bane'
            }
          ],
          correct: 'a'
        },
        {
          id: 2,
          question: 'Who is the Villian?',
          options: [
            {
              id: 'a',
              text: 'Bruce'
            },
            {
              id: 'b',
              text: 'Steve'
            },
            {
              id: 'c',
              text: 'Clark'
            },
            {
              id: 'd',
              text: 'Bane'
            }
          ],
          correct: 'd'
        },
        {
          id: 3,
          question: 'Who is Captian America?',
          options: [
            {
              id: 'a',
              text: 'Bruce'
            },
            {
              id: 'b',
              text: 'Steve'
            },
            {
              id: 'c',
              text: 'Clark'
            },
            {
              id: 'd',
              text: 'Bane'
            }
          ],
          correct: 'b'
        },
        {
          id: 4,
          question: 'Who is Superman?',
          options: [
            {
              id: 'a',
              text: 'Bruce'
            },
            {
              id: 'b',
              text: 'Steve'
            },
            {
              id: 'c',
              text: 'Clark'
            },
            {
              id: 'd',
              text: 'Bane'
            }
          ],
          correct: 'c'
        }
      ],
      score: 0,
      current: 1
    };
  }
  render() {
    return (
      <div>
        <QuestionList {...this.state} />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
