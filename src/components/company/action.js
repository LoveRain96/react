export const LOAD_COMPANY       = "loadCompany";
export const ADD_COMPANY        = "addCompany";

export function loadCompany() {
    return {
        type : LOAD_COMPANY
    }
}

export function addCompany(name, phoneManager, emailManager, address, nameManager) {
    return {
        type : ADD_COMPANY,
        name : name,
        phoneManager : phoneManager,
        emailManager : emailManager,
        address      : address,
        nameManager  : nameManager
    }
}