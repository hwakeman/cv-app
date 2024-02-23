import './professional-experiences.css';

import { v4 as uuidv4 } from 'uuid';

export default function ProfessionalExperiences({cv, changeCv} ) {
    const professionalExperiences = cv.professionalExperiences || [];

    const addProfessionalExperience = () => {
        const newProfessionalExperiences = [...professionalExperiences, {}];
        changeCv({...cv, professionalExperiences: newProfessionalExperiences});
    }

    const removeProfessionalExperience = () => {
        const newProfessionalExperiences = professionalExperiences.slice(0, -1);
        changeCv({...cv, professionalExperiences: newProfessionalExperiences});
    }
    
    return (
        <div className="professional-experiences">
            <h2>Professional Experiences</h2> 
            {professionalExperiences.map((professionalExperience) => {
                return (
                    <div className='professional-experience' key={uuidv4()}>
                        <label>
                            Company Name:
                            <input value={professionalExperience.companyName} onChange={e => professionalExperience.companyName = e.target.value}/>
                        </label>
                        <label>
                            Position Title:
                            <input value={professionalExperience.positionTitle} onChange={e => professionalExperience.positionTitle = e.target.value}/>
                        </label>
                        <label>
                            Responsibilites:
                            <textarea value={professionalExperience.responsibilities} onChange={e => professionalExperience.responsibilities = e.target.value}/>
                        </label>
                        <label>
                            Start Date:
                            <input type='date' value={professionalExperience.startDate} onChange={e => professionalExperience.startDate = e.target.value}/>
                        </label>
                        <label>
                            End Date:
                            <input type='date' value={professionalExperience.endDate} onChange={e => professionalExperience.endDate = e.target.value}/>
                        </label>
                    </div>
                )
            })}
            <button type="button" className="add-button" onClick={addProfessionalExperience}>Add</button>
            <button type="button" className="remove-button" onClick={removeProfessionalExperience}>Remove</button>
        </div>
    )
}