/* eslint-disable arrow-body-style */
import ReactModal from 'react-modal';


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
    >
      <h2>{title}</h2>
      <span onClick={close}>x</span>
      <div>
        {children}
      </div>

      <div className="buttons">
        <button onClick={onOk}>ok</button>
        <button onClick={close}>Cansel</button>
      </div>
    </ReactModal>
  );
};

Modal.defaultProps = {
  title: 'Warning'
};
