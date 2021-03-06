import React, { useState } from "react";
import ContentHeader from "./ContentHeader";
//import {  tableData } from "../../mocks/users";
import TableWrapper from "../../components/react-table";
import TagWrapper from "../../components/tag";
import SwitchWrapper from "../../components/switch";
import AvatarWrapper from "../../components/avatar/index";
import { Row, Col } from "antd";
import { connect } from "react-redux"
import { getUsers } from "../../actions/Users"
import ProfileDetails from "./ProfileDetails";

const testfunc = () => console.log("HEEEEYYYY", this);
const statusMapper = (status) => {
  let map = {
    Free: "primary",
    Subscribed: "secondary",
    Paused: "third",
    Banned: "fourth"
  }
  return map[status];
}

const Users = props => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [state, setState] = useState({ apiCall: (...params) => props.dispatch(getUsers(...params)) });
  //console.log("USERS PROPS", props);
  return (
    
    <Row>
      {/* <button onClick={() => setProfileOpen(true)}>Open profile</button> */}
      
      {profileOpen ? (
        <ProfileDetails handleOpen={() => setProfileOpen(false)} />
      ) : null}
      <Col span={24}>
        <ContentHeader title="Users" count={542}
          options={[{ label: "View All", value: "all" },
          { label: "Free", value: "free" },
          { label: "Subscribed", value: "subscribed" },
          { label: "Paused", value: "paused" },
          { label: "Banned", value: "banned" },]} />
        {/* <button onClick={state.apiCall}>asd</button> */}
      </Col>
      <Col span={24} style={{ margin: "40px 0px 50px 0px" }}>
        <TableWrapper
          tableData={props.userData.users}
          //getData={(...params) => props.dispatch(getUsers(...params))}
          getData={state.apiCall}
          pageSize={5}
          dataCount={props.userData ? props.userData.length : 0}
          enableReInit={true}
          content={[{ name: "", id: "profilePic", centered: true, small: true, sortable: false, render: (r) => { return <AvatarWrapper size="large" src={r.original[r.column.id]}></AvatarWrapper>; } },
          { name: "Name", id: "username", render: (r) => { return <span style={{ cursor: "pointer" }} onClick={() => setProfileOpen(true)}>{r.original[r.column.id]}</span>; } },
          { name: "Email", id: "email", sortable: false, },
          { name: "Status", id: "status", sortable: false, render: r => <TagWrapper type={statusMapper(r.original[r.column.id])}>{r.original[r.column.id]}</TagWrapper> },
          { name: "Actions", id: "actions", sortable: false, render: r => <div><SwitchWrapper defaultChecked={r.original["status"] !== "Banned"} style={{ marginRight: 10 }}></SwitchWrapper> User is {r.original["status"] !== "Banned" ? "Active" : "In-Active"}</div> }]}
        />
      </Col>
    </Row>
  )

}

export default connect((storeState) => ({ userData: storeState.Users }))(Users);