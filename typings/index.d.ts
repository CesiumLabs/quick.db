import Sqlite from 'better-sqlite3';

export interface DatabaseOptions{
    path?: string;
    table?: string;
    database?: Sqlite.Database;
}

export interface BasicOptions{ 
    table?: string;
    length?: number;
    sort?: string;
}

export interface Dataset<V = any>{
    ID: string;
    data: V;
}

export interface MultiTableDataset<V = any> extends Dataset<V>{
    table: string;
}

export interface Tables{
    count: number;
    tables: string[];
}

export interface ExportOptions{
    stringify?: boolean;
    tableName?: string | null;
    allTable?: boolean;
    format: any;
}

export class Database<V = any>{

    public name: string;
    public path: string;
    public tableName: string;
    public readonly _database: Sqlite.Database;

    public constructor(name: string, options: DatabaseOptions);

    public prepareTable(name: string): void;
    public eval(x: string): any;
    public array(): Dataset<V>[];
    public size(): number;
    public deleteAll(options?: BasicOptions): void;
    public createTable<T>(name: string): Database<T>;
    public createTable(name: string): Database<any>;
    public get(key: string, options?: BasicOptions): V | null;
    public fetch(key: string, options?: BasicOptions): V | null;
    public set(key: string, value: V, options?: BasicOptions): V;
    public has(key: string, options?: BasicOptions): boolean;
    public type(key: string, options?: BasicOptions): "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "array";
    public delete(key: string, options?: BasicOptions): boolean;
    public all(options?: BasicOptions): Dataset<V>[];
    public fetchAll(options?: BasicOptions): Dataset<V>[];
    public push(key: string, valueLike: V | V[], options?: BasicOptions): V[];
    public pull(key: string, itemLike: V | V[], options?: BasicOptions): V[];
    public startsWith(key: string, options?: BasicOptions): Dataset<V>[]; 
    public endsWith(key: string, options?: BasicOptions): Dataset<V>[];
    public add(key: string, value: number, options?: BasicOptions): number;
    public subtract(key: string, value: number, options?: BasicOptions): number;
    public multiply(key: string, value: number, options?: BasicOptions): number;
    public divide(key: string, value: number, options?: BasicOptions): number;
    public modulus(key: string, value: number, options?: BasicOptions): number;
    public keyArray(options?: BasicOptions): string[];
    public valueArray(options?: BasicOptions): V[];
    public drop(options?: BasicOptions): boolean;
    public includes(ey: string, options?: BasicOptions): boolean;
    public forEach(fn: (value: Dataset<V>, i: number, array: Dataset<V>[]) => void, options?: BasicOptions): void;
    public map<T>(fn: (value: Dataset<V>, i: number, array: Dataset<V>[]) => T, options?: BasicOptions): T[];
    public map(fn: (value: Dataset<V>, i: number, array: Dataset<V>[]) => any, options?: BasicOptions): any[];
    public some(fn: (value: Dataset<V>, i: number, array: Dataset<V>[]) => boolean, options?: BasicOptions): boolean;
    public every(fn: (value: Dataset<V>, i: number, array: Dataset<V>[]) => boolean, options?: BasicOptions): boolean;
    public sort(fn: (a: Dataset<V>, b: Dataset<V>) => number, options?: BasicOptions): Dataset<V>[];
    public filter(fn: (value: Dataset<V>, i: number, array: Dataset<V>[]) => boolean, options?: BasicOptions): Dataset<V>[];
    public flatMap(fn: (value: Dataset<V>, i: number, array: Dataset<V>[]) => Dataset<V> | Dataset<V>[], options?: BasicOptions): Dataset<V>[];
    public reduce(fn: (previousValue: Dataset<V>, currentValue: Dataset<V>, index: number, array: Dataset<V>[]) => Dataset<V>, initialValue?: Dataset<V>[], options?: BasicOptions): Dataset<V>[];
    public reduceRight(fn: (previousValue: Dataset<V>, currentValue: Dataset<V>, index: number, array: Dataset<V>[]) => Dataset<V>, initialValue?: Dataset<V>[], options?: BasicOptions): Dataset<V>[];
    public find(fn: (value: Dataset<V>, i: number, array: Dataset<V>[]) => boolean, options?: BasicOptions): Dataset<V> | undefined;
    public findIndex(fn: (value: Dataset<V>, i: number, array: Dataset<V>[]) => boolean, options?: BasicOptions): number;
    public indexOf(searchElement: Dataset<V>, fromIndex: number, options?: BasicOptions): number;
    public toString(): string;
    public toJSON(): Dataset<V>[];
    public tables(): Tables;
    public export(options: ExportOptions): string | {
        data: MultiTableDataset<V> | Dataset<V>;
        mod: 'quick.db';
        generatedTimestamp: number;
    };
    public use(database: Sqlite.Database | Database<any>): void;
    public allTableArray(): MultiTableDataset<V>[];

    public [Symbol.iterator](): Generator<Dataset<V>, void, number>; // Needs fix

    public get database(): Sqlite.Database;
    public get rowCount(): number;
    public get length(): number;

}

export class Util{

    public static parseKey(key: string): { id: string, target?: string | null };

}

export function static<T>(): Database<T>;
export function static(): Database<any>;

export const version: string;
