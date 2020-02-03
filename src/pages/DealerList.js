import React from "react";
import Dealer from "./Dealer";

function DealerList(props) {
  const { data, status } = props;
  if (status === 500) {
    return <h1>Reconnecting...</h1>;
  }

  if (status === 200 && data) {
    const items = data.map(item => <Dealer key={item.bac} data={item} />);
    return <>{items}</>;
  }

  return <h1>Loading</h1>;
}

export default DealerList;
