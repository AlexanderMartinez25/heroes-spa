import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from 'react-router-dom'

import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";

describe('Pruebas en <PrivateRoute.test />', () => {
  test('debe de mostrar el children si no está autenticado', () => {

    // probar el valor de un localstorage
    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: {
        id: 13588,
        name: 'Alex'
      }
    }

    render(
      // retorna el children
      <AuthContext.Provider value={contextValue}>
        {/* simulamos que estamos en esta ruta con su query */}
        <MemoryRouter initialEntries={['/search?q=batman']}>

          <PrivateRoute>
            <h1>Ruta privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText('Ruta privada')).toBeTruthy()
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/search?q=batman')

  })
})