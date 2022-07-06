import { createStore } from "redux";

const initialState = {
  view: window.location.hash.slice(1),
  users: [],
  things: [],
};

const store = createStore((state = initialState, action) => {
  if (action.type === "SET_THINGS") {
    return { ...state, things: action.things };
  }
  if (action.type === "SET_USERS") {
    return { ...state, users: action.users };
  }
  if (action.type === "SET_VIEW") {
    return { ...state, view: action.view };
  }
  if (action.type === "CREATE_THING") {
    return { ...state, things: [...state.things, action.thing] };
  }
  if (action.type === "CREATE_USER") {
    return { ...state, users: [...state.users, action.user] };
  }
  if (action.type === "DELETE_USER") {
    const updatedUsers = state.users.filter(
      (_user) => action.user.id !== _user.id
    );
    return { ...state, users: updatedUsers };
  }
  if (action.type === "DELETE_THING") {
    const updatedThings = state.things.filter(
      (_thing) => action.thing.id !== _thing.id
    );
    return { ...state, things: updatedThings };
  }

  if (action.type === "INC_THING") {
    const updatedThings = state.things.filter(
      (_thing) => action.thing.id !== _thing.id
    );
    return { ...state, things: [...updatedThings, action.thing] };
  }

  if (action.type === "SUB_THING") {
    const updatedThings = state.things.filter(
      (_thing) => action.thing.id !== _thing.id
    );
    return { ...state, things: [...updatedThings, action.thing] };
  }
  return state;
});

export default store;
