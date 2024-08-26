import React, { useState } from "react";

interface FormNavProps {
  steps: Steps[];
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

interface Steps {
  id: string;
  name: string;
}

export const FormNav: React.FC<FormNavProps> = ({
  steps,
  currentStep,
  setCurrentStep,
}: FormNavProps) => {
  return (
    <nav className = "" aria-label="Progress">
      <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
        {steps.map((step, index) => (
          <li key={step.name} className="md:flex-1">
            {currentStep > index ? (
              <button
                onClick={() => setCurrentStep(index)}
                className="group flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 transition-colors hover:border-sky-800 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
              >
                <span className="text-sm font-medium text-sky-600 transition-colors group-hover:text-sky-800">
                  {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </button>
            ) : currentStep === index ? (
              <button
                onClick={() => setCurrentStep(index)}
                className="flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                aria-current="step"
              >
                <span className="text-sm font-medium text-sky-600">
                  {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </button>
            ) : (
              <button
                onClick={() => setCurrentStep(index)}
                className="group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors hover:border-gray-300 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
              >
                <span className="text-sm font-medium text-gray-500 transition-colors group-hover:text-gray-700">
                  {step.id}
                </span>
                <span className="text-sm font-medium">{step.name}</span>
              </button>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
