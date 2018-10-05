import React, { Component} from 'react'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Will'
    }
  }
  render () {
    return (<header>
      <div className="logo"> Boswell's Realtors</div>

      <nav>
        <a href="www.forrent.com">About Us</a>
       </nav>

      </header>)
  }
}
