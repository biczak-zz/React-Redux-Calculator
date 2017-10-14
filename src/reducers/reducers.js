import { Parser } from 'expr-eval';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  displayValue: 0,
  previousValue: 0,
  result: '',
  memoryValue: 0,
};

const calculatorReducers = (state = initialState, action) => {
  // Parser() will allow us to read Strings as Mathematical Expressions.
  const parser = new Parser();
console.log()
  // For Number Buttons
  if (action.type === 'INPUT_NUMBER') {
    // Check to remove any leading Zeroes.
    console.log(state.displayValue.toString().split('')[0]);
    if (state.displayValue.toString().split('')[0] === '0' || state.previousValue !== 0) {
      return {
        ...state,
        displayValue: action.payload,
        result: state.result + action.payload,
      };
    }
    // If there is not a leading Zero.
    return {
      ...state,
      displayValue: state.displayValue.concat(action.payload),
      result: state.result + action.payload,
    };
    // Addition
  } else if (action.type === actionTypes.ADD) {
    return {
      ...state,
      previousValue: state.displayValue,
      result: state.result + action.payload,
    };
    // Subtraction
  } else if (action.type === actionTypes.SUBTRACT) {
    return {
      ...state,
      previousValue: state.displayValue,
      result: state.result + action.payload,
    };
    // Multiplication
  } else if (action.type === actionTypes.MULTIPLY) {
    return {
      ...state,
      previousValue: state.displayValue,
      result: state.result + action.payload,
    };
    // Division
  } else if (action.type === actionTypes.DIVIDE) {
    return {
      ...state,
      previousValue: state.displayValue,
      result: state.result + action.payload,
    };
    // Equals
  } else if (action.type === actionTypes.EQUALS) {
    return {
      ...state,
      result: parser.evaluate(state.result),
      previousValue: state.displayValue,
      displayValue: parser.evaluate(state.result).toString(),
    };
    // For the '+/-' Button.
  } else if (action.type === actionTypes.POSITIVE_NEGATIVE) {
    // If our currently displayed number is positive, we must make it negative.
    if (Number(state.displayValue) > 0) {
      return {
        ...state,
        displayValue: '-'.concat(state.displayValue),
      };
    // If our currently displayed number is negative, we must make it positive.
    } else if (Number(state.displayValue) <= 0) {
      return {
        ...state,
        displayValue: Math.abs(Number(state.displayValue)).toString(),
      };
    }
  // Adding the currently displayed number to the Memory Storage value
  } else if (action.type === actionTypes.MEMORY_ADD) {
    return {
      ...state,
      memoryValue: Number(state.memoryValue) + Number(state.displayValue),
      displayValue: Number(state.memoryValue) + Number(state.displayValue),
      result: '',
      previousValue: 0,
    };
  // Subtracting the currently displayed number to the Memory Storage value
  } else if (action.type === actionTypes.MEMORY_SUBTRACT) {
    return {
      ...state,
      memoryValue: Number(state.memoryValue) - Number(state.displayValue),
      displayValue: Number(state.memoryValue) - Number(state.displayValue),
      result: '',
      previousValue: 0,
    };
  // Sets the value from Memory Storage as the Displayed Value
  } else if (action.type === actionTypes.MEMORY_RECALL) {
    return {
      ...state,
      displayValue: state.memoryValue,
    };
  // Resets the value of Memory Storage to 0.
  } else if (action.type === actionTypes.MEMORY_CLEAR) {
    return {
      ...state,
      memoryValue: 0,
    };
  // Resets every value back to default, except for Memory Storage.
  } else if (action.type === actionTypes.CLEAR) {
    return {
      displayValue: 0,
      previousValue: 0,
      result: 0,
      memoryValue: state.memoryValue,
    };
  }
  return state;
};

export default calculatorReducers;
