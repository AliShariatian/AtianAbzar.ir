const beforeLabel: string = "آنلاین";

// In this function we replace text/texts that don't need to show in app.
export const replaceToolTitle = (label: string): string => {
   return label.replace(beforeLabel, "");
};
