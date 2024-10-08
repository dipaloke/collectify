import { UploadButton } from "@/lib/uploadthing";

interface FileUploaderProps {
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
}

export const FileUploader = ({ setImageUrl }: FileUploaderProps) => {
  return (
    <div className="flex flex-col items-start flex-start">
      <UploadButton
        className="ut-button:bg-indigo-500"
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          if (res && res.length > 0) {
            setImageUrl(res[0].url);
          }
        }}
        onUploadError={(error: Error) => {
          console.log(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
};
