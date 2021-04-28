const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
let initialState = {
  users: [
    {
      id: 1,
      photoUrl:
        "https://99px.ru/sstorage/1/2021/04/image_11204211950309041720.jpg",
      followed: true,
      fullName: "mark",
      status: "hello",
      location: { city: "Simferopol", country: "Crimea" },
    },
    {
      id: 2,
      photoUrl:
        "https://99px.ru/sstorage/1/2021/04/image_10404211724445273861.jpg",
      followed: false,
      fullName: "oleg",
      status: "my",
      location: { city: "Sevastopol", country: "Crimea" },
    },
    {
      id: 3,
      photoUrl:
        "https://99px.ru/sstorage/1/2021/04/image_10404211721184311836.jpg",
      followed: true,
      fullName: "lana",
      status: "name",
      location: { city: "Moskow", country: "Russia" },
    },
    {
      id: 4,
      photoUrl:
        "https://99px.ru/sstorage/1/2021/04/image_10304211049027717371.jpg",
      followed: true,
      fullName: "vitya",
      status: "1488",
      location: { city: "Yalta", country: "Crimea" },
    },
    {
      id: 5,
      photoUrl:
        "https://99px.ru/sstorage/1/2021/03/image_13003211841392956145.gif",
      followed: false,
      fullName: "dima",
      status: "228",
      location: { city: "Kiyv", country: "Ukraine " },
    },
    {
      id: 6,
      photoUrl:
        "https://99px.ru/sstorage/1/2021/04/image_10404211725157162101.jpg",
      followed: true,
      fullName: "christofor",
      status: "322",
      location: { city: "Cherson", country: "Ukraine" },
    },
    {
      id: 7,
      photoUrl:
        "https://99px.ru/sstorage/1/2021/04/image_10304211048291819418.jpg",
      followed: true,
      fullName: "rafael",
      status: "ya ninja",
      location: { city: "Odessa", country: " Ukraine " },
    },
    {
      id: 8,
      photoUrl:
        "https://99px.ru/sstorage/1/2021/04/image_10404211721184311836.jpg",
      followed: false,
      fullName: "leonardo",
      status: "ya samurai",
      location: { city: "Evpatoria", country: "Crimea " },
    },
  ],
};
const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };
    default:
      return state;
  }
};
export const followAC = (userId) => {
  return { type: FOLLOW, userId };
};
export const unFollowAC = (userId) => {
  return { type: UNFOLLOW, userId };
};
export const setUsersAC = (users) => {
  return { type: SET_USERS, users };
};

export default usersReduser;
