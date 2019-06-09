import { useState, useEffect } from 'react';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';
import { Modal } from '../modal';
import { EditableField } from '../editableField';
import './listEdit.scss';
import { updateCategoryAsync } from '../../store/categories';

export const ListEdit = ({
  dispatch,
  history,
  items,
  onDelete,
  hideEdit,
  hideDel,
}) => {
  const [editId, setEditId] = useState();
  const [categories, setCategories] = useState([]);
  const [warning, setWarning] = useState('');
  const [removeId, setRemoveId] = useState('');

  useEffect(() => {
    setCategories(items);
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

  const onBlurHandler = (id, value) => {
    const category = categories.find(item => item.id === id);
    category.title = value;
    dispatch(updateCategoryAsync({ id: category.id, category }));
  };

  const onClickHandler = (id) => {
    history.push(`/categories/${id}`);
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
          categories.map(({ title, id }) => (
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
