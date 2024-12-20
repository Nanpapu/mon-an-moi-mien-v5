import { StyleSheet } from "react-native";
import { Theme } from "../../../theme";
import { spacing } from "../../../theme/spacing";

type StyleTheme = Theme & {
  isDark: boolean;
  spacing: typeof spacing;
};

export const createStyles = (theme: StyleTheme) => StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background.default,
  },

  formContainer: {
    width: "100%",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.background.paper,
    borderRadius: theme.spacing.sm,
    marginBottom: theme.spacing.md,
    paddingHorizontal: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.divider,
    height: 55,
  },

  input: {
    flex: 1,
    padding: theme.spacing.sm,
    marginLeft: theme.spacing.sm,
    fontSize: 16,
    color: theme.colors.text.primary,
  },

  eyeIcon: {
    padding: theme.spacing.sm,
  },

  errorText: {
    color: theme.colors.error.main,
    fontSize: 12,
    marginTop: -theme.spacing.xs,
    marginBottom: theme.spacing.sm,
  },

  button: {
    backgroundColor: theme.colors.primary.main,
    padding: theme.spacing.md,
    borderRadius: theme.spacing.sm,
    alignItems: "center",
    marginTop: theme.spacing.sm,
  },

  buttonDisabled: {
    backgroundColor: theme.colors.action.disabled,
  },

  buttonText: {
    color: theme.colors.primary.contrast,
    fontSize: 16,
    fontWeight: "600",
  },

  logoutButton: {
    backgroundColor: theme.colors.error.main,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing.md,
    borderRadius: theme.spacing.sm,
    marginTop: theme.spacing.md,
  },

  switchAuthButton: {
    marginTop: theme.spacing.lg,
    paddingVertical: theme.spacing.sm,
    backgroundColor: theme.colors.background.paper,
    borderRadius: theme.spacing.sm,
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.divider,
    ...theme.shadows.sm
  },
});
