import re


fileinput = open("tester.txt")
text = fileinput.read();

sentences = re.split(r'(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?|\!)\s', text)

fileinput.close();
for stuff in sentences:
        print(stuff) 
