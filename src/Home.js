import React from "react";
import { connect } from "react-redux";

const Home = ({ users, things, maxObj }) => {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Here at the Acme Item Tracker Corp we have {users.length} users and{" "}
        {things.length} things!
      </p>
      <p>
        {things.length > 0
          ? `The highest ranked item is: ${maxObj.name}`
          : "Loading"}
      </p>
    </div>
  );
};

const mapSToP = (s) => {
  console.log(s.things);
  let maxObj;
  if (s.things.length > 0) {
    maxObj = s.things.reduce(function (max, obj) {
      return obj.count > max.count ? obj : max;
    });
  }

  return {
    users: s.users,
    things: s.things,
    maxObj: maxObj,
  };
};

export default connect(mapSToP)(Home);
