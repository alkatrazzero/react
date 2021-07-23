import {Field, Form, Formik} from "formik";
import React from "react";
import {FilterType} from "../../redux/usersReduser";
import {useSelector} from "react-redux";
import {getUsersFilter} from "../../redux/usersSelectors";

const usersSearchValidate = (values: any) => {
  const errors = {}
  return errors
}
type FriendType = 'true' | 'false' | 'null';
type FormType = {
  term: string,
  friend: FriendType
}
type PropsType = {
  onFilterChanged: (filter: FilterType) => void
}
export const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {
  const filter =useSelector(getUsersFilter)
  const submit = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
    // @ts-ignore
    props.onFilterChanged(values)
    console.log(values)
  }


  return <div>
    <Formik
      // enableReinitialize
      initialValues={{term: filter.term, friend: String(filter.friend)as FriendType}}
      validate={usersSearchValidate}
      onSubmit={submit}
    >
      {({isSubmitting}) => (
        <Form>
          <Field type={"text"} name={"term"}/>
          <Field name={"friend"} as={"select"}>
            <option value={"null"}>ALL</option>
            <option value={"true"}>only followed</option>
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
