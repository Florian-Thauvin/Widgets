import React from 'react';
import { TextView } from './widgets/input/text/TextView';
import { toUpperCase } from './widgets/input/text/TextUtils';

export function Demo() {
    return <TextViewDemo />;
}

export function TextViewDemo() {
    const [formatValue, setFormatValue] = React.useState<string>('');

    return (
        <>
            <TextView
                {...{
                    isEnabled: false,
                    label: 'TextViewDisabled',
                    id: 'TextViewDisabled',
                    setValue: (_value: string) => {},
                }}
            />
            <TextView
                {...{
                    isEnabled: true,
                    autoFormat: toUpperCase,
                    label: 'TextViewUpperCase',
                    id: 'TextViewUpperCase',
                    setValue: setFormatValue,
                    value: formatValue,
                }}
            />
            <TextView
                {...{
                    isEnabled: true,
                    constraints: {
                        isRequired: true,
                    },
                    label: 'TextViewRequired',
                    id: 'TextViewRequired',
                    setValue: (_value: string) => {},
                }}
            />
            <TextView
                {...{
                    isEnabled: true,
                    constraints: {
                        isRequired: false,
                        maxSize: 5,
                    },
                    label: 'TextViewMaxSize',
                    id: 'TextViewMaxSize',
                    setValue: (_value: string) => {},
                }}
            />
            <TextView
                {...{
                    isEnabled: true,
                    constraints: {
                        isRequired: false,
                        regexp: /[A-Z]{5}/,
                    },
                    label: 'TextViewRegexp',
                    id: 'TextViewRegexp',
                    setValue: (_value: string) => {},
                }}
            />
        </>
    );
}
