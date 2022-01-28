import React from 'react';
import { useForm } from 'react-hook-form';


const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {


        fetch('http://localhost:5000/makeAdmin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    alert('New Admin Join Successfully')

                    reset();
                }
            })


    };
    return (
        <div style={{ backgroundColor: "#C0C0C0" }} className="overflow-hidden ">
            <h1 style={{
                color: "white", backgroundColor: "gray"
            }} className="mt-5 ">MAKE ADMIN</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="input-field w-50"
                    name="email"
                    placeholder="Email"
                    type="email"
                    {...register("email", { required: true })}
                />
                <br />
                <input
                    className="submit-btn btn btn-danger mt-3 mb-3"
                    type="submit"
                    value="Make As Admin"
                />
            </form>
        </div >
    );
};

export default MakeAdmin;