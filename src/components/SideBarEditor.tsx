import PersonalInfoForm from "./forms/PersonalInfoForm";
import EducationInfoForm from "./forms/EducationInfoForm";
import ExperienceInfoForm from "./forms/ExperienceInfoForm";
import {EducationDataType, ExperienceDataType, PersonalInfoDataType } from "../types/type";


type sideEditorProps = {
  personalInfoData: PersonalInfoDataType;
  educationInfoData: EducationDataType;
  experienceInfoData: ExperienceDataType;
  activeTab: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const SideBarEditor = ({
  personalInfoData,
  educationInfoData,
  experienceInfoData,
  activeTab,
  onChange,
}: sideEditorProps) => {
  // const [activeTab, setactiveTab] = useState('experience')
  console.log();
  return (
    <div className="w-md  rounded-2xl p-4 bg-white flex flex-col gap-5">
      {activeTab === "personal" && (
        <PersonalInfoForm data={personalInfoData} onChange={onChange} />
      )}
      {activeTab === "education" && (
        <EducationInfoForm data={educationInfoData} onChange={onChange} />
      )}
      {activeTab === "experience" && (
        <ExperienceInfoForm data={experienceInfoData} onChange={onChange} />
      )}
    </div>
  );
};

export default SideBarEditor;
