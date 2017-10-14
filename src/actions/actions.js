export const buttonClick = (buttonValue) => {
  console.log('Action: buttonClick', buttonValue);
  return {
    type: 'INPUT_NUMBER',
    payload: buttonValue,
  };
};

export const add = () => {
  return {
    type: 'ADD',
    payload: '+',
  };
};

export const subtract = () => {
  return {
    type: 'SUBTRACT',
    payload: '-',
  };
};

export const multiply = () => {
  return {
    type: 'MULTIPLY',
    payload: '*',
  };
};

export const divide = () => {
  return {
    type: 'DIVIDE',
    payload: '/',
  };
};

export const equals = () => {
  return {
    type: 'EQUALS',
  };
};

export const positiveNegative = () => {
  return {
    type: 'POSITIVE_NEGATIVE',
  };
};

export const addToMemory = () => {
  return {
    type: 'MEMORY_ADD',
  };
};

export const subtractFromMemory = () => {
  return {
    type: 'MEMORY_SUBTRACT',
  };
};

export const recallMemory = () => {
  return {
    type: 'MEMORY_RECALL',
  };
};

export const clearMemory = () => {
  return {
    type: 'MEMORY_CLEAR',
    payload: 0,
  };
};

export const clearCalculator = () => {
  return {
    type: 'CLEAR',
  };
};
