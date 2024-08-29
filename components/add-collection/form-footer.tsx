import { Button } from "../ui/button";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

interface FormFooterProps {
  currentStep: number;
  stepsLength: number;
  onNext: () => void;
  onPrev: () => void;
}

export const FormFooter = ({
  currentStep,
  stepsLength,
  onNext,
  onPrev,
}: FormFooterProps) => {
  return (
    <div className="pb-20">
      <div className="flex justify-between">
        <Button type="button" onClick={onPrev} disabled={currentStep === 0}>
          <ArrowBigLeft className="h-5 w-5" />
        </Button>
        <Button
          type="button"
          onClick={onNext}
          disabled={currentStep === stepsLength - 1}
        >
          <ArrowBigRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};
