import React, {useRef, useState} from "react";
import {useEffect} from "react";
import {CustomerListById, DeleteCustomer, UpdateCustomer} from "../apiServices/api";
import toast, {Toaster} from "react-hot-toast";
import {Link, useNavigate} from "react-router-dom";

const View = () => {
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

  const params = new URLSearchParams(document.location.search);

  const id = params.get("id");

  useEffect(() => {
    (async () => {
      let res = await CustomerListById(id);
      if (res) {
        setForm(res["data"]);
      } else {
        toast.error("fail to show");
      }
    })();
  }, []);
  const handleChange = (key, value) => {
    console.log(value);
    setForm((formValues) => ({
      ...formValues,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log(form);
    const res = await UpdateCustomer(id, form);
    if (res) {
      toast.success("Updated successfully.");
      navigate("/");
    } else {
      toast.error("fail to update.");
    }
  };
const Delete = async (id) => {
 const res=await DeleteCustomer(id)
 if (res) {
  toast.success("Deleted successfully.");
  navigate("/");
} else {
  toast.error("fail to Delete.");
}
}


  return (
    <>
      <Toaster />
      <div className="container">
        <h1 className="p-2 " style={{textAlign: "center"}}>
          Customer Details
        </h1>
        <p style={{textAlign:'right'}} >Date: {new Date(form.updatedAt).toLocaleString()}</p>
        <div className="row">
          <div className="col-md-6 mt-2">
            <label htmlFor="name">Name</label>
            <input
              value={form.name}
              type="text"
              className="form-control"
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>

          <div className="col-md-6 mt-2">
            <label htmlFor="Phone">Phone</label>
            <input
              type="text"
              value={form.phone}
              className="form-control"
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </div>

          <div className="col-md-6 mt-2">
            <label htmlFor="father's Name">Father's Name</label>
            <input
              value={form.fatherName}
              type="text"
              className="form-control"
              onChange={(e) => handleChange("fatherName", e.target.value)}
            />
          </div>

          <div className="col-md-6 mt-2">
            <label htmlFor="gffdf">GrandFather's Name</label>
            <input
              type="text"
              value={form.grandFatherName}
              className="form-control"
              onChange={(e) => handleChange("grandFatherName", e.target.value)}
            />
          </div>

          <div className="col-md-6 mt-2">
            <label htmlFor="merchandise">Merchandise</label>
            <input
              type="text"
              value={form.merchandise}
              className="form-control"
              onChange={(e) => handleChange("merchandise", e.target.value)}
            />
          </div>

          <div className="col-md-6 mt-2">
            <label htmlFor="Quantity">Quantity</label>
            <input
              type="text"
              value={form.qty}
              className="form-control"
              onChange={(e) => handleChange("qty", e.target.value)}
            />
          </div>

          <div className="col-md-6 mt-2">
            <label htmlFor="bookdebts">Bookdebts</label>
            <input
              type="text"
              value={form.bookDebts}
              className="form-control"
              onChange={(e) => handleChange("bookDebts", e.target.value)}
            />
          </div>

          <div className="col-md-6 mt-2">
            <div className="btn-groupd">
              <button
                onClick={() => handleSubmit()}
                type="button"
                className="btn btn-primary m-2 btn-lg"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => Delete(form._id)}
                className="btn btn-danger btn-lg ml-1"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
