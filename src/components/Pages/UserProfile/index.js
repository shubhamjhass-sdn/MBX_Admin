import React from 'react'
import { Table, Tag, Space, Avatar,Dropdown,Button,Menu ,message,Pagination} from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import {ReactComponent as Youtube} from "../../../Assets/youtube.svg"
import CommonTable from '../../common/Table';
import './style.scss';

const UserProfile = () => {
        function handleMenuClick(e) {
          message.info('Click on menu item.');
          console.log('click', e);
        }
        
        const columns = [
            {
              title: " Name",
              dataIndex: "name",
              key: "name",
              render: (text, displayPicture) => (
                <>
                  <Avatar src="https://joeschmoe.io/api/v1/random" /> {` `}
                  <a>{text}</a>
                </>
              ),
            },
            {
              title: "Email",
              dataIndex: "email",
              key: "email",
            },
            {
              title: "Username",
              dataIndex: "Username",
              key: "Username",
            },
            {
              title: "Address",
              dataIndex: "Address",
              key: "Address",
            },
            {
              title: "SSN",
              dataIndex: "SSN",
              key: "SSN",
            },
            {
              title: "Social Media",
              dataIndex: "SocialMedia",
              key: "SocialMedia",
              render: (text, displayPicture) => (
                <>
                  <Avatar icon={<Youtube />}  /> 
                  <a>{text}</a>
                </>
              ),
            },
          ];
        
          const data = [
            {
              key: "1",
              name: "Jon Yablosnski",
              email: "jon_1765@gmail.com",
              Username: "jon_yablonski",
              Address: "New York, USA",
              SSN: "6963",
              SocialMedia: "laws_of_ux",
            },
            {
              key: "2",
              name: "Mark Henry",
              email: "markhenry098@gmail.com",
              Username: "mark_henry56",
              Address: "oakland, USA",
              SSN: "6963",
              SocialMedia: "laws_of_ux",
            },
            {
              key: "3",
              name: "Amilie Amount",
              email: "amilie1996@gmail.com",
              Username: "amilie665",
              Address: "oakland, USA",
              SSN: "6963",
              SocialMedia: "laws_of_ux",
            },
            {
              key: "4",
              name: "Chirsty Ennis",
              email: "chirsty635@hotmail.com",
              Username: "ennis563",
              Address: "oakland, USA",
              SSN: "6963",
              SocialMedia: "laws_of_ux",
            },
            {
              key: "5",
              name: "Olivia Ray",
              email: "oliviaray@yahoo.com",
              Username: "olivia463",
              Address: "oakland, USA",
              SSN: "6963",
              SocialMedia: "laws_of_ux",
            },
            {
              key: "6",
              name: "Peter Parker",
              email: "peter_parker123@gmail.com",
              Username: "peter_parker",
              Address: "oakland, USA",
              SSN: "6963",
              SocialMedia: "spidermanux",
            },
            {
              key: "7",
              name: "Vaida Pakulyte",
              email: "vaida265@gmail.com",
              Username: "vaida365",
              Address: "oakland, USA",
              SSN: "6963",
              SocialMedia: "design.boat",
            },
            {
              key: "8",
              name: "Joe Cahill",
              email: "joe.cahill@rocketmail.com",
              Username: "joe_cahill",
              Address: "oakland, USA",
              SSN: "6963",
              SocialMedia: "design.sprint",
            },
            {
              key: "9",
              name: "Jon Yablosnski",
              email: "jon_1765@gmail.com",
              Username: "jon_yablonski",
              Address: "New York, USA",
              SSN: "6963",
              SocialMedia: "sales&marketing",
            },
          ];

          function onChange(pageNumber) {
              console.log('Page: ', pageNumber);
            }
  return (
    <div className = "userProfile">
    <h4>User Profile</h4>
   <div className="userTable">

   <CommonTable
   columns={columns}
   data={data}
   pagination ={<Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />}
   />
   </div>
    
    </div>
  )
}

export default UserProfile;