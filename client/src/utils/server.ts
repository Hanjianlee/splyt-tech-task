import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import QueryString from  'query-string'
import { APPLICATION_JSON, MULTIPART_FORM_DATA } from "./constants";
import {REACT_APP_API_URL,API_PREFIX} from './constants'
/** Add missing crossDomain Type for Axios Request 
 https://www.typescriptlang.org/docs/handbook/declaration-merging.html
 **/
declare module 'axios' {
    export interface AxiosRequestConfig {
        crossDomain: Boolean,
    }
}


/** Handles Axios Function **/
export function dispatchApiAction({url,method,data}:AxiosRequestConfig): Promise<AxiosResponse<AxiosRequestConfig> | {
    error: any;}> {
 return axios.request<AxiosRequestConfig>({url,method,data, crossDomain:true})
 .then(response => response)
 .catch(error=>({error}))
}

/** Handles Api Url Generation Function **/
interface UrlInterface {
  host:string,
  model:string,
  route:string,
  prefix:string|undefined,
  query:object,
}
export function getUrl({host,prefix,model,route,query}:UrlInterface){
    let url = `${host}`;
    if (prefix)  url += `/${prefix}`;
    url += `/${model}`;
    if (route)  url += `/${route}`;
    if (query) url += `?${QueryString.stringify(query)}`;
    return url;
}

/** Creates Options for Api Requests **/
interface AxiosOptions {
  method:string,
  data:object,
  contentType:string,
  token:string,

}
export function getOptions({ method, data, contentType, token }:AxiosOptions) {
    const authHeader:any = {};
    /** This allows Url To be protected with API KEYS **/
      authHeader.Authorization = `Basic ${btoa(
        `public:${process.env.API_KEY}`,
      )}`;
    switch (contentType) {
      case MULTIPART_FORM_DATA:
        return {
          method,
          headers: { 'content-type': MULTIPART_FORM_DATA, ...authHeader,
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
          data,
        };
      default:
        return {
          method,
          headers: { 'content-type': APPLICATION_JSON, ...authHeader ,        'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',},
          data,
        };
    }
  }
  export interface GetInterface  {
    model:string, 
    route:string, 
    query:object,
    contentType:string|null,
  }
  export function get({ model, route, query,contentType }:GetInterface) {
    const options = getOptions({ method: 'GET', contentType} as AxiosOptions);
    const url = getUrl({
      host: REACT_APP_API_URL,
      prefix: API_PREFIX,
      route,
      model,
      query,
    }as UrlInterface);
    return dispatchApiAction({url,...options}as AxiosRequestConfig);
  }
  