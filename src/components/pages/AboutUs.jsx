import "./AboutUs.css";
import About_US from "../../assets/AboutUS.PNG"
import AitTeam from "../../assets/AitTeam.PNG"
import AitTeam2 from "../../assets/AitTeam2.PNG"
import AitTeam3 from "../../assets/AitTeam3.PNG"
import AitTeam4 from "../../assets/AitTeam4.PNG"
import AitTeam5 from "../../assets/AitTeam5.PNG"
import AitTeam6 from "../../assets/AitTeam6.PNG"
import AitTeam7 from "../../assets/AitTeam7.PNG"
import AitTeam8 from "../../assets/AitTeam8.PNG"
import AitTeam9 from "../../assets/AitTeam9.PNG"
import AitTeam10 from "../../assets/AitTeam10.PNG"
import BestTeacher from "../../assets/BestTeacher.PNG"
import OurLogo from "../../assets/OurLogo.PNG"
import OurBuilding from "../../assets/OurBuilding.PNG"
import OurGoals from "../../assets/OurGoals.PNG"

const AboutUS = () =>{
    return (
    <>
            <section className="about-section">
                <div className="about-content">
                  <h1 className="about-title">Մեր մասին</h1>
                  <p className="about-subtitle">
                    IT-ն դեռ երբեք այսքան մոտ չի եղել։ AIT-ն Ժամանակակից մասնագիտությունների ուսումնարան է Արարատ և Վեդի քաղաքներում։
                    Դպրոցին կից գործում է նաև Fantasy Space ծրագրավորման ընկերությունը, որը մասնագիտացված է WEB և Mobile ծրագրավորման մեջ։ 
                    AIT-ի այն ուսանողները, ովքեր նպատակասլաց են և զարգացմանը պատրաստ, հնարավորություն են ստանում մուտք գործել ՏՏ աշխարհ՝ 
                    միանալով մեր հզոր և ստեղծարար թիմին։
                  </p>
                </div>
        
                <div>
                  <img src={About_US} alt="Fantasy Space" className="aboutUs" />
                </div>
            </section>
            <section className="AboutSection">
                  <div className="About-container">
                    <div className="About-left">
                      <img src={OurGoals} alt="OurGoals" />
                    </div>
                    <div className="about-right">
                      <h2 className="AboutTitle">Մեր առաքելությունը</h2>
                      <p className="about-description">
                       AIT-ի նպատակն է ապակենտրոնացնել IT ոլորտը և զարգացնել այն նաև մարզերում՝ ստեղծելով IT էկոհամակարգ։
                       Կրթության կազմակերպման գործում մեզ համար կարևորագույն է ինքնակրթության գաղափարը։ Ուսանողը պետք է 
                       գիտակցի ինքնազարգացման կարևորությունը, ուժը և տեսնի նրա ընձեռած անթիվ հնարավորությունները։
                       Փորձի փոխանակումը մարզերի և մայրաքաղաքի միջև կերտում է միասնական զարգացման համար նպաստավոր պայմանները։ 
                       Մենք հավատում ենք նաև, որ ՏՏ ոլորտի զարագացումը կարևորագույն լուծում է Հայաստանի համար, որը նպատակ է դրել տնտեսության էքսպոնենցիալ զարգացման։
                      </p>
                    </div>
                  </div>
            </section>
            <section className="our_building_section">
                <div className="our_building_container">
                    <div className="our-left">
                        <h2 className="our-title">Մեր մասնաշենքը</h2>
                        <p className="our-description">
                            Այսպիսի գեղեցիկ, լուսավոր ու ջերմ անկյունում է անցկացվում մեր ցանկացած դասընթաց։ 
                            Միջավայրը շատ կարևոր է մոտիվացված և տրամադրված աշխատանքի համար։ Մենք ամեն պայման ապահովում ենք, 
                            որպեսզի մեր ուսանողները սովորեն բոլոր հարմարություններով կահավորված միջավայրում, իսկ մեր թիմը սերմանում է՝ 
                            աշխատասիրություն, նպատակասլացություն, ոգևորվածություն։
                        </p>
                    </div>
                    <div className="our-right">
                        <img src={OurBuilding} alt="OurBuilding" />
                    </div>
                </div>
            </section>
           <section className="AitTeam">
            <h2 className="team-section-title">AIT թիմը</h2>
            <div className="Ait-Team-Personal">
                <div className="team-card">
                <div className="team-image-container">
                    <img src={AitTeam} alt="Երվանդ Թաղոյան" className="team-image" />
                </div>
                <h3 className="team-name">Երվանդ Թադևոսյան</h3>
                <p className="team-position">Համահիմնադիր</p>
                </div>

                <div className="team-card">
                <div className="team-image-container">
                    <img src={AitTeam2} alt="Երվանդ Թաղոյան" className="team-image" />
                </div>
                <h3 className="team-name">Ռաֆայել Ջամալյան</h3>
                <p className="team-position">Համահիմնադիր</p>
                </div>

                <div className="team-card">
                <div className="team-image-container">
                    <img src={BestTeacher} alt="Երվանդ Թաղոյան" className="team-image" />
                </div>
                <h3 className="team-name">Պաշ Կարապետյան</h3>
                <p className="team-position">Դպրոցի տնօրեն և Web ծրագրավորման դասընթացավար</p>
                </div>

                <div className="team-card">
                <div className="team-image-container">
                    <img src={AitTeam3} alt="Երվանդ Թաղոյան" className="team-image" />
                </div>
                <h3 className="team-name">Գափ Ավոյան</h3>
                <p className="team-position">AIT Kids և Web ծրագրավորման դասընթացավար</p>
                </div>

                <div className="team-card">
                <div className="team-image-container">
                    <img src={AitTeam4} alt="Երվանդ Թաղոյան" className="team-image" />
                </div>
                <h3 className="team-name">Վան Սայադյան</h3>
                <p className="team-position">UI/UX դասընթացավար</p>
                </div>

                <div className="team-card">
                <div className="team-image-container">
                    <img src={AitTeam5} alt="Երվանդ Թաղոյան" className="team-image" />
                </div>
                <h3 className="team-name">Մարինե Ավոյան</h3>
                <p className="team-position">Գրաֆիկ դիզայն դասընթացավար</p>
                </div>

                <div className="team-card">
                <div className="team-image-container">
                    <img src={AitTeam6} alt="Երվանդ Թաղոյան" className="team-image" />
                </div>
                <h3 className="team-name">Ժաննա Մելքոնյան</h3>
                <p className="team-position">AIT Kids դասընթացավար</p>
                </div>

                <div className="team-card">
                <div className="team-image-container">
                    <img src={AitTeam7} alt="Երվանդ Թաղոյան" className="team-image" />
                </div>
                <h3 className="team-name">Գևորգ Մարգարյան</h3>
                <p className="team-position">Համակարգչային գրագիտության դասընթացավար</p>
                </div>

                <div className="team-card">
                <div className="team-image-container">
                    <img src={AitTeam8} alt="Երվանդ Թաղոյան" className="team-image" />
                </div>
                <h3 className="team-name">Թագուհի Սիմոնյան</h3>
                <p className="team-position">SMM դասընթացավար</p>
                </div>

                <div className="team-card">
                <div className="team-image-container">
                    <img src={AitTeam9} alt="Երվանդ Թաղոյան" className="team-image" />
                </div>
                <h3 className="team-name">Էդ Ոսկանյան</h3>
                <p className="team-position">Մարքեթինգ մենեջեր</p>
                </div>

                <div className="team-card">
                <div className="team-image-container">
                    <img src={AitTeam10} alt="Երվանդ Թաղոյան" className="team-image" />
                </div>
                <h3 className="team-name">Գայանե Գրիգորյան</h3>
                <p className="team-position">SMM, Content creator</p>
                </div>
            </div>
            </section>
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