import React, {useRef, useState} from "react";
import {useEffect} from "react";
import {
    CreateCustomer,
  CustomerListById,
  DeleteCustomer,
  UpdateCustomer,
} from "../apiServices/api";
import toast, {Toaster} from "react-hot-toast";
import {Link, useNavigate} from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    fatherName: "",
    grandFatherName: "",
    phone: "",
    qty: "",
    merchandise: "",
    bookDebts: "",
  });


  const handleChange = (key, value) => {
    
    setForm((formValues) => ({
      ...formValues,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log(form);
    const res = await CreateCustomer( form);
    if (res) {
      toast.success("Created successfully.");
      navigate("/");
    } else {
      toast.error("fail to Create.");
    }
  };

  return (
    <>
      <Toaster />
      <div className="container">
        <h1 className="p-2 " style={{textAlign: "center"}}>
          Customer Details
        </h1>
        <div className="row">
          <div className="col-md-6 mt-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>

          <div className="col-md-6 mt-2">
            <label htmlFor="Phone">Phone</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </div>

          <div className="col-md-6 mt-2">
            <label htmlFor="father's Name">Father's Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => handleChange("fatherName", e.target.value)}
            />
          </div>

          <div className="col-md-6 mt-2">
            <label htmlFor="gffdf">GrandFather's Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => handleChange("grandFatherName", e.target.value)}
            />
          </div>

          <div className="col-md-6 mt-2">
            <label htmlFor="merchandise">Merchandise</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => handleChange("merchandise", e.target.value)}
            />
          </div>

          <div className="col-md-6 mt-2">
            <label htmlFor="Quantity">Quantity</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => handleChange("qty", e.target.value)}
            />
          </div>

          <div className="col-md-6 mt-2">
            <label htmlFor="bookdebts">Bookdebts</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => handleChange("bookDebts", e.target.value)}
            />
          </div>

          <div className="col-md-6 mt-2">
            <div className="btn-groupd">
              <button
                onClick={() => handleSubmit()}
                type="button"
                className="btn btn-outline-secondary m-2 btn-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
