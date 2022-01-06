const GOTO_MAIN = "page/GOTO_MAIN";
const GOTO_LIKE = "page/GOTO_LIKE";
const GOTO_ADD = "page/GOTO_ADD";
const GOTO_ALARM = "page/GOTO_ALARM";
const GOTO_PROFILE = "page/GOTO_PROFILE";

export const gotoMain = () => ({ type: GOTO_MAIN });
export const gotoLike = () => ({ type: GOTO_LIKE });
export const gotoAdd = () => ({ type: GOTO_ADD });
export const gotoAlarm = () => ({ type: GOTO_ALARM });
export const gotoProfile = () => ({ type: GOTO_PROFILE });

const initialState = {
  num: 0,
};

export default function nav(state = initialState, action) {
  switch (action.type) {
    case GOTO_MAIN:
      return {
        ...state,
        num: 0,
      };
    case GOTO_LIKE:
      return {
        ...state,
        num: 1,
      };
    case GOTO_ADD:
      return {
        ...state,
        num: 2,
      };
    case GOTO_ALARM:
      return {
        ...state,
        num: 3,
      };
    case GOTO_PROFILE:
      return {
        ...state,
        num: 4,
      };
    default:
      return state;
  }
}
