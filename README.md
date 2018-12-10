### Binary Fountain Front End Interview Test

#### Environment

You may use whatever coding environment you would like, though, we will be testing your code with the following:

- Node version 6+ 
- Chrome browser version 60+

#### To Do

1. Spin up the api from `api` folder (follow instruction from README).
2. Create a component call it `List` or any name you want to populate locations obtained from step 1.
3. Create a feature to allow users to filter the `List` contents based on whether the location has:
    * a number of baths in a user specified range (you can use textbox or a range slider, you can hardcode this in or use the api to get data)
    * the same type as the one specified by the user (the user can select from a list of `types` that come from the API) (you can use a dropdown or just plain radio button)
    

    If a user has not specified a number in bath filter or a type for type filter, default to show all. If no filters are active or being applied, all locations should be shown in the `List`. 
4. After all data are loaded from the API. The data can now be used for search:
    * create a search box where users can enter text (search should be based on address, you don't need api for this just use the initial load to filter)

#### Example use case:

Display all locations that have:
   * More than 2 baths
   * **And** is Condo or Single Family

#### Grading

**THIS SHOULD BE PRODUCTION LEVEL CODE**

* Your submission should be bug-free, both in terms of logic and UI
* Your code should be clear and readable, with the assumption that it could be maintained by another developer after you
* The use of additional dependencies is allowed

##### Bonus

If you would like to further impress us with your project, here are a few suggestions. Note that these are NOT expected or required:

* Unit tests
* Well-designed/aesthetic interface
* Improved performance and scalability
* Integration of a state management framework (eg. Redux or Mobx)

Good luck!
