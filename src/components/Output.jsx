import "./output.css"

export default function Output( {submittedCv} ) {
    return (
        <div className="output">
            <h1>Output</h1>
            { submittedCv && 
            <>
                <h2>{submittedCv.name}</h2>
                <h3 className="general-info-output">
                    <div>{submittedCv.email}</div>
                    <div>{submittedCv.phoneNumber}</div>
                </h3>
            </>
            }
        </div>
        
    )
}