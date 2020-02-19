"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
Object.defineProperty(exports, "__esModule", {value: true});
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
exports.Flickr = props => {
  return react_1.default.createElement(
    core_1.SvgIcon,
    Object.assign({}, props),
    react_1.default.createElement("rect", {fill: "#E12C92", x: "0", y: "0", width: "23.9858421", height: "23.9858421"}),
    react_1.default.createElement("circle", {fill: "#FFFFFF", cx: "7.16852632", cy: "11.7232105", r: "4.23263158"}),
    react_1.default.createElement("circle", {fill: "#FFFFFF", cx: "16.8173158", cy: "12.2626316", r: "4.23263158"}),
  );
};
//# sourceMappingURL=flickr.js.map
