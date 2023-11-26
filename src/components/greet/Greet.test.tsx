import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

test('Rendering `Hello`', () => {
    render(<Greet />)
    const textElement = screen.getByText('Hello')
    expect(textElement).toBeInTheDocument()
})

test('Rendering `Hello` with name', () => {
    render(<Greet name={'Neel'} />)
    const textElement = screen.getByText('Hello Neel')
    expect(textElement).toBeInTheDocument()
})
