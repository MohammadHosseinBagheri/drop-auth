const {USER} = require('../../../constant');

const INITIAL_STATE = {
  user: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER:
      return action.payload;

    default:
      return state;
  }
};

export default userReducer;
