import { Variant } from './consts';

export interface Alert {
    readonly message: string;
    readonly variant: Variant;
    readonly id: string;
    readonly open: boolean;
}

export interface Alerts {
    readonly alerts: Alert[];
}
