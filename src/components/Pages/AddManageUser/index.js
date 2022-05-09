import React from 'react'
import { Table, Tag, Space, Avatar,Dropdown,Button,Menu ,message} from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import Cards from '../../common/card';
import CommonTable from '../../common/Table';
// import Header from '../../Header/Header';
// import Sidebar from '../../Sidebar';
import './style.scss';
const AddManageUser= () => {
  function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
  }
  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: 'Edit Profile',
          key: '1',
         // icon: <UserOutlined />,
        },
        {
          label: 'Manage Password',
          key: '2',
         // icon: <UserOutlined />,
        },
        {
          label: 'Deactivate',
          key: '3',
         // icon: <UserOutlined />,
        },
      ]}
    />
  );
    const columns = [
        {
          
          title: 'User Name',
          dataIndex: 'name',
          key: 'name',
          render: ( text , displayPicture) => (
            <>
              <Avatar src="https://joeschmoe.io/api/v1/random" /> {` `}
              <a>{text}</a>
            </>   
            )
        },
        {
          title: 'Creted Date',
          dataIndex: 'Date',
          key: 'Date',
        },
        {
          title: 'Status',
          key: 'tags',
          dataIndex: 'tags',
          render: tags => (
            <>
              {tags.map(tag => {
                let color = tag.Active === '#009E3F';
                if (tag === 'Deactive') {
                  color = 'Red';
                }else{
                  color = '#009E3F'
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
            title: 'Buy Share',
            dataIndex: 'BuyShare',
            key: 'BuyShare',
          },
          {
            title: 'Sell Share',
            dataIndex: 'SellShare',
            key: 'SellShare',
          },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
            <Dropdown overlay={menu}>
            <Button>
              <Space>
                Actions
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
            </Space>
          ),
        },
      ];
      
      const data = [
        {
          key: '1',
          name: 'John Brown',
          Date: "April 12 2022",
          BuyShare:'$56,652',
          SellShare: '$15000',
          tags: ["Active"],
        },
        {
          key: '2',
          name: 'Jim Green',
          Date: 'April 10 2022',
          BuyShare:'$56,652',
          SellShare: '$15000',
          tags: ['Active'],
        },
        {
          key: '3',
          name: 'Joe Black',
          Date: 'April 8 2022',
          BuyShare:'$56,652',
          SellShare: '$15000',
          tags: ['Deactive'],
        },
      ];
  
  return (
    <div className="usermanagecontainer p-0">
    <div className = "cardmanager">
      <h4>Overview</h4>
      <Cards/>
      </div>
      <div className="manageuser">
      <h4> Manage User</h4>
      <div className="managetable">
      <CommonTable
      columns= {columns}
      data = {data}
      />
      </div>
      </div>
     
    </div>
  );
}

export default AddManageUser;