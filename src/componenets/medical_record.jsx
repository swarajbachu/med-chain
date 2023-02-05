import React from 'react'
import { useForm } from "react-hook-form";

const MedicalRecords = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>


                <input type="text" 
                placeholder="Enter name of the file" 
                className="input input-bordered input-primary m-5 b-full max-w-xs flex" 
                {...register("filename")}/>

                <input type="text" 
                placeholder="Issued by doctor" 
                className="input input-bordered input-primary m-5 w-full max-w-xs flex"
                {...register("doctor_name")}/>

                <input type="text" 
                placeholder="Issued by hospital" {...register("hopital_name")}
                className="input input-bordered input-primary m-5 w-full max-w-xs flex" 
                />

                <input type="text" 
                placeholder="Tags comma seperated" 
                className="input input-bordered input-primary m-5 w-full max-w-xs flex"
                {...register("tags")}/>
                
                <input type="file" 
                placeholder="Type here" 
                className="input input-bordered input-primary m-5 w-full max-w-xs flex" 
                {...register("file")}/>


            </form>
        </div>
    )
}

export default MedicalRecords

