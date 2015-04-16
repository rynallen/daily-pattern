// From the MDN Documentation on Regular Expressions

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

// Regular expressions are used with the RegExp methods:
//   1. test()
//   2. exec()

// Regular expressions are used with the String methods:
//   1. match()
//   2. replace()
//   3. search()
//   4. split()

// Let's talk a look at the exec() method:

// The exec() method searches for a match in a specified string, and returns a populated array, or null if no match is found.

var pattern = /(victory|win|clincher)(\s\w+){4,5}/ig,
    str = "Anthony Davis had 31 points and 13 rebounds and the New Orleans Pelicans earned their first playoff berth since 2011 with a 108-103 victory over the San Antonio Spurs on Wednesday night.";

var data = pattern.exec(str);
console.log(data) // ['victory over the San Antonio Spurs', 'victory', 'Spurs']