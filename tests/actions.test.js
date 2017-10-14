import * as actions from '../src/actions/actions';

// ACTION TESTS

// Test our buttonClick Action.
test("The type should be 'INPUT_NUMBER'", () => {
  expect(actions.buttonClick(5).type).toBe('INPUT_NUMBER');
});

test("buttonClick's payload should be 5.", () => {
  expect(actions.buttonClick(5).payload).toBe(5);
});

// Test our add Action.
test("The type should be 'ADD'", () => {
  expect(actions.add().type).toBe('ADD');
});

test("The payload should be '+'", () => {
  expect(actions.add().payload).toBe('+');
});

// REDUCER TESTS

let testState = {
  displayValue: 5,
  previousValue: 0,
  result: '',
  memoryValue: 0,
};

const testReducers = (state = testState, action) => {
  console.log(action, state);
  if (action.type === 'INPUT_NUMBER') {
    if (state.displayValue.toString().split('')[0] === '0' || !Number(state.result.charAt(state.result.length - 1))) {
      testState = {
        ...state,
        displayValue: action.payload,
      };
      return testState;
    }

    // If there is not a leading Zero.
    return {
      ...state,
      displayValue: state.displayValue.concat(action.payload),
      result: state.result + action.payload,
    };
    // Set the previousValue to the former displayValue.
  } else if (action.type === 'ADD') {
    testState = {
      ...state,
      previousValue: state.displayValue,
    };

    return testState;
  } else if (action.type === 'MEMORY_ADD') {
    testState = {
      ...state,
      memoryValue: Number(state.memoryValue) + Number(state.displayValue),
      displayValue: Number(state.memoryValue) + Number(state.displayValue),
      result: '',
      previousValue: 0,
    };
    return testState;
  } else if (action.type === 'CLEAR') {
    testState = {
      displayValue: 0,
      previousValue: 0,
      result: 0,
      memoryValue: state.memoryValue,
    };
    return testState;
  }
};

test('The displayValue of our testState to be 5.', () => {
  testReducers(testState, actions.buttonClick(5));
  expect(testState.displayValue).toBe(5);
});

test('The previousValue of our testState to be 5.', () => {
  testReducers(testState, actions.buttonClick(5));
  testReducers(testState, actions.add());
  testReducers(testState, actions.buttonClick(2));
  expect(testState.previousValue).toBe(5);
});

test('The testState should be reset to default settings, except for memoryStorage.', () => {
  testReducers(testState, actions.addToMemory());
  testReducers(testState, actions.clearCalculator());
  expect(testState.displayValue).toBe(0);
  expect(testState.memoryValue).toBe(2);
});
