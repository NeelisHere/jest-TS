import React, { useEffect } from 'react'
import { SkillType, SkillsPropsType } from './Skills.types'
import { Button } from '@chakra-ui/react'


const Skills = (props: SkillsPropsType) => {
    const [userLoggedIn, setUserLoggedIn] = React.useState<boolean>(false)
    const [skills, setSkills] = React.useState<SkillType[]|null>(null)

    useEffect(() => {
        setTimeout(() => {
            setSkills(props.skills)
        }, 500)
    }, [])

    return (
        <div>
            <h1>My Skills</h1>
            {
                !userLoggedIn? 
                <Button onClick={() => setUserLoggedIn((prev) => !prev)}>
                    login
                </Button> 
                : 
                <Button onClick={() => setUserLoggedIn((prev) => !prev)}>
                    logout
                </Button>
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