import React, {useState} from 'react';
import {storage} from '../firebase/firebase';

function Ad(){
    // const allInputs = {imgUrl : ''}
    const [imageAsFile, setImageAsFile] = useState('');
    const [imageAsUrl, setImageAsUrl] = useState({imgUrl : ''});
    console.log(imageAsFile);
    const handleImageAsFile = (e) =>{
        const image = e.target.files[0];
        setImageAsFile(imageFile =>(image));
    }
    const handleFireBaseUpload = e =>{
        e.preventDefault();
        console.log('Start of upload');
        if(imageAsFile === ''){
            console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
        }
        const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
        uploadTask.on('state_changed',
        (snapShot)=>{
            console.log(snapShot)
        },(err)=>{
            console.log(err)
        },
        async ()=> { var fireBaseUrl = await storage.ref('images').child(imageAsFile.name).getDownloadURL();
    console.log(fireBaseUrl);
    setImageAsUrl(prevObject => ({...prevObject, imgUrl:fireBaseUrl}))
}
        // .then(fireBaseUrl => {
        //     setImageAsUrl({imgUrl: 'Adnan'})
        //     console.log(fireBaseUrl)
        // })
        )
    }
    return(
        <div>
            <form onSubmit={handleFireBaseUpload}>
                <input type = 'file'
                onChange={handleImageAsFile}></input>
                <button>upload to firebase</button>
            </form>
            <img src={imageAsUrl.imgUrl} alt="uploadedImage"/>
        </div>
    )
}

export default Ad;