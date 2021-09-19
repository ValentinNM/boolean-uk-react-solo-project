import { useState } from "react"

export default function VideoUpload ()  { 

    const [uploadedVideoFile, setUploadedVideoFile] = useState({
        video: null
    })

    // let video = document.getElementById("video-file").files[0];
    // let formData = new FormData(); 
    // formData.append("photo", video);


    // fetch('/upload/image', {method: "POST", body: formData});

    const onFileChange = event => { 
        setUploadedVideoFile({video: event.target.files[0]})
        console.log("on File Change", event.target.files)
    }

    const onFileUpload = () => { 
        const formData = new FormData();

        formData.append(
            "myFile",
            video,
            video.name
        )

        console.log("selectedFile: ", video)

        axios.post("http://localhost:3030/videos/uploadfile", formData);
    }

    // fileData = () => { 
    //     if (video) {
            
    //     }
    // }

    return (
        <div>
        <h2>Inside VideoUpload function</h2>
        <form action="" >
         {/* onSubmit={handleSubmit} */}
            <input type="file" id="video-file"
            onChange={onFileChange} />
        <button onClick={onFileUpload} >
            Upload
        </button>
        </form>
        </div>
    ) 

}