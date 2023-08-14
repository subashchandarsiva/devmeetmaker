import './Todos.css';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import Backdrop from '../Modal/Backdrop';

function Todos({ title }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleDelete() {
    setIsModalOpen(true);
  }

  function handleOnClickConfirm() {
    setIsModalOpen(false);
  }

  function handleOnClickCancel() {
    setIsModalOpen(false);
  }

  return (
    <div className='card'>
      <div className='actions'>
        <h2> {title}</h2>
        <button className='btn' onClick={handleDelete}>
          Delete
        </button>
      </div>
      {isModalOpen && (
        <>
          <Modal
            onClickConfirm={handleOnClickConfirm}
            onClickCancel={handleOnClickCancel}
          />
          <Backdrop onClickCancel={handleOnClickCancel} />
        </>
      )}
    </div>
  );
}

export default Todos;
