import React from 'react';
import ReactDOM from 'react-dom';

class Question extends React.Component {
  onChange() {
    return ;
  }

  render() {
    const {question} = this.props;
    return (
      <div className="card">
        <div className="card-content">
          <p className="title">{question.question}</p>
        </div>
        <div className="card-table">
          <div className="content">
            <table className="table">
              <tbody>
                {
                  this.props.question.options.map(option => {
                    return (
                      <tr>
                        <td key={option.id}>
                          {option.id}
                          <input type="radio"
                            onChange={this.onChange.bind(this)}
                            name={question.id}
                            value={option.id}/>
                          {option.text}
                        </td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Question
