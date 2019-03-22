## Bonify RN Challenge
 This repository hosts my solutions to the React Native challenge sent by Bonify

 ## Challenge 1
 The solution to challenge one is in the folder challenge1. In this solution, I iterate my thoughts on Native Modules, it's use cases, pros and cons, you can view that [here](https://github.com/Hasstrup/bonify-challenge/tree/develop/challenge1)

 ### Challenge 2

 This is the normalizing algorithm implemented for the dataset provided in the challenge. 
 The true implementation that can be copied and pasted in the browser is located [here](https://github.com/Hasstrup/bonify-challenge/blob/develop/challenge2/src/implementation.js)

 #### TESTS FOR CHALLENGE 2
 If you would like to run the tests I wrote for the solution to challenge 2, Please follow through with the next steps

```
 - clone this project
 - cd challenge2 & npm install
 - npm test
 ```


#### Challenge 3 & 4

It is expected that at this step, you might have cloned the repository already, if you haven't already, feel free to do so and proceed with the next steps to get the application running. 

- **Install Dependencies**
    check out into the project folder and install dependencies

    ```
      cd challenge3/BonifyMaps
      yarn install

    ```

- **Install CocoaPods and pods:**
    After a successful install, Install the following pods by running
   
    ```
     cd ios
     pod install

    ```
    // Note that this was bundled with cocoapods 1.6.1 so you might have to update yours :)

- **Get a a Google Maps API Key & Youtube Key:**
   If you need the search location feature to work, you'll be needing the google maps api key and the youtube api key. I'll be emailing a private note with mine, so you can use it to view the project. When you have gotten the keys replace them by 

   ```
     // while in BonifyMapsFolder
     - touch env.config.js
     // add this to the env.config.js
     export const GOOGLE_MAPS_API_KEY="Your google maps API KEY"
     export const YOUTUBE_API_KEY="Your youtube Api Key"
   ```
  You should be set up now. :)

- **Android Caveat** 
   Because of the issue referenced [here](https://github.com/react-native-community/react-native-maps/issues/2695), which is a result of two conflicting libraries (react-native-navigation && react-native-maps); You would need to modify the build gradle version for the react-native-maps package, to get the app to work on android. 

   ```
    cd node_modules/react-native-maps/lib/android/build.gradle
    // add this line to the END of the dependencies block 
    implementation "com.android.support:appcompat-v7:${rootProject.ext.supportLibVersion}"
  
   ```

- **Run the application**
  Now you can run the application by running either
  
  ```
    react-native run-ios //for ios
    react-native run-android //for android

  ```

 PS: The intinite scroll (challenge 4) is implemented, please look out for that :)

 #### Mobile tests
 The tests for the react native application are being implemented in this [PR](https://github.com/Hasstrup/bonify-challenge/pull/1)


 Thank you; Please reach out if you have any hitches [here](mailto:hasstrup.ezekiel@gmail.com)
