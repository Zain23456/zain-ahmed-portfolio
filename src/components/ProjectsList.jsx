import ProjectPreview from "./ProjectPreview"

function ProjectsList (props) {
  return (
    <>
      <ul>
      {props.projects.map((project, idx) =>
        <ProjectPreview key={idx} title ={project.title} image={project.image} />
        )}
      </ul>
    </>
  )
}

export default ProjectsList