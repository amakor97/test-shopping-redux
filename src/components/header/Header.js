import hStyles from "./header.module.css";

export default function Header() {
  return (
    <div className={hStyles.header}>
      <h1 className={hStyles.title}>Motorsport cars for sale</h1>
    </div>
  );
}