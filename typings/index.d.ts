import SQLite from "better-sqlite3";

declare module "@devsnowflake/quick.db" {

    export interface ParsedKey {
        id?: string;
        target?: string;
    }

    export interface DatabaseOptions extends SQLite.Options {
        path?: string;
        table?: string;
        database?: SQLite.Database;
        useWalMode?: boolean;
    }

    export class Util {
        public static parseKey(key: string): ParsedKey;
    }

    export interface DataSet {
        ID: string;
        data: any;
    }

    export interface ExecutorOptions {
        table?: string;
        limit?: number;
    }

    export type Callbackfn<T> = (value: DataSet, index: number, array: DataSet[]) => T;
    export type Reducer = (previousValue: DataSet, currentValue: DataSet, currentIndex: number, array: DataSet[]) => any;

    export class Database {
        name: string;
        path: string;
        tableName: string;

        constructor(name?: string, options?: DatabaseOptions);

        public [Symbol.iterator](): IterableIterator<DataSet>;

        public get database(): SQLite.Database;
        public get rowCount(): number;

        public prepareTable(name: string): void;
        public eval(x: any): any;
        public array(): DataSet[];
        public size(): number;
        public deleteAll(options?: ExecutorOptions): void;
        public createTable(name?: string): Database;
        public get(key: string, options?: ExecutorOptions): any;
        public fetch(key: string, options?: ExecutorOptions): any;
        public set(key: string, value: any, options?: ExecutorOptions): any;
        public has(key: string, options?: ExecutorOptions): boolean;
        public type(key: string, options?: ExecutorOptions): "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "array";
        public delete(key: string, options?: ExecutorOptions): boolean;
        public all(options?: ExecutorOptions): DataSet[];
        public push(key: string, valueLike: any | any[], options?: ExecutorOptions): any;
        public pull(key: string, itemLike: any | any[], options?: ExecutorOptions): any;
        public startsWith(key: string, options?: ExecutorOptions): DataSet[];
        public endsWith(key: string, options?: ExecutorOptions): DataSet[];
        public fetchAll(options?: ExecutorOptions): DataSet[];
        public add(key: string, value: number, options?: ExecutorOptions): any;
        public subtract(key: string, value: number, options?: ExecutorOptions): any;
        public multiply(key: string, value: number, options?: ExecutorOptions): any;
        public divide(key: string, value: number, options?: ExecutorOptions): any;
        public modulus(key: string, value: number, options?: ExecutorOptions): any;
        public keyArray(options?: ExecutorOptions): string;
        public valueArray(options?: ExecutorOptions): any;
        public drop(options?: ExecutorOptions): boolean;
        public get length(): number;
        public includes(key: string, options?: ExecutorOptions): boolean;
        public forEach(fn: Callbackfn<void>, options?: ExecutorOptions): void;
        public map(fn: Callbackfn<any>, options?: ExecutorOptions): any[];
        public some(fn: Callbackfn<unknown>, options?: ExecutorOptions): boolean;
        public every(fn: Callbackfn<unknown>, options?: ExecutorOptions): boolean;
        public sort(fn: Callbackfn<number>, options?: ExecutorOptions): DataSet[];
        public filter(fn: Callbackfn<unknown>, options?: ExecutorOptions): DataSet[];
        public flatMap(fn: Callbackfn<any>, options?: ExecutorOptions): DataSet[];
        public reduce(fn: Reducer, initialValue?: any, options?: ExecutorOptions): DataSet;
        public reduceRight(fn: Reducer, initialValue?: any, options?: ExecutorOptions): DataSet;
        public find(fn: Callbackfn<unknown>): DataSet;
        public findIndex(fn: Callbackfn<unknown>): number;
        public indexOf(searchElement: DataSet, fromIndex?: number): number;
        public toString(): string;
        public toJSON(options?: ExecutorOptions): DataSet[];
        public tables(): { count: number; tables: string[] };

        public export(options: { allTable: true }): { data: { id: number, table: string, data: DataSet[] }[]; mod: string; generatedTimestamp: number; };
        public export(options: { allTable: false }): { data: DataSet[]; mod: string; generatedTimestamp: number; }
        public export(options: { stringify: true }): string;
        public export(options?: { stringify?: boolean, format?: boolean | number, tableName?: string, allTable?: boolean }): { data: DataSet[] | { id: number, table: string, data: DataSet[] }[]; mod: string; generatedTimestamp: number; } | string;
        
        public use(database: SQLite.Database | Database): void;
        public allTableArray(): { id: number; table: string; data: DataSet[] }[];
        public flat(): DataSet[];
    }

    export function static(name?: string, path?: string, table?: string): Database;

    export const version: string;
}