import * as Actions from './themeActions';
import { lightTheme } from '../theme';
import { } from 'redux';
import { } from 'react-redux';

const initialState = {
  theme: lightTheme
};

export const themeReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case Actions.APPLY_THEME:
      return Object.assign({}, { theme: action.payload } );
    default:
      return state;
  }
};