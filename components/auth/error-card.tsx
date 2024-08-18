import { FaExclamationTriangle } from "react-icons/fa";
import { CardWrapper } from "./card-wrapper";


export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <div className="w-full flex justify-center items-center">
        <FaExclamationTriangle className="text-destructive h-8 w-8" />
      </div>
    </CardWrapper>
  );
};
