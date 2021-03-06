"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
Object.defineProperty(exports, "__esModule", {value: true});
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
exports.MySpace = props => {
  return react_1.default.createElement(
    core_1.SvgIcon,
    Object.assign({}, props),
    react_1.default.createElement("rect", {fill: "#507FA7", x: "0", y: "0", width: "23.9858421", height: "23.9858421"}),
    react_1.default.createElement("path", {
      d:
        "M16.4246316,9.86573684 L16.4246316,9.86573684 C15.3128947,9.86573684 14.3178421,10.3625789 13.6472632,11.1455789 C13.1832632,10.0723684 12.1155263,9.32110526 10.8718947,9.32110526 L10.8718947,9.32110526 C9.90815789,9.32110526 9.05042105,9.77268421 8.49694737,10.4751579 C8.21394737,9.49963158 7.31436842,8.78621053 6.24757895,8.78621053 L6.24757895,8.78621053 C4.95384211,8.78621053 3.90510526,9.835 3.90510526,11.1286842 L3.90510526,15.0327895 L7.84926316,15.0327895 L7.84926316,17.3815263 L12.7685789,17.3815263 L12.7685789,19.6152105 L20.0807368,19.6152105 L20.0807368,13.5218421 C20.0807368,11.5026316 18.4438421,9.86573684 16.4246316,9.86573684 Z",
      fill: "#FFFFFF",
    }),
    react_1.default.createElement("circle", {fill: "#FFFFFF", cx: "16.4467895", cy: "6.94089474", r: "2.57031579"}),
    react_1.default.createElement("circle", {fill: "#FFFFFF", cx: "10.8902632", cy: "6.903", r: "2.12505263"}),
    react_1.default.createElement("circle", {fill: "#FFFFFF", cx: "6.26178947", cy: "6.91226316", r: "1.64684211"}),
  );
};
//# sourceMappingURL=myspace.js.map
