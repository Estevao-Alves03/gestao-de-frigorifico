interface SearchProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export default function Search({ placeholder = "Pesquisar...", value, onChange }: SearchProps) {
  return (
    <div className="flex items-center border border-gray-300 rounded-md px-3 gap-2 mt-4 w-140 shadow-lg">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="outline-none py-2 w-full placeholder:text-gray-500"
      />
    </div>
  );
}
