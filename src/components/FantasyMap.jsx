import "./FantasyMap.css";
import MapIMG from "../assets/Map.PNG";

function FantasyMap(){
    return (
        <>
            <section className="clients-map-section">
                    <h2 className="clients-map-title">Հաճախորդների աշխարհագրությունը</h2>
                    <p className="clients-map-subtitle">
                      Fantasy Space-ը համագործակցում է ավելի քան 10 տարբեր երկրներում
                      գտնվող ընկերությունների հետ
                    </p>
            
                    <div className="map-wrapper">
                      <img src={MapIMG} alt="Fantasy Space Map" className="map-image" />
                    </div>
            </section>
        </>
    )
}

export default FantasyMap