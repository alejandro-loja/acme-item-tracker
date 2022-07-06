import React from "react";
import { connect } from "react-redux";
import axios from "axios";

const DelUser = ({ deleteUser }) => {
  return (
    <div>
      <button onClick={deleteUser}>x</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  //   return {
  //     deleteUser: async () => {
  //       const response = await axios.delete(`/api/users/${id}`);
  //       const user = response.data;
  //       dispatch({ type: "DELETE_USER", user });
  //     },
  //   };
};

export default connect(null, mapDispatchToProps)(DelUser);
