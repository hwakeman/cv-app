import "./form.css"

import GeneralInfo from "./form/GeneralInformation";
import EducationalExperiences from "./form/EducationalExperiences";
import ProfessionalExperiences from "./form/ProfessionalExperiences";

export default function Form() {
    return (
        <form className="cv-form">
            <GeneralInfo/>
            <EducationalExperiences/>
            <ProfessionalExperiences/>
            <button className="submit-button" type="submit">Submit</button>
        </form>
    )
}