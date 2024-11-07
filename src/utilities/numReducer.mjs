import ACTION from './numReducerAction.mjs';

export default function reducer(state, action) {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { count: state.count + 1 };
    case ACTION.DECREMENT:
      return { count: state.count - 1 };
    case ACTION.ADDBYVALUE:
      return { count: state.count + Number(action.payload) };
    case ACTION.SUBBYVALUE:
      return { count: state.count - action.payload };
    default:
      return state;
  }
}