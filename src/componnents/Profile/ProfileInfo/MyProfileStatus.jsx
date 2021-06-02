import React from "react";
class MyProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.myStatus,
  };
  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value });
  };
  clearStatus = () => {
    this.setState({ status: " " });
  };
  activateEditMode = () => {
    this.setState({ editMode: true });
  };
  deactivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.myStatus !== this.props.myStatus) {
      this.setState({ status: this.props.myStatus });
    }
  }

  // userApi.getStatus()

  render() {
    console.log("render");
    return (
      <>
        {!this.state.editMode ? (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.myStatus || "-----"}
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
        <div>
          <button onClick={this.clearStatus}>Clear Status</button>
        </div>
      </>
    );
  }
}
export default MyProfileStatus;
