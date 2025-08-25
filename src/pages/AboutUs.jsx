


import OurLogo from "../assets/OurLogo.PNG"



const AboutUS = () =>{
    return (
    <>
    

               <section className="logo-section">
                <div className="logo-content">
                  <h1 className="logo-title">Մեր լոգոտիպը</h1>
                  <p className="logo-subtitle">
                    AIT-ի լոգոտիպի հիմնական բաղադրիչ տարրը՝ ծրագրավորման մեջ այդքան հայտնի ձևավոր փակագծերն են։ 
                    Նրանց օգնությամբ մենք ստացել ենք լատինատառ A-ն, որն էլ իր հերթին հանդիսանում է Ararat IT-ի անվանման առաջին տառը։ 
                    Ձևավոր փակագծերը ծրագրավորման մեջ օգտագործվում են կոդերի բլոկներում՝ կատարելով այնտեղ բացող և փակող դեր: 
                    Ձևավոր փակագիծն ինչպես ծրագրավորման մեջ է բացում բլոկը, այնպես էլ AIT-ում բացում է հորիզոններ IT կրթության զարգացման համար։
                  </p>
                </div>
        
                <div>
                  <img src={OurLogo} alt="Fantasy Space" className="ourLogo" />
                </div>
            </section>
            <section className="AdvantagesSection">
            <h2 className="section-title">Կորպորատիվ գույներ</h2>

            <div className="advantages-container">
                <div className="advantage-card">
                <div className="circle circle-empty"></div>
                <p>
                    Սպիտակ գույնը խորհրդանշում է AIT-ի ուսումնական նյութերում և 
                    դասընթացներում տրվող գիտելիքների թափանցիկությունը, պարզ ու մաքուր մոտեցումն ամեն ուսանողին:
                </p>
                </div>

                <div className="advantage-card">
                <div className="circle circle-dark"></div>
                <p>
                    Մուգ կապույտ գույնն ընդգծում է տեխնիկական գիտելիքների կայունությունն 
                    ու հուսալիությունը, ինչպես նաև արտացոլում է պրոֆեսիոնալիզմն ու փորձը IT ոլորտում:
                </p>
                </div>

                <div className="advantage-card">
                <div className="circle circle-gradient"></div>
                <p>
                    Կապույտ-կանաչ գրադիենտը բնորոշում է այն թարմությունն և նորարարությունը, 
                    որը AIT-ն բերում է IT կրթության ոլորտ: Այն ցույց է տալիս հանգստության և 
                    պարզության մթնոլորտը, որն այքան կարևորվում է AIT-ում
                </p>
                </div>
            </div>
            </section>
    </>
    )
}

export default AboutUS