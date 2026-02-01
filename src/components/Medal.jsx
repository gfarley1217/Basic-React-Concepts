export default function Medal(props) {
  const medalName = props.medal.name;
  const count = props.country[medalName]; 

  return (
    <div className="medal">
      {medalName}: {count}
    </div>
  );
}
