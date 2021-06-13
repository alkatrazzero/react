import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/2.png";
import {NavLink} from "react-router-dom";
import {SearchReduxForm} from "./searchUsersForm";
import Preloader from "../common/Preloader/Preloader";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    const onSubmit = (formData) => {
      if (formData.search) {
        return (props.setPageSize(formData.search),
          props.getUsers(props.currentPage, formData.search))
      }
      return (props.setPageSize(10),
        props.getUsers(props.currentPage, 10))


      // props.getUsers(props.currentPage, formData.search))

    }
    return (
      <>{props.isFetching ? <Preloader/> : <div className={s.users}>
        <SearchReduxForm onSubmit={onSubmit}/>

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
            {props.isAuth ? <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.unFollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  follow
                </button>
              )}
            </div> : null}
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
      </div>}
      </>
    );
  }
;
export default Users;
