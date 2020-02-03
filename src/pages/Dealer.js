import React from "react";
import { Link } from "react-router-dom";

function Dealer(props) {
  const { data } = props;
  return (
    <>
      <h3>
        <Link to={`/dealers/${data.bac}/vehicles`}>{data.name}</Link>
      </h3>
      <ul>
        <li>BAC: {data.bac}</li>
        <li>City: {data.city}</li>
        <li>State: {data.state}</li>
        <li>Country: {data.country}</li>
        <li>Brand: {data.brand}</li>
      </ul>
    </>
  );
}

export default Dealer;
