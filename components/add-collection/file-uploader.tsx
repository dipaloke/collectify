import { UploadButton } from "@/lib/uploadthing";

interface FileUploaderProps {
  setImageUrl: React.Dispatch<React.SetStateAction<string>>;
  setLoading?: boolean;
}

export const FileUploader = ({
  setImageUrl,
  setLoading,
}: FileUploaderProps) => {
  return (
    <div className="flex flex-col items-start flex-start">
      <UploadButton
        className="ut-button:bg-indigo-500"
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          setImageUrl(res[0].url);
        }}
        onUploadError={(error: Error) => {
          console.log(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
};
