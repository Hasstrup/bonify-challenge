### Understanding Native Modules
Native modules are the define bridges between our Javascript code and the platform specific code. React Native is javascript but needs to be transformed into the device specific language for the device to understand it. 

Native modules expose bindings that can be consumed by our javascript code. Native modules extend the usability, sometimes performance and device-level access that React-native provides us outn of the box. 

```
Ideally, React Native exposes sufficient enough APIs to make sure our we rarely have to write Native code, but the needs of our application differ and can require more from the devices, we use native modules to extend what we can do with the device (through react native).

```

#### Using native modules should be the exception, rather than the norm. It's generally best to write views, algorithms, and business logic in JavaScript when possible. The JavaScript we write is almost completely cross-platform, and updating to new versions of React Native is usually low effort.

### A few use cases for Native modules
* Accessing native platform features that React Native doesn't support out-of-the-box, e.g. payments APIs
* Exposing components and functionality when adding React Native to an existing native app
* Using existing iOS and Android libraries, examples authentication libraries for a 3rd party service
* algorithms with high performance like image processing that are usually low-level and multithreaded
* high-performance views when running into performance issues with React Native views

### Types of Native Modules
#### Advantages of 
