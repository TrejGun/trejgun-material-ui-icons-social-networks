import React, {FC} from "react";
import {SvgIcon} from "@material-ui/core";
import {SvgIconProps} from "@material-ui/core/SvgIcon/SvgIcon";


export const Deviantart: FC<SvgIconProps> = props => {
  return (
    <SvgIcon {...props}>
      <path
        d="M0,0 L0,23.9857895 L23.9857895,23.9857895 L23.9857895,0 L0,0 Z M17.6363158,6.04 L14.1615789,12.9205263 L17.6363158,12.9205263 L17.6363158,17.7136842 L11.7410526,17.7136842 L9.90578947,21.3468421 L6.34947368,21.3468421 L6.34947368,18.21 L9.91894737,11.1421053 L6.34947368,11.1421053 L6.34947368,6.34894737 L12.3394737,6.34894737 L14.2131579,2.63842105 L17.6363158,2.63842105 L17.6363158,6.04 L17.6363158,6.04 Z"
        fill="#00CE3E"
      />
    </SvgIcon>
  );
};
