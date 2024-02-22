import { useState } from 'react'
import Button from "./components/Button/Button"
import Modal from "./components/Modal/Modal"
import './App.scss'

function App() {

  const [firstOpenModal, setFirstModal] = useState(false)
  const [secondOpenModal, setSecondModal] = useState(false)

  const openFirstModal = () => {
    setFirstModal(true)
  }

  const openSecondModal = () => {
    setSecondModal(true)
  }

  const closeFirstModal = () => {
    setFirstModal(false);
  };

  const closeSecondModal = () => {
    setSecondModal(false);
  };

  return (
    <div className='app-wrapper'>
      <div className='button_wrapper'>
        <Button onClick={openFirstModal} classNames="first-button" type="button">
          Open first modal
        </Button>
        <Button onClick={openSecondModal} classNames="second-button" type="button">
          Open second modal
        </Button>
      </div>

      {firstOpenModal && (
        <Modal
          onClose={closeFirstModal}
          headerText="Product Delete"
          firstText="NO, CANCEL"
          secondaryText="YES, DELETE"
          firstClick={() => console.log('Save clicked')}
          secondaryClick={() => console.log('Cancel clicked')}
        >
          <p>By clicking the “Yes, Delete” button, PRODUCT NAME will be deleted.</p>
        </Modal>
      )}

      {secondOpenModal && (
        <Modal
          onClose={closeSecondModal}
          headerText="Add Product NAME"
          firstText="ADD TO FAVORITE"
          firstClick={() => console.log('Confirm clicked')}
        >
          <p>Description for you product</p>
        </Modal>
      )}
    </div>
  )
}

export default App
