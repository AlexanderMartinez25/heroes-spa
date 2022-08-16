import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        // evitamos perder cualquier otra informacion que venga en el state
        ...state,
        logged: true,
        user: action.payload,
      };

    case types.logout:
      return {
        logged: true,
      };

    default:
      return state;
  }
};
