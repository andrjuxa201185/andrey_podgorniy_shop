import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';
import { Modal } from '../modal';
import './categoriesPunlished.scss';

export const CategoriesPublished = ({
  items,
  onEdit,
  onDelete,
  hideEdit,
  onClickHahdler
}) => {
  const [categories, setCategories] = useState([]);
  const [warning, setWarning] = useState('');
  const [removeId, setRemoveId] = useState('');

  useEffect(() => {
    setCategories(items);
  }, [items]);

  const showModal = (removeId, title) => {
    setWarning(`Are you going to set '${title}' unpupblished`);
    setRemoveId(removeId);
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
      <ul className="categories-published">
        {
          categories.map(({ title, id }) => (
            <li
              key={id}
              onClick={onClickHahdler}
            >
              <Link to={`/categories/${id}`}>
                {title}
              </Link>
              {!hideEdit && (
              <>
                <FaEdit onClick={onEdit} />
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
