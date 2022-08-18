import { render, screen } from "@testing-library/react"
import { MemoryRouter, Router } from "react-router-dom"

import { AuthContext } from "../../src/auth"
import { AppRouter } from "../../src/router/AppRouter"

describe('Pruebas en <AppRouter />', () => {
  test('debe de mostrar el login si no está autenticado', () => {

    const contextValue = {
      logged: false
    }

    render(
      // simulando estar en marvel page
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    )

    expect(screen.getAllByText('Login').length).toBe(2)
  })
  test('debe de mostrar el componente de Marvel si está autenticado', () => {

    const contextValue = {
      logged: true,
      user: {
        name: 'alex',
        id: 123
      }
    }

    render(
      // simulando estar en marvel login
      <MemoryRouter initialEntries={['/login']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    )

    expect(screen.getAllByText('Cyclops').length).toBeGreaterThanOrEqual(1)
  })
})