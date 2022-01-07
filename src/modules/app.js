const SET_USER = "app/SET_USER";
const SET_WISH = "app/SET_WISH";

export const setUser = (user) => ({ type: SET_USER, user });

export const setWish = (wish) => ({ type: SET_WISH, wish });

const initialState = {
  user: null,
  wishlist: [],
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case SET_WISH:
      return {
        ...state,
        wishlist: action.wish,
      };
    default:
      return state;
  }
}
