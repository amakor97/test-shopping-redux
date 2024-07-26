import s from "./s.module.css";

export default function Search({onInputChange}) {
  return (
    <input className={s.search} type="text" name="filterText" placeholder="search..." onChange={onInputChange}/>
  );
}