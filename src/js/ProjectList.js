const ProjectList = ({ projects }) => {
    return (
      <div>
        {projects.map((project, index) => (
          <div key={index}>
            <img src={project.img} alt={`Project ${index}`} />
            <p>{project.category}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProjectList;