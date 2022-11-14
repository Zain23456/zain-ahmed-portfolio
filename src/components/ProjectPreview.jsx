import hyphenateWords from "../utilities/hyphenateWords"
import { Link } from "react-router-dom"

function ProjectPreview(props) {
  const path = hyphenateWords(props.title)

  return (
    <div>
      <img 
          src={props.image} 
          alt={props.title}
      />

      <section>
        <h3>
            {props.title}
        </h3>
        <Link to={path}>
          <button>
            Learn more
          </button>
        </Link>
      </section>
    </div>
  )
}

export default ProjectPreview