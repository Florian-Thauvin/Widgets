interface IListViewData<T> {
    data: T;
    isChecked: boolean;
}

interface IListViewProps<T> {
    data: IListViewData<T>[];
    attributeKey: keyof T;
}

const ItemView = <T,>(item: IListViewData<T>, attributeKey: keyof T): JSX.Element => {
    return (
        <>
            <input type="checkbox" id="scales" name="scales" checked={item.isChecked} />
            <p>{`${item.data[attributeKey]}`}</p>
        </>
    );
};

const ListView = <T,>(props: IListViewProps<T>) => {
    return <div>{props.data.map((data: IListViewData<T>) => ItemView(data, props.attributeKey))}</div>;
};
