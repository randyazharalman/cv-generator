import InputGroup from "../InputGroup";
import { ExperienceDataType } from "../../types/type";

type experienceInfoFormProps = {
  data: ExperienceDataType;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const ExperienceInfoForm = ({ data, onChange }: experienceInfoFormProps) => {
  console.log(data);
  return (
    <div className="text-start font-bold text-xl p-4">
      <h1>Edit Experience</h1>
      <form action="">
        <InputGroup
          id="companyName"
          label="Company name"
          name="companyName"
          type="text"
          value={data.companyName}
          onChange={onChange}
        />
        <InputGroup
          id="positionTitle"
          label="Position as"
          name="positionTitle"
          type="text"
          value={data.positionTitle}
          onChange={onChange}
        />
        <InputGroup
          id="cityExp"
          label="City"
          name="cityExp"
          type="text"
          value={data.cityExp}
          onChange={onChange}
        />
        <InputGroup
          id="countryExp"
          label="Country "
          name="countryExp"
          type="text"
          value={data.countryExp}
          onChange={onChange}
        />
        <InputGroup
          id="description"
          label="Description"
          name="description"
          type="text"
          value={data.description}
          onChange={onChange}
        />
        <InputGroup
          id="startDateExp"
          label="Start date"
          name="startDateExp"
          type="date"
          value={data.startDateExp}
          onChange={onChange}
        />
        <InputGroup
          id="endDateExp"
          label="End Date"
          name="endDateExp"
          type="date"
          value={data.endDateExp}
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default ExperienceInfoForm;
