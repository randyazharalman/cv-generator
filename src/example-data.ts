const exampleData = {
  resumeTitle: "My CV",
  personalInfo: {
    fullName: "",
    jobTitle: "",
    email: "",
    phoneNumber: "",
    address: "",
  },
  sections: {
    educations: [
      {
        degree: "",
        schoolName: "",
        cityEdu: "",
        countryEdu: "",
        startDateEdu: "",
        endDateEdu: "",
        id: crypto.randomUUID(),
      }
    ],
    experiences: [
      {
        companyName: "",
        positionTitle: "",
        cityExp: "",
        countryExp: "",
        description: "",
        startDateExp: "",
        endDateExp: "",
        id: crypto.randomUUID(),
      },
    ],
  },
};

export default exampleData