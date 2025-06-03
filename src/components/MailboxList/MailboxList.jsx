import { Link } from 'react-router-dom';

export default function MailboxList({ mailboxes }) {
  return (
    <div className="mailbox-list">
      <h2>All Mailboxes</h2>
      <div className="mailboxes-container">
        {mailboxes.map(mailbox => (
          <Link to={`/mailboxes/${mailbox._id}`} key={mailbox._id}>
            <div className="mailbox-box">
              <span>Mailbox #{mailbox._id}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}