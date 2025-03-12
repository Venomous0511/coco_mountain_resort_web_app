import React from "react";
import Pills from "../atoms/Pills";
import Icon from "../atoms/Icon";

export default function Badge({ iconProps }) {
  return (
    <>
      <Pills>
        <Icon {...iconProps} />
      </Pills>
    </>
  );
}
