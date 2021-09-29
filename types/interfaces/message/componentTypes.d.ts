/** @see https://discord.com/developers/docs/interactions/message-components#buttons-button-object */
export interface ButtonComponent {
    /** All button components have type 2 */
    type: MessageComponentTypes.Button;
    /** for what the button says (max 80 characters) */
    label: string;
    /** a dev-defined unique string sent on click (max 100 characters). type 5 Link buttons can not have a custom_id */
    customId?: string;
    /** For different styles/colors of the buttons */
    style: ButtonStyles;
    /** Emoji object that includes fields of name, id, and animated supporting unicode and custom emojis. */
    emoji?: string | {
        /** Emoji id */
        id?: string;
        /** Emoji name */
        name?: string;
        /** Whether this emoji is animated */
        animated?: boolean;
    };
    /** optional url for link-style buttons that can navigate a user to the web. Only type 5 Link buttons can have a url */
    url?: string;
    /** Whether or not this button is disabled */
    disabled?: boolean;
}
export interface ButtonData {
    /** with the value you defined for this component */
    customId: string;
    /** The type of this component */
    componentType: MessageComponentTypes.Button;
}
export declare type ActionRoleComponents = ButtonComponent | SelectMenuComponent;
/** https://discord.com/developers/docs/interactions/message-components#buttons-button-styles */
export declare enum ButtonStyles {
    /** A blurple button */
    Primary = 1,
    /** A grey button */
    Secondary = 2,
    /** A green button */
    Success = 3,
    /** A red button */
    Danger = 4,
    /** A button that navigates to a URL */
    Link = 5
}
export declare type MessageComponents = ActionRow[];
/** @see https://discord.com/developers/docs/interactions/message-components#component-types */
export declare enum MessageComponentTypes {
    /** A row of components at the bottom of a message */
    ActionRow = 1,
    /** A button! */
    Button = 2,
    /** A select menu. */
    SelectMenu = 3
}
/** https://discord.com/developers/docs/interactions/message-components#actionrow */
export interface ActionRow {
    /** Action rows are a group of buttons. */
    type: 1;
    /** The components in this row */
    components: [SelectMenuComponent | ButtonComponent] | [ButtonComponent, ButtonComponent] | [ButtonComponent, ButtonComponent, ButtonComponent] | [ButtonComponent, ButtonComponent, ButtonComponent, ButtonComponent] | [ButtonComponent, ButtonComponent, ButtonComponent, ButtonComponent, ButtonComponent];
}
export interface SelectMenuData {
    /** The type of component */
    componentType: MessageComponentTypes.SelectMenu;
    /** The custom id provided for this component. */
    customId: string;
    /** The values chosen by the user. */
    values: string[];
}
export interface SelectMenuComponent {
    type: MessageComponentTypes.SelectMenu;
    /** A custom identifier for this component. Maximum 100 characters. */
    customId: string;
    /** A custom placeholder text if nothing is selected. Maximum 100 characters. */
    placeholder?: string;
    /** The minimum number of items that must be selected. Default 1. Between 1-25. */
    minValues?: number;
    /** The maximum number of items that can be selected. Default 1. Between 1-25. */
    maxValues?: number;
    /** The choices! Maximum of 25 items. */
    options: SelectOption[];
}
export interface SelectOption {
    /** The user-facing name of the option. Maximum 25 characters. */
    label: string;
    /** The dev-defined value of the option. Maximum 100 characters. */
    value: string;
    /** An additional description of the option. Maximum 50 characters. */
    description?: string;
    /** The id, name, and animated properties of an emoji. */
    emoji?: string | {
        /** Emoji id */
        id?: string;
        /** Emoji name */
        name?: string;
        /** Whether this emoji is animated */
        animated?: boolean;
    };
    /** Will render this option as already-selected by default. */
    default: boolean;
}
//# sourceMappingURL=componentTypes.d.ts.map