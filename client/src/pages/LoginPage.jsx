import React, {useEffect, useRef, useState} from "react";
import {UserOTPCode} from "../apiServices/api";
import toast, {Toaster} from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({email: ""});
  const onChangehandler = (key, value) => {
    setForm((formData) => ({
      ...formData,
      [key]: value,
    }));
  };
  const onSubmit = async () => {
    if (form.email.length === 0) {
      toast.error("value needed");
    } else {
      localStorage.setItem('email',form.email)
      const res = await UserOTPCode(form);
       navigate('/verify')
    }
  };

  return (
    <div>
      <Toaster />
      <div className="container">
        <div className="form form-group">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              onChange={(e) => onChangehandler("email", e.target.value)}
              placeholder="Enter email"
            />
          </div>

          <button className="btn mt-1 btn-primary" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
