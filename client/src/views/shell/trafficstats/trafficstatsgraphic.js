import React from "react";
import { Row, Col } from "antd";
import CardWrapper from "../../../components/card/index";
import StatisticWrapper from "../../../components/card/Statistics";
import trafficData from "../../../mocks/trafficstats";
import RenderChart from "./Chart";
import Icon from "../../../components/Icon/index";

const TrafficStatsGraphic = () => {
  return (
    <React.Fragment>
      <Col span={24}>
        <CardWrapper className="mainContentDiv"
          type="inner"
          title={"Traffic Statictics"}
          bordered={true}
          headStyle={{ display: "flex" }}
        >
          <Col span={24}><RenderChart/></Col>
          <Col className="innerContentSpacing innerSmallCard" span={6}>
            <CardWrapper>
              <StatisticWrapper
                title="Daily unique Visitors"
                value={trafficData.uniquevisitors}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<Icon type="arrow-up" />}
                suffix="%"
              />
            </CardWrapper>
          </Col>
          <Col className="innerContentSpacing innerSmallCard" span={6}>
            <CardWrapper>
              <StatisticWrapper
                title="Page Views"
                value={trafficData.pageviews}
                valueStyle={{ color: "#3f8600" }}
              />
            </CardWrapper>
          </Col>
          <Col className="innerContentSpacing innerSmallCard" span={6}>
            <CardWrapper>
              <StatisticWrapper
                title="New Users"
                value={trafficData.newusers}
                valueStyle={{ color: "#3f8600" }}
              />
            </CardWrapper>
          </Col>
          <Col className="innerContentSpacing innerSmallCard" span={6}>
            <CardWrapper>
              <StatisticWrapper
                title="Bounce Rate"
                value={trafficData.bouncerate}
                valueStyle={{ color: "#3f8600" }}
                suffix="%"
              />
            </CardWrapper>
          </Col>
        </CardWrapper>
      </Col>
    </React.Fragment>
  );
};
export default TrafficStatsGraphic;
