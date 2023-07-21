import React from 'react';
import { TextView } from './widgets/input/text/TextView';
import { toUpperCase } from './widgets/input/text/TextUtils';
import { TableView } from './widgets/display/table/TableView';

export function Demo() {
    //return <TextViewDemo />;
    return <TableViewDemo />;
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
                    setValue: (_value: string) => {}
                }}
            />
            <TextView
                {...{
                    isEnabled: true,
                    autoFormat: toUpperCase,
                    label: 'TextViewUpperCase',
                    id: 'TextViewUpperCase',
                    setValue: setFormatValue,
                    value: formatValue
                }}
            />
            <TextView
                {...{
                    isEnabled: true,
                    constraints: {
                        isRequired: true
                    },
                    label: 'TextViewRequired',
                    id: 'TextViewRequired',
                    setValue: (_value: string) => {}
                }}
            />
            <TextView
                {...{
                    isEnabled: true,
                    constraints: {
                        isRequired: false,
                        maxSize: 5
                    },
                    label: 'TextViewMaxSize',
                    id: 'TextViewMaxSize',
                    setValue: (_value: string) => {}
                }}
            />
            <TextView
                {...{
                    isEnabled: true,
                    constraints: {
                        isRequired: false,
                        regexp: /[A-Z]{5}/
                    },
                    label: 'TextViewRegexp',
                    id: 'TextViewRegexp',
                    setValue: (_value: string) => {}
                }}
            />
        </>
    );
}

interface IFakeData {
    name: string;
    secondname: string;
}

const data: IFakeData[] = [
    { name: 'titi', secondname: 'a' },
    { name: 'toto', secondname: 'a' },
    { name: 'tata', secondname: 'a' },
    { name: 'tata', secondname: 'b' }
];

export function TableViewDemo() {
    return (
        <TableView
            {...{
                id: '1',
                data,
                columns: [
                    { attribute: 'name', display: (value: string) => <p>{value}</p>, index: 0, label: 'name' },
                    { attribute: 'secondname', display: (value: string) => <p>{value}</p>, index: 0, label: 'secondname' }
                ],
                getIdentifier: (value: IFakeData) => {
                    return value.name;
                }
            }}
        />
    );
}
