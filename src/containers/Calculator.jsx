import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';
import Button from '../components/Button';
import '../../public/scss/main.scss';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  // Check which Button was pressed, and return its corresponding Action.
  clickHandler(e) {
    if (e === "+") {
      return this.props.actions.add();
    } else if (e === "-") {
      return this.props.actions.subtract();
    } else if (e === "*") {
      return this.props.actions.multiply();
    } else if (e === "/") {
      return this.props.actions.divide();
    } else if (e === "MC") {
      return this.props.actions.clearMemory();
    } else if (e === "M+") {
      return this.props.actions.addToMemory();
    } else if (e === "M-") {
      return this.props.actions.subtractFromMemory();
    } else if (e === "MR") {
      return this.props.actions.recallMemory();
    } else if (e === "CLEAR") {
      return this.props.actions.clearCalculator();
    } else if (e === "=") {
      return this.props.actions.equals();
    } else if (e === "+/-") {
      return this.props.actions.positiveNegative();
    }
    return this.props.actions.buttonClick(e);
  }

  render() {
    return (
      <div id="app-container">
        <div id="calculator-container">
          <div id="calculator-display-container">
            <div id="calculator-display">{this.props.calculator.displayValue}</div>
          </div>
          <div id="calculator-buttons-container">
            <div className="button-row">
              <Button value="MC" clickHandler={this.clickHandler} />
              <Button value="M+" clickHandler={this.clickHandler} />
              <Button value="M-" clickHandler={this.clickHandler} />
              <Button value="MR" clickHandler={this.clickHandler} />
              <Button value="CLEAR" clickHandler={this.clickHandler} />
            </div>
            <div className="button-row">
              <Button value="+" clickHandler={this.clickHandler} id="operator-button" />
              <Button value="-" clickHandler={this.clickHandler} id="operator-button" />
              <Button value="*" clickHandler={this.clickHandler} id="operator-button" />
              <Button value="/" clickHandler={this.clickHandler} id="operator-button" />
              <Button value="+/-" clickHandler={this.clickHandler} id="operator-button" />
            </div>
            <div className="button-row">
              <Button value={7} clickHandler={this.clickHandler} />
              <Button value={8} clickHandler={this.clickHandler} />
              <Button value={9} clickHandler={this.clickHandler} />
            </div>
            <div className="button-row">
              <Button value={4} clickHandler={this.clickHandler} />
              <Button value={5} clickHandler={this.clickHandler} />
              <Button value={6} clickHandler={this.clickHandler} />
            </div>
            <div className="button-row">
              <Button value={1} clickHandler={this.clickHandler} />
              <Button value={2} clickHandler={this.clickHandler} />
              <Button value={3} clickHandler={this.clickHandler} />
            </div>
            <div className="button-row">
              <Button value={0} clickHandler={this.clickHandler} />
              <Button value="." clickHandler={this.clickHandler} />
              <Button value="=" clickHandler={this.clickHandler} className="operator-button" />
            </div>
          </div>
        <div id="footer">
          <h1>React / Redux Calculator</h1>
          <h3>By Alex Biczak</h3>
        </div>
        </div>
      </div>
    );
  }
}

Calculator.PropTypes = {
  actions: PropTypes.object,
};

// Map the Redux State to the Props of this Component.
const mapStateToProps = state => ({
  calculator: state.calculatorReducers,
});

// This allows us to call our Actions from the Store, via Props.
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

// Tie it all together with closure.
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
