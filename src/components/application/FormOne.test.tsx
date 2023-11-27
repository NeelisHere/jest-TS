import { render, screen } from "@testing-library/react"
import FormOne from "./FormOne"

describe('Form-1', () => {
    test('Initial Render', () => {
        render(<FormOne />)

        const nameTextInputElement = screen.getByRole('textbox')
        expect(nameTextInputElement).toBeInTheDocument()

        const jobLocationDropdownElement = screen.getByRole('combobox')
        expect(jobLocationDropdownElement).toBeInTheDocument()
        
        const termsxconditionsCheckbox = screen.getByRole('checkbox')
        expect(termsxconditionsCheckbox).toBeInTheDocument()

        const submitButton = screen.getByRole('button')
        expect(submitButton).toBeInTheDocument()

    })
})