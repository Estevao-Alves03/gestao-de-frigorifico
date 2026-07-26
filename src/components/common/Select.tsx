interface SelectOption {
    id: number | string;
    nome: string;
}

interface SelectProps {
    label?: string;
    value: string | number;
    options: SelectOption[];
    placeholder?: string;
    onChange: (value: string) => void;
}


export default function Select({label,value,options,onChange,placeholder = "Selecione..."}: SelectProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium">
            {label}
        </label>
      )}

      <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded-md px-3 py-2"
      >
        <option value="">
            {placeholder}
        </option>

        {options.map((option) => (
            <option
            key={option.id}
            value={option.id}
            >
                {option.nome}
            </option>
        ))}
      </select>
    </div>
  )
}