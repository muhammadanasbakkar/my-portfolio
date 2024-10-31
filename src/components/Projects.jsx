import { projectData } from './data.js';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Projects = () => {

  return (
    <div className="projects-container">
  <h2>Projects</h2>
  <div className="projects-grid">
    {projectData && projectData.map((project) => (
      <div className="project-card" key={project.id}>
        <div className="project-header">
          <FontAwesomeIcon icon={faFolderOpen} width={"20px"} height={"20px"} className="folder-icon" />
          <div className="small-icons">
            <a href={project.gitHubLink} target='_blank'>
              <FontAwesomeIcon width={"20px"} height={"20px"} icon={faGithub} />
            </a>
          </div>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    ))}
  </div>
</div>

    // <div className="projects-container">
    //   <h2>Projects</h2>
    //   <div className="projects-grid">
    //     {projectData && projectData.map((project) => (
    //       <div className="project-card" key={project.id}>
    //         <div className="project-header">
    //           <i className="fa-regular fa-folder-open folder-icon"></i>
    //           <div className="small-icons">
    //             {/* <a href={project.gitHubLink}><FontAwesomeIcon icon="fa-brands fa-github" /></a> */}
    //             <a href={project.gitHubLink}><FontAwesomeIcon icon={faGithub} /></a>
    //             {/* <a href={project.gitHubLink}><FontAwesomeIcon icon={['fab','github']} /></a> */}
    //           </div>
    //         </div>
    //         <h3>{project.title}</h3>
    //         <p>{project.description}</p>
    //       </div>
    //     ))
    //     }
    //   </div>
    // </div>
  )
}

export default Projects;