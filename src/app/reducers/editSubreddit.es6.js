import merge from '@r/platform/merge';
import * as editSubredditActions from '../actions/editSubreddit';

const DEFAULT = {
  navState: 'navBasic',
  settings: {}
};

export default function(state=DEFAULT, action={}) {
  switch(action.type) {
    case editSubredditActions.SET_NAV_STATE: {
      const { navState } = action.payload;
      return merge(state, { navState });
    }

    case editSubredditActions.SET_SUB_SETTINGS: {
      const { settings } = action.payload;
      return merge(state, { settings });
    }

    default: return state;
  }
}
