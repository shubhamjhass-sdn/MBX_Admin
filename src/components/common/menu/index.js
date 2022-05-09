import React,{useEffect , useState} from "react";
import { Menu } from "antd";
import { ReactComponent as Dotimage } from "../../../Assets/Dot.svg";
import { useLocation, useNavigate } from "react-router";

const CommonMenu = (props) => {
  let navigate = useNavigate();
  const { menuItem ,tab } = props;
  // let location = useLocation();
  //   // const [current, setCurrent] = useState(
  //   //     location.pathname === "/" || location.pathname === ""
  //   //         ? "/"
  //   //         : location.pathname,
  //   // );
  //   //or simply use 
  //   const [current, setCurrent] = useState(location.pathname)        

  //   useEffect(() => {
  //       if (location) {
  //           if( current !== location.pathname ) {
  //               setCurrent(location.pathname);
  //           }
  //       }
  //   }, [location, current]);

  //   function handleClick(e) {
  //       setCurrent(e.key);
  //   }

  const href = window.location.pathname;
  return (
      <Menu mode="inline"
     
        >
      {menuItem.map((item) => (
        <Menu.SubMenu 
          title={item.title} 
          icon={item.icon}
          //selectedKeys={[current]}
        >     
          {item.menuItem.map((subMenu) => (
            <Menu.Item
            onClick={()=>{navigate(`${subMenu.routepath}`)}}
            selectedKeys={[subMenu.routepath]}
            className={href === subMenu.routepath?'ant-menu-item ant-menu-item-selected':'null' }
            icon={<Dotimage/>}
            >
              {subMenu.name}
            </Menu.Item>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  );
};

export default CommonMenu;
