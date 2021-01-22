import React from "react";

function Card(props) {

  return (
    <tr>
      <th>
        <img alt={props.firstName} src={props.picture} />
      </th>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td><a href={"mailto:" + props.email} target="__blank">
        {props.email}
      </a>
      </td>
      <td>{props.phone}</td>
    </tr>
  );
}

export default Card;