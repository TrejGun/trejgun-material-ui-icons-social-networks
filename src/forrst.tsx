import React, {FC} from "react";
import {SvgIcon} from "@material-ui/core";
import {SvgIconProps} from "@material-ui/core/SvgIcon/SvgIcon";


export const Forrst: FC<SvgIconProps> = props => {
  return (
    <SvgIcon {...props}>
      <rect fill="#009E6C" x="0" y="0" width="23.9858421" height="23.9858421" />
      <polygon
        fill="#FFFFFF"
        points="11.1785789 16.9203684 9.45547368 15.7176842 9.88978947 15.0954737 11.1785789 15.9950526 11.1785789 13.2457895 13.0160526 13.2457895 13.0160526 15.0414737 14.2768947 14.2811579 14.6687368 14.9308947 13.0160526 15.9275263 13.0160526 16.8774737 15.5198947 15.6106316 15.8624737 16.2877368 13.0160526 17.7278421 13.0160526 20.3730526 19.0327368 20.3730526 11.9929474 3.61278947 4.95310526 20.3730526 11.1785789 20.3730526"
      />
    </SvgIcon>
  );
};
