# Income-Expense app

An application to help you keep track of your income and expenses.

### Technologies used:
* React
* React router
* Redux for state management
* Bootstrap 4, SASS (see new-design folder)

### Functionality that has been already implemented:
* [x] Period toggling (weekly/monthly/yearly views)
* [x] Date toggling within selected period
* [x] Filter by type (all/income/expense)
* [x] Switch to new design (see below)
* [x] React Router added
* [x] Add items form
* [x] Full CRUD funcitonality (sort of)
* [x] Page transitions added
* [x] Additional filters/sorting (category filter business logic is fully done but it is currently completely unstyled; that remains a todo item) 
* [x] Implement backend and database

### Todo:
* [ ] Design/styling is a work in progress
* [ ] Connect frontend with backend

### Some things to consider:
* [ ] Might want to use axios instead of fetch for a better error handling experience (fetch won’t reject on HTTP error status even if the response is an HTTP 404 or 500)
* [ ] Sorting by date works but is not very elegant at the moment... sorting by date relies on JS Date Objects but the "dates" we get back when we parse the server response are actually strings... so we have to do some extra work to convert them into date objects again

---

## New design

I've recently switched to a new design which is now on the main branch.
This design is:

* built with SASS
* has selective Bootstrap 4 imports (currently imported modules: reboot, grid, utilities, modal, forms)
* uses the BEM naming scheme

The new design is a **work in progress**.