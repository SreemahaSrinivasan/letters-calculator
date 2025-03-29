// Write your code here.
import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {inputPhrase: ''}

  onChangeInputPhrase = event => {
    this.setState({
      inputPhrase: event.target.value,
    })
  }

  render() {
    const {inputPhrase} = this.state
    return (
      <div className="app-container">
        <div className="letters-calculator-container">
          <div className="calculator-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-phrase-container">
              <label className="label" htmlFor="inputText">
                Enter the Phrase
              </label>
              <input
                className="letters-input"
                placeholder="Enter the Phrase"
                type="text"
                id="inputText"
                value={inputPhrase}
                onChange={this.onChangeInputPhrase}
              />
            </div>
            <p className="letters-count">No.of letters: {inputPhrase.length}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="letters-calculator-image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
