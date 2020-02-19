"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
Object.defineProperty(exports, "__esModule", {value: true});
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
exports.Rss = props => {
  return react_1.default.createElement(
    core_1.SvgIcon,
    Object.assign({}, props),
    react_1.default.createElement("rect", {fill: "#F78422", x: "0", y: "0", width: "23.9858421", height: "23.9858421"}),
    react_1.default.createElement("path", {
      d:
        "M15.5898947,8.37684211 C12.3392105,5.12615789 8.014,3.33589474 3.41105263,3.33589474 L3.41105263,6.72263158 C7.10936842,6.72263158 10.5841053,8.16057895 13.1951579,10.7716316 C15.8061579,13.3826842 17.2441579,16.8574211 17.2441579,20.5557368 L20.6308947,20.5557368 C20.6308947,15.9527895 18.8405789,11.6275263 15.5898947,8.37684211 Z",
      fill: "#FFFFFF",
    }),
    react_1.default.createElement("path", {
      d:
        "M3.37594737,9.067 L3.37594737,12.4537368 C7.84336842,12.4537368 11.4779474,16.0882632 11.4779474,20.5557895 L14.8646842,20.5557895 C14.8646842,14.2208421 9.71089474,9.067 3.37594737,9.067 Z",
      fill: "#FFFFFF",
    }),
    react_1.default.createElement("circle", {fill: "#FFFFFF", cx: "5.78068421", cy: "18.2242105", r: "2.42568421"}),
  );
};
//# sourceMappingURL=rss.js.map
