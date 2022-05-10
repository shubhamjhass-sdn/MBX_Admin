import React from 'react'
import { Table, Tag, Space, Avatar,Dropdown,Button,Menu ,message,Pagination} from 'antd';
import CommonTable from '../../common/Table';
import './style.scss'

const Current_brand_value = () => {
    const columns = [
        {
          title: " Brands",
          dataIndex: "Brands",
          key: "Brands",
          render: (text, displayPicture) => (
            <>
              <Avatar src="https://joeschmoe.io/api/v1/random" /> {` `}
              <a>{text}</a>
            </>
          ),
        },
        {
          title: "Username",
          dataIndex: "Username",
          key: "Username",
        },
        {
          title: "Number Of Shares",
          dataIndex: "NumberOfShares",
          key: "NumberOfShares",
        },
        {
          title: "Per Unit Share Price",
          dataIndex: "PerUnitSharePrice",
          key: "PerUnitSharePrice",
        },
        {
          title: "Total Value Of holdings",
          dataIndex:"TotalValueOfholdings",
          key: "TotalValueOfholdings",
        },
      ];

      const data = [
        {
          key: "1",
          Brands: "laws_of_ux",
          Username: "jon_1765",
          NumberOfShares: "05",
          PerUnitSharePrice: "$1365",
          TotalValueOfholdings: "$3265",
        },
        {
          key: "2",
          Brands: "sales&marketing",
          Username: "markhenry098",
          NumberOfShares: "63",
          PerUnitSharePrice: "$263",
          TotalValueOfholdings: "$1452",
        },
        {
          key: "3",
          Brands: "design.sprint",
          Username: "amilie1996",
          NumberOfShares: "54",
          PerUnitSharePrice: "$165422",
          TotalValueOfholdings: "$3621",
        },
        {
          key: "4",
          Brands: "design.boat",
          Username: "chirsty635",
          NumberOfShares: "04",
          PerUnitSharePrice: "$264",
          TotalValueOfholdings: "$421",
        },
        {
          key: "5",
          Brands: "ADP.list",
          Username: "oliviaray",
          NumberOfShares: "36",
          PerUnitSharePrice: "$263",
          TotalValueOfholdings: "$68574",
        },
        {
          key: "6",
          Brands: "spiderman",
          Username: "peter_parker123",
          NumberOfShares: "76",
          PerUnitSharePrice: "$8",
          TotalValueOfholdings: "$63",
        },
        {
          key: "7",
          Brands: "procoding",
          Username: "vaida265@gmail.com",
          NumberOfShares: "01",
          PerUnitSharePrice: "$21",
          TotalValueOfholdings: "$66",
        },
        {
          key: "8",
          Brands: "dynamo_gaming",
          Username: "joe.cahill@rocketmail.com",
          NumberOfShares: "11",
          PerUnitSharePrice: "$154",
          TotalValueOfholdings: "$354",
        },
        {
          key: "9",
          Brands: "laws_of_ux",
          Username: "jon_1765@gmail.com",
          NumberOfShares: "14",
          PerUnitSharePrice: "$463",
          TotalValueOfholdings: "$863",
        },
      ];

  return (
    <div className="current-value">
    <div className="current-value-label">
    <h4>Current Brand Value</h4>
    </div>
    <div className="current_brand_value_table">
    <CommonTable
    columns={columns}
    data={data}
    />
    </div>
    
    </div>
  )
}

export default Current_brand_value;