import { render, screen } from "@testing-library/react"
import FormOne from "./FormOne"

describe('Form-1', () => {
    test('Initial Render', () => {
        render(<FormOne />)

        const pageHeading = screen.getByRole('heading', { level: 1 })
        expect(pageHeading).toBeInTheDocument()

        const sectionHeading = screen.getByRole('heading', { level: 2 })
        expect(sectionHeading).toBeInTheDocument()

        const nameTextInputElement = screen.getByRole('textbox', { name: 'Name' })
        expect(nameTextInputElement).toBeInTheDocument()

        const bioTextareaElement = screen.getByRole('textbox', { name: 'Bio' })
        expect(bioTextareaElement).toBeInTheDocument()

        const jobLocationDropdownElement = screen.getByRole('combobox')
        expect(jobLocationDropdownElement).toBeInTheDocument()
        
        const termsxconditionsCheckbox = screen.getByRole('checkbox')
        expect(termsxconditionsCheckbox).toBeInTheDocument()

        const submitButton = screen.getByRole('button')
        expect(submitButton).toBeInTheDocument()

    })
})