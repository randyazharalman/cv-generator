// PrintableContent.tsx
import React from "react";

import { EducationDataType, ExperienceDataType, PersonalInfoDataType } from "../types/type";
import PersonalInfoSection from "./sections/PersonalInfoSection";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";

type Props = {
  personalInfoData: PersonalInfoDataType;
  educationsData: EducationDataType;
  experiencesData: ExperienceDataType;
};

const PrintableContent = React.forwardRef<HTMLDivElement, Props>(
  ({ personalInfoData, educationsData, experiencesData }, ref) => {
    return (
      <div ref={ref} className="p-5 print:bg-white">
        <PersonalInfoSection data={personalInfoData} />
        <EducationSection data={educationsData} />
        <ExperienceSection data={experiencesData} />
      </div>
    );
  }
);

export default PrintableContent;
