import { useNavigate } from 'react-router-dom';

export default function MailboxForm({ addBox }) {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      boxOwner: e.target.boxOwner.value,
      boxSize: e.target.boxSize.value
    };
    addBox(formData);
    navigate('/mailboxes');
  }

  return (
    <div className="form-container">
      <h2>Create New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Box Owner:
          <input type="text" name="boxOwner" required />
        </label>
        <label>
          Box Size:
          <select name="boxSize" required>
            <option value="">Select size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>
        <button type="submit">Create Mailbox</button>
      </form>
    </div>
  );
}