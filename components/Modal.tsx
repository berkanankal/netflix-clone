import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Element, Genre, Movie } from "../typings";
import MuiModal from "@mui/material/Modal";

function Modal() {
  const [movie, setMovie] = useRecoilState(movieState);

  const [showModal, setShowModal] = useRecoilState(modalState);

  const handleClose = () => {
    setShowModal(false);
    setMovie(null);
  };

  return (
    <MuiModal open={showModal} onClose={handleClose}>
      <button
        className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818]"
        onClick={handleClose}
      >
        <XMarkIcon className="w-6 h-6" />
      </button>
    </MuiModal>
  );
}

export default Modal;
