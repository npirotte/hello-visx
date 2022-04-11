import type { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import type { GraphQLClient } from 'graphql-request';
import type * as Dom from 'graphql-request/dist/types.dom';
import { print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "datasets" */
export type Datasets = {
  __typename?: 'datasets';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  protected: Scalars['Boolean'];
};

/** aggregated selection of "datasets" */
export type Datasets_Aggregate = {
  __typename?: 'datasets_aggregate';
  aggregate?: Maybe<Datasets_Aggregate_Fields>;
  nodes: Array<Datasets>;
};

/** aggregate fields of "datasets" */
export type Datasets_Aggregate_Fields = {
  __typename?: 'datasets_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Datasets_Max_Fields>;
  min?: Maybe<Datasets_Min_Fields>;
};


/** aggregate fields of "datasets" */
export type Datasets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Datasets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "datasets". All fields are combined with a logical 'AND'. */
export type Datasets_Bool_Exp = {
  _and?: InputMaybe<Array<Datasets_Bool_Exp>>;
  _not?: InputMaybe<Datasets_Bool_Exp>;
  _or?: InputMaybe<Array<Datasets_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  protected?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "datasets" */
export enum Datasets_Constraint {
  /** unique or primary key constraint */
  DatasetsPkey = 'datasets_pkey'
}

/** input type for inserting data into table "datasets" */
export type Datasets_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  protected?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Datasets_Max_Fields = {
  __typename?: 'datasets_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Datasets_Min_Fields = {
  __typename?: 'datasets_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "datasets" */
export type Datasets_Mutation_Response = {
  __typename?: 'datasets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Datasets>;
};

/** on_conflict condition type for table "datasets" */
export type Datasets_On_Conflict = {
  constraint: Datasets_Constraint;
  update_columns?: Array<Datasets_Update_Column>;
  where?: InputMaybe<Datasets_Bool_Exp>;
};

/** Ordering options when selecting data from "datasets". */
export type Datasets_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  protected?: InputMaybe<Order_By>;
};

/** primary key columns input for table: datasets */
export type Datasets_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "datasets" */
export enum Datasets_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Protected = 'protected'
}

/** input type for updating data in table "datasets" */
export type Datasets_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  protected?: InputMaybe<Scalars['Boolean']>;
};

/** update columns of table "datasets" */
export enum Datasets_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Protected = 'protected'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "datasets" */
  delete_datasets?: Maybe<Datasets_Mutation_Response>;
  /** delete single row from the table: "datasets" */
  delete_datasets_by_pk?: Maybe<Datasets>;
  /** insert data into the table: "datasets" */
  insert_datasets?: Maybe<Datasets_Mutation_Response>;
  /** insert a single row into the table: "datasets" */
  insert_datasets_one?: Maybe<Datasets>;
  /** update data of the table: "datasets" */
  update_datasets?: Maybe<Datasets_Mutation_Response>;
  /** update single row of the table: "datasets" */
  update_datasets_by_pk?: Maybe<Datasets>;
};


/** mutation root */
export type Mutation_RootDelete_DatasetsArgs = {
  where: Datasets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Datasets_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_DatasetsArgs = {
  objects: Array<Datasets_Insert_Input>;
  on_conflict?: InputMaybe<Datasets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Datasets_OneArgs = {
  object: Datasets_Insert_Input;
  on_conflict?: InputMaybe<Datasets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_DatasetsArgs = {
  _set?: InputMaybe<Datasets_Set_Input>;
  where: Datasets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Datasets_By_PkArgs = {
  _set?: InputMaybe<Datasets_Set_Input>;
  pk_columns: Datasets_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "datasets" */
  datasets: Array<Datasets>;
  /** fetch aggregated fields from the table: "datasets" */
  datasets_aggregate: Datasets_Aggregate;
  /** fetch data from the table: "datasets" using primary key columns */
  datasets_by_pk?: Maybe<Datasets>;
};


export type Query_RootDatasetsArgs = {
  distinct_on?: InputMaybe<Array<Datasets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Datasets_Order_By>>;
  where?: InputMaybe<Datasets_Bool_Exp>;
};


export type Query_RootDatasets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Datasets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Datasets_Order_By>>;
  where?: InputMaybe<Datasets_Bool_Exp>;
};


export type Query_RootDatasets_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "datasets" */
  datasets: Array<Datasets>;
  /** fetch aggregated fields from the table: "datasets" */
  datasets_aggregate: Datasets_Aggregate;
  /** fetch data from the table: "datasets" using primary key columns */
  datasets_by_pk?: Maybe<Datasets>;
};


export type Subscription_RootDatasetsArgs = {
  distinct_on?: InputMaybe<Array<Datasets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Datasets_Order_By>>;
  where?: InputMaybe<Datasets_Bool_Exp>;
};


export type Subscription_RootDatasets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Datasets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Datasets_Order_By>>;
  where?: InputMaybe<Datasets_Bool_Exp>;
};


export type Subscription_RootDatasets_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Boolean_comparison_exp: Boolean_Comparison_Exp;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  String_comparison_exp: String_Comparison_Exp;
  datasets: ResolverTypeWrapper<Datasets>;
  datasets_aggregate: ResolverTypeWrapper<Datasets_Aggregate>;
  datasets_aggregate_fields: ResolverTypeWrapper<Datasets_Aggregate_Fields>;
  datasets_bool_exp: Datasets_Bool_Exp;
  datasets_constraint: Datasets_Constraint;
  datasets_insert_input: Datasets_Insert_Input;
  datasets_max_fields: ResolverTypeWrapper<Datasets_Max_Fields>;
  datasets_min_fields: ResolverTypeWrapper<Datasets_Min_Fields>;
  datasets_mutation_response: ResolverTypeWrapper<Datasets_Mutation_Response>;
  datasets_on_conflict: Datasets_On_Conflict;
  datasets_order_by: Datasets_Order_By;
  datasets_pk_columns_input: Datasets_Pk_Columns_Input;
  datasets_select_column: Datasets_Select_Column;
  datasets_set_input: Datasets_Set_Input;
  datasets_update_column: Datasets_Update_Column;
  mutation_root: ResolverTypeWrapper<{}>;
  order_by: Order_By;
  query_root: ResolverTypeWrapper<{}>;
  subscription_root: ResolverTypeWrapper<{}>;
  timestamptz: ResolverTypeWrapper<Scalars['timestamptz']>;
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  uuid: ResolverTypeWrapper<Scalars['uuid']>;
  uuid_comparison_exp: Uuid_Comparison_Exp;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Boolean_comparison_exp: Boolean_Comparison_Exp;
  Int: Scalars['Int'];
  String: Scalars['String'];
  String_comparison_exp: String_Comparison_Exp;
  datasets: Datasets;
  datasets_aggregate: Datasets_Aggregate;
  datasets_aggregate_fields: Datasets_Aggregate_Fields;
  datasets_bool_exp: Datasets_Bool_Exp;
  datasets_insert_input: Datasets_Insert_Input;
  datasets_max_fields: Datasets_Max_Fields;
  datasets_min_fields: Datasets_Min_Fields;
  datasets_mutation_response: Datasets_Mutation_Response;
  datasets_on_conflict: Datasets_On_Conflict;
  datasets_order_by: Datasets_Order_By;
  datasets_pk_columns_input: Datasets_Pk_Columns_Input;
  datasets_set_input: Datasets_Set_Input;
  mutation_root: {};
  query_root: {};
  subscription_root: {};
  timestamptz: Scalars['timestamptz'];
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  uuid: Scalars['uuid'];
  uuid_comparison_exp: Uuid_Comparison_Exp;
};

export type CachedDirectiveArgs = {
  refresh?: Scalars['Boolean'];
  ttl?: Scalars['Int'];
};

export type CachedDirectiveResolver<Result, Parent, ContextType = any, Args = CachedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type DatasetsResolvers<ContextType = any, ParentType extends ResolversParentTypes['datasets'] = ResolversParentTypes['datasets']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  protected?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Datasets_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['datasets_aggregate'] = ResolversParentTypes['datasets_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['datasets_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['datasets']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Datasets_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['datasets_aggregate_fields'] = ResolversParentTypes['datasets_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Datasets_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['datasets_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['datasets_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Datasets_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['datasets_max_fields'] = ResolversParentTypes['datasets_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Datasets_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['datasets_min_fields'] = ResolversParentTypes['datasets_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Datasets_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['datasets_mutation_response'] = ResolversParentTypes['datasets_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['datasets']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Mutation_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['mutation_root'] = ResolversParentTypes['mutation_root']> = {
  delete_datasets?: Resolver<Maybe<ResolversTypes['datasets_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_DatasetsArgs, 'where'>>;
  delete_datasets_by_pk?: Resolver<Maybe<ResolversTypes['datasets']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Datasets_By_PkArgs, 'id'>>;
  insert_datasets?: Resolver<Maybe<ResolversTypes['datasets_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_DatasetsArgs, 'objects'>>;
  insert_datasets_one?: Resolver<Maybe<ResolversTypes['datasets']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Datasets_OneArgs, 'object'>>;
  update_datasets?: Resolver<Maybe<ResolversTypes['datasets_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_DatasetsArgs, 'where'>>;
  update_datasets_by_pk?: Resolver<Maybe<ResolversTypes['datasets']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Datasets_By_PkArgs, 'pk_columns'>>;
};

export type Query_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['query_root'] = ResolversParentTypes['query_root']> = {
  datasets?: Resolver<Array<ResolversTypes['datasets']>, ParentType, ContextType, Partial<Query_RootDatasetsArgs>>;
  datasets_aggregate?: Resolver<ResolversTypes['datasets_aggregate'], ParentType, ContextType, Partial<Query_RootDatasets_AggregateArgs>>;
  datasets_by_pk?: Resolver<Maybe<ResolversTypes['datasets']>, ParentType, ContextType, RequireFields<Query_RootDatasets_By_PkArgs, 'id'>>;
};

export type Subscription_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_root'] = ResolversParentTypes['subscription_root']> = {
  datasets?: SubscriptionResolver<Array<ResolversTypes['datasets']>, "datasets", ParentType, ContextType, Partial<Subscription_RootDatasetsArgs>>;
  datasets_aggregate?: SubscriptionResolver<ResolversTypes['datasets_aggregate'], "datasets_aggregate", ParentType, ContextType, Partial<Subscription_RootDatasets_AggregateArgs>>;
  datasets_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['datasets']>, "datasets_by_pk", ParentType, ContextType, RequireFields<Subscription_RootDatasets_By_PkArgs, 'id'>>;
};

export interface TimestamptzScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['timestamptz'], any> {
  name: 'timestamptz';
}

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['uuid'], any> {
  name: 'uuid';
}

export type Resolvers<ContextType = any> = {
  datasets?: DatasetsResolvers<ContextType>;
  datasets_aggregate?: Datasets_AggregateResolvers<ContextType>;
  datasets_aggregate_fields?: Datasets_Aggregate_FieldsResolvers<ContextType>;
  datasets_max_fields?: Datasets_Max_FieldsResolvers<ContextType>;
  datasets_min_fields?: Datasets_Min_FieldsResolvers<ContextType>;
  datasets_mutation_response?: Datasets_Mutation_ResponseResolvers<ContextType>;
  mutation_root?: Mutation_RootResolvers<ContextType>;
  query_root?: Query_RootResolvers<ContextType>;
  subscription_root?: Subscription_RootResolvers<ContextType>;
  timestamptz?: GraphQLScalarType;
  uuid?: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = any> = {
  cached?: CachedDirectiveResolver<any, any, ContextType>;
};

export type GetDatasetsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetDatasetsQuery = { __typename?: 'query_root', datasets: Array<{ __typename?: 'datasets', id: any, name: string, protected: boolean }> };

export type UpdateDatasetProtectionMutationVariables = Exact<{
  id: Scalars['uuid'];
  protected: Scalars['Boolean'];
}>;


export type UpdateDatasetProtectionMutation = { __typename?: 'mutation_root', update_datasets_by_pk?: { __typename?: 'datasets', protected: boolean } | null };


export const GetDatasetsDocument = gql`
    query GetDatasets($limit: Int, $offset: Int) {
  datasets(limit: $limit, offset: $offset, order_by: {name: asc}) {
    id
    name
    protected
  }
}
    `;
export const UpdateDatasetProtectionDocument = gql`
    mutation UpdateDatasetProtection($id: uuid!, $protected: Boolean!) {
  update_datasets_by_pk(pk_columns: {id: $id}, _set: {protected: $protected}) {
    protected
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();
const GetDatasetsDocumentString = print(GetDatasetsDocument);
const UpdateDatasetProtectionDocumentString = print(UpdateDatasetProtectionDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetDatasets(variables?: GetDatasetsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: GetDatasetsQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<GetDatasetsQuery>(GetDatasetsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetDatasets', 'query');
    },
    UpdateDatasetProtection(variables: UpdateDatasetProtectionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: UpdateDatasetProtectionMutation; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<UpdateDatasetProtectionMutation>(UpdateDatasetProtectionDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateDatasetProtection', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;