 # Kidbuu
Quick and simple framework to develop and debug Lambda Functions in JS

The easiest way to get started is to run the debug mode on Visual Studio Code or any other IDE that would have debugging capabilities
and can run the "node server.js" command

The folder structure is set so that you can have multiple versions of your Lambda functions.

Inside each version folder (in this repo the [VersionAlpha] folder) I have included a folder exclusive for functions (the [Functions] folder) because I separate functions from validation models to "universal" modules.

Iniside each Function (in this repo the [PresentKidbuu] folder] there are 3 integral files:
 -index.js
 -package.json
 -event.json
 
 also included (eventually) you will have the [node_modules] folder after running the "npm install" command within this folder.
 Lastly there is a separate module I built that I use for mocking API Gateway Response headers which i explain how to use within the sample index.js included.
 
 Then entry-point and where you are going to develop your Lambda function is the index.js file.
 
 The format for this function has to have an export called handler and it will have a signature of 3 arguments
  -event (this is the sample event template you can generate from AWS Lambda)
  -context (not really required outside of AWS environment but must be passed at least as an empty object "{}")
  -callback (this function is declared at server.js file and shall be called at the end of your Lambda function in the index.js file)
  
  The main purpose of this framework is to ease the development of Lambda functions allowing the use of breakpoints in IDEs such as Visual Studio Code or JetBrains WebStorm or IntelliJ IDEA


![Kid Buu](http://vignette1.wikia.nocookie.net/dragonball/images/a/a6/MajinBuuKidDebutNV.png/revision/latest?cb=20150325220800)
