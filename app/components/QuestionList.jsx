import React from 'react';
import ReactDOM from 'react-dom';
import Question from './Question.jsx';

class QuestionList extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.questions.map(question => {
            if(question.id == this.props.current) {
              return <Question question={question} key={question.id}  />;
            }
          })
        }
      </div>
    );
  }
}

export default QuestionList
