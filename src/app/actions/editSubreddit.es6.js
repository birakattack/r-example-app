export const SET_NAV_STATE = 'EDIT_SUBREDDIT__SET_NAV_STATE';
export const SET_SUB_SETTINGS = 'EDIT_SUBREDDIT__SET_SUB_SETTINGS';

export const setNavState = navState => ({
  type: SET_NAV_STATE,
  payload: { navState }
});

export const setSubSettings = settings => ({
  type: SET_SUB_SETTINGS,
  payload: { settings }
});
