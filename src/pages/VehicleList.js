import React from "react";
import Vehicle from "./Vehicle";

function VehicleList(props) {
  const { data, status } = props;
  if (status === 500) {
    return <h1>Reconnecting...</h1>;
  }

  if (status === 200 && data) {
    const items = data.map(item => <Vehicle key={item.bac} data={item} />);
    return <>{items}</>;
  }

  return <h1>Loading</h1>;
}

export default VehicleList;
