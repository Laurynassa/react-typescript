import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import "./App.css";
import Komponentas1 from "./Components/Komponentas1";
import Komponentas2 from "./Components/Komponentas2";
import Komponentas3 from "./Components/Komponentas3";
import PliusMinus from "./Components/PliusMinus";

function App() {
  // let myNumber: number;
  // myNumber = 25;
  // let myName: string;
  // myName = "45";
  // let isOpen: boolean;
  // isOpen = true;
  // let numbersArray: number[];
  // numbersArray = [56];
  // let myStringArray: string[] = ["ola"];
  // myStringArray = ["dobre"];
  // let litleString: Array<string> = ["alo"];
  // let myTuple: [number, string];
  // myTuple = [5, "hello"];
  // ------------Objects------------
  // let myObject: Object; nerekomenduoja, geriau typealias arba interface

  // type MyType = string | number | boolean;

  // type MyUser = {
  //   firstName: string;
  //   age: number;
  //   hobbies?: string[];
  // };
  // let user: User = {
  //   firstName: "Jonas",
  //   age: 25,
  // };
  // let useris: Coworker = {
  //   firstName: "Jonas",
  //   age: 25,
  //   id: 1354,
  //   departament: "Finances",
  // };
  // interface User {
  //   firstName: string;
  //   age: number;
  //   hobbies?: string[];
  // }

  // let usersArray: MyUser[];
  // usersArray = [
  //   {
  //     firstName: "Jonas",
  //     age: 25,
  //   },
  //   {
  //     firstName: "Jonas",
  //     age: 25,
  //   },
  //   {
  //     firstName: "Jonas",
  //     age: 25,
  //   },
  // ];

  // type Coworker = MyUser & {
  //   id: number;
  //   departament: string;
  // };

  // let myFunction: (name: string)=> void; atskiram file taip apsiraso

  // function myFunction(name: string) {
  //   return name;
  // }
  // myFunction("John");
  // const [count, setCount] = useState<number>(0);
  // enum Weekdays {
  //   Monday = 100,
  //   Tuesday,
  //   Wednesday,
  //   Thursday,
  //   Friday,
  //   Saturday,
  //   Sunday,
  // }
  // let Today: Weekdays = Weekdays.Monday;
  // console.log(Today);

  let Users = [
    {
      firstname: "Petras",
      lastname: "Petraitis",
      age: 25,
      hobbies: ["dancing,drinking"],
    },
    {
      firstname: "Jonas",
      lastname: "Jonaitis",
      age: 25,
      hobbies: ["driving,basketball"],
    },
    {
      firstname: "Tomas",
      lastname: "Tomaitis",
      age: 25,
      hobbies: ["jumping,looking"],
    },
    {
      firstname: "Lukas",
      lastname: "Lukaitis",
      age: 25,
      hobbies: ["coding,crying"],
    },
  ];

  const [count, setCount] = useState<number>(0);

  return (
    <div>
      {/* <Komponentas1 count={count} setCount={setCount} users={[]} /> */}
      <Komponentas2 Text={"Labas krabas, ananasas"} />
      <Komponentas3 users={Users} />
      {count}
      <PliusMinus setCount={setCount} />
    </div>
  );
}

export default App;
