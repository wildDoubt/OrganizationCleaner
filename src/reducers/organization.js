export const initialState = {
    login: {
        avatar_url: '',
        name: ''
    },
    description: ''
}

export const getOrganizationsActionCreator = (data) => {
    return {
        type: 'ACCESS_ORGANIZATIONS',
        data
    }
}
const reducer = (state = [initialState], action) => {
    switch (action.type) {
        case 'ACCESS_ORGANIZATIONS':
            return action.data.map((organization, index) => {
                return {
                    ...initialState,
                    key: index,
                    login: {
                        avatar_url: organization.avatar_url,
                        name: organization.login
                    },
                    description: organization.description
                }
            })

        default:
            return state;
    }
}

export default reducer;
