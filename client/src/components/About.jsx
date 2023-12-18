import React from "react";

const About = () => {
  return (
    <div className="container" style={{textAlign: "center"}}>
      <h1 className="mb-3  mt-3 font-weight-normal">About Me </h1>
      <div className="card" style={{width: "28rem", margin: "0 auto"}}>
        <img
          className="card-img-top"
          src="https://scontent.fjsr1-1.fna.fbcdn.net/v/t39.30808-6/244647650_2962742244042390_5113672636338999581_n.jpg?stp=dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeEUxlKI_Md877ua5CuJWnLBaY70g8fECdtpjvSDx8QJ23s8mnCXFQHu8Ow5EKqMzG67rPAGKDoHLuFsI0q3RlTh&_nc_ohc=214kJdM0JCcAX_ilK2F&_nc_ht=scontent.fjsr1-1.fna&oh=00_AfBQXvHyDsOJKiDzBVfxSyZIZwybNa0Y8WgPHyE3N0x9mA&oe=6583FC1E"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Bidyut Sikder</h5>
          <p className="card-text">
            I have a strong background in web development, having worked as both
            a front-end and back-end developer for several years. My skills
            include HTML, CSS, JavaScript, ReactJS, NodeJS, Mongodb, and MySQL.
            I am also familiar with popular library such as React.js and
            Solid.js ,Astro.js
          </p>
          <a href="#" className="btn btn-primary">
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
