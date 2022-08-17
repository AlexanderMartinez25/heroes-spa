import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/router/PublicRoute";

describe('Pruebas en <PublicRoute />', () => {
  test('debe de mostrar el children si no está autenticado', () => {

    const contextValue = {
      logged: false
    }

    render(
      // retorna el children
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Ruta Pública</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );
    expect(screen.getByText('Ruta Pública')).toBeTruthy()

  })

  test('debe de navegar si está autenticado', () => {

    const contextValue = {
      logged: true,
      user: {
        name: 'Kratos',
        id: 12
      }
    }

    render(
      <AuthContext.Provider value={contextValue}>
        {/* simulando entrar al login */}
        <MemoryRouter initialEntries={['/login']}>

          <Routes>
            {/* al intentar entrar a la ruta de login no podra 
            hacerlo y buscara la siguiente ruta */}
            <Route path="login" element={
              <PublicRoute>
                <h1>Ruta Pública</h1>
              </PublicRoute>
            } />

            <Route path="marvel" element={<h1>Página Marvel</h1>} />
          </Routes>

        </MemoryRouter>
      </AuthContext.Provider>
    );
    // screen.debug()
    expect(screen.getByText('Página Marvel')).toBeTruthy()
  })
})