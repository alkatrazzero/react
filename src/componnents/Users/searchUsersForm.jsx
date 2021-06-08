import {reduxForm, Field} from "redux-form";
import React from "react";
const SearchUsersForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field type={"search"} component={"select"} name={"search"}>
          <option>10</option>
          <option>20</option>
          <option>50</option>
        </Field>
        <button>kkjk</button>
      </div>

    </form>
  );
};
export const SearchReduxForm = reduxForm({
    form: "search",
  }
)(SearchUsersForm);
