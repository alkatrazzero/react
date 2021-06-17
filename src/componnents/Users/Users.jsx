import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/2.png";
import {NavLink} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import {Input, Pagination} from 'antd'

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    console.log(props.totalUsersCount / props.pageSize, "ds")
    console.log(pagesCount, "pagesCount")
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    const {Search} = Input;
    const onSearch = value => console.log(value);
    return (
      <>{props.isFetching ? <Preloader/> : <div className={s.users}>
        <div>
          <Pagination className={s.Pagination} onShowSizeChange={(i, e) => props.setPageSize(e)} pageSize={props.pageSize}
                      current={props.currentPage} onChange={(page, pageSize) => props.onPageChanged(page, pageSize)}
                      defaultCurrent={1} size={"small"}
                      total={props.totalUsersCount}/>
          <Search className={s.Search}
                  placeholder="input search text"
                  allowClear
                  enterButton="Search"
                  size="small"
                  onSearch={onSearch}
            // onPressEnter={}
          />
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
