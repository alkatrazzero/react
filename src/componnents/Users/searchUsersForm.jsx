import {reduxForm, Field} from "redux-form";
import React from "react"
import s from "./Users.module.css"
const SearchUsersForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div> <span className={s.span}>select page size  </span>
        <Field type={"search"} component={"select"} name={"search"}>
          <option>10</option>
          <option>20</option>
          <option>50</option>
        </Field>
        <button>submit</button>
      </div>

    </form>
  );
};
export const SearchReduxForm = reduxForm({
    form: "search",
  }
)(SearchUsersForm);
