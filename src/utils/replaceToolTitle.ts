const beforeLabel1: string = " " + "آنلاین";
const beforeLabel2: string = " " + "انلاین";

// In this function we replace text/texts that don't need to show in app.
export const replaceToolTitle = (label: string): string => {
   return label.replaceAll(beforeLabel1, "").replace(beforeLabel2, "");
};
