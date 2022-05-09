import React from "react";
import profile from "../../../Assets/profile.png";
import profiletwo from "../../../Assets/profiletwo.png";
import profilethree from "../../../Assets/profilethree.png";
import profilefour from "../../../Assets/profilefour.png";
import imageone from "../../../Assets/Vector.png";
import imagetwo from "../../../Assets/imageone.png";
import imagethree from "../../../Assets/imagetwo.png";
import imagefour from "../../../Assets/imagethree.png";
import { Card } from "antd";
import "./style.scss";
const data = [
  {
    id: 1,
    title: "Total Users",
    icon: profile,
    views: "3.4k",
    image: imageone,
  },
  {
    id: 2,
    title: "Total Brands",
    icon: profiletwo,
    views: "1.6k",
    image: imagetwo,
    marginLeft: 0,
  },
  {
    id: 3,
    title: "Buy Share",
    icon: profilethree,
    views: "$25m",
    image: imagethree,
  },
  {
    id: 4,
    title: "Sells Share",
    icon: profilefour,
    views: "$56m",
    image: imagefour,
  },
];
const Cards = () => {
  return (
    <>
      <div  className = "card_container">
      
        <div className="card_wrapper">
          {data.map((item) => {
            return (
              <Card className="card_subwrapper">
                <img src={item.icon} />
                <p
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: 25,
                    marginTop: -22,
                  }}
                >
                  {item.title}
                </p>

                <div
                  style={{
                    // backgroundColor: "white",
                    // display: "flex",
                  }}
                >
                </div>

                <p style={{ textAlign: "center",fontWeight:'600',fontSize:26,color:'#000000'}}>
                 
                  {item.views}
                </p>
                <div>
                <img
                src={item.image}
                style={{
                   marginLeft: -24.5,
                  borderEndEndRadius: 12,
                  borderEndStartRadius: 12,
                   marginTop:-11
                }}
              /></div>
               
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
