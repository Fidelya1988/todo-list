export const utc = new Date()
  .toJSON()
  .slice(0, 10)
  .replace(/-/g, ".")
  .split(".")
  .reverse()
  .join(".");
