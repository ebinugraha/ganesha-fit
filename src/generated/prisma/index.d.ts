
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Pengunjung
 * 
 */
export type Pengunjung = $Result.DefaultSelection<Prisma.$PengunjungPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const STATUS: {
  Aktif: 'Aktif',
  Tidak_Aktif: 'Tidak_Aktif',
  Diblokir: 'Diblokir'
};

export type STATUS = (typeof STATUS)[keyof typeof STATUS]

}

export type STATUS = $Enums.STATUS

export const STATUS: typeof $Enums.STATUS

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Pengunjungs
 * const pengunjungs = await prisma.pengunjung.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Pengunjungs
   * const pengunjungs = await prisma.pengunjung.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.pengunjung`: Exposes CRUD operations for the **Pengunjung** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pengunjungs
    * const pengunjungs = await prisma.pengunjung.findMany()
    * ```
    */
  get pengunjung(): Prisma.PengunjungDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Pengunjung: 'Pengunjung'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "pengunjung"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Pengunjung: {
        payload: Prisma.$PengunjungPayload<ExtArgs>
        fields: Prisma.PengunjungFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PengunjungFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengunjungPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PengunjungFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengunjungPayload>
          }
          findFirst: {
            args: Prisma.PengunjungFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengunjungPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PengunjungFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengunjungPayload>
          }
          findMany: {
            args: Prisma.PengunjungFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengunjungPayload>[]
          }
          create: {
            args: Prisma.PengunjungCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengunjungPayload>
          }
          createMany: {
            args: Prisma.PengunjungCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PengunjungDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengunjungPayload>
          }
          update: {
            args: Prisma.PengunjungUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengunjungPayload>
          }
          deleteMany: {
            args: Prisma.PengunjungDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PengunjungUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PengunjungUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengunjungPayload>
          }
          aggregate: {
            args: Prisma.PengunjungAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePengunjung>
          }
          groupBy: {
            args: Prisma.PengunjungGroupByArgs<ExtArgs>
            result: $Utils.Optional<PengunjungGroupByOutputType>[]
          }
          count: {
            args: Prisma.PengunjungCountArgs<ExtArgs>
            result: $Utils.Optional<PengunjungCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    pengunjung?: PengunjungOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Pengunjung
   */

  export type AggregatePengunjung = {
    _count: PengunjungCountAggregateOutputType | null
    _avg: PengunjungAvgAggregateOutputType | null
    _sum: PengunjungSumAggregateOutputType | null
    _min: PengunjungMinAggregateOutputType | null
    _max: PengunjungMaxAggregateOutputType | null
  }

  export type PengunjungAvgAggregateOutputType = {
    id_pengunjung: number | null
    biaya: number | null
  }

  export type PengunjungSumAggregateOutputType = {
    id_pengunjung: number | null
    biaya: number | null
  }

  export type PengunjungMinAggregateOutputType = {
    id_pengunjung: number | null
    nama_lengkap: string | null
    alamat: string | null
    no_hp: string | null
    email: string | null
    tgl_bergabung: Date | null
    masa_berlaku: Date | null
    nama_jenis_pengunjung: string | null
    status: $Enums.STATUS | null
    biaya: number | null
    catatan: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PengunjungMaxAggregateOutputType = {
    id_pengunjung: number | null
    nama_lengkap: string | null
    alamat: string | null
    no_hp: string | null
    email: string | null
    tgl_bergabung: Date | null
    masa_berlaku: Date | null
    nama_jenis_pengunjung: string | null
    status: $Enums.STATUS | null
    biaya: number | null
    catatan: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PengunjungCountAggregateOutputType = {
    id_pengunjung: number
    nama_lengkap: number
    alamat: number
    no_hp: number
    email: number
    tgl_bergabung: number
    masa_berlaku: number
    nama_jenis_pengunjung: number
    status: number
    biaya: number
    catatan: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PengunjungAvgAggregateInputType = {
    id_pengunjung?: true
    biaya?: true
  }

  export type PengunjungSumAggregateInputType = {
    id_pengunjung?: true
    biaya?: true
  }

  export type PengunjungMinAggregateInputType = {
    id_pengunjung?: true
    nama_lengkap?: true
    alamat?: true
    no_hp?: true
    email?: true
    tgl_bergabung?: true
    masa_berlaku?: true
    nama_jenis_pengunjung?: true
    status?: true
    biaya?: true
    catatan?: true
    created_at?: true
    updated_at?: true
  }

  export type PengunjungMaxAggregateInputType = {
    id_pengunjung?: true
    nama_lengkap?: true
    alamat?: true
    no_hp?: true
    email?: true
    tgl_bergabung?: true
    masa_berlaku?: true
    nama_jenis_pengunjung?: true
    status?: true
    biaya?: true
    catatan?: true
    created_at?: true
    updated_at?: true
  }

  export type PengunjungCountAggregateInputType = {
    id_pengunjung?: true
    nama_lengkap?: true
    alamat?: true
    no_hp?: true
    email?: true
    tgl_bergabung?: true
    masa_berlaku?: true
    nama_jenis_pengunjung?: true
    status?: true
    biaya?: true
    catatan?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PengunjungAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pengunjung to aggregate.
     */
    where?: PengunjungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pengunjungs to fetch.
     */
    orderBy?: PengunjungOrderByWithRelationInput | PengunjungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PengunjungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pengunjungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pengunjungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pengunjungs
    **/
    _count?: true | PengunjungCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PengunjungAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PengunjungSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PengunjungMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PengunjungMaxAggregateInputType
  }

  export type GetPengunjungAggregateType<T extends PengunjungAggregateArgs> = {
        [P in keyof T & keyof AggregatePengunjung]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePengunjung[P]>
      : GetScalarType<T[P], AggregatePengunjung[P]>
  }




  export type PengunjungGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PengunjungWhereInput
    orderBy?: PengunjungOrderByWithAggregationInput | PengunjungOrderByWithAggregationInput[]
    by: PengunjungScalarFieldEnum[] | PengunjungScalarFieldEnum
    having?: PengunjungScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PengunjungCountAggregateInputType | true
    _avg?: PengunjungAvgAggregateInputType
    _sum?: PengunjungSumAggregateInputType
    _min?: PengunjungMinAggregateInputType
    _max?: PengunjungMaxAggregateInputType
  }

  export type PengunjungGroupByOutputType = {
    id_pengunjung: number
    nama_lengkap: string
    alamat: string
    no_hp: string
    email: string
    tgl_bergabung: Date
    masa_berlaku: Date
    nama_jenis_pengunjung: string
    status: $Enums.STATUS
    biaya: number
    catatan: string
    created_at: Date
    updated_at: Date
    _count: PengunjungCountAggregateOutputType | null
    _avg: PengunjungAvgAggregateOutputType | null
    _sum: PengunjungSumAggregateOutputType | null
    _min: PengunjungMinAggregateOutputType | null
    _max: PengunjungMaxAggregateOutputType | null
  }

  type GetPengunjungGroupByPayload<T extends PengunjungGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PengunjungGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PengunjungGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PengunjungGroupByOutputType[P]>
            : GetScalarType<T[P], PengunjungGroupByOutputType[P]>
        }
      >
    >


  export type PengunjungSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pengunjung?: boolean
    nama_lengkap?: boolean
    alamat?: boolean
    no_hp?: boolean
    email?: boolean
    tgl_bergabung?: boolean
    masa_berlaku?: boolean
    nama_jenis_pengunjung?: boolean
    status?: boolean
    biaya?: boolean
    catatan?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["pengunjung"]>



  export type PengunjungSelectScalar = {
    id_pengunjung?: boolean
    nama_lengkap?: boolean
    alamat?: boolean
    no_hp?: boolean
    email?: boolean
    tgl_bergabung?: boolean
    masa_berlaku?: boolean
    nama_jenis_pengunjung?: boolean
    status?: boolean
    biaya?: boolean
    catatan?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PengunjungOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_pengunjung" | "nama_lengkap" | "alamat" | "no_hp" | "email" | "tgl_bergabung" | "masa_berlaku" | "nama_jenis_pengunjung" | "status" | "biaya" | "catatan" | "created_at" | "updated_at", ExtArgs["result"]["pengunjung"]>

  export type $PengunjungPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pengunjung"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_pengunjung: number
      nama_lengkap: string
      alamat: string
      no_hp: string
      email: string
      tgl_bergabung: Date
      masa_berlaku: Date
      nama_jenis_pengunjung: string
      status: $Enums.STATUS
      biaya: number
      catatan: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["pengunjung"]>
    composites: {}
  }

  type PengunjungGetPayload<S extends boolean | null | undefined | PengunjungDefaultArgs> = $Result.GetResult<Prisma.$PengunjungPayload, S>

  type PengunjungCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PengunjungFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PengunjungCountAggregateInputType | true
    }

  export interface PengunjungDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pengunjung'], meta: { name: 'Pengunjung' } }
    /**
     * Find zero or one Pengunjung that matches the filter.
     * @param {PengunjungFindUniqueArgs} args - Arguments to find a Pengunjung
     * @example
     * // Get one Pengunjung
     * const pengunjung = await prisma.pengunjung.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PengunjungFindUniqueArgs>(args: SelectSubset<T, PengunjungFindUniqueArgs<ExtArgs>>): Prisma__PengunjungClient<$Result.GetResult<Prisma.$PengunjungPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pengunjung that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PengunjungFindUniqueOrThrowArgs} args - Arguments to find a Pengunjung
     * @example
     * // Get one Pengunjung
     * const pengunjung = await prisma.pengunjung.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PengunjungFindUniqueOrThrowArgs>(args: SelectSubset<T, PengunjungFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PengunjungClient<$Result.GetResult<Prisma.$PengunjungPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pengunjung that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengunjungFindFirstArgs} args - Arguments to find a Pengunjung
     * @example
     * // Get one Pengunjung
     * const pengunjung = await prisma.pengunjung.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PengunjungFindFirstArgs>(args?: SelectSubset<T, PengunjungFindFirstArgs<ExtArgs>>): Prisma__PengunjungClient<$Result.GetResult<Prisma.$PengunjungPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pengunjung that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengunjungFindFirstOrThrowArgs} args - Arguments to find a Pengunjung
     * @example
     * // Get one Pengunjung
     * const pengunjung = await prisma.pengunjung.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PengunjungFindFirstOrThrowArgs>(args?: SelectSubset<T, PengunjungFindFirstOrThrowArgs<ExtArgs>>): Prisma__PengunjungClient<$Result.GetResult<Prisma.$PengunjungPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pengunjungs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengunjungFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pengunjungs
     * const pengunjungs = await prisma.pengunjung.findMany()
     * 
     * // Get first 10 Pengunjungs
     * const pengunjungs = await prisma.pengunjung.findMany({ take: 10 })
     * 
     * // Only select the `id_pengunjung`
     * const pengunjungWithId_pengunjungOnly = await prisma.pengunjung.findMany({ select: { id_pengunjung: true } })
     * 
     */
    findMany<T extends PengunjungFindManyArgs>(args?: SelectSubset<T, PengunjungFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PengunjungPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pengunjung.
     * @param {PengunjungCreateArgs} args - Arguments to create a Pengunjung.
     * @example
     * // Create one Pengunjung
     * const Pengunjung = await prisma.pengunjung.create({
     *   data: {
     *     // ... data to create a Pengunjung
     *   }
     * })
     * 
     */
    create<T extends PengunjungCreateArgs>(args: SelectSubset<T, PengunjungCreateArgs<ExtArgs>>): Prisma__PengunjungClient<$Result.GetResult<Prisma.$PengunjungPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pengunjungs.
     * @param {PengunjungCreateManyArgs} args - Arguments to create many Pengunjungs.
     * @example
     * // Create many Pengunjungs
     * const pengunjung = await prisma.pengunjung.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PengunjungCreateManyArgs>(args?: SelectSubset<T, PengunjungCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pengunjung.
     * @param {PengunjungDeleteArgs} args - Arguments to delete one Pengunjung.
     * @example
     * // Delete one Pengunjung
     * const Pengunjung = await prisma.pengunjung.delete({
     *   where: {
     *     // ... filter to delete one Pengunjung
     *   }
     * })
     * 
     */
    delete<T extends PengunjungDeleteArgs>(args: SelectSubset<T, PengunjungDeleteArgs<ExtArgs>>): Prisma__PengunjungClient<$Result.GetResult<Prisma.$PengunjungPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pengunjung.
     * @param {PengunjungUpdateArgs} args - Arguments to update one Pengunjung.
     * @example
     * // Update one Pengunjung
     * const pengunjung = await prisma.pengunjung.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PengunjungUpdateArgs>(args: SelectSubset<T, PengunjungUpdateArgs<ExtArgs>>): Prisma__PengunjungClient<$Result.GetResult<Prisma.$PengunjungPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pengunjungs.
     * @param {PengunjungDeleteManyArgs} args - Arguments to filter Pengunjungs to delete.
     * @example
     * // Delete a few Pengunjungs
     * const { count } = await prisma.pengunjung.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PengunjungDeleteManyArgs>(args?: SelectSubset<T, PengunjungDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pengunjungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengunjungUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pengunjungs
     * const pengunjung = await prisma.pengunjung.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PengunjungUpdateManyArgs>(args: SelectSubset<T, PengunjungUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pengunjung.
     * @param {PengunjungUpsertArgs} args - Arguments to update or create a Pengunjung.
     * @example
     * // Update or create a Pengunjung
     * const pengunjung = await prisma.pengunjung.upsert({
     *   create: {
     *     // ... data to create a Pengunjung
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pengunjung we want to update
     *   }
     * })
     */
    upsert<T extends PengunjungUpsertArgs>(args: SelectSubset<T, PengunjungUpsertArgs<ExtArgs>>): Prisma__PengunjungClient<$Result.GetResult<Prisma.$PengunjungPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pengunjungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengunjungCountArgs} args - Arguments to filter Pengunjungs to count.
     * @example
     * // Count the number of Pengunjungs
     * const count = await prisma.pengunjung.count({
     *   where: {
     *     // ... the filter for the Pengunjungs we want to count
     *   }
     * })
    **/
    count<T extends PengunjungCountArgs>(
      args?: Subset<T, PengunjungCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PengunjungCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pengunjung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengunjungAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PengunjungAggregateArgs>(args: Subset<T, PengunjungAggregateArgs>): Prisma.PrismaPromise<GetPengunjungAggregateType<T>>

    /**
     * Group by Pengunjung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengunjungGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PengunjungGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PengunjungGroupByArgs['orderBy'] }
        : { orderBy?: PengunjungGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PengunjungGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPengunjungGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pengunjung model
   */
  readonly fields: PengunjungFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pengunjung.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PengunjungClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pengunjung model
   */
  interface PengunjungFieldRefs {
    readonly id_pengunjung: FieldRef<"Pengunjung", 'Int'>
    readonly nama_lengkap: FieldRef<"Pengunjung", 'String'>
    readonly alamat: FieldRef<"Pengunjung", 'String'>
    readonly no_hp: FieldRef<"Pengunjung", 'String'>
    readonly email: FieldRef<"Pengunjung", 'String'>
    readonly tgl_bergabung: FieldRef<"Pengunjung", 'DateTime'>
    readonly masa_berlaku: FieldRef<"Pengunjung", 'DateTime'>
    readonly nama_jenis_pengunjung: FieldRef<"Pengunjung", 'String'>
    readonly status: FieldRef<"Pengunjung", 'STATUS'>
    readonly biaya: FieldRef<"Pengunjung", 'Int'>
    readonly catatan: FieldRef<"Pengunjung", 'String'>
    readonly created_at: FieldRef<"Pengunjung", 'DateTime'>
    readonly updated_at: FieldRef<"Pengunjung", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pengunjung findUnique
   */
  export type PengunjungFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengunjung
     */
    select?: PengunjungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengunjung
     */
    omit?: PengunjungOmit<ExtArgs> | null
    /**
     * Filter, which Pengunjung to fetch.
     */
    where: PengunjungWhereUniqueInput
  }

  /**
   * Pengunjung findUniqueOrThrow
   */
  export type PengunjungFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengunjung
     */
    select?: PengunjungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengunjung
     */
    omit?: PengunjungOmit<ExtArgs> | null
    /**
     * Filter, which Pengunjung to fetch.
     */
    where: PengunjungWhereUniqueInput
  }

  /**
   * Pengunjung findFirst
   */
  export type PengunjungFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengunjung
     */
    select?: PengunjungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengunjung
     */
    omit?: PengunjungOmit<ExtArgs> | null
    /**
     * Filter, which Pengunjung to fetch.
     */
    where?: PengunjungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pengunjungs to fetch.
     */
    orderBy?: PengunjungOrderByWithRelationInput | PengunjungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pengunjungs.
     */
    cursor?: PengunjungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pengunjungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pengunjungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pengunjungs.
     */
    distinct?: PengunjungScalarFieldEnum | PengunjungScalarFieldEnum[]
  }

  /**
   * Pengunjung findFirstOrThrow
   */
  export type PengunjungFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengunjung
     */
    select?: PengunjungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengunjung
     */
    omit?: PengunjungOmit<ExtArgs> | null
    /**
     * Filter, which Pengunjung to fetch.
     */
    where?: PengunjungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pengunjungs to fetch.
     */
    orderBy?: PengunjungOrderByWithRelationInput | PengunjungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pengunjungs.
     */
    cursor?: PengunjungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pengunjungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pengunjungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pengunjungs.
     */
    distinct?: PengunjungScalarFieldEnum | PengunjungScalarFieldEnum[]
  }

  /**
   * Pengunjung findMany
   */
  export type PengunjungFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengunjung
     */
    select?: PengunjungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengunjung
     */
    omit?: PengunjungOmit<ExtArgs> | null
    /**
     * Filter, which Pengunjungs to fetch.
     */
    where?: PengunjungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pengunjungs to fetch.
     */
    orderBy?: PengunjungOrderByWithRelationInput | PengunjungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pengunjungs.
     */
    cursor?: PengunjungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pengunjungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pengunjungs.
     */
    skip?: number
    distinct?: PengunjungScalarFieldEnum | PengunjungScalarFieldEnum[]
  }

  /**
   * Pengunjung create
   */
  export type PengunjungCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengunjung
     */
    select?: PengunjungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengunjung
     */
    omit?: PengunjungOmit<ExtArgs> | null
    /**
     * The data needed to create a Pengunjung.
     */
    data: XOR<PengunjungCreateInput, PengunjungUncheckedCreateInput>
  }

  /**
   * Pengunjung createMany
   */
  export type PengunjungCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pengunjungs.
     */
    data: PengunjungCreateManyInput | PengunjungCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pengunjung update
   */
  export type PengunjungUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengunjung
     */
    select?: PengunjungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengunjung
     */
    omit?: PengunjungOmit<ExtArgs> | null
    /**
     * The data needed to update a Pengunjung.
     */
    data: XOR<PengunjungUpdateInput, PengunjungUncheckedUpdateInput>
    /**
     * Choose, which Pengunjung to update.
     */
    where: PengunjungWhereUniqueInput
  }

  /**
   * Pengunjung updateMany
   */
  export type PengunjungUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pengunjungs.
     */
    data: XOR<PengunjungUpdateManyMutationInput, PengunjungUncheckedUpdateManyInput>
    /**
     * Filter which Pengunjungs to update
     */
    where?: PengunjungWhereInput
    /**
     * Limit how many Pengunjungs to update.
     */
    limit?: number
  }

  /**
   * Pengunjung upsert
   */
  export type PengunjungUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengunjung
     */
    select?: PengunjungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengunjung
     */
    omit?: PengunjungOmit<ExtArgs> | null
    /**
     * The filter to search for the Pengunjung to update in case it exists.
     */
    where: PengunjungWhereUniqueInput
    /**
     * In case the Pengunjung found by the `where` argument doesn't exist, create a new Pengunjung with this data.
     */
    create: XOR<PengunjungCreateInput, PengunjungUncheckedCreateInput>
    /**
     * In case the Pengunjung was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PengunjungUpdateInput, PengunjungUncheckedUpdateInput>
  }

  /**
   * Pengunjung delete
   */
  export type PengunjungDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengunjung
     */
    select?: PengunjungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengunjung
     */
    omit?: PengunjungOmit<ExtArgs> | null
    /**
     * Filter which Pengunjung to delete.
     */
    where: PengunjungWhereUniqueInput
  }

  /**
   * Pengunjung deleteMany
   */
  export type PengunjungDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pengunjungs to delete
     */
    where?: PengunjungWhereInput
    /**
     * Limit how many Pengunjungs to delete.
     */
    limit?: number
  }

  /**
   * Pengunjung without action
   */
  export type PengunjungDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengunjung
     */
    select?: PengunjungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengunjung
     */
    omit?: PengunjungOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PengunjungScalarFieldEnum: {
    id_pengunjung: 'id_pengunjung',
    nama_lengkap: 'nama_lengkap',
    alamat: 'alamat',
    no_hp: 'no_hp',
    email: 'email',
    tgl_bergabung: 'tgl_bergabung',
    masa_berlaku: 'masa_berlaku',
    nama_jenis_pengunjung: 'nama_jenis_pengunjung',
    status: 'status',
    biaya: 'biaya',
    catatan: 'catatan',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PengunjungScalarFieldEnum = (typeof PengunjungScalarFieldEnum)[keyof typeof PengunjungScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const PengunjungOrderByRelevanceFieldEnum: {
    nama_lengkap: 'nama_lengkap',
    alamat: 'alamat',
    no_hp: 'no_hp',
    email: 'email',
    nama_jenis_pengunjung: 'nama_jenis_pengunjung',
    catatan: 'catatan'
  };

  export type PengunjungOrderByRelevanceFieldEnum = (typeof PengunjungOrderByRelevanceFieldEnum)[keyof typeof PengunjungOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'STATUS'
   */
  export type EnumSTATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'STATUS'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type PengunjungWhereInput = {
    AND?: PengunjungWhereInput | PengunjungWhereInput[]
    OR?: PengunjungWhereInput[]
    NOT?: PengunjungWhereInput | PengunjungWhereInput[]
    id_pengunjung?: IntFilter<"Pengunjung"> | number
    nama_lengkap?: StringFilter<"Pengunjung"> | string
    alamat?: StringFilter<"Pengunjung"> | string
    no_hp?: StringFilter<"Pengunjung"> | string
    email?: StringFilter<"Pengunjung"> | string
    tgl_bergabung?: DateTimeFilter<"Pengunjung"> | Date | string
    masa_berlaku?: DateTimeFilter<"Pengunjung"> | Date | string
    nama_jenis_pengunjung?: StringFilter<"Pengunjung"> | string
    status?: EnumSTATUSFilter<"Pengunjung"> | $Enums.STATUS
    biaya?: IntFilter<"Pengunjung"> | number
    catatan?: StringFilter<"Pengunjung"> | string
    created_at?: DateTimeFilter<"Pengunjung"> | Date | string
    updated_at?: DateTimeFilter<"Pengunjung"> | Date | string
  }

  export type PengunjungOrderByWithRelationInput = {
    id_pengunjung?: SortOrder
    nama_lengkap?: SortOrder
    alamat?: SortOrder
    no_hp?: SortOrder
    email?: SortOrder
    tgl_bergabung?: SortOrder
    masa_berlaku?: SortOrder
    nama_jenis_pengunjung?: SortOrder
    status?: SortOrder
    biaya?: SortOrder
    catatan?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _relevance?: PengunjungOrderByRelevanceInput
  }

  export type PengunjungWhereUniqueInput = Prisma.AtLeast<{
    id_pengunjung?: number
    AND?: PengunjungWhereInput | PengunjungWhereInput[]
    OR?: PengunjungWhereInput[]
    NOT?: PengunjungWhereInput | PengunjungWhereInput[]
    nama_lengkap?: StringFilter<"Pengunjung"> | string
    alamat?: StringFilter<"Pengunjung"> | string
    no_hp?: StringFilter<"Pengunjung"> | string
    email?: StringFilter<"Pengunjung"> | string
    tgl_bergabung?: DateTimeFilter<"Pengunjung"> | Date | string
    masa_berlaku?: DateTimeFilter<"Pengunjung"> | Date | string
    nama_jenis_pengunjung?: StringFilter<"Pengunjung"> | string
    status?: EnumSTATUSFilter<"Pengunjung"> | $Enums.STATUS
    biaya?: IntFilter<"Pengunjung"> | number
    catatan?: StringFilter<"Pengunjung"> | string
    created_at?: DateTimeFilter<"Pengunjung"> | Date | string
    updated_at?: DateTimeFilter<"Pengunjung"> | Date | string
  }, "id_pengunjung">

  export type PengunjungOrderByWithAggregationInput = {
    id_pengunjung?: SortOrder
    nama_lengkap?: SortOrder
    alamat?: SortOrder
    no_hp?: SortOrder
    email?: SortOrder
    tgl_bergabung?: SortOrder
    masa_berlaku?: SortOrder
    nama_jenis_pengunjung?: SortOrder
    status?: SortOrder
    biaya?: SortOrder
    catatan?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PengunjungCountOrderByAggregateInput
    _avg?: PengunjungAvgOrderByAggregateInput
    _max?: PengunjungMaxOrderByAggregateInput
    _min?: PengunjungMinOrderByAggregateInput
    _sum?: PengunjungSumOrderByAggregateInput
  }

  export type PengunjungScalarWhereWithAggregatesInput = {
    AND?: PengunjungScalarWhereWithAggregatesInput | PengunjungScalarWhereWithAggregatesInput[]
    OR?: PengunjungScalarWhereWithAggregatesInput[]
    NOT?: PengunjungScalarWhereWithAggregatesInput | PengunjungScalarWhereWithAggregatesInput[]
    id_pengunjung?: IntWithAggregatesFilter<"Pengunjung"> | number
    nama_lengkap?: StringWithAggregatesFilter<"Pengunjung"> | string
    alamat?: StringWithAggregatesFilter<"Pengunjung"> | string
    no_hp?: StringWithAggregatesFilter<"Pengunjung"> | string
    email?: StringWithAggregatesFilter<"Pengunjung"> | string
    tgl_bergabung?: DateTimeWithAggregatesFilter<"Pengunjung"> | Date | string
    masa_berlaku?: DateTimeWithAggregatesFilter<"Pengunjung"> | Date | string
    nama_jenis_pengunjung?: StringWithAggregatesFilter<"Pengunjung"> | string
    status?: EnumSTATUSWithAggregatesFilter<"Pengunjung"> | $Enums.STATUS
    biaya?: IntWithAggregatesFilter<"Pengunjung"> | number
    catatan?: StringWithAggregatesFilter<"Pengunjung"> | string
    created_at?: DateTimeWithAggregatesFilter<"Pengunjung"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Pengunjung"> | Date | string
  }

  export type PengunjungCreateInput = {
    nama_lengkap: string
    alamat: string
    no_hp: string
    email: string
    tgl_bergabung: Date | string
    masa_berlaku: Date | string
    nama_jenis_pengunjung: string
    status: $Enums.STATUS
    biaya: number
    catatan: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PengunjungUncheckedCreateInput = {
    id_pengunjung?: number
    nama_lengkap: string
    alamat: string
    no_hp: string
    email: string
    tgl_bergabung: Date | string
    masa_berlaku: Date | string
    nama_jenis_pengunjung: string
    status: $Enums.STATUS
    biaya: number
    catatan: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PengunjungUpdateInput = {
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tgl_bergabung?: DateTimeFieldUpdateOperationsInput | Date | string
    masa_berlaku?: DateTimeFieldUpdateOperationsInput | Date | string
    nama_jenis_pengunjung?: StringFieldUpdateOperationsInput | string
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    biaya?: IntFieldUpdateOperationsInput | number
    catatan?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PengunjungUncheckedUpdateInput = {
    id_pengunjung?: IntFieldUpdateOperationsInput | number
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tgl_bergabung?: DateTimeFieldUpdateOperationsInput | Date | string
    masa_berlaku?: DateTimeFieldUpdateOperationsInput | Date | string
    nama_jenis_pengunjung?: StringFieldUpdateOperationsInput | string
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    biaya?: IntFieldUpdateOperationsInput | number
    catatan?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PengunjungCreateManyInput = {
    id_pengunjung?: number
    nama_lengkap: string
    alamat: string
    no_hp: string
    email: string
    tgl_bergabung: Date | string
    masa_berlaku: Date | string
    nama_jenis_pengunjung: string
    status: $Enums.STATUS
    biaya: number
    catatan: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PengunjungUpdateManyMutationInput = {
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tgl_bergabung?: DateTimeFieldUpdateOperationsInput | Date | string
    masa_berlaku?: DateTimeFieldUpdateOperationsInput | Date | string
    nama_jenis_pengunjung?: StringFieldUpdateOperationsInput | string
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    biaya?: IntFieldUpdateOperationsInput | number
    catatan?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PengunjungUncheckedUpdateManyInput = {
    id_pengunjung?: IntFieldUpdateOperationsInput | number
    nama_lengkap?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    tgl_bergabung?: DateTimeFieldUpdateOperationsInput | Date | string
    masa_berlaku?: DateTimeFieldUpdateOperationsInput | Date | string
    nama_jenis_pengunjung?: StringFieldUpdateOperationsInput | string
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
    biaya?: IntFieldUpdateOperationsInput | number
    catatan?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumSTATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.STATUS | EnumSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.STATUS[]
    notIn?: $Enums.STATUS[]
    not?: NestedEnumSTATUSFilter<$PrismaModel> | $Enums.STATUS
  }

  export type PengunjungOrderByRelevanceInput = {
    fields: PengunjungOrderByRelevanceFieldEnum | PengunjungOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PengunjungCountOrderByAggregateInput = {
    id_pengunjung?: SortOrder
    nama_lengkap?: SortOrder
    alamat?: SortOrder
    no_hp?: SortOrder
    email?: SortOrder
    tgl_bergabung?: SortOrder
    masa_berlaku?: SortOrder
    nama_jenis_pengunjung?: SortOrder
    status?: SortOrder
    biaya?: SortOrder
    catatan?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PengunjungAvgOrderByAggregateInput = {
    id_pengunjung?: SortOrder
    biaya?: SortOrder
  }

  export type PengunjungMaxOrderByAggregateInput = {
    id_pengunjung?: SortOrder
    nama_lengkap?: SortOrder
    alamat?: SortOrder
    no_hp?: SortOrder
    email?: SortOrder
    tgl_bergabung?: SortOrder
    masa_berlaku?: SortOrder
    nama_jenis_pengunjung?: SortOrder
    status?: SortOrder
    biaya?: SortOrder
    catatan?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PengunjungMinOrderByAggregateInput = {
    id_pengunjung?: SortOrder
    nama_lengkap?: SortOrder
    alamat?: SortOrder
    no_hp?: SortOrder
    email?: SortOrder
    tgl_bergabung?: SortOrder
    masa_berlaku?: SortOrder
    nama_jenis_pengunjung?: SortOrder
    status?: SortOrder
    biaya?: SortOrder
    catatan?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PengunjungSumOrderByAggregateInput = {
    id_pengunjung?: SortOrder
    biaya?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumSTATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.STATUS | EnumSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.STATUS[]
    notIn?: $Enums.STATUS[]
    not?: NestedEnumSTATUSWithAggregatesFilter<$PrismaModel> | $Enums.STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSTATUSFilter<$PrismaModel>
    _max?: NestedEnumSTATUSFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumSTATUSFieldUpdateOperationsInput = {
    set?: $Enums.STATUS
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumSTATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.STATUS | EnumSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.STATUS[]
    notIn?: $Enums.STATUS[]
    not?: NestedEnumSTATUSFilter<$PrismaModel> | $Enums.STATUS
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumSTATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.STATUS | EnumSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.STATUS[]
    notIn?: $Enums.STATUS[]
    not?: NestedEnumSTATUSWithAggregatesFilter<$PrismaModel> | $Enums.STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSTATUSFilter<$PrismaModel>
    _max?: NestedEnumSTATUSFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}