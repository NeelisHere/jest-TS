import { render, screen } from "@testing-library/react"
import Greet from "../Greet"

describe('Greet', () => {
    test('Rendering greet', () => {
        render(<Greet />)
        const textElement = screen.getByText(/Hello/)
        expect(textElement).toBeInTheDocument()
    })
    
    // test('Rendering greet with name', () => {
    //     render(<Greet name={'Neel'} />)
    //     const textElement = screen.getByText('Hello Neel')
    //     expect(textElement).toBeInTheDocument()
    // })
    
})


