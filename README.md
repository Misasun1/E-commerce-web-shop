
<img src="public/images/E-COMMERCE.png" alt="Banner" width="800" height="300">


## TASK DESCRIPTION:

Create a Webshop page for an online shop called Famazon.

1. Must contain at least 7 components that together will build up your application as follows: navbar, home, footer, about us, products, details and cart(order).
   
2. Use routing to move between the pages without refreshing the browser(SPA). The navbar contains the navigation links that allows you to go through the components and go back to the home page.

3. Each product(item) must have at least the following properties: name,image,description,price and availability(Boolean).

4. If the availability of the item is true, the buttons "Details" and "Add to cart" must be shown in each product. If it is false, it shouldn't show the buttons for that object, only the item picture with a message "Not available", instead.
   
5. Create the functionality that when you click on the "Order(Add to cart)" button, the item will be added to the cart. The user must be abble to add items to the cart as well from the Products component or/and from the Details The order commponent must show the content of the cart.

6. The details component must be created. It will hold specific information about the product when clicked on the button Details. The user must be able to order/add to cart from this component.

7. Display the total of the Bill with a "Service" section that shows 10% of the total amount on top (for a total of 110%).
If the Total sum is more than Euro 40, the user gets a 15% discount. The total without discount and the new price with the discount must be neatly shown on the screen.
   

## GENERAL INFORMATION:
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
