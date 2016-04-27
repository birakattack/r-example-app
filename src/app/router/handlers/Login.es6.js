import { BaseHandler, METHODS } from '@r/platform/router';
import * as platformActions from '@r/platform/actions';

import Session from './../../models/Session';
import * as sessionActions from '../../actions/session';

export default class Login extends BaseHandler {
  async [METHODS.POST](dispatch, getState, utils) {
    const { username, password } = this.bodyParams;

    try {
      const newSession = await Session.fromLogin(username, password);
      dispatch(sessionActions.setSession(newSession));
    } catch (e) {

    }
  }
}
