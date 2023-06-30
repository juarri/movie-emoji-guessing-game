import { useState, type MouseEventHandler, useEffect } from "react";
import { Button } from "./ui/button";

type HintProps = {
  hint: string;
  answer: string | string[];
};

const Hint = ({ hint, answer }: HintProps) => {
  const [isHintRevealed, setIsHintRevealed] = useState(false);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    setIsHintRevealed(true);
  };

  useEffect(() => {
    setIsHintRevealed(false);
  }, [answer]);

  return (
    <div className="flex items-baseline justify-between">
      <h3 className="text-sm font-bold">{hint}</h3>

      {isHintRevealed === false && (
        <Button onClick={handleClick} className="px-4 py-2 text-xs">
          Reveal
        </Button>
      )}

      {isHintRevealed === true && typeof answer === typeof "string" && (
        <span className="w-fit rounded-full bg-card-foreground/10 px-6 py-2.5 text-sm">
          {answer}
        </span>
      )}

      {isHintRevealed === true && Array.isArray(answer) && (
        <div className="flex flex-col gap-6">
          {answer.map((answer, index) => (
            <span
              key={index}
              className="w-fit self-end rounded-full bg-card-foreground/10 px-6 py-2.5 text-sm"
            >
              {answer}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Hint;
