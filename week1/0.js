// The two ways to create a RegExp object are:
//   1. literal notation
//   2. constructor

// Literal notation does not use quotation marks for strings, constructor funtion does. The following expressions create the same exact regular expression:

/\,tx/i

new RegExp('\,tx', 'i');

new RegExp(/\,tx/, 'i');