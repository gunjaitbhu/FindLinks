# FindLinks
RentoMojo Assignment

Steps to execute.

1. Clone the Git repository to local machine.
2. Open command Line tool and traverse to the folder where Source code is cloned.
3. Make sure proper write permissions are available for C Drive.

4. Following Files should be present
	> app.js
	> appAsync.js
	> package.json
	> readMe

5. Excute command npm install , this will install all the dependencies required for the project.


6. There are two *.js added to the project:

	a) app.js - This is used for direct copying of links from "rentomojo.com", to "C:\Links.csv" file.
		Steps:
			1. execute command node app.js 
			2. Open C Drive , check if all the links are added to the Links.csv file.

	b) appAsync.js - This is used for copying of links from "rentomojo.com", to "C:\Links_Async.csv" file using async module.
		Steps:
			1. execute command node appAsync.js 
			2. Open C Drive , check if all the links are added to the Links_Async.csv file.


