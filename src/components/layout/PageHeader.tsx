import { GoPlus } from "react-icons/go";
import { Button } from "../ui/button";

interface PageHeaderProps {
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export default function PageHeader({
  title,
  description,
  buttonText,
  onButtonClick,
}: PageHeaderProps) {
  return (
    <header className="flex items-center justify-between">
      <section>
        <h1 className="font-bold text-xl font-serif">{title}</h1>
        <p className="text-lg font-serif text-gray-600">{description}</p>
      </section>

      <section>
        {buttonText && onButtonClick && (
          <Button
            onClick={onButtonClick}
            className="text-lg font-serif items-center flex h-10 w-full py-5 px-6 font-bold"
          >
            <GoPlus />
            {buttonText}
          </Button>
        )}
      </section>
    </header>
  );
}
