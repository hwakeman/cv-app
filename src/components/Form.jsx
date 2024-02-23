import "./form.css"

import EducationalExperiences from "./form/EducationalExperiences";
import GeneralInfo from "./form/GeneralInformation";

export default function Form() {
    return (
        <form className="cv-form">
            <GeneralInfo/>
            <EducationalExperiences/>
            <button type="submit">Submit</button>
        </form>
    )
}