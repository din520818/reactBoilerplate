import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="dnestw-flex dnestw-flex-col dnestw-h-screen dnestw-p-3 dnestw-bg-[#a14303] dnestw-shadow ">
      <div className="dnestw-space-y-3">
        <Link to="/menu">
          <div className="dnestw-flex dnestw-items-center">
            <h2 className="dnestw-text-xl dnestw-font-bold">Dashboard</h2>
          </div>
        </Link>
        <div className="dnestw-flex-1">
          <ul className="dnestw-pt-2 dnestw-pb-4 dnestw-space-y-1 dnestw-text-sm">
            <Link to="/change-password">
              <li className="dnestw-rounded-sm">
                <a
                  href="#"
                  className="dnestw-flex dnestw-items-center dnestw-p-2 dnestw-space-x-3 dnestw-rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="dnestw-w-6 dnestw-h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span>Change Password</span>
                </a>
              </li>
            </Link>
            <li className="dnestw-rounded-sm">
              <a
                href="#"
                className="dnestw-flex dnestw-items-center dnestw-p-2 dnestw-space-x-3 dnestw-rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="dnestw-w-6 dnestw-h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
                <span>Inbox</span>
              </a>
            </li>
            <li className="dnestw-rounded-sm">
              <a
                href="#"
                className="dnestw-flex dnestw-items-center dnestw-p-2 dnestw-space-x-3 dnestw-rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="dnestw-w-6 dnestw-h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <span>Downloads</span>
              </a>
            </li>
            <li className="dnestw-rounded-sm">
              <a
                href="#"
                className="dnestw-flex dnestw-items-center dnestw-p-2 dnestw-space-x-3 dnestw-rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="dnestw-w-6 dnestw-h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>My Data</span>
              </a>
            </li>
            <Link to="/">
              <li className="dnestw-rounded-sm">
                <a
                  href="#"
                  className="dnestw-flex dnestw-items-center dnestw-p-2 dnestw-space-x-3 dnestw-rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="dnestw-w-6 dnestw-h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                  <span>Logout</span>
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
