/* eslint-disable arrow-body-style */
import ReactModal from 'react-modal';
import { FaWindowClose } from 'react-icons/fa';
import './modal.scss';


export const Modal = ({
  open,
  title,
  children,
  close,
  onConfirm
}) => {
  const onOk = () => {
    onConfirm();
    close();
  };

  return (
    <ReactModal
      isOpen={open}
      ariaHideApp={false}
      className="modal"
    >
      <h2 className="title">{title}</h2>
      <span onClick={close} className="close">
        <FaWindowClose />
      </span>
      <div className="text">
        {children}
      </div>

      <div className="buttons">
        <button className="btn" onClick={onOk}>ok</button>
        <button className="btn" onClick={close}>Cansel</button>
      </div>
    </ReactModal>
  );
};

Modal.defaultProps = {
  title: 'Warning'
};
