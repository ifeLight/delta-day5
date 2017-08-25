var path =  require('path');
var fs =  require('fs');
var directory  = "./" + process.argv[2]
var filelist = [];
var codeNumbers = 0;

try {
    
   // List all files in a directory in Node.js recursively in a synchronous fashion
   // And Filtering The Third party Files with node_modules folder
     var walkSync = function(dir, filelist) {
                files = fs.readdirSync(dir);
            filelist = filelist || [];
            files.forEach(function(file) {
                if (fs.statSync(path.join(dir, file)).isDirectory() && (file.indexOf("node_modules") === -1)) {
                    filelist = walkSync(path.join(dir, file), filelist);
                }
                else {
                    //filelist.push(path.join(dir, file));
                    if (!(fs.statSync(path.join(dir, file)).isDirectory())) {
                        var numberOflines  = fs.readFileSync(path.join(dir, file)).toString().split("\n").length;
                         codeNumbers += numberOflines;
                    }
                   
                }
            });
        };

// Run the Recursion code
walkSync(directory, filelist);

console.log("The Number of lines of code written excluding Third-Party Codes are:")
console.log(codeNumbers)
}

catch (err) {
    console.log("There is something wrong with your input");
    console.log("It should be in these format: 'node index THE_FOLDER_NAME'");
    console.log("And make sure the folder, is in the root folder of this application")
}