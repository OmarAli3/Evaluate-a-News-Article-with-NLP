const validUrl = require("valid-url");
const checkForURL = (inputURL) => {
  console.log("::: Running checkForURL :::", inputURL);
  const isValidUrl = Boolean(validUrl.is_web_uri(inputURL));
  console.log(isValidUrl ? "Looks like an URI" : "Not a URI");

  return isValidUrl;
};

export { checkForURL };
