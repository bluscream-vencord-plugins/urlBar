import { definePluginSettings } from "@api/Settings";
import { OptionType } from "@utils/types";

export const settings = definePluginSettings({
    position: {
        type: OptionType.SELECT,
        description: "Position of the navigation bar",
        options: [
            { label: "Top", value: "top", default: true },
            { label: "Bottom", value: "bottom" },
            { label: "Floating", value: "floating" }
        ],
        restartNeeded: true,
    },
    showHistory: {
        type: OptionType.BOOLEAN,
        description: "Show navigation history buttons",
        default: true,
        restartNeeded: false,
    },
    showRefresh: {
        type: OptionType.BOOLEAN,
        description: "Show refresh button",
        default: true,
        restartNeeded: false,
    },
    showHome: {
        type: OptionType.BOOLEAN,
        description: "Show home button",
        default: true,
        restartNeeded: false,
    },
    maxHeight: {
        type: OptionType.SLIDER,
        description: "Maximum height of the navigation bar",
        default: 40,
        markers: [30, 40, 50, 60],
        restartNeeded: false,
    }
});
