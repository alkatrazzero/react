import React, {FC} from "react";
// @ts-ignore
import * as s from "./Users.css.d.ts";
// @ts-ignore
import userPhoto from "../../assets/images/2.png";
import {NavLink} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import {Input, Pagination} from 'antd'
import {usersType} from "../../types/types";

type PropsType = {
  isFetching: boolean,
  users: Array<usersType>,
  isAuth: boolean,
  followingInProgress: Array<number>
  unFollow: (userId: number) => void,
  follow: (userId: number) => void
  setPageSize: (pageSize: number) => void
  pageSize: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  totalUsersCount: number
  loadMoreUsers: any
}
let Users: FC<PropsType> = (props) => {

  // @ts-ignore
  return (
    <>{props.isFetching ? <Preloader/> : <div>
      {props.users.map((u:any) => (
        <div key={u.id}>
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
                  disabled={props.followingInProgress.some((id: number) => id === u.id)}
                  onClick={() => {
                    props.unFollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id: number) => id === u.id)}
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
            <span >
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
      <Pagination onShowSizeChange={(i, e) => props.setPageSize(e)} pageSize={props.pageSize}
                  current={props.currentPage} onChange={(page) => props.onPageChanged(page)}
                  defaultCurrent={1} size={"small"}
                  total={props.totalUsersCount}/>
      <button onClick={props.loadMoreUsers}>more</button>
    </div>}
    </>
  );

};
export default Users;
