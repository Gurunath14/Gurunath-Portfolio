import skills from "../data/skills.json";
import history from "../data/history.json";

const Expirence = () => {
  return (
    <section className="expirencesection" id="expirence">
      <p className="expirencetitle">Expirence</p>
      <div className="expirenceflex">
        <div className="expirenceskills">
          {skills.map((data, id) => (
            <div className="skillflex" key={id}>
              {console.log(data)}
              <div className="flexskill">
                <img className="fleximg" src={data.imageSrc} />
              </div>
              <p className="skilltitle">{data.title}</p>
            </div>
          ))}
        </div>
        <div className="totalworkflex">
          {history.map((mapdata) => (
            <div>
              <div className="workflex">
                <img className="workimg" src={mapdata.imageSrc} />
                <div>
                  <p className="worktitle">
                    {mapdata.role}, {mapdata.organisation}
                  </p>
                  <p className="workdate">
                    {mapdata.startDate + "-" + mapdata.endDate}
                  </p>
                  {mapdata.experiences.map((data) => {
                    return (
                      <ul className="outerlist">
                        <li className="listwork">{data}</li>
                      </ul>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expirence;
