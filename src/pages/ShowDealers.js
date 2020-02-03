import React from "react";
import DataFetcher from "../DataFetcher";
import DealerList from "./DealerList";

function ShowDealers(props) {
  return (
    <>
      <DataFetcher path="dealers">
        {({ data, status }) => <DealerList data={data} status={status} />}
      </DataFetcher>
    </>
  );
}

export default ShowDealers;
