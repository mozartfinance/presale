export const APPLY_THEME = "APPLY_THEME";

export const applyTheme = (theme: any) => {
  return {
    type: APPLY_THEME,
    payload: theme
  };
};