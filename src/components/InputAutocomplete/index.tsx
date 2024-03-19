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
  // Atualizado para usar tipo number para o identificador do timeout
  const [blurTimeoutId, setBlurTimeoutId] = useState<number | null>(null);

  useEffect(() => {
    if (value.length === 0 || !focused) {
      setOptions([]);
    } else {
      const optionsFiltered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setOptions(optionsFiltered);
    }
  }, [value, focused, suggestions]);

  function handleChangeOption(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setValue(value);
    onChange(value);
    setOptions(suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    ));
  }

  function handleOptionClick(suggestion: string) {
    // Cancelar o timeout de onBlur quando uma opção é clicada
    if (blurTimeoutId !== null) {
      clearTimeout(blurTimeoutId);
      setBlurTimeoutId(null);
    }
    setValue(suggestion);
    onChange(suggestion);
    setOptions([]);
    setFocused(false); // Opcionalmente, manter focado ou não após seleção
  }

  function renderOptions() {
    return options.length > 0 ? (
      <Options>
        {options.map((option) => (
          <Option key={option} onClick={() => handleOptionClick(option)}>
            {option}
          </Option>
        ))}
      </Options>
    ) : null;
  }

  return (
    <>
<Input
  type="text"
  placeholder={placeholder}
  value={value || ""} // Garante que o valor nunca seja undefined
  onChange={handleChangeOption}
  error={!!error}
  onFocus={() => setFocused(true)}
  onBlur={() => {
    // Iniciar um timeout ao perder o foco
    const id = setTimeout(() => {
      setFocused(false);
    }, 200); // 200ms para permitir clique na opção
    setBlurTimeoutId(id);
  }}
/>

      {renderOptions()}
    </>
  );
}
