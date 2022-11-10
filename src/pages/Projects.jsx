import ProjectsList from '../components/ProjectsList'
import { projects } from '../data/projects'

function Projects() {

  return (
    <>
    <h1>Projects</h1>
    <ProjectsList projects={projects} />
    </>
  )
}

export default Projects