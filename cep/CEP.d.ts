interface FunctionMap {
    [key: string]: (...args: any[]) => any;
}

type RunnerType<T extends FunctionMap> = {
    [P in keyof T]: (...args: Parameters<T[P]>) => Promise<ReturnType<T[P]>>;
};

interface CustomFunctions {
    [key: string]: any;
}

declare function createRunner<T extends FunctionMap>(name: string): RunnerType<T>;
declare function evalScript<T extends FunctionMap>(name: keyof T, ...args: Parameters<T[keyof T]>): Promise<ReturnType<T[keyof T]>>;