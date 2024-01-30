const SET_BUTTON_VALUE = 'SET_BUTTON_VALUE';

const defaultState = {
  buttonValue: '',
  id: ''
}

export default function buttonReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_BUTTON_VALUE:
      return { ...state, buttonValue: action.payload, id: action.id };
    default:
      return state;
  }
}

export const setButtonValue = (value, id) => ({ type: SET_BUTTON_VALUE, payload: value, id });

