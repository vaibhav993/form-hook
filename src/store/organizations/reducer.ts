import { OrganizationsState,
    ORGNIZATION_FETCH,
    ORGNIZATION_FETCH_SUCCESS,
    ORGNIZATION_FETCH_ERROR,
    OrgizationActionTypes
} from "./types";

const initialState: OrganizationsState = {
    status: 'INIT',
    organizations: []
};
  
export function organizationsReducer(
    state = initialState,
    action: OrgizationActionTypes
): OrganizationsState {
    switch (action.type) {
        case ORGNIZATION_FETCH:
            return {
                ...state,
                status: "LOADING"
            };
        case ORGNIZATION_FETCH_SUCCESS:
            return {
                ...state,
                status: "LOADED",
                organizations: [
                    ...state.organizations,
                    ...action.orgnizations
                ]
            };
        case ORGNIZATION_FETCH_ERROR:
            return {
                ...state,
                status: "ERROR",
                errorMessage: action.errorMessage
            };
        default:
            return state;
    }
}
  