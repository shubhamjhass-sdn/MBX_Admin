import React from 'react'
import { Table, Tag, Space, Avatar,Dropdown,Button,Menu ,message ,Pagination} from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import userIcon from "../../../Assets/man.png"
import Buyshareicon from "../../../Assets/buyshare.svg"
import './style.scss'

const CommonTable = (props) => {
  const {data , columns , pagination} = props
 
  return (
    <Table columns={columns} dataSource={data} pagination={pagination} />
  )
}

export default CommonTable;