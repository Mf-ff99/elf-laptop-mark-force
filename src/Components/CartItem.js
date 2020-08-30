import React from 'react';


// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

export default class CartItem extends React.Component {
    render() {
        return (
            <div className="summary__option" key={this.props.featureHash}>
            <div className="summary__option__label">{this.props.feature} </div>
            <div className="summary__option__value">{this.props.selectedOption}</div>
            <div className="summary__option__cost">
              {USCurrencyFormat.format(this.props.cost)}
            </div>
          </div>
        )
    }
}