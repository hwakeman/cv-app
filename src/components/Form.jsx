import "./form.css"

import GeneralInformation from "./form/GeneralInformation";
import EducationalExperiences from "./form/EducationalExperiences";
import ProfessionalExperiences from "./form/ProfessionalExperiences";

export default function Form( {cv, changeCv, submitCv} ) {
    return (
        <form className="cv-form">
            <GeneralInformation cv={cv} changeCv={changeCv}/>
            <EducationalExperiences cv={cv}  changeCv={changeCv}/>
            <ProfessionalExperiences cv={cv}  changeCv={changeCv}/>
            <button className="submit-button" type="submit" onClick={(e) => {e.preventDefault(); submitCv(cv)}}>Submit</button>
        </form>
    )
}