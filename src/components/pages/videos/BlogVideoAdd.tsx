import { useState } from "react";
import { addblog } from "../../../actions/Blogs/action";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

interface BlogAddPropsType {
  refresh: () => void;
}

const BlogVideoAdd = (props: BlogAddPropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const [coverPath, setCoverPath] = useState<any>();
  const [videoPath, setVideoPath] = useState<any>();
  const [posterPath, setPosterPath] = useState<any>();

  const changeCoverHandler = (event: any) => {
    const selectedCover = event.target.files[0];
    const formData = new FormData();
    formData.append("file", selectedCover);
    fetch(`${process.env.REACT_APP_API_URL}/cover`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        setCoverPath(`${result.filename}`);
      })
      .catch((error) => {
        console.error("Error:", error);
        setCoverPath(undefined);
      });
  };

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
        setVideoPath(`${result.filename}`);
      })
      .catch((error) => {
        console.error("Error:", error);
        setVideoPath(undefined);
      });
  };

  const changePosterHandler = (event: any) => {
    const selectedPoster = event.target.files[0];
    const formData = new FormData();
    formData.append("file", selectedPoster);
    fetch(`${process.env.REACT_APP_API_URL}/poster`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        setPosterPath(`${result.filename}`);
      })
      .catch((error) => {
        console.error("Error:", error);
        setPosterPath(undefined);
      });
  };

  const submit = () => {
    const newBlog = {
      coverPath,
      videoPath,
      posterPath,
    };
    console.log(newBlog);

    addblog(newBlog, () => {
      props.refresh();
      setIsOpened(false);
      reset();
    });
  };

  const reset = () => {
    setCoverPath("");
    setVideoPath("");
    setPosterPath("");
  };

  return (
    <>
      <Button
        onClick={() => setIsOpened(true)}
        style={{ backgroundColor: "rgba(147, 147, 203, 0.866)", border: 0 }}
      >
        <FontAwesomeIcon icon={faAdd} color="white" />
      </Button>
      <Modal
        centered
        scrollable
        isOpen={isOpened}
        toggle={() => setIsOpened(!isOpened)}
      >
        <ModalBody style={{ backgroundColor: "rgba(147, 147, 203, 0.866)" }}>
          <p style={{ color: "white", fontSize: 20, textAlign: "center" }}>
            Ajouter video et image
          </p>
          <span
            onClick={() => setIsOpened(false)}
            style={{
              position: "absolute",
              right: 10,
              color: "white",
              top: 10,
              cursor: "pointer",
            }}
          >
            X
          </span>
          <br />
          <Form>
            <FormGroup>
              <Label for="coverPath" style={{ color: "white", fontSize: 18 }}>
                Image
              </Label>
              <Input
                id="coverPath"
                name="coverPath"
                type="file"
                onChange={changeCoverHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="posterPath" style={{ color: "white", fontSize: 18 }}>
                Poster
              </Label>
              <Input
                id="posterPath"
                name="posterPath"
                type="file"
                onChange={changePosterHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="videoPath" style={{ color: "white", fontSize: 18 }}>
                Video
              </Label>
              <Input
                id="videoPath"
                name="videoPath"
                type="file"
                onChange={changeVideoHandler}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter style={{ backgroundColor: "rgba(147, 147, 203, 0.866)" }}>
          <Button
            style={{
              backgroundColor: "black",
              color: "white",
              border: 0,
            }}
            onClick={submit}
            disabled={!coverPath || !videoPath}
          >
            Confirmer
          </Button>{" "}
          <Button
            style={{
              backgroundColor: "white",
              color: "rgba(147, 147, 203, 0.866)",
              border: 0,
            }}
            onClick={() => setIsOpened(false)}
          >
            Annuler
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default BlogVideoAdd;
