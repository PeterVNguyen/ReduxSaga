import { INCREMENT, DECREMENT } from "../actions/actionType";
const couterReducer = (times = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return ++times;
    case DECREMENT:
      return --times;
    default:
      return times;
  }
};

export default couterReducer;
