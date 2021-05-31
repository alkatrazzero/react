import React from "react";
class MyProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };
  activateEditMode = () => {
    this.setState({ editMode: true });
  };
  deactivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value });
  };
  // userApi.getStatus()

  render() {
    return (
      <>
        {!this.state.editMode ? (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || "-----"}
            </span>
          </div>
        ) : (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              value={this.state.status}
              placeholder="Plz enter"
            ></input>
          </div>
        )}
        <div>{/* <button>Submit</button> */}</div>
      </>
    );
  }
}
export default MyProfileStatus;
