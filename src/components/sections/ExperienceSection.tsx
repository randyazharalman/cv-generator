import React from "react";
import { ExperienceDataType } from "../../types/type";

type ExperienceSectionProps = {
  data: ExperienceDataType;
};

const ExperienceSection = ({ data }: ExperienceSectionProps) => {
  return (
    <div className="mt-0 text-start p-4">
      <h1 className="border-b-2 font-bold uppercase">Experience</h1>
      <div className="flex flex-row justify-between mt-1">
        <div className="">
          <p className="font-semibold tex-sm">{data.companyName}</p>
          <p className="text-sm">{data.positionTitle}</p>
        </div>
        <div className="text-end">
          <p className="text-sm">
            {data.startDateExp} - {data.endDateExp}
          </p>
          <p className="text-sm">
            {data.cityExp}, {data.countryExp}
          </p>
        </div>
      </div>
      <p className="break-all">{data.description}</p>
    </div>
  );
};

export default ExperienceSection;
