
type inputGroupProps = {
  id: string;
  label: string;
  value: string;
  name: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const InputGroup = ({
  id,
  label,
  value,
  name,
  type,
  onChange,
}: inputGroupProps) => {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-normal ">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        id={id}
        onChange={onChange}
        className="rounded-md h-11 bg-gray-100 text-[17px] font-normal w-full p-2 outline-0"
      />
    </div>
  );
};

export default InputGroup;
