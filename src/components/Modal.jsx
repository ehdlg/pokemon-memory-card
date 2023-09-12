/* eslint-disable react/prop-types */
import '../styles/Modal.css';
function Modal({ message, points, restartGame }) {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <h4>{message}</h4>
        <h5>Score: {points}</h5>
        <button className='btn-restart' onClick={restartGame}>
          Restart game
        </button>
      </div>
    </div>
  );
}

export default Modal;
