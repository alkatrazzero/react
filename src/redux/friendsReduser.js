let initialState = {
  onlineFriends: [
    { id: 1, name: "igor" },
    { id: 2, name: "mark" },
    { id: 3, name: "lana" },
  ],

  offlineFriends: [
    { id: 4, name: "alex" },
    { id: 5, name: "vitya" },
    { id: 6, name: "oleg" },
    { id: 7, name: "Dead_inside" },
    { id: 8, name: "kriskostyle" },
  ],
};
const friendsReducer = (state = initialState, action) => {
  return state;
};
export default friendsReducer;
