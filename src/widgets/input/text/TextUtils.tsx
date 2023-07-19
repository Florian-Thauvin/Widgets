import { Formatter } from '../../../common/model/WidgetDefinition';

export const toUpperCase: Formatter<string> = (value: string) => {
    return value?.toUpperCase();
};
