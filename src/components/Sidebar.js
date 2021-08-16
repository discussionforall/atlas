import React from "react";
import { useHistory } from "react-router-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Nav,
} from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <nav id="nav" role="navigation">
        <div className="side-bar">
          <div className="slide-img">
            <svg
              width="26"
              height="27"
              viewBox="0 0 26 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.25642 12.5642C6.7439 11.8455 4.91294 12.4844 4.19649 13.9218L0.295763 22.0675C-0.420696 23.5848 0.216156 25.4216 1.64907 26.1403C2.12671 26.3 2.52475 26.3799 3.00239 26.3799C4.11688 26.3799 5.15176 25.741 5.70901 24.7029L9.60973 16.637C10.3262 15.1197 9.68934 13.283 8.25642 12.5642Z"
                fill="white"
              />
              <path
                d="M25.6902 22.0676L15.7394 1.70343C15.023 0.186101 13.192 -0.452774 11.6795 0.34582C10.167 1.06456 9.5301 2.90132 10.3262 4.41865L20.277 24.703C20.8342 25.7411 21.8691 26.38 22.9836 26.38C23.4613 26.38 23.8593 26.3001 24.3369 26.0606C25.8495 25.3418 26.4067 23.5051 25.6902 22.0676Z"
                fill="white"
              />
            </svg>
          </div>

          <NavLink
            exact
            to="/home_2"
            activeClassName="active"
            className="slide-img home"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.8707 12.3894L16.8622 3.54997C15.7977 2.61249 14.2023 2.61249 13.1378 3.54997L3.12928 12.3894C2.44315 13.2557 3.42306 14.4226 4.37072 13.7948L14.3793 4.95529C14.7342 4.6431 15.2658 4.6431 15.6207 4.95529L23.4375 11.8594V24.342C23.4375 24.8598 23.0178 25.2795 22.5 25.2795H19.6875V14.967C19.6875 14.4493 19.2678 14.0295 18.75 14.0295H11.25C10.7322 14.0295 10.3125 14.4493 10.3125 14.967V22.467C10.3125 23.717 12.1875 23.717 12.1875 22.467V15.9045H17.8125V25.2795H7.5C6.98223 25.2795 6.5625 24.8598 6.5625 24.342V16.2808C6.5625 15.0309 4.6875 15.0309 4.6875 16.2808V24.342C4.68539 25.0884 4.98211 25.8045 5.51147 26.3306C6.03999 26.8563 6.75453 27.1524 7.5 27.1545H22.5C24.0531 27.1541 25.3121 25.8952 25.3125 24.342V13.515L25.6293 13.7948C26.5662 14.6224 27.8077 13.217 26.8707 12.3894Z"
                fill="white"
              />
            </svg>
          </NavLink>
          <NavLink exact to="/home" activeClassName="active" className="slide-img users">
          <i className="fas fa-user-friends fa-2x"></i>
          </NavLink>
          <NavLink exact to="/" activeClassName="active" className="slide-img settings">
          <i className="fas fa-cog fa-2x"></i>
          </NavLink>
          <NavLink
            exact
            to="/"
            activeClassName="active"
            className="slide-img home_2"
          >
            <svg
              width="24"
              height="31"
              viewBox="0 0 24 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 18.7303C11.5154 18.7303 11.1211 18.3327 11.1211 17.844C11.1211 17.487 11.3317 17.1664 11.6578 17.0271C12.0513 16.8591 12.5223 17.0025 12.9503 17.4206C13.2989 17.7612 13.8553 17.7523 14.193 17.4008C14.5308 17.0492 14.522 16.4882 14.1734 16.1476C13.7766 15.7599 13.3355 15.4859 12.8789 15.3313V14.2988C12.8789 13.8094 12.4854 13.4126 12 13.4126C11.5146 13.4126 11.1211 13.8094 11.1211 14.2988V15.337C11.0712 15.3549 11.0216 15.3739 10.9723 15.3949C9.99488 15.8123 9.3633 16.7737 9.3633 17.844C9.3633 19.3101 10.5461 20.5029 12 20.5029C12.4846 20.5029 12.8789 20.9005 12.8789 21.3892C12.8789 21.7606 12.6466 22.0955 12.3008 22.2225C11.8494 22.3882 11.3238 22.1634 10.8591 21.6053C10.5469 21.2305 9.99253 21.1818 9.62081 21.4967C9.2491 21.8115 9.20087 22.3705 9.51306 22.7453C9.9882 23.3158 10.5413 23.707 11.1212 23.9039V24.9343C11.1212 25.4238 11.5147 25.8206 12.0001 25.8206C12.4855 25.8206 12.879 25.4238 12.879 24.9343V23.896C12.8868 23.8933 12.8947 23.8908 12.9025 23.888C13.9397 23.507 14.6367 22.5028 14.6367 21.3892C14.6367 19.9231 13.4539 18.7303 12 18.7303Z"
                fill="white"
              />
              <path
                d="M20.1398 13.3097C19.0952 12.0137 17.901 10.9813 16.5902 10.2388C16.8049 9.98266 16.9743 9.68233 17.0837 9.3476C17.5129 8.02945 16.8859 6.46367 15.2855 5.95358L17.529 2.00869C17.8121 1.51083 17.5578 0.87672 17.012 0.716715C15.3899 0.24113 13.7037 0 12 0C10.2963 0 8.61012 0.24113 6.98801 0.716715C6.44156 0.876897 6.18826 1.51142 6.47098 2.00869L8.71447 5.95364C7.12043 6.46113 6.48551 8.0246 6.91658 9.34831C7.02562 9.68215 7.19496 9.98231 7.41029 10.2386C6.09926 10.981 4.905 12.0136 3.86027 13.3097C1.77193 15.9004 0.574219 19.1683 0.574219 22.2755C0.574219 28.7212 5.67463 30.2521 12 30.2521C18.3298 30.2521 23.4258 28.7186 23.4258 22.2755C23.4258 19.1683 22.2281 15.9004 20.1398 13.3097ZM8.57203 2.13998C9.69334 1.8959 10.8421 1.77258 12 1.77258C13.1579 1.77258 14.3067 1.8959 15.428 2.13998L13.4924 5.54346C12.5011 5.4039 11.4992 5.40396 10.5076 5.54352L8.57203 2.13998ZM9.14625 7.67505C10.6588 7.17471 12.2413 7.07988 13.7798 7.39002L13.7854 7.39108C14.1439 7.46364 14.5001 7.55806 14.8525 7.67464C15.3131 7.82773 15.5648 8.33014 15.4138 8.79379C15.3041 9.12957 15.0144 9.36084 14.6735 9.3983C13.7972 9.1216 12.9033 8.98109 12 8.98109C11.0985 8.98109 10.2064 9.12101 9.33176 9.39659C8.98565 9.36066 8.6952 9.12774 8.58639 8.79462C8.43516 8.33014 8.68688 7.82767 9.14625 7.67505ZM12 28.4913C5.13305 28.4913 2.33203 26.6821 2.33203 22.2755C2.33203 19.6082 3.41326 16.6745 5.22422 14.4278C7.13408 12.0585 9.54041 10.7537 12 10.7537C14.7074 10.7537 17.0754 12.3184 18.7758 14.4278C20.5867 16.6745 21.668 19.6082 21.668 22.2755C21.668 26.6821 18.867 28.4913 12 28.4913Z"
                fill="white"
              />
            </svg>
          </NavLink>
        </div>
      </nav>
    </>
  );
};
export default Sidebar;
