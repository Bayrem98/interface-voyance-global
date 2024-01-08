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
        setVideoPath(
          `${result.filename}`
        );
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
        setPosterPath(
          `${result.filename}`
        );
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
        <ModalBody>
          <p className="addbook-modal-title">Ajouter video et image</p>
          <span
            className="addbook-modal-iconclose"
            onClick={() => setIsOpened(false)}
          >
            X
          </span>
          <br />
          <Form>
            <FormGroup>
              <Label for="coverPath">Image</Label>
              <Input
                id="coverPath"
                name="coverPath"
                type="file"
                onChange={changeCoverHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="posterPath">Poster</Label>
              <Input
                id="posterPath"
                name="posterPath"
                type="file"
                onChange={changePosterHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="videoPath">Video</Label>
              <Input
                id="videoPath"
                name="videoPath"
                type="file"
                onChange={changeVideoHandler}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <button
            className="addbook-modal-button1"
            onClick={submit}
            disabled={!coverPath || !videoPath}
          >
            Confirmer
          </button>{" "}
          <button
            className="addbook-modal-button2"
            onClick={() => setIsOpened(false)}
          >
            Annuler
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default BlogVideoAdd;
