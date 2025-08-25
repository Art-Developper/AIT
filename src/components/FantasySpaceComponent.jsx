import Fantasy from "../assets/FantasySpace.PNG";
import "./FantasySpaceComponent.css"
function FantasyComponent(){
    return (
        <>
        <section className="hero-section">
            <div className="hero-content">
            <h1 className="hero-title">Fantasy Space</h1>
            <p className="hero-subtitle">
                AIT-ին կից գործում է Fantasy Space ծրագրավորման ընկերությունը՝
                նորարար պրոֆեսիոնալների թիմ, ովքեր կյանքի են կոչում ամենաանհնարին
                ֆանտազիաները։ Թվային տիեզերքում Fantasy Space-ը հանդիսանում է այն
                առաջնորդող աստղը, որն ուղղորդում է ընկերություններին դեպի հաջողություն:
            </p>
            <div className="hero-actions">
                <button className="btn-primary">Իմանալ ավելին</button>
            </div>
            </div>

            <div>
            <img src={Fantasy} alt="Fantasy Space" className="hero-image" />
            </div>
        </section>
        </>
    )
}

export default FantasyComponent