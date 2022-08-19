import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter, useNavigate } from "react-router-dom"
import { SearchPage } from "../../../src/heroes/pages/SearchPage"


const mockUseNavigate = jest.fn();

//mock al hook de react
jest.mock('react-router-dom', () => ({
  // toma todo lo que retorna la libreria y guardalo en el spred operator
  ...jest.requireActual('react-router-dom'),
  // solo vamos a sobreescribir el useNavigate
  useNavigate: () => mockUseNavigate
}))


describe('Preubas en <SearchPage />', () => {
  // limpiando las funciones despues de cada tarea
  beforeEach(() => jest.clearAllMocks())

  test('debe de mostrarse correctamente con valore por defecto', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    )
    expect(container).toMatchSnapshot()
  })

  test('debe de mostrara Batman y el input del queryString', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage />
      </MemoryRouter>
    )

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('batman')

    const img = screen.getByRole('img')
    expect(img.src).toContain("assets/heroes/dc-batman.jpg")

    const alertDanger = screen.getByLabelText('alert-danger')
    expect(alertDanger.style.display).toEqual('none')
  })

  test('debe de mostrara error si no se muestra el heroe (batman123)', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman123']}>
        <SearchPage />
      </MemoryRouter>
    )
    // screen.debug()
    const alertInfo = screen.getByLabelText('alert-info')
    expect(alertInfo.style.display).toEqual('none')

    const alertDanger = screen.getByLabelText('alert-danger')
    expect(alertDanger.style.display).toBe('')

  })

  test('debe de llamar el navigate a la pantalla nueva', () => {
    const initialValue = 'Superman';

    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    )
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { name: 'searchText', value: initialValue } })

    const form = screen.getByLabelText('form')
    fireEvent.submit(form)

    expect(mockUseNavigate).toHaveBeenCalledWith(`?q=${initialValue}`)

  })
})