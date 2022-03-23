import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        seconds?: number;
        timeDisplayClasses?: string;
        startButtonClasses?: string;
        resetButtonClasses?: string;
    };
    events: {
        finished: CustomEvent<any>;
        started: CustomEvent<any>;
        stopped: CustomEvent<any>;
        reset: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type TimerProps = typeof __propDef.props;
export declare type TimerEvents = typeof __propDef.events;
export declare type TimerSlots = typeof __propDef.slots;
export default class Timer extends SvelteComponentTyped<TimerProps, TimerEvents, TimerSlots> {
}
export {};
