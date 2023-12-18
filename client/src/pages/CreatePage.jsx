import React from "react";
import FrontPage from "./FrontPage";
import Form from "../components/Form";

const CreatePage = () => {
  return (
    <div>
      <FrontPage page={<Form />} />
    </div>
  );
};

export default CreatePage;
