import React, { useState , useEffect } from "react";
import "antd/dist/antd.css";
// import './index.css';
import { Layout, Menu, Breadcrumb } from "antd";

import user from "../../Assets/Group.svg";
import Refund from "../../Assets/refund.svg";
import DataAnalytics from "../../Assets/Frame.svg";
// import { ReactComponent as UpArrow } from "../../Assets/UpArrow.svg";
// import { ReactComponent as downArrow } from "../../Assets/downArrow.svg";
import "./style.scss";
import CommonMenu from "../common/menu";
import AddManageUser from "../Pages/AddManageUser";
import AddManageBrand from "../Pages/AddManageBrand";
import Header from "../Header/Header";
import DataNetProcess from "../Pages/Data_Net_Process";
import UserProfile from "../Pages/UserProfile";
const { Content, Sider } = Layout;



const sideBarOptions = [
  {
    key: "1",
    icon: <img src={user} />,
    title: "User Management",
    menuItem: [
      { 
        key: "1",
        name: "Manage User",
        routepath:"/"
      },
      {
        key: "2",
        name: "Manage Brand ",
        routepath:"/managebrand"
      },
    ],
  },
  {
    key: "2",
    icon: <img src={DataAnalytics} />,
    title: "Data Analytics",
    menuItem: [
      {
        key: "1",
        name: "Net Process Per User",
        routepath:"/datanetprocess"
      },
      {
        key: "2",
        name: "Underwriting ProceedsPer Brand ",
        routepath:"/datanetprocess"
      },
      {
        key: "3",
        name: "User Profiles ",
        routepath:"/userProfile"
      },
      {
        key: "4",
        name: "Current Brand Value",
      },
      {
        key: "5",
        name: "Total Value of Platform",
      },
      {
        key: "6",
        name: "Brand Distribution List",
      },
      {
        key: "7",
        name: "Transaction History",
      },
    ],
  },
  {
    key: "3",
    icon: <img src={user} />,
    title: "Underwriting Admin",
    menuItem: [
      {
        key: "1",
        name: "Brand Listing",
      },
      {
        key: "2",
        name: "Short Sellers ",
      },
      {
        key: "3",
        name: "User Profiles ",
      },
      {
        key: "4",
        name: "Full Value Brands",
      },
    ],
  },
  {
    key:"4",
    icon:<img src={Refund} />,
    title:"Refund Requests",
    menuItem: []
  }
];



const Sidebar = () => {
  const [tab , settab] = useState(1)


  // function getItem(label, key, icon, children, type) {
  //   return {
  //     key,
  //     icon,
  //     children,
  //     label,
  //     type,
  //   };
  // }

  const href = window.location.pathname;
  useEffect(() => {
   pathhref(href)
  }, [href])

  const pathhref = (path)=>{
    switch(path) {
      case "/":return settab(1)
      case "/managebrand":return settab(2)
      case "/datanetprocess":return settab(3)
      case "/userProfile":return settab(4)
      default: return settab(1)
        
    }
  };

  const renderComponent = (tab)=>{
    switch(tab){
      case 1:return<AddManageUser/>
      case 2:return<AddManageBrand/>
      case 3:return<DataNetProcess/>
      case 4:return<UserProfile/>
      default: return <AddManageUser/>

    }
  }
  

  return (
    <div className="sidebar-container">
    <Layout><Header/></Layout>
      <Layout>
        <Sider width={300} className="site-layout-background">
          <CommonMenu
            tab ={tab}
            menuItem={sideBarOptions}
          />
        </Sider>
        <Layout className="content-layout">
       {renderComponent(tab)}
        </Layout>
       
      </Layout>
    </div>
  );
};

export default Sidebar;
