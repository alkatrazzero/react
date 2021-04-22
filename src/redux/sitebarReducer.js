let initialState = {
  mainSiteBar: [
    { id: 1, name: "Profile", adress: "/Profile" },
    { id: 2, name: "Messages", adress: "/Messages" },
    { id: 3, name: "News ", adress: "/News" },
    { id: 4, name: "Music", adress: "/Music" },
    { id: 5, name: "Settings", adress: "/Settings" },
  ],
  friendsSiteBar: [{ id: 1, name: "My friends", adress: "/Friends" }],
};
const sitebarReducer = (state = initialState, action) => {
  return state;
};
export default sitebarReducer;
