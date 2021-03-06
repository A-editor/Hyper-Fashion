/** @jsx jsx */
import React from "react";
import {css, jsx} from "@emotion/core";
import {ArrowLeftOutlined, ArrowRightOutlined} from "@ant-design/icons";

const Arrow = ({direction, handleClick}) => (
  <div
    onClick={handleClick}
    css={css`
      display: flex;
      position: absolute;
      top: 45%;
      ${direction === "right" ? `right: 25px` : `left: 25px`};
      height: 50px;
      width: 50px;
      justify-content: center;
      background: none;
      border-radius: 50%;
      cursor: pointer;
      align-items: center;
      transition: transform ease-in 0.1s;
      &:hover {
        transform: scale(1.5);
      }
      img {
        transform: translateX(${direction === "left" ? "-2" : "2"}px);
        &:focus {
          outline: 0;
        }
      }
    `}
  >
    {direction === "right" ? (
      <ArrowRightOutlined style={{fontSize: "20px"}} />
    ) : (
      <ArrowLeftOutlined style={{fontSize: "20px"}} />
    )}
  </div>
);

export default Arrow;
