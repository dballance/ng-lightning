"use strict";
require('ts-helpers');
var avatar_1 = require('./images/avatar');
var badge_1 = require('./badges/badge');
var breadcrumbs_1 = require('./breadcrumbs/breadcrumbs');
var breadcrumb_1 = require('./breadcrumbs/breadcrumb');
var button_1 = require('./buttons/button');
var button_state_1 = require('./buttons/button-state');
var button_icon_1 = require('./buttons/button-icon');
var directives_1 = require('./datatables/directives');
var icon_1 = require('./icons/icon');
var directives_2 = require('./lookups/directives');
var datepicker_1 = require('./datepickers/datepicker');
var form_1 = require('./forms/form');
var dropdown_trigger_1 = require('./menus/dropdown-trigger');
var dropdown_1 = require('./menus/dropdown');
var dropdown_item_1 = require('./menus/dropdown-item');
var modal_1 = require('./modals/modal');
var notification_1 = require('./notifications/notification');
var notification_close_1 = require('./notifications/notification-close');
var pagination_1 = require('./paginations/pagination');
var pick_1 = require('./pick/pick');
var pick_option_1 = require('./pick/pick-option');
var pill_1 = require('./pills/pill');
var pill_image_1 = require('./pills/pill-image');
var pill_link_1 = require('./pills/pill-link');
var pill_remove_1 = require('./pills/pill-remove');
var directives_3 = require('./popovers/directives');
var rating_1 = require('./ratings/rating');
var section_1 = require('./sections/section');
var spinner_1 = require('./spinners/spinner');
var tabs_1 = require('./tabs/tabs');
var tab_1 = require('./tabs/tab');
var tab_verbose_1 = require('./tabs/tab-verbose');
var avatar_2 = require('./images/avatar');
exports.NglAvatar = avatar_2.NglAvatar;
var badge_2 = require('./badges/badge');
exports.NglBadge = badge_2.NglBadge;
var breadcrumbs_2 = require('./breadcrumbs/breadcrumbs');
exports.NglBreadcrumbs = breadcrumbs_2.NglBreadcrumbs;
var breadcrumb_2 = require('./breadcrumbs/breadcrumb');
exports.NglBreadcrumb = breadcrumb_2.NglBreadcrumb;
var button_2 = require('./buttons/button');
exports.NglButton = button_2.NglButton;
var button_state_2 = require('./buttons/button-state');
exports.NglButtonState = button_state_2.NglButtonState;
var button_icon_2 = require('./buttons/button-icon');
exports.NglButtonIcon = button_icon_2.NglButtonIcon;
var directives_4 = require('./datatables/directives');
exports.NGL_DATATABLE_DIRECTIVES = directives_4.NGL_DATATABLE_DIRECTIVES;
var icon_2 = require('./icons/icon');
exports.NglIcon = icon_2.NglIcon;
var directives_5 = require('./lookups/directives');
exports.NGL_LOOKUP_DIRECTIVES = directives_5.NGL_LOOKUP_DIRECTIVES;
var datepicker_2 = require('./datepickers/datepicker');
exports.NglDatepicker = datepicker_2.NglDatepicker;
var form_2 = require('./forms/form');
exports.NGL_FORM_DIRECTIVES = form_2.NGL_FORM_DIRECTIVES;
var dropdown_trigger_2 = require('./menus/dropdown-trigger');
exports.NglDropdownTrigger = dropdown_trigger_2.NglDropdownTrigger;
var dropdown_2 = require('./menus/dropdown');
exports.NglDropdown = dropdown_2.NglDropdown;
var dropdown_item_2 = require('./menus/dropdown-item');
exports.NglDropdownItem = dropdown_item_2.NglDropdownItem;
var modal_2 = require('./modals/modal');
exports.NglModal = modal_2.NglModal;
var notification_2 = require('./notifications/notification');
exports.NglNotification = notification_2.NglNotification;
var notification_close_2 = require('./notifications/notification-close');
exports.NglNotificationClose = notification_close_2.NglNotificationClose;
var pagination_2 = require('./paginations/pagination');
exports.NglPagination = pagination_2.NglPagination;
var pick_2 = require('./pick/pick');
exports.NglPick = pick_2.NglPick;
var pick_option_2 = require('./pick/pick-option');
exports.NglPickOption = pick_option_2.NglPickOption;
var pill_2 = require('./pills/pill');
exports.NglPill = pill_2.NglPill;
var pill_image_2 = require('./pills/pill-image');
exports.NglPillImage = pill_image_2.NglPillImage;
var pill_link_2 = require('./pills/pill-link');
exports.NglPillLink = pill_link_2.NglPillLink;
var pill_remove_2 = require('./pills/pill-remove');
exports.NglPillRemove = pill_remove_2.NglPillRemove;
var directives_6 = require('./popovers/directives');
exports.NGL_POPOVER_DIRECTIVES = directives_6.NGL_POPOVER_DIRECTIVES;
exports.NGL_POPOVER_PRECOMPILE = directives_6.NGL_POPOVER_PRECOMPILE;
var rating_2 = require('./ratings/rating');
exports.NglRating = rating_2.NglRating;
var section_2 = require('./sections/section');
exports.NglSection = section_2.NglSection;
var spinner_2 = require('./spinners/spinner');
exports.NglSpinner = spinner_2.NglSpinner;
var tabs_2 = require('./tabs/tabs');
exports.NglTabs = tabs_2.NglTabs;
var tab_2 = require('./tabs/tab');
exports.NglTab = tab_2.NglTab;
var tab_verbose_2 = require('./tabs/tab-verbose');
exports.NglTabVerbose = tab_verbose_2.NglTabVerbose;
exports.NglTabContent = tab_verbose_2.NglTabContent;
exports.NglTabHeading = tab_verbose_2.NglTabHeading;
exports.NGL_DIRECTIVES = [
    avatar_1.NglAvatar,
    badge_1.NglBadge,
    breadcrumbs_1.NglBreadcrumbs, breadcrumb_1.NglBreadcrumb,
    button_1.NglButton, button_state_1.NglButtonState, button_icon_1.NglButtonIcon,
    directives_1.NGL_DATATABLE_DIRECTIVES,
    icon_1.NglIcon,
    directives_2.NGL_LOOKUP_DIRECTIVES,
    datepicker_1.NglDatepicker,
    form_1.NGL_FORM_DIRECTIVES,
    dropdown_trigger_1.NglDropdownTrigger, dropdown_1.NglDropdown, dropdown_item_1.NglDropdownItem,
    modal_1.NglModal,
    notification_1.NglNotification, notification_close_1.NglNotificationClose,
    pagination_1.NglPagination,
    pick_1.NglPick, pick_option_1.NglPickOption,
    pill_1.NglPill, pill_image_1.NglPillImage, pill_link_1.NglPillLink, pill_remove_1.NglPillRemove,
    directives_3.NGL_POPOVER_DIRECTIVES,
    rating_1.NglRating,
    section_1.NglSection,
    spinner_1.NglSpinner,
    tabs_1.NglTabs, tab_1.NglTab, tab_verbose_1.NglTabVerbose, tab_verbose_1.NglTabContent, tab_verbose_1.NglTabHeading,
];
exports.NGL_PRECOMPILE = [
    directives_3.NGL_POPOVER_PRECOMPILE,
];
var config_1 = require('./config/config');
exports.provideNglConfig = config_1.provideNglConfig;
