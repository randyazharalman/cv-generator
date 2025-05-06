import InputGroup from "../InputGroup";
import { PersonalInfoDataType } from "../../types/type";

type personalInfoFormProps = {
  data: PersonalInfoDataType;
  onChange: () => void;
};
const PersonalInfoForm = ({ data, onChange }: personalInfoFormProps) => {
  return (
    <div className="text-start font-bold text-xl p-4">
      <h1>Edit Personal Info</h1>
      <form action="">
        <InputGroup
          id="fullName"
          label="Full name"
          name="fullName"
          type="text"
          value={data.fullName}
          onChange={onChange}
        />
        <InputGroup
          id="jobTitle"
          label="Job Title"
          name="jobTitle"
          type="text"
          value={data.jobTitle}
          onChange={onChange}
        />
        <InputGroup
          id="email"
          label="Email"
          name="email"
          type="email"
          value={data.email}
          onChange={onChange}
        />
        <InputGroup
          id="phoneNumber"
          label="Phone Number"
          name="phoneNumber"
          type="text"
          value={data.phoneNumber}
          onChange={onChange}
        />
        <InputGroup
          id="address"
          label="Address"
          name="address"
          type="text"
          value={data.address}
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default PersonalInfoForm;
