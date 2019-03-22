### Understanding Native Modules
Native modules define bridges between our Javascript code and the platform specific code. React Native is javascript but needs to be transformed into the device specific language for the device to understand it and run it. 

Native modules expose bindings that can be consumed by our javascript code. Native modules extend the usability, sometimes performance and device-level access that React-native provides us outn of the box. 

Native Modules enable an app to access platform API that are not exposed to JavaScript. There can be multiple use cases for creating a Native Module, we might want to reuse some existing Java/Objective-C/Swift/Kotlin code without having to reimplement it in JavaScript, or write some high performance components, multi-thread code such as for image processing or any number of advanced extensions.

```
Ideally, React Native exposes sufficient enough APIs to make sure our we rarely have to write Native code, but the needs of our application differ and can require more  & from the devices, we use native modules to extend what we can do with the device (through react native).

```

#### Using native modules should be the exception, rather than the norm. It's generally best to write views, algorithms, and business logic in JavaScript when possible. The JavaScript we write is almost completely cross-platform, and updating to new versions of React Native is usually low effort.

### A few use cases for Native modules
* Accessing native platform features that React Native doesn't support out-of-the-box, e.g. payments APIs
* Exposing components and functionality when adding React Native to an existing native app
* Using existing iOS and Android libraries, examples authentication libraries for a 3rd party service
* algorithms with high performance like image processing that are usually low-level and multithreaded
* high-performance views when running into performance issues with React Native views

### Types of Native Modules

- ** API MODULES **
  API modules expose bindings for native methods to be called from JavaScript. When using a native method from JavaScript, any values passed will be marshalled on the JavaScript side and unmarshalled on the native side. 

- ** UI Component MODULES **
UI Component modules expose new React components that we can use in our javascript code. 

#### Advantages of Native Modules over React Native Implementations

- ** Extending the functionality of the application: ** 
   Sometimes while trying to implement certain features in your application, and react native doesn't expose such APIs (Like the Apple Payment API). There are many objective c Libraries that implement this and you could create a Native Module to bridge that functionality with your React Native code. 

- ** Performance & Animation: ** 
   Native modules are incredible with speed and performance, mostly because they can access and consume the device's multithreaded APIs. 

- ** Reusability: ** 
   The Native modules that are built by an engineering team are usually core to the business of the organization. This instills a high reuse value as the code and logc can be shared across multiple applications. 

- ** Look & Feel: **
   Certain gestures and appearance effects (especially animations & navigation) can only be implemented by Platform specific code. Native modules build the gap between these and our react native appliction. 

- ** SECURITY: **
  React Native is currently open source and this leaves a gap for your really sensitive data to be harnessed by an unwanted user (even though this is unlikely). The chance of this happening is worth considering. Platform specific code hides implementation details from unwanted users and thereby provide a way more secure way of storing sensitive data. 


#### Disadvantages of Native Modules over Pure React Native Implementations

