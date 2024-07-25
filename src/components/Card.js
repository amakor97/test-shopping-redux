export default function Card({data}) {
  return (
    <div>
      <h2>{data.name}</h2>
      <p>cost: {data.cost}</p>
      <p>left: {data.left}</p>
      <button>add to cart</button>
      <br/>
      <br/>
    </div>
  );
}