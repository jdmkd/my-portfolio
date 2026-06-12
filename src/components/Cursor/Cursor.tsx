"use client";
import React, { useEffect } from "react";
import "../../css/styles.css";

function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor") as HTMLElement | null;
    const cursorinner = document.querySelector(
      ".cursor2",
    ) as HTMLElement | null;
    const a = document.querySelectorAll("a");
    const button = document.querySelectorAll("button");

    document.addEventListener("mousemove", function (e) {
      if (cursor) {
        cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
      }
      if (cursorinner) {
        cursorinner.style.left = e.clientX + "px";
        cursorinner.style.top = e.clientY + "px";
      }
    });

    document.addEventListener("mousedown", function () {
      cursor?.classList.add("click");
      cursorinner?.classList.add("cursorinnerhover");
    });

    document.addEventListener("mouseup", function () {
      cursor?.classList.remove("click");
      cursorinner?.classList.remove("cursorinnerhover");
    });

    a.forEach((item) => {
      item.addEventListener("mouseover", () => {
        cursor?.classList.add("hover");
      });
      item.addEventListener("mouseleave", () => {
        cursor?.classList.remove("hover");
      });
    });

    button.forEach((item) => {
      item.addEventListener("mouseover", () => {
        cursor?.classList.add("hover");
      });
      item.addEventListener("mouseleave", () => {
        cursor?.classList.remove("hover");
      });
    });
  }, []);

  return (
    <>
      {/* <div className="cursor"></div>
        <div className="cursor2"></div> */}
    </>
  );
}

export default Cursor;
