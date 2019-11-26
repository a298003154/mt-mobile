"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = exports.version = exports.install = void 0;

var _actionSheet = _interopRequireDefault(require("./action-sheet"));

exports.ActionSheet = _actionSheet.default;

var _badge = _interopRequireDefault(require("./badge"));

exports.Badge = _badge.default;

var _button = _interopRequireDefault(require("./button"));

exports.Button = _button.default;

var _checkbox = _interopRequireDefault(require("./checkbox"));

exports.Checkbox = _checkbox.default;

var _checkboxGroup = _interopRequireDefault(require("./checkbox-group"));

exports.CheckboxGroup = _checkboxGroup.default;

var _col = _interopRequireDefault(require("./col"));

exports.Col = _col.default;

var _collapse = _interopRequireDefault(require("./collapse"));

exports.Collapse = _collapse.default;

var _collapseItem = _interopRequireDefault(require("./collapse-item"));

exports.CollapseItem = _collapseItem.default;

var _datetimePicker = _interopRequireDefault(require("./datetime-picker"));

exports.DatetimePicker = _datetimePicker.default;

var _dialog = _interopRequireDefault(require("./dialog"));

exports.Dialog = _dialog.default;

var _divider = _interopRequireDefault(require("./divider"));

exports.Divider = _divider.default;

var _dropdownItem = _interopRequireDefault(require("./dropdown-item"));

exports.DropdownItem = _dropdownItem.default;

var _dropdownMenu = _interopRequireDefault(require("./dropdown-menu"));

exports.DropdownMenu = _dropdownMenu.default;

var _field = _interopRequireDefault(require("./field"));

exports.Field = _field.default;

var _grid = _interopRequireDefault(require("./grid"));

exports.Grid = _grid.default;

var _gridItem = _interopRequireDefault(require("./grid-item"));

exports.GridItem = _gridItem.default;

var _icon = _interopRequireDefault(require("./icon"));

exports.Icon = _icon.default;

var _image = _interopRequireDefault(require("./image"));

exports.Image = _image.default;

var _imagePreview = _interopRequireDefault(require("./image-preview"));

exports.ImagePreview = _imagePreview.default;

var _lazyload = _interopRequireDefault(require("./lazyload"));

exports.Lazyload = _lazyload.default;

var _list = _interopRequireDefault(require("./list"));

exports.List = _list.default;

var _listItem = _interopRequireDefault(require("./list-item"));

exports.ListItem = _listItem.default;

var _loading = _interopRequireDefault(require("./loading"));

exports.Loading = _loading.default;

var _locale = _interopRequireDefault(require("./locale"));

exports.Locale = _locale.default;

var _navBar = _interopRequireDefault(require("./nav-bar"));

exports.NavBar = _navBar.default;

var _noticeBar = _interopRequireDefault(require("./notice-bar"));

exports.NoticeBar = _noticeBar.default;

var _notify = _interopRequireDefault(require("./notify"));

exports.Notify = _notify.default;

var _overlay = _interopRequireDefault(require("./overlay"));

exports.Overlay = _overlay.default;

var _picker = _interopRequireDefault(require("./picker"));

exports.Picker = _picker.default;

var _popover = _interopRequireDefault(require("./popover"));

exports.Popover = _popover.default;

var _popoverItem = _interopRequireDefault(require("./popover-item"));

exports.PopoverItem = _popoverItem.default;

var _popup = _interopRequireDefault(require("./popup"));

exports.Popup = _popup.default;

var _pullRefresh = _interopRequireDefault(require("./pull-refresh"));

exports.PullRefresh = _pullRefresh.default;

var _radio = _interopRequireDefault(require("./radio"));

exports.Radio = _radio.default;

var _radioGroup = _interopRequireDefault(require("./radio-group"));

exports.RadioGroup = _radioGroup.default;

var _rate = _interopRequireDefault(require("./rate"));

exports.Rate = _rate.default;

var _row = _interopRequireDefault(require("./row"));

exports.Row = _row.default;

var _search = _interopRequireDefault(require("./search"));

exports.Search = _search.default;

var _sidebar = _interopRequireDefault(require("./sidebar"));

exports.Sidebar = _sidebar.default;

var _sidebarItem = _interopRequireDefault(require("./sidebar-item"));

exports.SidebarItem = _sidebarItem.default;

var _slider = _interopRequireDefault(require("./slider"));

exports.Slider = _slider.default;

var _stepper = _interopRequireDefault(require("./stepper"));

exports.Stepper = _stepper.default;

var _sticky = _interopRequireDefault(require("./sticky"));

exports.Sticky = _sticky.default;

var _swipe = _interopRequireDefault(require("./swipe"));

exports.Swipe = _swipe.default;

var _swipeAction = _interopRequireDefault(require("./swipe-action"));

exports.SwipeAction = _swipeAction.default;

var _swipeItem = _interopRequireDefault(require("./swipe-item"));

exports.SwipeItem = _swipeItem.default;

var _switch = _interopRequireDefault(require("./switch"));

exports.Switch = _switch.default;

var _tab = _interopRequireDefault(require("./tab"));

exports.Tab = _tab.default;

var _tabbar = _interopRequireDefault(require("./tabbar"));

exports.Tabbar = _tabbar.default;

var _tabbarItem = _interopRequireDefault(require("./tabbar-item"));

exports.TabbarItem = _tabbarItem.default;

var _tabs = _interopRequireDefault(require("./tabs"));

exports.Tabs = _tabs.default;

var _tag = _interopRequireDefault(require("./tag"));

exports.Tag = _tag.default;

var _toast = _interopRequireDefault(require("./toast"));

exports.Toast = _toast.default;

var _whiteSpace = _interopRequireDefault(require("./white-space"));

exports.WhiteSpace = _whiteSpace.default;

var _wingBlank = _interopRequireDefault(require("./wing-blank"));

exports.WingBlank = _wingBlank.default;
// This file is auto gererated by build/build-entry.js
var version = '0.0.1';
exports.version = version;
var components = [_actionSheet.default, _badge.default, _button.default, _checkbox.default, _checkboxGroup.default, _col.default, _collapse.default, _collapseItem.default, _datetimePicker.default, _dialog.default, _divider.default, _dropdownItem.default, _dropdownMenu.default, _field.default, _grid.default, _gridItem.default, _icon.default, _image.default, _imagePreview.default, _list.default, _listItem.default, _loading.default, _navBar.default, _noticeBar.default, _notify.default, _overlay.default, _picker.default, _popover.default, _popoverItem.default, _popup.default, _pullRefresh.default, _radio.default, _radioGroup.default, _rate.default, _row.default, _search.default, _sidebar.default, _sidebarItem.default, _slider.default, _stepper.default, _sticky.default, _swipe.default, _swipeAction.default, _swipeItem.default, _switch.default, _tab.default, _tabbar.default, _tabbarItem.default, _tabs.default, _tag.default, _toast.default, _whiteSpace.default, _wingBlank.default];

var install = function install(Vue) {
  components.forEach(function (Component) {
    Vue.use(Component);
  });
};
/* istanbul ignore if */


exports.install = install;

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

var _default = {
  install: install,
  version: version
};
exports.default = _default;