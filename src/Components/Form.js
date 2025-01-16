import React from "react";
import { useForm } from "react-hook-form";

import "./Form.css";

function Form() {
  // make these variables:
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors,isSubmitting },
  } = useForm();

//    make a delay

const delay=(data)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },data*1000)
    })
}

  // make a function to submit the data with delay
  const onSubmit = async (data) => {
    await delay(1)
    console.log("Form data is :", data);
    reset()
    alert("Form Submitted Successfully")
};
  

  return (
    <>
      <h1>Form Handle - React Hook</h1>
      {isSubmitting && <div className="load">Loading...</div>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="main">
          {/* Name  */}
          <div className="name">
            <label htmlFor="">Name</label>
            <br></br>
            <input
              type="text"
              name="name"
              {...register("name", {
                required: true,
                minLength:{
                    value:3,
                    message:"Name must have at least 3 characters"
                },
                maxLength:{
                    value:15,
                    message:"Name must be less than 15 characters"
                },

              })}
            placeholder="Enter Your Name.."
            />
            {errors.name && <p style={{ color: "red",fontSize:"20px",margin:"2px 0px 0px 400px" }}>{errors.name.message}</p>}
          </div>

          {/* Last Name  */}

          <div className="last">
            <label htmlFor="">Last Name</label>
            <br />
            <input
              type="text"
              {...register("last")}
              placeholder="Enter Your Last Name.."
            />
          </div>

          {/* Email */}
          <div className="email">
            <label htmlFor="">Email</label>
            <br />
            <input
              type="email"
              {...register("email", {
                required: true,
                minLength:{
                    value:12,
                    message:"Email minimum length should be 12"
                },
              })}
              placeholder="Enter Your Email.."
            />
            {errors.email && <p style={{color:"red",fontSize:"20px",margin:"3px 0px 0px 400px"}}>{errors.email.message}</p>}
          </div>

          {/* Contact Number */}
          <div className="contact">
            <label htmlFor="">Contact</label>
            <br />
            <input
              type="number"
              {...register("contact", {
                required: true,
                minLength:{
                    value:10,
                    message:"Contact number must be 10"
                },
                maxLength: {
                    value:10,
                    message:"Contact number must be 10"
                },
              })}
              placeholder="Enter Your Number.."
            />
            {errors.contact && <p style={{color:"red",fontSize:"20px",margin:"3px 0px 0px 400px"}}>{errors.contact.message}</p>}
          </div>

          {/* Qualification */}

          <div className="qualification">
            <label htmlFor="">Qualification</label>
            <br />
            <select
              {...register("qualification", {
                required: true,
              })}
            >
              <option value="UG">Choose Qualification</option>
              <option value="UG">UG</option>
              <option value="PG">PG</option>
              <option value="12th">12th</option>
              <option value="Diploma">Diploma</option>
            </select>
          </div>

          {/* Qualification Percentage */}

          <div className="percentage">
            <label htmlFor="">Percentage</label>
            <br />
            <input
              type="number"
              {...register("percentage", {
                required: true,
                min: {
                    value:40,
                    message:"Percentage should be more than 40"
                },
                max:{
                    value:100,
                    message:"Percentage can not be more than 100"
                },
              })}
              placeholder="Enter Your Percentage.."
            />
            {errors.percentage && <p style={{color:"red",fontSize:"20px",margin:"3px 0px 0px 400px"}}>{errors.percentage.message}</p>}
          </div>

          {/* Submit button */}

          <button type="submit" disabled={isSubmitting}>Submit</button>
          
        </div>
      </form>
    </>
  );
}

export default Form;
