import { useState } from "react";
import { FormGroup, Input, Label } from "reactstrap";

const UploadVideos = () => {
  const [video, setVideo] = useState<any>();

  const changeVideoHandler = (event: any) => {
    const selectedVideo = event.target.files[0];
    const formData = new FormData();
    formData.append("file", selectedVideo);
    fetch(`${process.env.REACT_APP_API_URL}/video`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        setVideo(`${result.filename}`);
      })
      .catch((error) => {
        console.error("Error:", error);
        setVideo(undefined);
      });
  }; // function for upload video.

  return (
    <>
      <div>
        <h2>This page for upload all videos in app.</h2>
         <br />
        <FormGroup>
          <Label for="video">Video</Label>
          <Input
            id="video"
            name="video"
            type="file"
            onChange={changeVideoHandler}
          />
        </FormGroup>
      </div>
    </>
  );
};

export default UploadVideos;
