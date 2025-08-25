import "./AitTeam.css"
import AitTeam1 from "../assets/AitTeam.PNG"
import AitTeam2 from "../assets/AitTeam2.PNG"
import AitTeam3 from "../assets/AitTeam3.PNG"
import AitTeam4 from "../assets/AitTeam4.PNG"
import AitTeam5 from "../assets/AitTeam5.PNG"
import AitTeam6 from "../assets/AitTeam6.PNG"
import AitTeam7 from "../assets/AitTeam7.PNG"
import AitTeam8 from "../assets/AitTeam8.PNG"
import AitTeam9 from "../assets/AitTeam9.PNG"
import AitTeam10 from "../assets/AitTeam10.PNG"
import BestTeacher from "../assets/BestTeacher.PNG"

const teamMembers = [
  {
    name: "Երվանդ Թադևոսյան",
    position: "Համահիմնադիր",
    img: AitTeam1,
  },
  {
    name: "Ռաֆայել Ջամալյան",
    position: "Համահիմնադիր",
    img: AitTeam2,
  },
  {
    name: "Պաշ Կարապետյան",
    position: "Դպրոցի տնօրեն և Web ծրագրավորման դասընթացավար",
    img: BestTeacher,
  },
  {
    name: "Գափ Ավոյան",
    position: "AIT Kids և Web ծրագրավորման դասընթացավար",
    img: AitTeam3,
  },
  {
    name: "Վան Սայադյան",
    position: "UI/UX դասընթացավար",
    img: AitTeam4,
  },
  {
    name: "Մարինե Ավոյան",
    position: "Գրաֆիկ դիզայն դասընթացավար",
    img: AitTeam5,
  },
  {
    name: "Ժաննա Մելքոնյան",
    position: "AIT Kids դասընթացավար",
    img: AitTeam6,
  },
  {
    name: "Գևորգ Մարգարյան",
    position: "Համակարգչային գրագիտության դասընթացավար",
    img: AitTeam7,
  },
  {
    name: "Թագուհի Սիմոնյան",
    position: "SMM դասընթացավար",
    img: AitTeam8,
  },
  {
    name: "Էդ Ոսկանյան",
    position: "Մարքեթինգ մենեջեր",
    img: AitTeam9,
  },
  {
    name: "Գայանե Գրիգորյան",
    position: "SMM, Content creator",
    img: AitTeam10,
  },
];

function AitTeam (){
    return (
        <>
            <section className="AitTeam">
                <h2 className="team-section-title">AIT թիմը</h2>
                <div className="Ait-Team-Personal">
                    {teamMembers.map((member, index) => (
                    <div className="team-card" key={index}>
                        <div className="team-image-container">
                        <img src={member.img} alt={member.name} className="team-image" />
                        </div>
                        <h3 className="team-name">{member.name}</h3>
                        <p className="team-position">{member.position}</p>
                    </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default AitTeam