import React, {Component} from 'react'
import Features from './Features'

class FeaturesList extends Component {
  render() {
    const {selected} = this.props;
        
        return (
          <section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>   
        <Features  
        features={this.props.features} 
        selected={selected}
        updateFeature={this.props.updateFeature}
        onSelect={this.props.onSelect} />
      </section>
    )
  }
}

export default FeaturesList;