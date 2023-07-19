import { IConstraint } from './ConstraintDefinition';

/**
 * Simpliest defintion of a widget input props
 */
export interface IWidgetProps {
    /**
     * Identifier of the widget
     */
    id: string;
}

/**
 * Definition of a widget where the user can control it
 */
export interface IActionWidgetProps extends IWidgetProps {
    /**
     * Defines if the widget can be used or no
     */
    isEnabled: boolean;
}

/**
 * Defintion of a user input widget
 */
export interface IInputWidgetProps<T, U extends IConstraint> extends IActionWidgetProps {
    /**
     * The field constraints
     */
    constraints?: U;
    /**
     * The displayed value
     */
    value?: T;
    /**
     * The callback on value edit
     */
    setValue: React.Dispatch<React.SetStateAction<T>>;
}

/**
 * Defintion of a widget
 * @type T type of props
 */
export type WidgetType<T extends IWidgetProps> = (props: T) => JSX.Element;

/**
 * An input formatting function
 */
export type Formatter<T> = (value: T) => T;
