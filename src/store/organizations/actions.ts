import { OrganizationModel,
    ORGNIZATION_FETCH,
    ORGNIZATION_FETCH_SUCCESS,
    ORGNIZATION_FETCH_ERROR 
} from "./types";

import { Dispatch } from 'redux';
import getOrganizations from '../../services/getOrgnizations';


function fetchOrganization() {
    return {
      type: ORGNIZATION_FETCH
    };
  }
  
function fetchOrganizationSuccess(orgnizations: OrganizationModel[]) {
    return {
        type: ORGNIZATION_FETCH_SUCCESS,
        orgnizations
    };
}
  
function fetchOrganizationError(e: Error) {
    return {
        type: ORGNIZATION_FETCH_ERROR,
        errorMessage: e.message
    };
}
  
export function loadOrgnizations() {
    return (dispatch: Dispatch) => {
        dispatch(fetchOrganization());
        return getOrganizations()
            .then((orgnizations) => {
                return dispatch(fetchOrganizationSuccess(orgnizations));
            })
            .catch((e: Error) => {
                return dispatch(fetchOrganizationError(e));
            });
    };
}