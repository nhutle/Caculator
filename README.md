### A. Folow the instructions step by step to run the project

1. Install needed dependencies

  * Run the following command to install node modules

    ```npm install```


2. Run the following command to run the project

    ```gulp ```

3. Open ```localhost:3000``` to see the result.

### B. Distribution

  * Run ```gulp build``` to build a distribution version.

### C. How to use the plugin as a widget

1. Copy all files in dist folder and place them inside your project.

2. Embed Calculator's html code to your html file, don't forget to import main.min.js and main.min.css as well.

### D. Object Model(UML)

  * Below is how I implement the Calculator in OOP way with JS.
![class-diagram](https://cloud.githubusercontent.com/assets/7496221/19026407/1962330a-8958-11e6-9e58-9dc44f1b03c5.png)

### E. Live demo

  * Please find the live demo [here](https://nhutle.github.io-/calculator/).

### F. Known issues
  * Fail to calculate a mix of operators
    * e.g: 3-2*4 should be 5, rather than 4 since I haven't imple-mented order of operations.
  * Lack of many functions: supporting negative numbers, decimal numbers, etc.
