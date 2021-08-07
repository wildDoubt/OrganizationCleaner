export const initialState = {
    login: '',
    repositories: [
        {
            name: '',
            private: false,
            url: '',
            starred: 0,
            watched: 0,
            createdAt: null,
            updatedAt: null
        }
    ]
}

export const getRepositoriesActionCreator = (data) => {
    return {
        type: 'ACCESS_REPOSITORIES',
        data
    }
}

export const loginActionCreator = (data) => {
    return {
        type: 'LOGIN',
        data
    }
}
const reducer = (state = [initialState], action) => {
    switch (action.type) {
        case 'ACCESS_REPOSITORIES':
            return action.data.map((organization, index) => {
                return {
                    ...initialState,
                    key: index,
                    login: action.data,
                    description: organization.description
                }
            })
        case 'LOGIN':
            return {
                ...initialState,
                login: action.data
            }
        default:
            return state;
    }
}

export default reducer;
