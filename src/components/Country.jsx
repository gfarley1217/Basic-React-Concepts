import Medal from "./Medal";

export default function Country(props) {
  const totalForCountry =
    props.country.gold + props.country.silver + props.country.bronze;

  return (
    <div className="country">
      <div className="country-name">{props.country.name}</div>

      <div className="country-total">total: {totalForCountry}</div>

      <div className="medals-row">
        {props.medals.map((medal) => (
          <Medal
            key={medal.id}
            medal={medal}
            country={props.country}
            onIncrement={props.onIncrement}
            onDecrement={props.onDecrement}
          />
        ))}
      </div>
    </div>
  );
}


