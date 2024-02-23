import "./general-info.css"

export default function GeneralInformation( {cv, changeCv} ) {
    const changeName = (event) => {
        const newCv = {...cv}
        newCv.name = event.target.value
        changeCv(newCv)
    }

    const changeEmail = (event) => {
        const newCv = {...cv}
        newCv.email = event.target.value
        changeCv(newCv)
    }

    const changePhoneNumber = (event) => {
        const newCv = {...cv}
        newCv.phoneNumber = event.target.value
        changeCv(newCv)
    }

    return (
        <div className="general-info">
            <h2>General Information</h2>
            <label>
                Name:
                <input placeholder="John Doe" onChange={changeName} required></input>
            </label>
            <label>
                Email:
                <input type="email" placeholder="name@gmail.com" onChange={changeEmail} required></input>
            </label>
            <label>
                Phone #:
                <input type="tel" placeholder="(555)-555-55-55" onChange={changePhoneNumber} required></input>
            </label>
        </div>
    )
}