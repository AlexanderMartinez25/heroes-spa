import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.payload) {
    case types.login:
      return {
        // evitamos perder cualquier otra informacion que venga en el state
        ...state,
        logged: true,
        name: action.payload,
      };

    case types.logout:
      return {
        logged: true,
      };

    default:
      return state;
  }
};
