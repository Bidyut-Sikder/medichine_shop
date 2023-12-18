import React, {useState} from "react";
import toast, {Toaster} from "react-hot-toast";
import {UserOTPVerifyCode} from "../apiServices/api";
import {useEffect} from "react";
import { useNavigate } from "react-router-dom";

const VerifyPage = () => {
    const navigate=useNavigate()
  const [otp, setOtp] = useState(0);
  const [email, setEmail] = useState({email: ""});
  const onChangehandler = async (key, value) => {
    setOtp((state) => ({
      ...state,
      [key]: value,
    }));
  };
  const onSubmit = async () => {
    if (otp > "0") {
      const res = await UserOTPVerifyCode(email, otp.otp);
      if (res) {
        localStorage.setItem("token", res.token);
      location.href='/'
      } else {
        toast.error("somting wrong");
      }
    } else {
      toast.error("give valid otp");
    }
  };

  useEffect(() => {
    const email = localStorage.getItem("email");
  
    setEmail(email);
  }, []);
  return (
    <div>
      <Toaster />
      <div className="container">
        <div className="form form-group">
          <div className="form form-group">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                value={email}
                onChange={(e) => onChangehandler("email", e.target.value)}
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">OTP</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                onChange={(e) => onChangehandler("otp", e.target.value)}
                placeholder="Enter otp"
              />
            </div>

            <button className="btn mt-1 btn-primary" onClick={onSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>





    </div>
  );
};

export default VerifyPage;
