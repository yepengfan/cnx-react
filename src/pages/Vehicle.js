import React from "react";

function Vehicle(props) {
  const { data } = props;
  return (
    <>
      <h3>{data.vin}</h3>
      <ul>
        <li>bac: {data.bac}</li>
        <li>vin: {data.vin}</li>
        <li>ctpStatus: {data.ctpStatus}</li>
        <li>onstarStatus: {data.onstarStatus}</li>
        <li>createdAt: {data.events[0].eventDate}</li>
        <li>make: {data.make}</li>
        <li>model: {data.model}</li>
        <li>telemetryPnid: {data.telemetryPnid}</li>
        <li>color: {data.color}</li>
        <li>stockNumber: {data.stockNumber}</li>
        <li>year: {data.year}</li>
      </ul>
    </>
  );
}

export default Vehicle;
