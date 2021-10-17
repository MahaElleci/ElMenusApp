# El Menus App 

## Features Checklist
 - [x] **LaunchPage** -- users data is fetched and cached into local storage. Upon clikcing *Start App*, launch page routes to *LoginPage*
 - [x] **LoginPage** -- users data is saved in browsers local storage to validate users credentials upon login. 
 - [x] Login as an admin -- if the user is validated to be an admin, login page routes to **/menuPage** with a route location state where a flag (*isAdmin*) is set to true. An admin button is shown in menu page. 
 - [x] Login as a user -- is the user is validated to be an existing user who is not an admin,  login page routes to **/menuPage** with a route location state where a flag (*isAdmin*) is set to false. An admin button is hidden in menu page. 
 - [x] **MenuPage** -- shows a list of categories on the left, upon selecting a category item the menu items of that category is displayed on the right
 - [x] **AdminPage** -- shows a form of adding a menu category on the left, on the right is the menu categories and menu items with *edit and delete* options. 
 - [x] An admin can add a new category to the list of categories 
 - [x] An admin can add new menu items to the added category
 - [x] An admin can delete category with all its menu items
 - [x] An admin can edit a category by ONLY adding new menu items to its pre-existing menu items
 - [x] Back button in *AdminPage* routes back to *MenuPage* with all the modifications done from *AdminPage* is updated in *MenuPage*
 - [x] Login form validation -- email and password have to be entered to login. Email and password has to be validated from users data cached in local storage.
 - [x] Category and MenuItem forms validation -- at least a name of category and a name of menu item has to be entered in order to updated the data in admin page. 

## Valid credentials for login

 - Admin user: Email: hamed.farag@gmail.com Password: 1234
 - User: Email: maha.elleci@gmail.com Password: 1234 

## Enhancements to be done

 - [ ] Secure page routes -- /menuPage , /adminPage cannot be accessed without login 
 
