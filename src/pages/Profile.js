import React, { useEffect } from "react";

function Profile() {
  useEffect(() => {
    document.title = "Profile";
  }, []);
  return (
    <section className="section">
      <h3 className="section-title">This is profile page</h3>
      <p className="section-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius labore cupiditate nemo tempore aliquid. Possimus est libero beatae facilis voluptate, distinctio voluptates quasi eos dolores assumenda error blanditiis excepturi
        accusantium veniam corporis ratione provident reprehenderit natus, voluptatibus soluta ducimus. Voluptate tenetur, nam optio vero, inventore excepturi quidem a repellendus fugit modi ipsum nisi cum! Error aperiam quos dignissimos
        molestiae sunt, laudantium officiis quidem molestias vel explicabo. Quod, voluptate odit consequatur odio fuga iste, eveniet facere consectetur in consequuntur id iusto. Voluptate in at ipsa, corrupti debitis doloremque dolores,
        alias sequi minus deserunt eos.
      </p>
    </section>
  );
}

export default Profile;
