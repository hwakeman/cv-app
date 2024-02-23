export default class Cv {
    constructor() {
        this.name = "";
        this.email = "";
        this.phoneNumber = "";
        this.educationalExperiences = [];
        this.professionalExperiences = [];
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setEmail(email) {
        this.email = email;
    }

    getEmail() {
        return this.email;
    }

    setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    getPhoneNumber() {
        return this.phoneNumber;
    }

    addEducationalExperience(schoolName, titleOfStudy, startDate, endDate) {
        this.educationalExperiences.push({
            schoolName,
            titleOfStudy,
            startDate,
            endDate
        });
    }

    removeEducationalExperience() {
        this.educationalExperiences.pop();
    }

    addProfessionalExperience(companyName, positionTitle, mainTasks, startDate, endDate) {
        this.professionalExperiences.push({
            companyName,
            positionTitle,
            mainTasks,
            startDate,
            endDate
        });
    }

    removeProfessionalExperience() {
        this.professionalExperiences.pop();
    }
}