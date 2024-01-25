import contact from "../data/contact.json";
const Contactme = () => {
  return (
    <div className="outercontact" id="contact">
      <div>
        {" "}
        <p className="contacttitle">Contact </p>
        <p className="contactme">Feel free to reach out!</p>
      </div>

      <div>
        {contact.map((mapdata) => (
          <a target="_blank" href={mapdata.onlinelink}>
            <div className="onlinemedia">
              <img className="onlineimg" src={mapdata.imageSrc} />
              <p>{mapdata.onlineprofile}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
export default Contactme;
