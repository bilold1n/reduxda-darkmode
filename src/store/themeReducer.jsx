import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  darkMode: false,
  count: 0,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    case "incriment":
      return {
        ...state,
        count: state?.count + 1,
      };
    default:
      return state;
  }
};
export const stor = createStore(themeReducer);
export function Creatstore({ children }) {
  return <Provider store={stor}>{children}</Provider>;
}
export default themeReducer;
