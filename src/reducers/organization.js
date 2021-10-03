import { ACCESS_ORGANIZATIONS } from '../utils/strings.json';

export const initialState = {
  login: {
    avatarUrl: '',
    name: '',
  },
  description: '',
};

export const getOrganizationsActionCreator = (data) => ({
  type: ACCESS_ORGANIZATIONS,
  data,
});

const reducer = (state = [initialState], action) => {
  switch (action.type) {
    case ACCESS_ORGANIZATIONS:
      return action.data.map((organization, index) => ({
        ...initialState,
        key: index,
        login: {
          avatarUrl: organization.avatar_url,
          name: organization.login,
        },
        description: organization.description,
      }));

    default:
      return state;
  }
};

export default reducer;
