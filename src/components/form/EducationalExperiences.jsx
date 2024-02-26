import "./educational-experiences.css"

import { v4 as uuidv4 } from 'uuid';

export default function EducationalExperiences( {cv, changeCv} ) {
    const educationalExperiences = cv.educationalExperiences || [];

    const addEducationalExperience = () => {
        const newEducationalExperiences = [...educationalExperiences, {}];
        changeCv({...cv, educationalExperiences: newEducationalExperiences});
    }

    const removeEducationalExperience = () => {
        const newEducationalExperiences = educationalExperiences.slice(0, -1);
        changeCv({...cv, educationalExperiences: newEducationalExperiences});
    }
    
    return (
        <div className="professional-experiences">
            <h2>Educational Experiences</h2> 
            {educationalExperiences.map((educationalExperience) => {
                return (
                    <div className='professional-experience' key={uuidv4()}>
                        <label>
                            School Name:
                            <input value={educationalExperience.schoolName} onChange={e => educationalExperience.schoolName = e.target.value}/>
                        </label>
                        <label>
                            Title of Study:
                            <input value={educationalExperience.titleOfStudy} onChange={e => educationalExperience.titleOfStudy = e.target.value}/>
                        </label>
                        <label>
                            Start Date:
                            <input type='date' value={educationalExperience.startDate} onChange={e => educationalExperience.startDate = e.target.value}/>
                        </label>
                        <label>
                            End Date:
                            <input type='date' value={educationalExperience.endDate} onChange={e => educationalExperience.endDate = e.target.value}/>
                        </label>
                    </div>
                )
            })}
            <button type="button" className="add-button" onClick={addEducationalExperience}>Add</button>
            <button type="button" className="remove-button" onClick={removeEducationalExperience}>Remove</button>
        </div>
    )
}