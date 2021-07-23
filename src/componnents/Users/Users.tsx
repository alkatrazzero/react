import React, {FC, useEffect} from "react";
// @ts-ignore
import * as s from "./Users.css.d.ts";
// @ts-ignore
import userPhoto from "../../assets/images/2.png";
import {NavLink, useHistory} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import {Pagination} from 'antd'
import {UsersSearchForm} from "./UsersSearchForm";
import {FilterType, follow, getUsers, loadMoreUsers, setPageSize, unFollow} from "../../redux/usersReduser";
import {useDispatch, useSelector} from "react-redux";
import {
  getCurrentPage, getFetching, getFollowingInProgress, getIsAuthData,
  getPageSize,
  getTotalUsersCount,
  getUsersFilter,
  getUsersState
} from "../../redux/usersSelectors";
import * as queryString from "querystring";

type PropsType = {}
export const Users: FC<PropsType> = (props) => {
  const history = useHistory()
  const isAuth = useSelector(getIsAuthData)
  const totalUsersCount = useSelector(getTotalUsersCount)
  const currentPage = useSelector(getCurrentPage)
  const pageSize = useSelector(getPageSize)
  const onPageChanged = (page: number) => {
    let pageSize = 10
    dispatch(setPageSize(10))
    dispatch(getUsers(page, 10, filter))
  }
  const onFilterChange = (filter: FilterType) => {
    dispatch(getUsers(1, pageSize, filter));
  }
  const filter = useSelector(getUsersFilter)
  const isFetching = useSelector(getFetching)
  const users = useSelector(getUsersState)
  const followingInProgress = useSelector(getFollowingInProgress)
  const loadMoreUsersDispatch = () => {
    dispatch(loadMoreUsers())
  }
  const setPageSizeDispatch = (size: number) => {
    dispatch(setPageSize(size))
  }
  const followDispatch = (userId: number) => {
    dispatch(follow(userId))
  }
  const unFollowDispatch = (userId: number) => {
    dispatch(unFollow(userId))
  }
  const dispatch = useDispatch()


  useEffect(() => {
    const parsed = queryString.parse(history.location.search.substr(1))
    let actualPage = currentPage
    let actualFilter = filter
    if (!!parsed.page) actualPage = Number(parsed.page)
    if (!!parsed.term) actualFilter = {...actualFilter, term: parsed.term as string}
    if (!!parsed.friend) actualFilter = {
      ...actualFilter,
      friend: parsed.friend === 'null' ? null : parsed.friend === 'true' ? true : false
    }
    dispatch(getUsers(actualPage, 10, actualFilter))
  }, []);
 useEffect(() => {
   const query:any ={}
   if(!!filter.term) query.term =filter.term
    if(filter.friend!==null) query.friend =String(filter.friend)
    if(currentPage!==1) query.page =String(currentPage)
    history.push({
      pathname:'/users',
      search:queryString.stringify(query)
    })
  }, [filter,currentPage]);

  // @ts-ignore
  return (
    <>{isFetching ? <Preloader/> : <div>
      <div><UsersSearchForm onFilterChanged={onFilterChange}/></div>
      {users.map((u: any) => (
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
            {isAuth ? <div>
              {u.followed ? (
                <button
                  disabled={followingInProgress.some((id: number) => id === u.id)}
                  onClick={() => {
                    unFollowDispatch(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={followingInProgress.some((id: number) => id === u.id)}
                  onClick={() => {
                    followDispatch(u.id);
                  }}
                >
                  follow
                </button>
              )}
            </div> : null}
          </span>
          <span>
            <span>
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
      <Pagination onShowSizeChange={(i, e) => setPageSizeDispatch(e)} pageSize={pageSize}
                  current={currentPage} onChange={(page) => onPageChanged(page)}
                  defaultCurrent={1} size={"small"}
                  total={totalUsersCount}/>
      <button onClick={loadMoreUsersDispatch}>more</button>
    </div>}
    </>
  );

};



