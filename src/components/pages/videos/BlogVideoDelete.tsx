import { useState } from "react";
import Blog from "../../../@types/Blog";
import { deleteBlogs } from "../../../actions/Blogs/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

interface BlogDeletePropsType {
  blog: Blog;
  refresh: () => void;
}

const BlogVideoDelete = ({ blog, refresh }: BlogDeletePropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const submit = () => {
    deleteBlogs(blog, () => {
      refresh();
      setIsOpened(false);
    });
  };
  return (
    <>
      <button className="btn3-delete" onClick={() => setIsOpened(true)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
      <Modal
        className="font-['Helvetica']"
        centered
        scrollable
        isOpen={isOpened}
        toggle={() => setIsOpened(!isOpened)}
      >
        <ModalHeader
          className="bg-danger text-white"
          toggle={() => setIsOpened(!isOpened)}
        >
          Supprimer Video
        </ModalHeader>
        <ModalBody>Vous voulez supprimer cette video ?</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={submit}>
            Confirmer
          </Button>{" "}
          <Button onClick={() => setIsOpened(false)}>Annuler</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default BlogVideoDelete;
