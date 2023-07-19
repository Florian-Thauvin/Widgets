import React from 'react';
import { Formatter, IInputWidgetProps, WidgetType } from '../../../common/model/WidgetDefinition';
import { IStringConstraint } from '../../../common/model/ConstraintDefinition';
import './TextStyle.css';

/**
 * Props for a text view
 */
export interface ITextViewProps extends IInputWidgetProps<string, IStringConstraint> {
    /**
     * Label to display
     */
    label: string;

    /**
     * The auto input formatting
     */
    autoFormat?: Formatter<string>;
}

/**
 * A text view widget
 * @param props input properties {@link ITextViewProps}
 * @returns the widget
 */
export const TextView: WidgetType<ITextViewProps> = (props: ITextViewProps): JSX.Element => {
    const { isEnabled, id, constraints, label, value, setValue } = props;

    // The formatter used, nothing by default
    const format: Formatter<string> = props.autoFormat ? props.autoFormat : (editValue: string): string => editValue;
    // Method called on each edit
    const onEdit = (editValue: string): void => {
        const formattedValue = format(editValue);
        console.log(formattedValue);
        setValue(formattedValue);
    };

    return (
        <fieldset>
            {
                // The display label
            }
            <legend>
                {label}
                {constraints?.isRequired ? '*' : ''}
            </legend>
            {
                // The input widget
            }
            <input
                autoComplete="false"
                autoCapitalize="false"
                autoCorrect="false"
                autoSave="false"
                type="text"
                disabled={!isEnabled}
                id={id}
                required={constraints?.isRequired}
                pattern={constraints?.regexp?.source}
                maxLength={constraints?.maxSize}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => onEdit(event.target.value)}
                value={value}
            />
        </fieldset>
    );
};
