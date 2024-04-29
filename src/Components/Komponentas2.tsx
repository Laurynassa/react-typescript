import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { RandomTxt } from "../Interfaces/Interface";

const Komponentas2 = ({ Text }: RandomTxt) => {
  return <div>Komponentas2 {Text}</div>;
};

export default Komponentas2;
