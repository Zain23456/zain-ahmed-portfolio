import ProjectsList from '../components/ProjectsList'
import { projects } from '../data/projects'
import styles from './Projects.module.css'

function Projects() {

  return (
    <>
      <h1>Projects</h1>
      <div className={styles.list}>
        <ProjectsList projects={projects} />
      </div>
    </>
  )
}

export default Projects