import React, {useEffect, useState} from "react";

const MyProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.myStatus);

  useEffect(()=>{
    setStatus(props.myStatus);
  },[props.myStatus])
  const activateMode = () => {
    setEditMode(true)
  };
  const deactivateMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }
  const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };


  return (
    <div>
      {!editMode &&
      <div>
        <span  onDoubleClick={activateMode}>{props.myStatus || "-----"}</span>
      </div>
      }
      {editMode &&
      <div>
        <input
          onBlur={deactivateMode}
          autoFocus={true}
          placeholder="Plz enter"
          onChange={onStatusChange}
          value={status}
        />
      </div>
      }
    </div>
  );
}
export default MyProfileStatusWithHooks;
