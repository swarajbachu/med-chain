import React from 'react'
import { useForm } from "react-hook-form";

const MedicalRecords = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }


    return (
        <div>
            <form>
                <input type="text" 
                placeholder="Tags comma seperated" 
                className="input input-bordered input-primary m-5 w-full max-w-xs flex"
                {...register("tags")}/>
                
                <input type="file" 
                placeholder="Type here" 
                className="input input-bordered input-primary w-full max-w-xs" />
            </form>
        </div>
    )
}

export default MedicalRecords

