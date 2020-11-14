import React, { useState } from "react";
import { storage } from "../firebase/firebase";
import { data } from "../data/Data";

function Ad() {
  const [formData, setFormData] = useState({});
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState({ imgUrl: "" });
  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile((imageAsFile) => image);
  };
  const handleFireBaseUpload = (e) => {
    document.getElementById("loading").style.display = "block";
    var buttonsArray = Object.values(document.getElementsByClassName("all-buttons"));
    buttonsArray.map((val,ind)=>val.disabled=true);
    e.preventDefault();
    console.log("Start of upload");
    if (imageAsFile === "") {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`);
    }
    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);
    uploadTask.on(
      "state_changed",
      (snapShot) => {
        console.log(snapShot);
      },
      (err) => {
        console.log(err);
      },
      async () => {
        if (imageAsFile){
          var fireBaseUrl = await storage
          .ref("images")
          .child(imageAsFile.name)
          .getDownloadURL();
        console.log(fireBaseUrl);
        setImageAsUrl((prevObject) => ({ ...prevObject, imgUrl: fireBaseUrl }));
        formData.imgSrc = fireBaseUrl;
        addObject();
        }
        buttonsArray.map((val,ind)=>val.disabled=false);
        document.getElementById("loading").style.display = "none";
      }
    );
    
  };

  function addObject() {
    var dataToEnter = {
      make: formData.make,
      name: formData.name,
      price: formData.price,
      productDetail: formData.productDetail,
      imgsrc: formData.imgSrc,
      location: formData.location,
      sellerName: formData.sellerName,
    };
    data.push(dataToEnter);
    console.log(data);
  }

  return (
    <div id="ad-div">
      <h1> Post your ad here: </h1>
      <form encType="multipart/form-data" onSubmit={handleFireBaseUpload}>
        <label>Enter Make: </label>
        <br></br>
        <input type="text" onChange={(e) => (formData.make = e.target.value)} />
        <br></br>
        <label>Enter Name: </label>
        <br></br>
        <input type="text" onChange={(e) => (formData.name = e.target.value)} />
        <br></br>
        <label>Enter Price: </label>
        <br></br>
        <input
          type="text"
          onChange={(e) => (formData.price = e.target.value)}
        />
        <br></br>
        <label>Enter Details: </label>
        <br></br>
        <input
          type="text"
          onChange={(e) => (formData.productDetail = e.target.value)}
        />
        <br></br>
        <label>Enter Location: </label>
        <br></br>
        <input
          type="text"
          onChange={(e) => (formData.location = e.target.value)}
        />
        <br></br>
        <label>Enter Seller Name: </label>
        <br></br>
        <input
          type="text"
          onChange={(e) => (formData.sellerName = e.target.value)}
        />
        <br></br>
        <label>Upload image here: </label>
        <br></br>
        <input type="file" onChange={handleImageAsFile}></input>
        <br></br>
        <button className="all-buttons">Submit</button>
      </form>
    </div>
  );
}

export default Ad;
