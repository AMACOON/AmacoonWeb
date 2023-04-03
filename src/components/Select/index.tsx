import { ChangeEvent } from "react";

type SelectProps = {
  options: {
    value: string;
    label: string;
  }[];
  selectedOption: string;
  handleSelectedOption: (option: string) => void;
};

export default function Select({
  options,
  selectedOption,
  handleSelectedOption,
}: SelectProps) {
  return (
    <select
      onChange={(event: ChangeEvent<HTMLSelectElement>) => {
        handleSelectedOption(event.target.value);
      }}
      value={selectedOption || ""}
    >
      <option value="">Selecione uma opção</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
