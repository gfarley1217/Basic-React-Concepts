import Medal from "./Medal";

export default function Country(props) {
  return (
    <div className="country">
      <div className="country-name">{props.country.name}</div>

      <div className="medals-row">
        {props.medals.map((medal) => (
          <Medal
            key={medal.id}
            medal={medal}
            country={props.country}
          />
        ))}
      </div>

      <button class="gold-button" onClick={() => props.onDelete(props.country.id)}>
        Delete Country
      </button>
    </div>
  );
}

