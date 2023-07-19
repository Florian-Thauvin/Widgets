export interface IConstraint {
    /**
     * Defines if the input is mandatory
     */
    isRequired: boolean;
}

export interface IStringConstraint extends IConstraint {
    regexp?: RegExp;
    maxSize?: number;
}
