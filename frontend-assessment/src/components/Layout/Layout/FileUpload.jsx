import React from "react";
import uploadIcon from "../../../assets/images/upload.svg";
import exportBtn from "../../../assets/images/export-btn.svg";
const FileUpload = () => {
  return (
    <div className="mt-2 flex justify-center rounded-[4px] border border-dashed border-gray-900/25 p-6 ">
      <div className="text-center">
        <img src={uploadIcon} className="mx-auto h-12 w-12" alt="" srcSet="" />

        <p className="text-xs leading-5 text-[#1A141F] mt-3">
          Drag here or click the button below to upload
        </p>

        <div className="mt-5 flex justify-center text-sm leading-6">
          <label
            htmlFor="file-upload"
            className="relative cursor-pointer flex justify-center py-2 px-4 rounded-[4px] bg-primary font-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-primary50 focus-within:ring-offset-2 hover:bg-primary50"
          >
            <img src={exportBtn} alt="" srcSet="" />
            <span className="ml-2">Choose file</span>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              className="sr-only"
            />
          </label>
        </div>

        <p className="text-sm leading-5 text-[#4B3A5A] mt-5">
          Maximum upload size: 10MB (.jpg)
        </p>
      </div>
    </div>
  );
};

export default FileUpload;
