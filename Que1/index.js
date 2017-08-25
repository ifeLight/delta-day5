var fs = require("fs");

var essay = fs.readFileSync("./essay.txt").toString();

sentenceRegex = /([^ \r\n][^!?\.\r\n]+[\w!?\.]+)/g
justRegex = /[\.\!]+\s*|\n+\s*/
anotherRegex = /([\.!;\?])(Mr\.|Mrs\.|Dr\.|Ms\.|St\.)\s+/
anotherRegex1 = /([^ \r\n][^!?\.\r\n]+((Mr\.|Mrs\.|Dr\.|Ms\.|St\.)*)+[\w!?\.])+/g
test1 = /(<=[.?!;])\s+(=\p{Lu})/

regex2 = /(<=[.!?:]|[.!?:]['"]|[\r\t\n])+(<!Mr\.|Mrs\.|Ms\.|Jr\.|Dr\.|Prof\.|U\.S\.A\.|Sr\.|T\.V\.A\.|a\.m\.|p\.m\.|a€￠\.|:\.|=?\.)\s+/

var str='Mr. is a pen. I am a boy';
var res = str.split(justRegex);  //this code return a array of sentense.
console.log(res);


