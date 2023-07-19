import { Formatter } from 'common/model/WidgetDefinition';

export const toUpperCase: Formatter<string> = (value) => {
    return value?.toUpperCase();
};
