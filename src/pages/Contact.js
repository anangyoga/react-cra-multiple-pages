import React, { useEffect } from "react";

function Contact() {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <section className="section">
      <p className="section-title">Contact Me</p>
      <ul className="section-description">
        <li>WA: 0909090</li>
        <li>Email: dask@gask.com</li>
      </ul>
    </section>
  );
}

export default Contact;
