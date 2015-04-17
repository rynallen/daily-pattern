var str = "Habitat: Typically, Guadalupe bass are found in flowing water, whereas largemouth bass are found in quiet water.";

var ptrn = /found(\s+\w)+/ig

var data = ptrn.exec(str);
console.log(data);
// ["Guadalupe bass are found in flowing", " in", " flowing"]