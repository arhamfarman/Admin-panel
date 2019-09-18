import React from "react";
import reqwest from 'reqwest';
import { avatarIcons } from "../../../configurations/Config";
import { Row, Col, Icon, Divider, Pagination, Progress, Popconfirm } from "antd";
import CardWrapper from "../../../commons/card/index";
import ProgressWrapper from "../../../components/progress/index";
import AvatarWrapper from "../../../components/avatar/index";
import TableWrapper from "../../../components/table/index";
import { userDetails, usersData } from "../../../mocks/users";



class TrafficAndSales extends React.Component {
  constructor(props){
    super(props);
    this.columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        sorter: true,
        render: name => `${name.first} ${name.last}`,
        width: '20%',
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        filters: [{ text: 'Male', value: 'male' }, { text: 'Female', value: 'female' }],
        width: '20%',
      },
      {
        title: 'Email',
        dataIndex: 'email',
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        render: (text, record) =>
          this.state.data.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
              <a>Delete</a>
            </Popconfirm>
          ) : null,
      },
    ];
    this.state = {
      data: [],
      pagination: {},
      loading: false,
    };
  }
  
  componentDidMount() {
    this.fetch();
  }

  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  };
  handleDelete = key => {
    const data = [...this.state.data];
    this.setState({ data: data.filter(item => item.key !== key) });
  };

  fetch = (params = {}) => {
    console.log('params:', params);
    this.setState({ loading: true });
    reqwest({
      url: 'https://randomuser.me/api',
      method: 'get',
      data: {
        results: 10,
        ...params,
      },
      type: 'json',
    }).then(data => {
      const pagination = { ...this.state.pagination };
      // Read total count from server
      // pagination.total = data.totalCount;
      pagination.total = 200;
      this.setState({
        loading: false,
        data: data.results,
        pagination,
      });
    });
  };
  render(){
    const columns = this.columns.map(col => {
        return col;
    });
    return (
      <React.Fragment>
        <Col span={24}>
          <CardWrapper
            type="inner"
            title={"Traffic & Sales"}
            bordered={true}
            headStyle={{ display: "flex" }}
          >
            <Row
              type="flex"
              gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}
              justify="space-between"
            >
              <Col span={12}>
                <Col span={12}>
                  <h3
                    style={{
                      borderLeft: "4px solid",
                      borderRadius: ".25rem",
                      borderLeftColor: "#09d609",
                      textAlign: "left",
                      padding: "8px"
                    }}
                  >
                    New Clients
                  </h3>
                </Col>
                <Col span={12}>
                  <h3
                    style={{
                      borderLeft: "4px solid",
                      borderRadius: ".25rem",
                      borderLeftColor: "#1890ff",
                      textAlign: "left",
                      padding: "8px"
                    }}
                  >
                    Recurring Clients
                  </h3>
                </Col>
                <Divider />
                <Col span={24}>
                  <Col span={4}>Monday</Col>
                  <Col span={20}>
                    <Col span={24}>
                      <ProgressWrapper percent={40} strokeColor="#09d609" />
                    </Col>
                    <Col span={24}>
                      <ProgressWrapper percent={60} />
                    </Col>
                  </Col>
                </Col>
                <Col span={24}>
                  <Col span={4}>Tuesday</Col>
                  <Col span={20}>
                    <Col span={24}>
                      <ProgressWrapper percent={80} strokeColor="#09d609" />
                    </Col>
                    <Col span={24}>
                      <ProgressWrapper percent={90} />
                    </Col>
                  </Col>
                </Col>
                <Col span={24}>
                  <Col span={4}>Wednesday</Col>
                  <Col span={20}>
                    <Col span={24}>
                      <ProgressWrapper percent={30} strokeColor="#09d609" />
                    </Col>
                    <Col span={24}>
                      <ProgressWrapper percent={20} />
                    </Col>
                  </Col>
                </Col>
                <Col span={24}>
                  <Col span={4}>Thursday</Col>
                  <Col span={20}>
                    <Col span={24}>
                      <ProgressWrapper percent={70} strokeColor="#09d609" />
                    </Col>
                    <Col span={24}>
                      <ProgressWrapper percent={90} />
                    </Col>
                  </Col>
                </Col>
                <Col span={24}>
                  <Col span={4}>Friday</Col>
                  <Col span={20}>
                    <Col span={24}>
                      <ProgressWrapper percent={50} strokeColor="#09d609" />
                    </Col>
                    <Col span={24}>
                      <ProgressWrapper percent={40} />
                    </Col>
                  </Col>
                </Col>
                <Col span={24}>
                  <Col span={4}>Saturday</Col>
                  <Col span={20}>
                    <Col span={24}>
                      <ProgressWrapper percent={54} strokeColor="#09d609" />
                    </Col>
                    <Col span={24}>
                      <ProgressWrapper percent={68} />
                    </Col>
                  </Col>
                </Col>
                <Col span={24}>
                  <Col span={4}>Sunday</Col>
                  <Col span={20}>
                    <Col span={24}>
                      <ProgressWrapper percent={34} strokeColor="#09d609" />
                    </Col>
                    <Col span={24}>
                      <ProgressWrapper percent={98} />
                    </Col>
                  </Col>
                </Col>
              </Col>
              <Col span={12}>
                <Col span={12}>
                  <h3
                    style={{
                      borderLeft: "4px solid",
                      borderRadius: ".25rem",
                      borderLeftColor: "#ffc107",
                      textAlign: "left",
                      padding: "8px"
                    }}
                  >
                    Pageviews
                  </h3>
                </Col>
                <Col span={12}>
                  <h3
                    style={{
                      borderLeft: "4px solid",
                      borderRadius: ".25rem",
                      borderLeftColor: "#f86c6b",
                      textAlign: "left",
                      padding: "8px"
                    }}
                  >
                    Organic
                  </h3>
                </Col>
                <Divider />
                <Col span={24}>
                  {/* <Col span={4}><AvatarWrapper src={avatarIcons.male}/></Col> */}
                  <Col span={4}>Male : </Col>
                  <Col span={20}>
                    <ProgressWrapper percent={61} strokeColor="#ffc107" />
                  </Col>
                </Col>
                <Col span={24}>
                  {/* <Col span={4}><AvatarWrapper src={avatarIcons.female}/></Col> */}
                  <Col span={4}>Female : </Col>
                  <Col span={20}>
                    <ProgressWrapper percent={39} strokeColor="#ffc107" />
                  </Col>
                </Col>
                <Divider type="vertical" />
                <Divider />
                <Col span={24}>
                  {/* <Col span={4}><AvatarWrapper src={avatarIcons.male}/></Col> */}
                  <Col span={6}>Organic Search </Col>
                  <Col span={18}>
                    <ProgressWrapper percent={40} strokeColor="#f86c6b" />
                  </Col>
                </Col>
                <Col span={24}>
                  {/* <Col span={4}><AvatarWrapper src={avatarIcons.female}/></Col> */}
                  <Col span={6}>Facebook </Col>
                  <Col span={18}>
                    <ProgressWrapper percent={15} strokeColor="#f86c6b" />
                  </Col>
                </Col>
                <Col span={24}>
                  {/* <Col span={4}><AvatarWrapper src={avatarIcons.female}/></Col> */}
                  <Col span={6}>Twitter </Col>
                  <Col span={18}>
                    <ProgressWrapper percent={20} strokeColor="#f86c6b" />
                  </Col>
                </Col>
                <Col span={24}>
                  {/* <Col span={4}><AvatarWrapper src={avatarIcons.female}/></Col> */}
                  <Col span={6}>LinkenIn </Col>
                  <Col span={18}>
                    <ProgressWrapper percent={5} strokeColor="#f86c6b" />
                  </Col>
                </Col>
              </Col>
              
              <Col span={24}>
                <TableWrapper
                  bordered={true}
                  columns={columns}
                  rowKey={record => record.login.uuid}
                  dataSource={this.state.data}
                  pagination={this.state.pagination}
                  loading={this.state.loading}
                  onChange={this.handleTableChange}
                />
              </Col>
              
            </Row>
          </CardWrapper>
        </Col>
      </React.Fragment>
    );
  }
  
};
export default TrafficAndSales;
