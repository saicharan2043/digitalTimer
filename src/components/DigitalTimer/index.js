// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {}

  render() {
    return (
      <div className="">
        <h1 className="">Digital Timer</h1>
        <div className="">
          <div className="">
            <h1 className="">25:00</h1>
            <p className="">running</p>
            <h1>Hello World- TESTING GIT</h1>
          </div>
        </div>

        <div className="">
          <div className="">
            <img
              src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
              alt=""
              className=""
            />
            <p className="">start</p>
          </div>

          <div className="">
            <img
              src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
              alt=""
              className=""
            />
            <p className="">Reset</p>
          </div>
          <p className="">Set Timer limit</p>
          <div className="">
            <button className="">-</button>
            <button className="">25</button>
            <button className="">+</button>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
