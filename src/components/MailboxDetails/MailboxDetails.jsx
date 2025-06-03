import { useParams } from 'react-router-dom';

export default function MailboxDetails({ mailboxes, letters }) {
  const { mailboxId } = useParams();
  const selectedBox = mailboxes.find(
    mailbox => mailbox._id === Number(mailboxId)
  );
  const selectedLetters = letters.filter(letter => 
    letter.mailboxId === Number(mailboxId)
  );

  if (!selectedBox) return <h2>Mailbox Not Found!</h2>;

  return (
    <div className="mailbox-details">
      <h2>Mailbox Details</h2>
      <div className="details-box">
        <p><strong>Box Number:</strong> {selectedBox._id}</p>
        <p><strong>Owner:</strong> {selectedBox.boxOwner}</p>
        <p><strong>Size:</strong> {selectedBox.boxSize}</p>
      </div>

      <h3>Letters in this mailbox:</h3>
      {selectedLetters.length > 0 ? (
        <div className="letters-list">
          {selectedLetters.map((letter, index) => (
            <div key={index} className="letter">
              <p><strong>To:</strong> {letter.recipient}</p>
              <p><strong>Message:</strong> {letter.message}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No letters in this mailbox</p>
      )}
    </div>
  );
}