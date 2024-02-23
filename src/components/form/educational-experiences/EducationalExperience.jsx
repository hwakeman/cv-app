import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function EducationalExperience() {
    const id = uuidv4();
    const [schoolName, setSchoolName] = useState("");
    const [titleOfStudy, setTitleOfStudy] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    return (
        <div className="educational-experience" key={id}>
                    <label>
                        School Name:
                        <input placeholder="School name" onChange={(e) => setSchoolName(e.target.value)} value={schoolName} />
                    </label>
                    <label>
                        Title of study:
                        <input placeholder="Title of study" onChange={(e) => setTitleOfStudy(e.target.value)} value={titleOfStudy} />
                    </label>
                    <label>
                        Start Date:
                        <input type="date" onChange={(e) => setStartDate(e.target.value)} value={startDate} />
                    </label>
                    <label>
                        End Date:
                        <input type="date" onChange={(e) => setEndDate(e.target.value)} value={endDate} />
                    </label>
                </div>
    )
}