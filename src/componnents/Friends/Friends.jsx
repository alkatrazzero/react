import React from "react";
import s from "../Friends/Friends.module.css";
import OfflineFriends from "./OfflineFriends";
import OnlineFriends from "./OnlineFriends";
const Friends = (props) => {console.log(props);
    let onlineFriends = props.state.onlineFriends.map((dialog) => (
        <OnlineFriends name={dialog.name} id={dialog.id} />
      ));
      let offlineFriends = props.state.offlineFriends.map((dialog) => (
        <OfflineFriends name={dialog.name} id={dialog.id} />
      ));
  return (
    <div className = {s.friends}>
      <div>This Friends now online {onlineFriends}</div>
      
       
      <div>This friends now Offline {offlineFriends}</div>
      
    
    </div>
  );
};
export default Friends;
