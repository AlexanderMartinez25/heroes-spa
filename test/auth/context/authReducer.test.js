import { authReducer } from "../../../src/auth/context";
import { types } from "../../../src/auth/types/types";

describe("Pruebas en authReducer", () => {
  test("debe de retornar el estado por defecto", () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test("Debe de llamar el login autenticar y establecer el user", () => {
    const action = {
      type: types.login,
      payload: { id: 1, name: "Alex" },
    };

    const state = authReducer({ logged: false }, action);

    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
  });

  test("Debe de borrar el name del user y logged en false", () => {
    const state = {
      logged: false,
      user: { name: "Alex", id: 123 },
    };

    const action = {
      type: types.logout,
    };

    const newState = authReducer(state, action);
    console.log(state);
    expect(newState).toEqual({
      logged: false,
    });
  });
});
