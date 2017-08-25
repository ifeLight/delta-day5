//sentenceRegex = /([^ \r\n][^!?\.\r\n]+[\w!?\.]+)/g
// just regex = /[\.\!]+\s*|\n+\s*/

var str='Mr. is a pen. i am a boy';
var res= str.split(/([\.\!]+|(.{1,8}\.\s))\s*|\n+\s*/);  //this code return a array of sentense.
console.log(res);