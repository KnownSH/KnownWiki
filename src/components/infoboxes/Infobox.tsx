import React from "react";
import "../../styles/infobox.scss";
import { type PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  title: string;
}

function Infobox(props: Props): JSX.Element {
  return (
    <table className="infobox">
      <caption className="infobox-title">{props.title}</caption>
      <tbody>
        {props.children}
      </tbody>
    </table>
  )
}

export default Infobox;