import React from "react";
import { Rings } from  'react-loader-spinner';

export const Loader = ({loader, size=50}) => {
  return (
    <div>
      <Rings
        height={size}
        width={size}
        color="#3f51b5"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={loader}
        ariaLabel="rings-loading"
      />
    </div>
  )
}
