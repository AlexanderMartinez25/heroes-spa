import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../src/auth"
import { NavBar } from "../../../src/ui"

const mockUseNavigate = jest.fn();

//mock al hook de react
jest.mock('react-router-dom', () => ({
  // toma todo lo que retorna la libreria y guardalo en el spred operator
  ...jest.requireActual('react-router-dom'),
  // solo vamos a sobreescribir el useNavigate
  useNavigate: () => mockUseNavigate
}))

describe('Pruebas en <NavBar />', () => {

  const contextValue = {
    logged: true,
    user: {
      name: 'Alex',
    },
    // mock de la función para que pueda ser utilizada
    logout: jest.fn()
  }

  // limpiando las funciones despues de cada tarea
  beforeEach(() => jest.clearAllMocks())

  test('debe de retornar el nombre de usuario', () => {
    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue}>
          <NavBar />
        </AuthContext.Provider>
      </MemoryRouter>
    )
    expect(screen.getByText('Alex').innerHTML).toBe(contextValue.user.name)
    expect(screen.getByText('Alex')).toBeTruthy()
  })

  test('debe de llamar al logout y navigate cuando se hace click en el botón', () => {

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <NavBar />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    const logoutBtn = screen.getByRole('button', { name: 'Logout' });
    fireEvent.click(logoutBtn)

    expect(contextValue.logout).toHaveBeenCalled()
    // que se llame con los siguiente argumentos
    expect(mockUseNavigate).toHaveBeenCalledWith("/login", { "replace": true })

  })
})