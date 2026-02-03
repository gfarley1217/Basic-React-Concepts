export default function Medal(props) {
  const medalName = props.medal.name;
  const count = props.country[medalName];

  return (
    <div className="medal">
      <div className="medal-name">{medalName}</div>
      <div className="medal-count">{count}</div>

      <div className="medal-buttons">
        <button onClick={() => props.onIncrement(props.country.id, medalName)}>
          +
        </button>

        <button
          onClick={() => props.onDecrement(props.country.id, medalName)}
          disabled={count === 0}
        >
          -
        </button>
      </div>
    </div>
  );
}
