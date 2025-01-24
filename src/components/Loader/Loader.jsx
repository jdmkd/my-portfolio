import React, { useState, useEffect } from "react";
import { ColorRing, TailSpin ,InfinitySpin } from "react-loader-spinner";

function Loader() {
  return (
    <>
        {/* <TailSpin
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
        />
        <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        /> */}
        <InfinitySpin
            visible={true}
            margin="0"
            padding="0"
            width="100"
            color="#0000ff"
            ariaLabel="infinity-spin-loading"
        />
    </>
  )
}

export default Loader