import "./educational-experiences.css"

import EducationalExperience from "./educational-experiences/EducationalExperience";

import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function EducationalExperiences() {
const [educationalExperiences, setEducationalExperiences] = useState([{
    id: uuidv4(),
    schoolName: "",
    titleOfStudy: "",
    startDate: "",
    endDate: ""
}])

return (
    <div className="educational-experiences">
        <h2>Educational Experience</h2> 
        <button type="button" className="add-button">Add</button>
        <button type="button" className="remove-button">Remove</button>
    </div>
)
}