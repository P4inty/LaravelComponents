# Cookie-Disclaimer
Simple Cookie Disclaimer created with Vue.

## Getting Started

### Requirements
```
- Vue
```

### Installing
- ```require('[path/to/cookie-disclaimer.js]')``` - in your app.js or where you want to import the file.
- ```@import '[path/to/cookie-disclaimer.scss]'``` - in your app.scss or where you want to import the file.
- include the example file ```cookie-disclaimer.blade.php``` in your app.blade.php or where you want it to be. Alternative you can create your own cookie-disclaimer, but you should include the required classes and id's as seen below.


## Usage
### Required
```.cd-box``` - the main container for the disclaimer with a specific background-color and size.

```#cookie-disclaimer``` - target for the Vue script.

```:class="{ 'cd-show': !hasAgreed }"``` - variable class to show the cookie disclaimer when the user has not agreed to it yet, should be positioned on the same level as the ```.cd-box```.

```@click="agree([years])"``` - click event for vue to set a cookie for a specific amount of years, should be positioned on a button.

### Optional
```.cd-top``` - repositions the container to the **top** section with a specific spacer.

```.cd-btm``` - repositions the container to the **bottom** section with a specific spacer.

```.cd-right``` - repositions the container to the **right** section with a specific spacer.

```.cd-left``` - repositions the container to the **left** section with a specific spacer.

```.cd-button``` - customizable button design for the cookie disclaimer.

## Customization
### Scss
To customize the variables import the ```_variables.scss``` first, then adjust the variables to your need and then import the ```_classes.scss```at the end.

Variable|default|
-|-
cd-box-background-color|hsl(0, 0%, 92%)
cd-box-border-space|1vw
cd-box-size|30vw
cd-box-z|2
cd-break-point|1023px
cd-padding|1.5rem
cd-button-color|hsl(204, 86%, 50%)
cd-button-text-color|hsl(0, 0%, 100%)
cd-button-color-hover|hsl(204, 90%, 55%)
cd-button-margin|1rem
cd-button-padding|0.5rem 4rem

### Language
Variable|default
-|-
message|This website uses cookies to ensure you get the best experience on our website.
link|More Infos
dismiss|Agree