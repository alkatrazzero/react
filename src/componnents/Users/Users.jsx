import * as axios from "axios";
import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/2.png";
class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render = () => {
    return (
      <div className={s.users}>
        {this.props.users.map((u) => (
          <div key={u.id} className={s.container}>
            <span>
              <div>
                <img
                  className={s.avatar}
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unFollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
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
}

export default Users;
