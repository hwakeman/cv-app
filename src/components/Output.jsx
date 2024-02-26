import "./output.css"

export default function Output( {submittedCv} ) {
    return (
        <div className="output">
            <h1>Output</h1>
                { submittedCv && 
                <div className="cv">
                    <h1>{submittedCv.name}</h1>
                    <h3 className="general-info-output">
                        <h3>{submittedCv.email}</h3>
                        <h3>{submittedCv.phoneNumber}</h3>
                    </h3>
                    <h2 className="section-title">Education</h2>
                    <div className="education section"> 
                        {submittedCv.educationalExperiences && submittedCv.educationalExperiences.map((educationalExperience) => {
                            return (
                                <div className="education-experience">
                                    <h2 className="experience-title">{educationalExperience.schoolName}</h2>
                                    <h3>{educationalExperience.titleOfStudy}</h3>
                                    <h3>{"Started: " + educationalExperience.startDate}</h3>
                                    <h3>{"Ended: " + educationalExperience.endDate}</h3>
                                </div>
                            )
                        
                        })}
                    </div>
                    <h2 className="section-title">Professional Experiences</h2>
                    <div className="professional section"> 
                        {submittedCv.professionalExperiences && submittedCv.professionalExperiences.map((professionalExperience) => {
                            return (
                                <div className="prfoessional-experience">
                                    <h2 className="experience-title">{professionalExperience.companyName}</h2>
                                    <h3>{professionalExperience.positionTitle}</h3>
                                    <h3>{professionalExperience.responsibilities}</h3>
                                    <h3>{"Started: " + professionalExperience.startDate}</h3>
                                    <h3>{"Ended: " + professionalExperience.endDate}</h3>
                                </div>
                            )
                        
                        })}
                    </div>
                </div>
                }
        </div>
        
    )
}