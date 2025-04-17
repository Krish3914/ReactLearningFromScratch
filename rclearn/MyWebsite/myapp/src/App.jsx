import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import Button from "./Button/Button";
import InlineCssButton from "./InlineCssButton";
import Card from "./Card";

function App(){

  const name = "Krish Agrawal";

  return(
    <div>
      <Header/>
      <Body></Body>
      <Button/>
      <br /><br />
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <br /><br />
      <InlineCssButton/>
      <Footer/>
      {/* <h1>Welcome to My React App</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quis. Ipsa adipisci blanditiis inventore harum repellat, placeat, sit quisquam voluptates laboriosam odit nesciunt a aspernatur magnam repellendus odio consectetur aut ad quo beatae? Consectetur tempore illum hic fuga eius error unde ex temporibus aspernatur? Libero enim eos distinctio dicta vitae sunt sit mollitia a similique animi perspiciatis quo id, esse earum delectus odit ad modi veritatis possimus laudantium quod repellat dolor reiciendis! Accusantium, mollitia. Voluptate autem aut facilis sint quaerat blanditiis soluta libero molestiae cumque neque et distinctio sed, qui in. Laudantium culpa eaque, dolorem a quidem similique dignissimos, quos reiciendis sapiente, rerum exercitationem iure! Sunt ipsum laudantium impedit laboriosam velit ipsam perspiciatis eius ipsa sit nobis. Est, in. Sed quam voluptatibus tempora at ut consequuntur maxime! Alias cum voluptate officia voluptatem libero facere esse totam ex dolor dolorem! Nobis eaque sit vel excepturi ab ut culpa, aspernatur tempore qui!</p>

      <h3>{name} Signing-OFF!</h3> */}
    </div>
  );
}

export default App;