import { Option, Options } from "./styles";

type InputRadioProps = {
  label: string;
  options: {
    label: string;
    value: string;
  }[];
  value: string;
  onChange: (value: string) => void;
};

export default function InputRadio({
  label,
  options,
  onChange,
  value,
}: InputRadioProps) {
  return (
    <div>
      <h4>{label}</h4>

      <Options>
        {options.map((option) => (
          <Option key={option.value}>
            <input
              type="radio"
              name={option.value}
              id={option.value}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
            />
            <label htmlFor={option.value} id={option.value}>
              {option.label}
            </label>
          </Option>
        ))}
      </Options>
    </div>
  );
}
