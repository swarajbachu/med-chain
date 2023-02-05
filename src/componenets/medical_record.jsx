import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import state from "../state";


const MedicalRecords = () => {


    const schema = yup.object().shape({
        filename: yup.string().required(),
        doctor_name: yup.string(""),
        hopital_name: yup.string().required(),
        tags: yup.string(),
        file: yup.string().required(),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const [fileImg, setFileImg] = useState(null);
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


                <input type="text"
                    placeholder="Disease Diagonesed"
                    className="input input-bordered input-primary m-5 b-full max-w-xs flex"
                    {...register("filename")} />
                <p className='pl-6'>{errors.filename?.message}</p>
                <input type="text"
                    placeholder="Doctor Consulted"
                    className="input input-bordered input-primary m-5 w-full max-w-xs flex"
                    {...register("doctor_name")} />
                <p className='pl-6'>{errors.doctor_name?.message}</p>
                <input type="text"
                    placeholder="Hospital" {...register("hopital_name")}
                    className="input input-bordered input-primary m-5 w-full max-w-xs flex"
                />
                <p className='pl-6'>{errors.hopital_name?.message}</p>
                <input type="Decription"
                    placeholder="Decription"
                    className="input input-bordered input-primary m-5 w-full max-w-xs flex"
                    {...register("tags")} />
                <input type="file" className="file-input file-input-bordered w-full max-w-xs ml-4"
                    {...register("file")}
                />
                <button type='submit' className="btn btn-active btn-primary ml-10
 px-16">Submit</button>

            </form>
        </div>
    )
}

export default MedicalRecords


