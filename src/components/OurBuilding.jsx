import OurBuilding from "../assets/OurBuilding.PNG"
import "./OurBuilding.css";

function OurBuildingFunction(){
    return (
        <>
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

        </>
    )
}

export default OurBuildingFunction