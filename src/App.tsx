
import Skills from "./components/skills/Skills";
import { SkillType } from "./components/skills/Skills.types";

const skills: SkillType[] = [
    { id: '1', skill: 'JavaSript', rating: 3 },
    { id: '2', skill: 'Python', rating: 4 },
    { id: '3', skill: 'TypeScript', rating: 3 },
    { id: '4', skill: 'React', rating: 2 },
]


const App = () => {
	return (
		<>
			<Skills skills={skills}/>
		</>
	);
}

export default App;
