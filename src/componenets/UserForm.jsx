import React from 'react'
import { useForm } from "react-hook-form";

const UserForm = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }
    
    // form: name, age, blood_group, allergies, medication, about
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>


                <input type="text" 
                placeholder="Patient Name" 
                className="input input-bordered input-primary m-5 b-full max-w-xs flex" 
                {...register("name")}/>

                <input type="number" 
                placeholder="" 
                className="input input-bordered input-primary m-5 w-full max-w-xs flex"
                {...register("age")}/>

                <input type="text" 
                placeholder="Blood Group" 
                className="input input-bordered input-primary m-5 w-full max-w-xs flex" 
                {...register("blood_group")}
                />

                <input type="text" 
                placeholder="Allergies" 
                className="input input-bordered input-primary m-5 w-full max-w-xs flex"
                {...register("allergies")}/>
                
                <input type="text" 
                placeholder="Medication" 
                className="input input-bordered input-primary m-5 w-full max-w-xs flex" 
                {...register("medicaiton")}/>

                <input type="text" 
                placeholder="About" 
                className="input input-bordered input-primary m-5 w-full max-w-xs flex" 
                {...register("about")}/>


            </form>
        </div>
    )
}

export default UserForm