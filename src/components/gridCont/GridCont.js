import gCStyles from "./gridCont.module.css";

import Card from "../card/Card.js";

export default function GridCont({dataArr}) {
  return (
    <div className={gCStyles.gridCont}>
      {
        dataArr.map(data => <Card data={data}/>)
      }
    </div>
  );
}