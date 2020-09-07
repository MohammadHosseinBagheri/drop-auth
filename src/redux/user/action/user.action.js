const {USER} = require('../../../constant');

export const authUser = (token) => {
  return {
    type: USER,
    payload: token,
  };
};
