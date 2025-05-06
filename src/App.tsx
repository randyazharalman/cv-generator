import { useEffect, useRef, useState } from "react";
import "./App.css";
import Sidebar from "./components/layout/sidebar";
import ButtonGroup from "./components/ButtonGroup";
import exampleData from "./example-data";
import SideBarEditor from "./components/SideBarEditor";
import EducationSection from "./components/sections/EducationSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import { EducationDataType, ExperienceDataType, PersonalInfoDataType } from "./types/type";
import PersonalInfoSection from "./components/sections/PersonalInfoSection";
import TitleCard from "./components/TitleCard";
import { useReactToPrint } from "react-to-print";

function App() {
  // const data = exampleData;
  const [resumeTitle, setResumeTitle] = useState(() => {
    const savedData = localStorage.getItem("Data");
    return savedData ? JSON.parse(savedData).resumeTitle : "My CV";
  });
  
  const [personalInfoData, setPersonalInfoData] = useState(() => {
    const savedData = localStorage.getItem("Data");
    return savedData ? JSON.parse(savedData).personalInfo : {
      fullName: "",
      jobTitle: "",
      email: "",
      phoneNumber: "",
      address: "",
    };
  });
  
  const [educationsData, setEducationsData] = useState(() => {
    const savedData = localStorage.getItem("Data");
    return savedData ? JSON.parse(savedData).sections.educations[0] : {
      degree: "",
      schoolName: "",
      startDateEdu: "",
      endDateEdu: "",
      cityEdu: "",
      countryEdu: "",
    };
  });
  
  const [experiencesData, setExperiencesData] = useState(() => {
    const savedData = localStorage.getItem("Data");
    return savedData ? JSON.parse(savedData).sections.experiences[0] : {
      jobTitle: "",
      companyName: "",
      startDateExp: "",
      endDateExp: "",
      cityExp: "",
      countryExp: "",
      description: "",
    };
  });
  

  useEffect(() => {
    const storedData = localStorage.getItem("Data");
    const parsed = storedData ? JSON.parse(storedData) : exampleData;
  
    setResumeTitle(exampleData.resumeTitle);
    setPersonalInfoData(parsed.personalInfo);
    setEducationsData(parsed.sections.educations[0]);
    setExperiencesData(parsed.sections.experiences[0]);
  }, []);

  useEffect(() => {
    const updatedData = {
      resumeTitle,
      personalInfo: personalInfoData,
      sections: {
        educations: [educationsData],
        experiences: [experiencesData],
      },
    };
  
    localStorage.setItem("Data", JSON.stringify(updatedData));
  }, [resumeTitle, personalInfoData, educationsData, experiencesData]);

  const [activeTab, setActiveTab] = useState("personal");
  console.log(personalInfoData);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalInfoData((prevData: PersonalInfoDataType) => ({
      ...prevData,
      [name]: value,
    }));
    setEducationsData((prevData: EducationDataType) => ({
      ...prevData,
      [name]: value,
    }));
    setExperiencesData((prevData: ExperienceDataType) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTabClick = (tabActive: string) => {
    setActiveTab(tabActive);
    console.log(tabActive);
  };

  const isEducationDataEmpty = (eduData: EducationDataType) => {
    const {
      degree,
      schoolName,
      startDateEdu,
      endDateEdu,
      cityEdu,
      countryEdu,
    } = eduData;
    return [
      degree,
      schoolName,
      startDateEdu,
      endDateEdu,
      cityEdu,
      countryEdu,
    ].every((val) => val === null || val === "");
  };
  const isExperienceDataEmpty = (expData: ExperienceDataType) => {
    const {
      companyName,
      positionTitle,
      startDateExp,
      endDateExp,
      cityExp,
      countryExp,
      description,
    } = expData;
    return [
      companyName,
      positionTitle,
      startDateExp,
      endDateExp,
      cityExp,
      countryExp,
      description,
    ].every((val) => val === null || val === "");
  };

  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({ contentRef: componentRef });

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex">
          <Sidebar />
          <div className="flex flex-col w-auto p-5 ">
            <TitleCard title={resumeTitle} onDownload={handlePrint} />
            <ButtonGroup activeTab={activeTab} onTabChange={handleTabClick} />
            <SideBarEditor
              activeTab={activeTab}
              personalInfoData={personalInfoData}
              educationInfoData={educationsData}
              experienceInfoData={experiencesData}
              onChange={handleChange}
            />
          </div>
          <main
            ref={componentRef}
            className="flex-1 p-2 border-amber-300  mt-5 bg-white backdrop-blur-2xl"
            id="print-section"
          >
            {/* Personal Info  */}
            <PersonalInfoSection data={personalInfoData} />

            {/* EDUCATION */}
            {!isEducationDataEmpty(educationsData) && (
              <EducationSection data={educationsData} />
            )}

            {/* EXPERIENCE  */}
            {!isExperienceDataEmpty(experiencesData) && (
              <ExperienceSection data={experiencesData} />
            )}
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
