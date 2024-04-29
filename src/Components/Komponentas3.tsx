import React from "react";
import User, { Users } from "../Interfaces/Interface";

const Komponentas3 = ({ users }: Users) => {
  return (
    <div>
      <p>Komponentas3</p>
      <ul>
        {users.map((el) => (
          <li key={el.firstname}>
            {el.firstname}hobbies are: {"  "}
            <span>
              {el.hobbies.map((hobby) => (
                <span key={hobby}>
                  {hobby},{"  "}
                </span>
              ))}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Komponentas3;
