import { connect } from "react-redux";
import CouterScreen from "../components/CouterScreen";
// action
import { incrementAction, decrementAction } from "../actions";

const mapStateToProps = (state) => {
  return {
    times: state.couterReducer ? state.couterReducer : 0
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDecrement: (step) => {
      dispatch(decrementAction(step));
    },
    onIncrement: (step) => {
      dispatch(incrementAction(step));
    }
  };
};
const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CouterScreen);
export default CounterContainer;
