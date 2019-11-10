import React, {useEffect} from "react";
import { connect } from "react-redux"
import { AppState } from "../../store"
import { OrganizationsState } from "../../store/organizations/types"
import { loadOrgnizations } from "../../store/organizations/actions"

interface OrganizationsListType {
   organizationState : OrganizationsState,
   loadOrgnizations: any
}

const OrganizationsList: React.FC<OrganizationsListType> = React.memo(({organizationState, loadOrgnizations}) => {
    const { status, organizations } = organizationState;
    useEffect(() => {
        if(status === "INIT") {
            loadOrgnizations();
        }
    }, [])

    return (
        <div>
            {
                status === "LOADING"
                    && <p>Loading....</p>
            }
            {
                status === "ERROR"
                    && <p>Error....</p>
            }
            {
                status === "LOADED" &&
                    <ul>
                        {
                            organizations.map(o =>
                                <li key={o.id}>{o.title}</li>
                            )
                        }
                    </ul>
            }
        </div>
    )
});

const mapStateToProps = (state: AppState) => ({
    organizationState: state.organizationState
});

export default connect(
    mapStateToProps,
    { loadOrgnizations }
)(OrganizationsList)