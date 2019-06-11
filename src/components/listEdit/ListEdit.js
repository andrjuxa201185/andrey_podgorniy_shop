import { useState, useEffect } from 'react';
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
  const [itemsState, setItemsState] = useState([]);
  const [warning, setWarning] = useState('');
  const [removeId, setRemoveId] = useState('');

  useEffect(() => {
    setItemsState(items);
  }, [items]);

  const showModal = (removeId, title) => {
    setWarning(`Are you going to set '${title}' ${removeId} unpupblished`);
    setRemoveId(removeId);
  };

  const setEditTitle = (e, id) => {
    e.stopPropagation();
    editId ? setEditId(undefined) : setEditId(id);
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
          itemsState.map(({ title, id }) => (
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
