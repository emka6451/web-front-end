import React, { useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import moment from "moment";
import { ReactComponent as Wishlogo } from "../../../style/icons/wishy.svg";
import { myaxiosprivate } from "../../../api/myaxios";
import NotificationItem from "./NotificationItem";
function Notification({ show, notifications, innerRef, setLoad, load }) {
  return (
    <div
      // ref={innerRef}
      className="block w-full  z-50 absolute top-[70px] md:top-[70px] right-0 left-0 md:left-[42%] xl:left-[45%] mt-[21px]  bg-white  rounded-lg  md:min-w-[400px]  md:h-fit md:w-[320px]"
    >
      <p className="pt-2 px-2 font-bold text-sm md:text-[14px] tracking-[0.03em]">
        Notifications
      </p>
      <p className="md:hidden pt-2 px-2 font-bold text-sm">Today, 14 July</p>
      <ul className="py-2 text-sm ">
        {!notifications ? (
          <li className="rounded-lg border border-[#3800B0] px-2 py-2 my-1 mx-2 min-h-[72px] flex  align-center">
            {" "}
            <p className="text-[#3800B0] text-[14px]">
              There is no notification for you right now. Check out later...
            </p>
          </li>
        ) : (
          notifications?.map((item) => (
            <NotificationItem item={item} setShow={show} />
          ))
        )}
      </ul>
      {notifications && (
        <div className="flex justify-center">
          <p
            className="text-[#3800B0] cursor-pointer font-semibold"
            onClick={() => setLoad(load + 5)}
          >
            Load more
          </p>
        </div>
      )}
    </div>
  );
}

export default Notification;
