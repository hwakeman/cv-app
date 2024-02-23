import "./general-info.css"

export default function GeneralInfo() {
    return (
        <div className="general-info">
            <h2>General Information</h2>
            <label>
                Name:
                <input placeholder="John Doe" required></input>
            </label>
            <label>
                Email:
                <input type="email" placeholder="name@gmail.com" required></input>
            </label>
            <label>
                Phone #:
                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="(555)-555-55-55" required></input>
            </label>
        </div>
    )
}