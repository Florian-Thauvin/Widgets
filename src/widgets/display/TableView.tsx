import React from 'react';
import { DataType, IWidgetProps, WidgetType } from '../../../common/model/WidgetDefinition';
import { applyOrders, IOrder, OrderParamsView } from './headers/Order';
import './TableView.css';

export interface ITableColumnProps<T extends DataType> {
    display: (data: T[keyof T]) => JSX.Element;
    attribute: keyof T;
    index: number;
    label: string;
}

export interface ITableViewProps<T extends DataType> extends IWidgetProps {
    columns: ITableColumnProps<T>[];
    data: T[];
    getIdentifier: (data: T) => string;
}

export const TableView: WidgetType<ITableViewProps<DataType>> = <T extends DataType>(props: ITableViewProps<T>): JSX.Element => {
    const [orders, setOrder] = React.useState<IOrder<T>[]>([]);
    const [filteredData, setFilteredData] = React.useState<string[]>([]);
    const { columns, getIdentifier } = props;

    return (
        <table>
            <thead>
                {columns.map((columnItem: ITableColumnProps<T>, index: number) => {
                    return (
                        <th key={columnItem.label}>
                            <p>{columnItem.label}</p>
                            <OrderParamsView {...{ orders, index, setOrder, attribute: columnItem.attribute }} />
                        </th>
                    );
                })}
            </thead>
            <tbody>
                <tr>
                    {props.data
                        .filter((data: T) => filteredData.includes(getIdentifier(data)))
                        .sort((a: T, b: T) => applyOrders(a, b, orders, 0))
                        .map((data) => {
                            return (
                                <tr>
                                    {columns.map((columnItem) => {
                                        return <td /*key={props.getIdentifier(data)}*/>{columnItem.display(data[columnItem.attribute])}</td>;
                                    })}
                                </tr>
                            );
                        })}
                </tr>
            </tbody>
        </table>
    );
};
