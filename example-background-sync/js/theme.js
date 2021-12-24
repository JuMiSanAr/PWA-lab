import {color_registry} from "/shopfloor_mobile_base/static/wms/src/services/color_registry.js";

const dark_green = "#45763a";
const light_green = "#79b16d";
const subtle_green = "#c2e3ba";
const error_color = "#c22a4a";
const success_color = "#8fbf44";
const accent_color = "#82B1FF";
const info_color = "#5e60ab";
const warning_color = "#e5ab00";
const todo_color = "#FFE3AC";
const disabled_color = "#a8a8a8";

color_registry.add_theme(
    {
        /**
         * Standard keys
         */
        primary: dark_green,
        secondary: light_green,
        subtle: subtle_green,
        accent: accent_color,
        error: error_color,
        info: info_color,
        success: success_color,
        warning: warning_color,
        /**
         * App specific
         */
        content_bg: "grey lighten-3",
        screen_step_done: success_color,
        screen_step_todo: todo_color,
        /**
         * Icons
         */
        info_icon: info_color,
        /**
         * Buttons / actions
         */
        btn_action: dark_green,
        btn_action_cancel: error_color,
        btn_action_warn: warning_color,
        btn_action_complete: success_color,
        btn_action_todo: todo_color,
        btn_action_back: light_green,
        btn_action_disabled: disabled_color,
        /**
         * Selection
         */
        item_selected: success_color,
        /**
         * Spinner
         */
        spinner: dark_green,
        /**
         * Details
         */
        detail_main_card: light_green,
    },
    "light"
);
