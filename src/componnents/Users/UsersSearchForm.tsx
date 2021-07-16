import {Field, Form, Formik} from "formik";
import React from "react";
import {FilterType} from "../../redux/usersReduser";

const usersSearchValidate = (values: any) => {
  const errors = {}
  return errors
}
type PropsType = {
  onFilterChanged: (filter: FilterType) => void
}
export const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {
  const submit = (values: FilterType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
    props.onFilterChanged(values)
    console.log(values)
  }

  return <div>
    <Formik
      initialValues={{term: '',friend:null}}
      validate={usersSearchValidate}
      onSubmit={submit}
    >
      {({isSubmitting}) => (
        <Form>
          <Field type={"text"} name={"term"}/>
          <Field name={"friend"} as={"select"}>
            <option value={"null"}>ALL</option>
            <option value={"true"}>only followed </option>
            <option value={"false"}>only Unfollowed</option>

          </Field>
          <button type="submit" disabled={isSubmitting}>
            Find
          </button>
        </Form>
      )}
    </Formik>
  </div>

})
