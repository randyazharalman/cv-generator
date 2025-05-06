import React from "react";
import { EducationDataType } from "../../types/type";
import { formatDate } from "../../utils/utils";

type EducationSectionProps = {
  data: EducationDataType;
};
const EducationSection = ({ data }: EducationSectionProps) => {
  return (
    <div className="mt-4 text-start p-4">
      <h1 className="border-b-2 font-bold uppercase">Education</h1>
      <div className="flex flex-row justify-between mt-1">
        <div>
          <p className="font-semibold text-sm">{data.degree}</p>
          <p className="text-sm">{data.schoolName}</p>
        </div>
        <div className="text-end">
          <p className="text-sm">
            {formatDate(data.startDateEdu)} - {formatDate(data.endDateEdu)}
          </p>
          <p className="text-sm">
            {data.cityEdu}, {data.countryEdu}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
