import React, {useEffect, useState} from "react";
import {CustomerList, CustomerListById} from "../apiServices/api";
import toast, {Toaster} from "react-hot-toast";
import {Link} from "react-router-dom";

const CustomerPage = () => {
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    (async () => {
      let result = await CustomerList();

      if (result) {
        setCustomer(result["result"]);
      } else {
        toast.error("Error Fetching Data");
      }
    })();
  }, []);





  return (
    <>
      <Toaster />

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {customer.map((element, index) => {
              return (
                <div key={index} className="col-md-4">
                  <div className="card mb-4 box-shadow">
                    <div className="card-body">
                      <h5 className="card-title">Name: {element.name}</h5>
                      <p className="card-text">Phone: {element.phone}</p>

                      <p className="card-text">
                        {" "}
                        Quntity: {element.merchandise}
                      </p>
                      <p className="card-text"> Quntity: {element.bookDebts}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <Link to={`/view?id=${element._id}`}>
                            {" "}
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              {" "}
                              View{" "}
                            </button>
                          </Link>
                        </div>
                        <small className="text-muted">
                          {Math.round((( new Date(Date.now()).getTime())-new Date(element.updatedAt).getTime())/ (1000 * 3600 * 24 ))} days
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerPage;
