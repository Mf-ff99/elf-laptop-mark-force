  
import React from 'react'
import Summary from './Summary';
import Total from './Total';

export default class Cart extends React.Component {
  render() {
    console.log(this.props)
    return (
      <section className="main__summary">
        <h3>NEW GREENLEAF 2018</h3>
          < Summary selected={this.props} />
          < Total selected={this.props} />
      </section>
    )
  }
}
