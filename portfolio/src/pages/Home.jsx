import React from "react";

export default function Home(){
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Hi, I'm Kanishak Todwal</h1>
        <p>Frontend Developer • UI Enthusiast • Builder of Nice Things</p>
        <a className="btn" href="/projects">See my work</a>
      </div>
      <div className="hero-right">
        <img src="/src/assets/Profile.jpeg" alt="profile" className="profile" style={{width:"123px"}}/>
      </div>
    </section>
  );
}
