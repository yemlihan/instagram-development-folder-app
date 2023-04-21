import React from "react";
import User from "./ReqUsers";
import GtFollow from "./GtFollow";
import RecentlyFollow from "./RecentlyFollow";

export default function Events({ users }) {
  return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-hidden">
        <User />
        <RecentlyFollow users={users}/>
        <GtFollow />
      </div>
  );
}
