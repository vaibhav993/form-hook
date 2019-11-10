export interface OrganizationModel {
    id: number
    title: string
    content: string
    creationDate: string
}

export interface OrganizationsState {
    status: string, // 'INIT', 'LOADING' | 'LOADED' | 'ERROR',
    organizations: OrganizationModel[],
    errorMessage?: string
}
  
export const ORGNIZATION_FETCH = 'ORGNIZATION_FETCH';
export const ORGNIZATION_FETCH_SUCCESS = 'ORGNIZATION_FETCH_SUCCESS';
export const ORGNIZATION_FETCH_ERROR = 'ORGNIZATION_FETCH_ERROR';

interface FetchOrganizationAction {
    type: typeof ORGNIZATION_FETCH
}
  
interface FetchOrganizationSuccessAction {
    type: typeof ORGNIZATION_FETCH_SUCCESS,
    orgnizations: OrganizationModel[]
}
  
interface FetchOrganizationErrorAction {
    type: typeof ORGNIZATION_FETCH_ERROR,
    errorMessage: string
}
  

export type OrgizationActionTypes = FetchOrganizationAction | FetchOrganizationSuccessAction | FetchOrganizationErrorAction;
  