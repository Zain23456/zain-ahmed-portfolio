import { projects } from "../data/projects";
import hyphenateWords from "./hyphenateWords";

function findProject(str) {
  return projects.filter(project => {
    return hyphenateWords(project.title) === str
  })
}