// This code was mostly created by PedroTech in his tutorial on YouTube
import { useState } from "react"
import storage from "../../firebaseConfig"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

export default function BlogImage({handleImage}) {
  // State for the uploaded image
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  // Handle file upload event and update state
  // blogImages is the folder where the image will be stored.
  const uploadFile = () => {
    if (!imageUpload) return;
    // add characters to the filename to make it unique with v4
    const imageRef = ref(storage, `blogImages/${imageUpload.name + v4()}`);
    // pass in the location and the image
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);

      });

    },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadBytes.snapshot.ref).then((url) => {
          console.log(url);
        });
      });
  };

  return (
    <div>
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]); 
        }}
      />
      <button onClick={uploadFile}> Save file.</button>
      {imageUrls.map((url) => {
        {handleImage(url)};
        return <img src={url} alt='' />;
      })}
    </div>
  );
}
