import React, { Component } from 'react'
import loading from './loadingSpinner.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading} alt="" height={70} />
      </div>
    )
  }
}

export default Spinner
