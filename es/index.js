// This file is auto gererated by build/build-entry.js
import ActionSheet from './action-sheet';
import Badge from './badge';
import Button from './button';
import Checkbox from './checkbox';
import CheckboxGroup from './checkbox-group';
import Col from './col';
import Collapse from './collapse';
import CollapseItem from './collapse-item';
import DatetimePicker from './datetime-picker';
import Dialog from './dialog';
import Divider from './divider';
import DropdownItem from './dropdown-item';
import DropdownMenu from './dropdown-menu';
import Field from './field';
import Grid from './grid';
import GridItem from './grid-item';
import Icon from './icon';
import Image from './image';
import ImagePreview from './image-preview';
import Lazyload from './lazyload';
import List from './list';
import ListItem from './list-item';
import Loading from './loading';
import Locale from './locale';
import NavBar from './nav-bar';
import NoticeBar from './notice-bar';
import Notify from './notify';
import Overlay from './overlay';
import Picker from './picker';
import Popover from './popover';
import PopoverItem from './popover-item';
import Popup from './popup';
import PullRefresh from './pull-refresh';
import Radio from './radio';
import RadioGroup from './radio-group';
import Rate from './rate';
import Row from './row';
import Search from './search';
import Sidebar from './sidebar';
import SidebarItem from './sidebar-item';
import Slider from './slider';
import Stepper from './stepper';
import Sticky from './sticky';
import Swipe from './swipe';
import SwipeAction from './swipe-action';
import SwipeItem from './swipe-item';
import Switch from './switch';
import Tab from './tab';
import Tabbar from './tabbar';
import TabbarItem from './tabbar-item';
import Tabs from './tabs';
import Tag from './tag';
import Toast from './toast';
import WhiteSpace from './white-space';
import WingBlank from './wing-blank';
var version = '0.0.1';
var components = [ActionSheet, Badge, Button, Checkbox, CheckboxGroup, Col, Collapse, CollapseItem, DatetimePicker, Dialog, Divider, DropdownItem, DropdownMenu, Field, Grid, GridItem, Icon, Image, ImagePreview, List, ListItem, Loading, NavBar, NoticeBar, Notify, Overlay, Picker, Popover, PopoverItem, Popup, PullRefresh, Radio, RadioGroup, Rate, Row, Search, Sidebar, SidebarItem, Slider, Stepper, Sticky, Swipe, SwipeAction, SwipeItem, Switch, Tab, Tabbar, TabbarItem, Tabs, Tag, Toast, WhiteSpace, WingBlank];

var install = function install(Vue) {
  components.forEach(function (Component) {
    Vue.use(Component);
  });
};
/* istanbul ignore if */


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export { install, version, ActionSheet, Badge, Button, Checkbox, CheckboxGroup, Col, Collapse, CollapseItem, DatetimePicker, Dialog, Divider, DropdownItem, DropdownMenu, Field, Grid, GridItem, Icon, Image, ImagePreview, Lazyload, List, ListItem, Loading, Locale, NavBar, NoticeBar, Notify, Overlay, Picker, Popover, PopoverItem, Popup, PullRefresh, Radio, RadioGroup, Rate, Row, Search, Sidebar, SidebarItem, Slider, Stepper, Sticky, Swipe, SwipeAction, SwipeItem, Switch, Tab, Tabbar, TabbarItem, Tabs, Tag, Toast, WhiteSpace, WingBlank };
export default {
  install: install,
  version: version
};