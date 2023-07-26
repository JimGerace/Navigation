"use client";
import Image from "next/image";
import "./index.scss";

export default function NavRight(props: any) {
  const { navResource } = props;

  // 点击进行跳转
  const goPage = (row: any) => {
    window.location.href = row.url;
  };

  return (
    <div className="right_page">
      {navResource.map((item: any) => {
        return (
          <div className={"nav_list " + "nav_" + item.id} key={item.id}>
            <span className="nav_title">{item.title}</span>
            <div className="nav_box">
              {item.links.map((nav: any) => {
                return (
                  <div
                    className="nav_item"
                    key={nav.id}
                    onClick={() => goPage(nav)}
                  >
                    <div className="nav_top">
                      <Image
                        src={nav.icon}
                        width={40}
                        height={40}
                        alt=""
                      ></Image>
                      <span className="nav_title">{nav.title}</span>
                    </div>

                    <div className="nav_des">{nav.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
