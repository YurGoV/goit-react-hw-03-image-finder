import React from "react";
import { Rings } from  'react-loader-spinner';

export const Loader = ({loader, loaderLoad}) => {
  return (
    <div>
      <Rings
        height="50"
        width="50"
        color="#4fa94d"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={loader}
        ariaLabel="rings-loading"
      />
    </div>
  )
}
