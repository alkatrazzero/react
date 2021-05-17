import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/2.png";
import { NavLink } from "react-router-dom";
let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={s.users}>
      <div>
        {pages.map((page) => (
          <span
            onClick={(e) => {
              props.onPageChanged(page);
            }}
            className={props.currentPage === page && s.selectedPage}
          >
            {page}.
          </span>
        ))}
      </div>
      {props.users.map((u) => (
        <div key={u.id} className={s.container}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  className={s.avatar}
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                />
              </NavLink>
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
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div className={s.location}>{"u.location.country"}</div>
              <div className={s.location}>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
export default Users;
