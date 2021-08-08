export const initialState = {
  login: '',
  repositories: [
    {
      name: '',
      starred: 0,
      watched: 0,
      createdAt: null,
      updatedAt: null,
    },
  ],
};

export const getRepositoriesActionCreator = (data) => ({
  type: 'ACCESS_REPOSITORIES',
  data,
});

export const loginActionCreator = (data) => ({
  type: 'LOGIN',
  data,
});

const reducer = (state = [initialState], action) => {
  switch (action.type) {
    case 'ACCESS_REPOSITORIES':
      return {
        ...state,
        repositories: action.data.map((repository, index) => ({
          key: index,
          name: repository.name,
          starred: repository.stargazers_count,
          watched: repository.watchers_count,
          createdAt: repository.created_at,
          updatedAt: repository.updated_at,
        })),
      };
    case 'LOGIN':
      return {
        ...initialState,
        login: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
