import React from "react";
import {Users} from "./Users";

type UsersPagePropsType = {

  pageTitle: string,


}
export const UsersPage: React.FC<UsersPagePropsType> = (props) => {

  return <>
    <h2>{props.pageTitle}</h2>
    <Users />
  </>
}


