import React from "react";
import {
  Table,
  Tag,
  Space,
  Avatar,
  Dropdown,
  Button,
  Menu,
  message,
} from "antd";
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import GraphImage from "../../../Assets/Graph.png";
import Graphbar from "../../../Assets/Graphbar.png";
import Greencolor from "../../../Assets/greencolor.png";
import Orangecolor from "../../../Assets/orangecolor.png";
import Bluecolor from "../../../Assets/bluecolor.png";
import Browncolor from "../../../Assets/Browncolor.png";
import "./style.scss";

const DataNetProcess = () => {
    const menu = (
        <Menu
         // onClick={handleMenuClick}
          items={[
            {
              label: '1st menu item',
              key: '1',
              icon: <UserOutlined />,
            },
            {
              label: '2nd menu item',
              key: '2',
              icon: <UserOutlined />,
            },
            {
              label: '3rd menu item',
              key: '3',
              icon: <UserOutlined />,
            },
          ]}
        />
      );
  return (
    <div className="data-container">
      <h4>Net Process Per User</h4>
      <div className="dataChart">
        <h4>Total value of shares </h4>
        <div className="image_container">
          <img src={GraphImage} />
        </div>
        <div className="datacolor">
        <span> Share Sold  <img src={Orangecolor}/> </span> <span>Share Buy <img src={Bluecolor}/></span> <span> Profit  <img src={Greencolor}/></span>
        </div>
      </div>

      <div>
      <h4>Underwriting Proceeds Per Brand</h4>
      <div className="dataChart">
      <div classname="dropdown">
      <Dropdown overlay={menu}>
      <Button>
        <Space>
          Button
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
      </div>
      
        <div className="image_container">
          <img src={Graphbar} />
        </div>
        <div className="datacolor">
        <span>Underwriting Value <img src={Browncolor}/> </span> <span> MB.X Admin Fee (5%) <img src={Orangecolor}/></span>
        </div> 
      </div>
      </div>
    </div>
  );
};

export default DataNetProcess;
