import { SkillType } from "./Skills.types";
import { logRoles, render, screen, waitFor } from "@testing-library/react"
import Skills from "./Skills"

const skills: SkillType[] = [
    { id: '1', skill: 'JavaSript', rating: 3 },
    { id: '2', skill: 'Python', rating: 4 },
    { id: '3', skill: 'TypeScript', rating: 3 },
    { id: '4', skill: 'React', rating: 2 },
]

const TEST_TIMEOUT = 2*1000

jest.setTimeout(TEST_TIMEOUT)

describe('Skills', () => {
    test('all-skills Render', () => {
        render(<Skills skills={skills} />)
        const skillCardElement = screen.getByTestId('all-skills')
        expect(skillCardElement).toBeInTheDocument()
    })

    test('skill-card Render', async () => {
        const view = render(<Skills skills={skills} />)
        logRoles(view.container)
        // screen.debug()
        const skillCardElement = await waitFor(() => screen.findAllByTestId('skill-card'), { timeout: TEST_TIMEOUT })
        expect(skillCardElement).toHaveLength(skills.length)
        // screen.debug()
    })

    test('login button render', () => {
        render(<Skills skills={skills} />)
        const loginButton = screen.getByRole('button', { name: 'login' })
        expect(loginButton).toBeInTheDocument()
    })

    test('logout button doesn\'t render', () => {
        render(<Skills skills={skills} />)
        const logoutButton = screen.queryByRole('button', { name: 'logout' })
        expect(logoutButton).not.toBeInTheDocument()
    })
})

