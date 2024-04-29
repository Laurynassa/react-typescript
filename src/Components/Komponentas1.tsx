import React, { useRef, useState } from "react";
import User, { Counter } from "../Interfaces/Interface";

const Komponentas1 = ({ count, setCount }: Counter) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [square, setSquare] = useState<Array<number | string>>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleClick = (id: number) => {
    console.log(id);
  };

  return <div> Komponentas1 </div>;
};

export default Komponentas1;
