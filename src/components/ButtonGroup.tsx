import Button from "./ui/Button";

type ButtonGroupProps = {
  activeTab: string;
  onTabChange: (tabName: string) => void;
};
const ButtonGroup = ({ activeTab, onTabChange }: ButtonGroupProps) => {
  return (
    <div className="flex flex-row bg-white rounded-xl  p-5 mb-3 gap-2">
      <Button
        title="Personal"
        isActive={activeTab === "personal"}
        onClick={() => onTabChange("personal")}
      />
      <Button
        title="Education"
        isActive={activeTab === "education"}
        onClick={() => onTabChange("education")}
      />
      <Button
        title="Experience"
        isActive={activeTab === "experience"}
        onClick={() => onTabChange("experience")}
      />
    </div>
  );
};
export default ButtonGroup;
