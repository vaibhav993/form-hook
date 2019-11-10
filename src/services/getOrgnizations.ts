import { OrganizationModel } from "../store/organizations/types"

const getOrganizations : () => Promise<OrganizationModel[]> = () => {
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve();
    //     },100);
    // });
    return fetch("./organizationsData.json")
        .then(data => data.json())
        .catch(error => []);
}

export default getOrganizations;