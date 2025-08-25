import "./FantasyFeatures.css";

function FantasyFeatures(){
    return (
        <>
            <section className="features-section">
                <h2 className="features-title">
                  <b>Fantasy Space</b>-ի մասին բազմաթիվ{" "}
                  <span className="gradient-text">տվյալներ</span>
                </h2>
        
                <div className="features-cards">
                  <div className="feature-card">
                    <h3>20</h3>
                    <p>Հոգանոց պրոֆեսիոնալների թիմ</p>
                  </div>
                  <div className="feature-card">
                    <h3>10,000+</h3>
                    <p>ներբեռնում ունեցող հավելվածների ստեղծում</p>
                  </div>
                  <div className="feature-card">
                    <h3>40+</h3>
                    <p>Հաջողված պրոյեկտներ</p>
                  </div>
                  <div className="feature-card">
                    <h3>12+</h3>
                    <p>Ոլորտ, որոնց հետ համագործակցում ենք</p>
                  </div>
                </div>
            </section>
        </>
    )
}

export default FantasyFeatures