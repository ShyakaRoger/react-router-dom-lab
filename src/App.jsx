import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import LetterForm from './components/LetterForm/LetterForm';
import './App.css';

function App() {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  const addBox = (formData) => {
    const newBox = {
      _id: mailboxes.length + 1,
      boxOwner: formData.boxOwner,
      boxSize: formData.boxSize
    };
    setMailboxes([...mailboxes, newBox]);
  };

  const addLetter = (formData) => {
    const newLetter = {
      mailboxId: Number(formData.mailboxId),
      recipient: formData.recipient,
      message: formData.message
    };
    setLetters([...letters, newLetter]);
  };

  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<h1>Post Office</h1>} />
          <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
          <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
          <Route 
            path="/mailboxes/:mailboxId" 
            element={<MailboxDetails mailboxes={mailboxes} letters={letters} />} 
          />
          <Route path="/new-letter" element={<LetterForm mailboxes={mailboxes} addLetter={addLetter} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;