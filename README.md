## Toastbeat Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### Overview of functionality:

You need to create a website that allows users to register and login to an application and
view a restaurant menu based on the preferences they set.

Landing page functionality:

	When a user first comes to the site, they see a landing page. Landing page Says "Welcome to XYZ Restaurant. Please register to set your preferences."

	On the top right hand corner of the screen there will be 2 buttons - Login and Register.

Register Functionality:

	New users will click on the register button to register. Clicking on register button will show another page that will have a register form with following fields:

	User Name: username for the site login - If username already exists, user will be shown error message that username already exists and they will have to provide another username

	Name: Input text field
	Password: Password input field
	Cuisine preference: Dropdown with following options -> Chinese, Italian, Baked Goods
	Email: Email id field with email validation to make sure the user has entered an email following format user@domain.extension. So users will not be allowed to enter something like xyz@1234. Only emails like xyz@abc.com should be allowed.

	Register: Button that will store the user details in the backend and their preference.

	Backend Register api:-
	Submitted user details will be stored server side in a global variable. If time permits see if you can add any database integration, if not, it's ok to store user details on the server side itself.

Login functionality:

	When an existing user clicks on the login button, their username and password will be checked. If a username exists, users will be taken to the menu page based on the preference they selected.

	If user selects Chinese then a menu will be displayed in the center of the page with items:

		Hakka Noodles
		Fried Rice
		Dumplings


	If user selected Italian then a menu will be displayed in the center of the page  with items:
		Pasta
		Lasagne
		Chips

	If user selected Bakedgoods then a menu will be displayed in the center of the page with items:
		Pineapple Pastry
		Chocolate cake
		Cookies

	At the top right hand side corner of the Menu page there will be a Logout button. Clicking the logout button will take the user back to the landing page.

	Menu items will be stored server side along with user preferences so that as soon as the user logs in we can determine their preference and get the correct menu.

### Requirements for project configuration, build files etc:
	Babel support for compilation.
	Eslint for linting and CI/CD pipeline integration
	Validator js to make email validations
	dotenv js for configuration
	Project will be built using Yarn.

### AWS requirements:
	Project can be maintained in Github or bitbucket. Separate repositories and pipelines are to be created for React project and Node js project but both are to be deployed to the same ec2 instance.
	The React project will run on port 3000 and node js express server will run on port 3001.

	PM2 will be set up on EC2 instances to manage the project lifecycle.
