export default function Country(props) {
  return (
    <div className="country card">
      <div className="country-name">{props.country.name}</div>
      <div className="country-gold">Gold: {props.country.gold}</div>

      <button
        className="gold-button"
        onClick={() => props.onDelete(props.country.id)}
      >
        Delete
      </button>
    </div>
  );
}
