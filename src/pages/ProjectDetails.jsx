import { projects } from "../data/projects";

function ProjectDetails() {
  return (
    <>
      <h1>{projects[0].title}</h1>
      <p>{projects[0].description}</p>
      <img src={projects[0].image} alt='screenshot of landing page' />
      <a href={projects[0].repositoryLink} target='_blank' rel='noreferrer'>
        <button>Github</button>
      </a>
      <a href={projects[0].deploymentLink} target='_blank' rel='noreferrer'>
        <button>Site</button>
      </a>
    </>
  )
}

export default ProjectDetails