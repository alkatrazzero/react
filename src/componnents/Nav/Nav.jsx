import React from "react";
import classes from "./Nav.module.css";
import FriendsOnline from "./friendsOnline/FriendsOnline";
import NavRender from "./friendsOnline/NavRender";
import FriendsRender from "./friendsOnline/FriendsRender";
const Nav = (props) => {
  let friendsOnline = props.state.onlineFriends.map((dialog) => (
    <FriendsOnline name={dialog.name} key={dialog.id} id={dialog.id} />
  ));
  let navRender = props.sitebar.mainSiteBar.map((s) => (
    <NavRender adress={s.adress} key={s.id} name={s.name} />
  ));
  let friendsSiteBar = props.sitebar.friendsSiteBar.map((f) => (
    <FriendsRender adress={f.adress} key={f.id} name={f.name} />
  ));
  return (
    <nav className={classes.Nav}>
      <div className={classes.navBar}>{navRender} </div>
      <div className={classes.friendsSiteBar}>{friendsSiteBar}</div>
      <div className={classes.friendsOnline}>{friendsOnline}</div>
    </nav>
  );
};
/* // <nav className={classes.Nav}>
    //   <div className={classes.item}>
    //     <NavLink to="/profile" activeClassName={classes.activeLink}>
    //       Profile
    //     </NavLink>
    //   </div>
    //   <div className={classes.item}>
    //     <NavLink to="/Messages" activeClassName={classes.activeLink}>
    //       Messages
    //     </NavLink>
    //   </div>
    //   <div className={classes.item}>
    //     <NavLink to="/News" activeClassName={classes.activeLink}>
    //       News
    //     </NavLink>
    //   </div>
    //   <div className={classes.item}>
    //     <NavLink to="/Music" activeClassName={classes.activeLink}>
    //       Music
    //     </NavLink>
    //   </div>
    //   <div className={classes.item}>
    //     <NavLink to="/Settings" activeClassName={classes.activeLink}>
    //       <div className={classes.settings}>Settings</div>
    //     </NavLink>
    //     <div className={classes.item}>
    //       <NavLink to="/Friends" activeClassName={classes.activeLink}>
    //         <div className={classes.friends}>Friends </div>
    //       </NavLink>
    //       <a href="">
    //         <div> {friendsOnline}</div>
    //       </a>
    //     </div>
    //   </div>
    // </nav>
  );
}; */
export default Nav;
