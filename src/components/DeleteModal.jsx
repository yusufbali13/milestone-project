import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import useBlogs from "../hook/useBlogs";
import { cardBtn, delBtn, style, upBtn } from "../styles/globalStyles";

const DeleteModal = ({ modal, detailId, handleClose }) => {
  const { delBlog } = useBlogs();
  const navigate = useNavigate();

  return (
    <div>
      <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            align="center"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Do you really want to delete your blog? This process cannot be
            undone!
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-evenly", mt: 7 }}>
            <Button sx={upBtn} onClick={handleClose}>
              Cancel
            </Button>
            <Button
              sx={delBtn}
              onClick={() => {
                delBlog(detailId);
                navigate("/");
              }}
            >
              DELETE
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
export default DeleteModal;
