"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
Object.defineProperty(exports, "__esModule", {value: true});
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
exports.Deviantart = props => {
  return react_1.default.createElement(
    core_1.SvgIcon,
    Object.assign({}, props),
    react_1.default.createElement("path", {
      d:
        "M0,0 L0,23.9857895 L23.9857895,23.9857895 L23.9857895,0 L0,0 Z M17.6363158,6.04 L14.1615789,12.9205263 L17.6363158,12.9205263 L17.6363158,17.7136842 L11.7410526,17.7136842 L9.90578947,21.3468421 L6.34947368,21.3468421 L6.34947368,18.21 L9.91894737,11.1421053 L6.34947368,11.1421053 L6.34947368,6.34894737 L12.3394737,6.34894737 L14.2131579,2.63842105 L17.6363158,2.63842105 L17.6363158,6.04 L17.6363158,6.04 Z",
      fill: "#00CE3E",
    }),
  );
};
//# sourceMappingURL=deviantart.js.map
