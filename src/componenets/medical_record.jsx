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
                placeholder="Disease Diagonesed" 
                className="input input-bordered input-primary m-5 b-full max-w-xs flex" 
                {...register("filename")}/>

                <input type="text" 
                placeholder="Doctor Consulted" 
                className="input input-bordered input-primary m-5 w-full max-w-xs flex"
                {...register("doctor_name")}/>

                <input type="text" 
                placeholder="Hospital" {...register("hopital_name")}
                className="input input-bordered input-primary m-5 w-full max-w-xs flex" 
                />

                <input type="Decription" 
                placeholder="Decription" 
                className="input input-bordered input-primary m-5 w-full max-w-xs flex"
                {...register("tags")}/>
                
            
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

