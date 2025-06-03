import { useNavigate } from 'react-router-dom';

export default function LetterForm({ mailboxes, addLetter }) {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      mailboxId: e.target.mailboxId.value,
      recipient: e.target.recipient.value,
      message: e.target.message.value
    };
    addLetter(formData);
    navigate(`/mailboxes/${formData.mailboxId}`);
  }

  return (
    <div className="form-container">
      <h2>Send New Letter</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Select Mailbox:
          <select name="mailboxId" required>
            <option value="">Select a mailbox</option>
            {mailboxes.map(mailbox => (
              <option key={mailbox._id} value={mailbox._id}>
                Box #{mailbox._id} ({mailbox.boxOwner})
              </option>
            ))}
          </select>
        </label>
        <label>
          Recipient:
          <input type="text" name="recipient" required />
        </label>
        <label>
          Message:
          <textarea name="message" required rows="5" />
        </label>
        <button type="submit">Send Letter</button>
      </form>
    </div>
  );
}