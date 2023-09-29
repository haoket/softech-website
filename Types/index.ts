export interface DynamicQueryParamter {
  moduleName: 'CMS' | string;
  subModuleName: string;
  entityName: string;
  entityType: 't' | 'v';
  join?: string;
  fields: string | string[];
  parameters: Record<string, any>;
  limit?: number;
  skip?: number;
  sort?: string | string[];
}

export interface QueryParamter {
  sqlCommand: string;
  parameters: Record<string, string>;
}
