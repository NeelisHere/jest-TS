import React, { useEffect } from 'react'
import { SkillType, SkillsPropsType } from './Skills.types'


const Skills = (props: SkillsPropsType) => {
    const [userLoggedIn, setUserLoggedIn] = React.useState<boolean>(false)
    const [skills, setSkills] = React.useState<SkillType[]|null>(null)

    useEffect(() => {
        setTimeout(() => {
            setSkills(props.skills)
        }, 9000)
    }, [])

    return (
        <div>
            <h1>My Skills</h1>
            {
                !userLoggedIn? 
                <button onClick={() => setUserLoggedIn((prev) => !prev)}>
                    login
                </button> 
                : 
                <button onClick={() => setUserLoggedIn((prev) => !prev)}>
                    logout
                </button>
            }
            <div data-testid='all-skills'>
                {
                    skills?.map(({ id, skill, rating }) => {
                        return (
                            <div key={id} data-testid='skill-card' >
                                {`${skill} (${rating})`}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills