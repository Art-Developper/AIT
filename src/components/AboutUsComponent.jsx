import About_US from "../assets/AboutUS.PNG"
import OurGoals from "../assets/OurGoals.PNG"
import "./AboutUsComponent.css"


function AboutUsComponent(){
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
        </>
    )
}

export default AboutUsComponent