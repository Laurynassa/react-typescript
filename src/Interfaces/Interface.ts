import { Dispatch } from "react";
interface User {
  firstname: string;
  age: number;
}

export default User;

export interface Counter {
  count: number;
  setCount: Dispatch<React.SetStateAction<number>>;
  users?: User[];
}

export interface RandomTxt {
  Text: string;
}

interface RandomUsers {
  firstname: string;
  lastname: string;
  age: number;
  hobbies: string[];
}

export interface Users {
  users: RandomUsers[];
}

export interface Counter1 {
  setCount: Dispatch<React.SetStateAction<number>>;
}
