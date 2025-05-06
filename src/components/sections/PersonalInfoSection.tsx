import { PersonalInfoDataType } from '../../types/type'
import { LuMail, LuMapPin, LuPhone } from 'react-icons/lu'

type PersonalInfoSectionProps = {
  data: PersonalInfoDataType;
};
const PersonalInfoSection = ({data}: PersonalInfoSectionProps) => {
  return (
    <div>
      <div className="mt-3 justify-center text-center">
              <p className="text-[30px] font-bold">
                {data.fullName}
              </p>
              <p className="text-[20px] font-normal italic">
                {data.jobTitle}
              </p>
              <div className="flex flex-row text-center justify-center gap-4 text-sm mt-3">
                {data.email && (
                  <p className="flex gap-1 items-center">
                    {" "}
                    <LuMail />
                    {data.email}
                  </p>
                )}
                {data.phoneNumber && (
                  <p className="flex gap-1 items-center">
                    {" "}
                    <LuPhone />
                    {data.phoneNumber}
                  </p>
                )}
                {data.address && (
                  <p className="flex gap-1 items-center">
                    {" "}
                    <LuMapPin />
                    {data.address}
                  </p>
                )}
              </div>
            </div>
    </div>
  )
}

export default PersonalInfoSection