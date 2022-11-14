import findProject from "../utilities/findProject"
import { useParams } from "react-router-dom"

function ProjectDetails() {
  const { projectDetails } = useParams()
  const project = findProject(projectDetails)

  return (
    <>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt='screenshot of landing page' />
      <a href={project.repositoryLink} target='_blank' rel='noreferrer'>
        <button>Github</button>
      </a>
      <a href={project.deploymentLink} target='_blank' rel='noreferrer'>
        <button>Site</button>
      </a>
    </>
  )
}

export default ProjectDetails