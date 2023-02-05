import React, { useState } from "react";
import { useForm } from "react-hook-form";

const MedicalRecords = () => {
  const [fileImg, setFileImg] = useState(null);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const formData = new FormData();
      formData.append("file", fileImg);
      const resfile = await fetch(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        {
          method: "post",
          data: formData,
          headers: {
            pinata_api_key: `0108888205bf09943941`,
            pinata_secret_api_key: `7a37ef66dcbf0b473fe215d24e2c8c4e4be7dac54fd1f4de13f4106bf12453be`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const hash = `ipfs://${resfile.data.IpfsHash}`;
      console.log(hash);
    } catch (error) {
      console.log("Error sending File to IPFS: ");
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Enter name of the file"
          className="input input-bordered input-primary m-5 b-full max-w-xs flex"
          {...register("filename")}
        />

        <input
          type="text"
          placeholder="Issued by doctor"
          className="input input-bordered input-primary m-5 w-full max-w-xs flex"
          {...register("doctor_name")}
        />

        <input
          type="text"
          placeholder="Issued by hospital"
          {...register("hopital_name")}
          className="input input-bordered input-primary m-5 w-full max-w-xs flex"
        />

        <input
          type="text"
          placeholder="Tags comma seperated"
          className="input input-bordered input-primary m-5 w-full max-w-xs flex"
          {...register("tags")}
        />

        <input
          type="file"
          placeholder="Type here"
          className="input input-bordered input-primary m-5 w-full max-w-xs flex"
          {...register("file")}
          onChange={(e) => setFileImg(e.target.files[0])}
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default MedicalRecords;
