import css from "./Contact.module.css";

const Contact = ({ id, number, name, onDelete }) => {
  return (
    <li className={css.contact}>
      <div>
        <div className={css.contactText}>
          <span>{name}</span>
        </div>
        <div className={css.contactText}>
          <a href={`tel:` + number}>{number}</a>
        </div>
      </div>
      <button
        onClick={() => onDelete(id)}
        type="button"
        aria-label="delete button"
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
