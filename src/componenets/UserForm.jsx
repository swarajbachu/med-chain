import React from 'react'
import { useForm } from "react-hook-form";
import { useEffect } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const UserForm = () => {

    const [show,setShow] = useEffect(false);

    const schema = yup.object().shape({
        name: yup.string().required("name is required"),
        age: yup.number().required("age is required").min(0).max(100),
        blood_group: yup.string().required("blood group is required"),
        allergies: yup.string(),
        medication: yup.string(),
        about: yup.string(),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data)
        
    }
    
    // form: name, age, blood_group, allergies, medication, about
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className= "p-16 border-2 rounded-xl border-gray-400 flex flex-col">


                <input type="text" 
                placeholder="Patient Name" 
                className="input input-bordered input-primary m-5 b-full max-w-xs flex" 
                {...register("name")}/>

                <input type="number" 
                placeholder="Age" 
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

                <button type="submit" className="btn btn-primary ml-4 px-16">Submit</button>


            </form>
        </div>
    )
}

export default UserForm