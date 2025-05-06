import InputGroup from "../InputGroup";
import { EducationDataType } from "../../types/type";

type educationInfoFormProps = {
  data: EducationDataType;
  onChange: () => void;
};

const EducationInfoForm = ({ data, onChange }: educationInfoFormProps) => {
  console.log(data);
  return (
    <div>
      <div className="text-start font-bold text-xl p-4">
        <h1>Edit Education</h1>
        <form action="">
          <InputGroup
            id="degree"
            label="Degree"
            name="degree"
            type="text"
            value={data.degree}
            onChange={onChange}
          />
          <InputGroup
            id="schoolName"
            label="School name"
            name="schoolName"
            type="text"
            value={data.schoolName}
            onChange={onChange}
          />
          <InputGroup
            id="cityEdu"
            label="City"
            name="cityEdu"
            type="text"
            value={data.cityEdu}
            onChange={onChange}
          />
          <InputGroup
            id="countryEdu"
            label="Country"
            name="countryEdu"
            type="text"
            value={data.countryEdu}
            onChange={onChange}
          />
          <InputGroup
            id="startDateEdu"
            label="Start date"
            name="startDateEdu"
            type="date"
            value={data.startDateEdu}
            onChange={onChange}
          />
          <InputGroup
            id="endDateEdu"
            label="End date"
            name="endDateEdu"
            type="date"
            value={data.endDateEdu}
            onChange={onChange}
          />
        </form>
      </div>
    </div>
  );
};

export default EducationInfoForm;
