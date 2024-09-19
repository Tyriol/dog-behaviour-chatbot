import Image from "next/image";

export default function Card(props) {
  return (
    <div className="card">
      <Image
        className="card-image"
        src={props.src}
        alt="alternative text"
        width={350}
        height={200}
      />
      <h3 className="card-title">{props.title}</h3>
      <p className="card-text">{props.text}</p>
    </div>
  );
}
