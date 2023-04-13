import { useEffect, useState } from "react";

import Input from "../Input";

import { Options, Option } from "./styles";

type InputAutocompleteProps = {
  placeholder?: string;
  suggestions: string[];
  onChange: (name: string) => void;
  error?: string;
};

export default function InputAutocomplete({
  placeholder = "",
  suggestions,
  onChange,
  error,
}: InputAutocompleteProps) {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState<string[]>([]);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (value.length === 0 || !focused) {
        setOptions([]);
        return;
      }

      const optionsFiltered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setOptions(optionsFiltered);
    }, 100);
  }, [focused]);

  function handleChangeOption(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setValue(value);
    onChange(value);

    if (value.length === 0 || !focused) {
      setOptions([]);
      return;
    }

    const optionsFiltered = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );
    setOptions(optionsFiltered);
  }

  function handleOptionClick(suggestion: string) {
    setValue(suggestion);
    onChange(suggestion);
    setOptions([]);
  }

  function renderOptions() {
    if (options.length === 0) {
      return null;
    }

    return (
      <Options>
        {options.map((option) => (
          <Option key={option} onClick={() => handleOptionClick(option)}>
            {option}
          </Option>
        ))}
      </Options>
    );
  }

  return (
    <>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChangeOption}
        error={!!error}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {renderOptions()}
    </>
  );
}
