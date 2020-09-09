const {USER} = require('../../../constant');

const INITIAL_STATE = {
  user: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER:
      return {
        email: action.payload.email,
        password: action.payload.password,
        token: action.payload.token,
      };

    default:
      return state;
  }
};

export default userReducer;
