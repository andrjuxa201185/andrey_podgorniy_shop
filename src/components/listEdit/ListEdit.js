import { useState } from 'react';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';
import { Modal } from '../modal';
import { EditableField } from '../editableField';
import './listEdit.scss';

export const ListEdit = ({
  items,
  onDelete,
  hideEdit,
  hideDel,
  onClickHandler,
  onBlurHandler,
}) => {
  const [editId, setEditId] = useState();
  const [warning, setWarning] = useState('');
  const [removeId, setRemoveId] = useState('');

  const showModal = (removeId, title) => {
    setWarning(`Are you going to set '${title}' ${removeId} unpupblished`);
    setRemoveId(removeId);
  };

  const setEditTitle = (e, id) => {
    e.stopPropagation();
    if (editId) setEditId(undefined);
    else setEditId(id);
  };

  const hideModal = () => {
    setWarning('');
    setRemoveId('');
  };

  return (
    <>
      <Modal
        open={!!warning}
        close={hideModal}
        onConfirm={() => onDelete(removeId)}
      >
        {warning}
      </Modal>
      <ul className="list-edit">
        {
          items.map(({ title, id }) => (
            <li
              key={id}
            >
              <EditableField
                val={title}
                editState={id === editId}
                onBlurHandler={title => onBlurHandler(id, title)}
                onClickHandler={() => onClickHandler(id)}
              />
              {!hideEdit && (
              <>
                <FaEdit onClick={e => setEditTitle(e, id)} />
              </>
              )}
              {!hideDel && (
              <>
                <FaRegTrashAlt onClick={() => showModal(id, title)} />
              </>
              )}
            </li>
          ))
          }
      </ul>
    </>
  );
};
