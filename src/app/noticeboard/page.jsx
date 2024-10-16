import React from "react";

const NoticeBoard = () => {
  return (
    <div className="container">
      <div className="min-h-96 bg-slate-200">
        <h1 className="italic text-center text-2xl text-heading font-bold font text-ellipsis py-4">
          <span className="border-b-4 border-heading">NOTICE BOARD</span>
        </h1>
        <div>
          <ul className="list-decimal m-6">
            <li className="text-lg p-1">
              this is to inform that scholl will remain closed till 31th october
              on the ocasion of Diwali
            </li>
            <li className="text-lg p-1">
              mid semester result will dclare on 1 November at 11AM.
            </li>
            <li className="text-lg p-1">
              We are planning for trip to mountains, registration will start
              from 10th Novemver. fill registration from who will interested
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
