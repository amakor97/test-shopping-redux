import shs from "./sh.module.css";

import { Link } from "react-router-dom";

export default function SubHeader({data}) {
  return (
    <div className={shs.subHeader}>
      <h2>{data.text}</h2>
      <Link className={shs.link} to={data.href}>{data.linkText}</Link>
    </div>
  );
}