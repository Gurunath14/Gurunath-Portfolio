import projects from "../data/projects.json";
const Project = () => {
  return (
    <div>
      <div className="projectoutest" id="projects">
        <p className="projecttitle">Projects</p>
        <div className="outerprojectcontainer">
          {projects.map((mapdata, id) => (
            <div className="innercontainer" key={id}>
              <img src={mapdata.imageSrc} />
              <p className="projectname">{mapdata.title}</p>
              <p className="projectdescription">{mapdata.description}</p>
              <ul className="projectskills">
                {mapdata.skills.map((data, id) => (
                  <li>{data}</li>
                ))}
              </ul>
              <div className="anchorflex">
                <a href={mapdata.demo} target="_blank">
                  {<p className="anchorbtn">Demo</p>}
                </a>{" "}
                <a href={mapdata.source} target="_blank">
                  {<p className="anchorbtn">Source</p>}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Project;
