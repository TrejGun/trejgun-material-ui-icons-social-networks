import React, {FC} from "react";
import {SvgIcon} from "@material-ui/core";
import {SvgIconProps} from "@material-ui/core/SvgIcon/SvgIcon";


export const Flickr: FC<SvgIconProps> = props => {
  return (
    <SvgIcon {...props}>
      <rect fill="#E12C92" x="0" y="0" width="23.9858421" height="23.9858421" />
      <circle fill="#FFFFFF" cx="7.16852632" cy="11.7232105" r="4.23263158" />
      <circle fill="#FFFFFF" cx="16.8173158" cy="12.2626316" r="4.23263158" />
    </SvgIcon>
  );
};
