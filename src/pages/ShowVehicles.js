import React from "react";
import DataFetcher from "../DataFetcher";
import VehicleList from "./VehicleList";

function ShowDealers(props) {
  const { id } = props.match.params;
  const path = `vehicles/${id}`;

  return (
    <>
      <DataFetcher path={`${path}`}>
        {({ data, status }) => <VehicleList data={data} status={status} />}
      </DataFetcher>
    </>
  );
}

export default ShowDealers;
