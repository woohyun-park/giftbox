const GOTO_MAIN = "page/GOTO_MAIN";
const GOTO_FRIEND = "page/GOTO_FRIEND";

export const gotoMain = () => ({ type: GOTO_MAIN });
export const gotoFriend = () => ({ type: GOTO_FRIEND });

const initialState = {
  number: 0,
};

export default function page(state = initialState, action) {
  switch (action.type) {
    case GOTO_MAIN:
      return {
        ...state,
        number: 0,
      };
    case GOTO_FRIEND:
      return {
        ...state,
        number: 1,
      };
    default:
      return state;
  }
}
