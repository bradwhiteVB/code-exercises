# Reckon Exercises (Tests)

I have created this one repository to contain both tests, each exercise folder contains the node js app for that test. The instructions told us to point test 1 to port 9999, however, there was no indication for test 2 so I pointed it to 8888 so that there were no collisions.

I could not get anything other than a 500 "Access Denied" on the submit url for exercise 2 - so instead of calling that infinitely, I put in a max retries capability so that it can at least show the error it last received. I've set it quite high at 20 just in case.  I checked via Postman and curl as well as through this app multiple times and it is always the same.



## Minimum Requirements
* Node version 10.x


## Install, setup and run
Navigate to the folder in which you want to install the project

**Exercise 1**
```bash
git clone https://github.com/bradwhiteVB/code-exercises.git
cd ReckonExercises/exercise-1
npm install
npm test #optional to run the configured mocha tests
npm start
```

**Exercise 2**
Presuming you have cloned the repo above...:)
```bash
cd .../ReckonExercises/exercise-2
npm install
npm test #optional to run the configured mocha tests
npm start
```
