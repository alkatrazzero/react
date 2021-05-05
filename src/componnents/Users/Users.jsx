import React, { useEffect } from "react";
import s from "./Users.module.css";
const Users = (props) => {
  useEffect(() => {
    props.setUsers([
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
    ]);
  }, []);
  //   if (props.users.length === 0) {
  //     console.log(props.users, "f");
  //     props.setUsers();
  //   }
  //   console.log(props.users);
  return (
    <div className={s.users}>
      {props.users.map((u) => (
        <div key={u.id} className={s.container}>
          <span>
            <div>
              <img className={s.avatar} src={u.photoUrl} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unFollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span className={s.status}>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div className={s.location}>{u.location.country}</div>
              <div className={s.location}>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
export default Users;
