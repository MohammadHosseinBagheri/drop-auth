const {USER} = require('../../../constant');

export const authUser = (data) => {
  return {
    type: USER,
    payload: data,
  };
};
