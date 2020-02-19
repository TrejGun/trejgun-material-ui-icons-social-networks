"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
Object.defineProperty(exports, "__esModule", {value: true});
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
exports.Xing = props => {
  return react_1.default.createElement(
    core_1.SvgIcon,
    Object.assign({}, props),
    react_1.default.createElement("rect", {fill: "#00605E", x: "0", y: "0", width: "23.9858421", height: "23.9858421"}),
    react_1.default.createElement("polygon", {
      fill: "#FFFFFF",
      points:
        "8.52184211 6.53678947 4.69731579 6.53678947 6.83763158 10.5367895 3.92536842 15.3437895 7.74994737 15.3437895 10.6622105 10.5367895",
    }),
    react_1.default.createElement("polygon", {
      fill: "#FFFFFF",
      points:
        "16.0306316 3.48415789 20.0604737 3.48415789 14.1306316 13.9052105 18.0201053 20.5016842 13.9955789 20.5016842 10.1008421 13.9052105",
    }),
  );
};
//# sourceMappingURL=xing.js.map
