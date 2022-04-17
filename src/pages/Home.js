import React, { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <section className="section">
      <h1 className="section-title">Welcome to Homepage</h1>
      <p className="section-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequuntur natus iste eveniet perspiciatis aut!</p>
    </section>
  );
}

export default Home;
