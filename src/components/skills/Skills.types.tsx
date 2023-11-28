export type RatingType = 1 | 2 | 3 | 4 | 5

export type SkillType = {
    readonly id: string,
    skill: string,
    rating: RatingType
}

export interface SkillsPropsType {
    skills: SkillType[]
}

export type getRandomIntFunctionType = (min: number, max: number) => number 