import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchPage } from "../../../src/heroes/pages/SearchPage"

describe('Preubas en <SearchPage />', () => {
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
})