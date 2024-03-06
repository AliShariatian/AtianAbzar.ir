export const valueValidation = (value: string) => {
   value = value.replace(/\.+/g, ".").replace(/[^\.0-9]/g, "");
   value = Number(value) > 1 ? value.replace(/^0+/g, "") : value;

   return Number(value);
};
