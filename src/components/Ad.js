import React, { useState } from "react";
import { storage } from "../firebase/firebase";
import {data} from "../data/Data";

function Ad() {
    var make;
    var name;
    var price;
    var details;
    var location;
    var sellerName;
    var imgSrc;  

  console.log("data array ===> " + data)
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState({ imgUrl: "" });
  console.log(imageAsFile);
  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile((imageFile) => image);
  };
  const handleFireBaseUpload = (e) => {
    
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
        // setImageAsUrl((prevObject) => ({ ...prevObject, imgUrl: fireBaseUrl }));
        imgSrc=fireBaseUrl
                
      }
      
    );
    addObject()
  };
  function addMake(e){
      console.log(e.target.value)
      make=e.target.value
      console.log("make" + make)
  }

  function addObject(){
      var dataToEnter={make,name,price,details,location,sellerName,imgSrc};
      data.push(dataToEnter)
      console.log(data)
  }

  return (
    <div>
      <form onSubmit={handleFireBaseUpload}>
        <label>Enter Make: </label>
        <input type="text" onChange={e => make=e.target.value}/>
        <br></br>
        <label>Enter Name: </label>
        <input type="text"  onChange={e => name=e.target.value}/>
        <br></br>
        <label>Enter Price: </label>
        <input type="text"  onChange={e => price=e.target.value}/>
        <br></br>
        <label>Enter Details: </label>
        <input type="text"  onChange={e => details=e.target.value}/>
        <br></br>
        <label>Enter Location: </label>
        <input type="text"  onChange={e => location=e.target.value}/>
        <br></br>
        <label>Enter Seller Name: </label>
        <input type="text"  onChange={e => sellerName=e.target.value}/>
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
