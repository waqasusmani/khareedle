import React, { useState } from "react";
import { storage } from "../firebase/firebase";
import {data} from "../data/Data";

function Ad() {

  const [formData, setFormData] = useState({});
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState({ imgUrl: "" });
  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile((imageAsFile) => image);
  };
  const handleFireBaseUpload = (e) => {
    console.log(formData.make+"::"+formData.name+"::"+formData.price);
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
        var fireBaseUrl = await storage
          .ref("images")
          .child(imageAsFile.name)
          .getDownloadURL();
        console.log(fireBaseUrl);
        setImageAsUrl((prevObject) => ({ ...prevObject, imgUrl: fireBaseUrl }));
        formData.imgSrc=fireBaseUrl
        addObject()        
      }
      
    );
  };
  
  function addObject(){
      console.log(formData.make+"::"+formData.name+"::"+formData.price);
      var dataToEnter={make: formData.make,name: formData.name,price: formData.price,details:formData.details,location:formData.location,sellerName:formData.sellerName,imgSrc:formData.imgSrc};
      data.push(dataToEnter)
      console.log(data)
  }

  return (
    <div>
      <form encType="multipart/form-data" onSubmit={handleFireBaseUpload}>
        <label>Enter Make: </label>
        <input type="text" onChange={e => formData.make=e.target.value}/>
        <br></br>
        <label>Enter Name: </label>
        <input type="text"  onChange={e => formData.name=e.target.value}/>
        <br></br>
        <label>Enter Price: </label>
        <input type="text"  onChange={e => formData.price=e.target.value}/>
        <br></br>
        <label>Enter Details: </label>
        <input type="text"  onChange={e => formData.details=e.target.value}/>
        <br></br>
        <label>Enter Location: </label>
        <input type="text"  onChange={e => formData.location=e.target.value}/>
        <br></br>
        <label>Enter Seller Name: </label>
        <input type="text"  onChange={e => formData.sellerName=e.target.value}/>
        <br></br>
        <label>Upload image here: </label>
        <input type="file" onChange={handleImageAsFile}></input>
        <button>upload to firebase</button>
      </form>
      <img src={imageAsUrl.imgUrl} alt="uploadedImage" />
    </div>
  );
}

export default Ad;
