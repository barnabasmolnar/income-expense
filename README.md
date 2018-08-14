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
* [x] Connect frontend with backend

### Todo:
* [ ] Design/styling is a work in progress
* [ ] up-to-date currency conversion via 3rd party API
* [ ] for now, get rid of the recurring option on the UI (i have some ideas what to do with it, see below, but with no business logic in place yet, it doesn't really do anything now)

---

### Recurring functionality:
Let's illustrate the idea with an example:
* user creates an item
* picks "monthly" as the recurring option
* one month (plus/minus a couple of days) from the item's creation date the user will receive a notification alert that the item is due again
* user clicks on said notification and the item gets added automatically with the same data as before

As far as the UI is concerned, one approach would be to place a notification icon on the navbar somewhere with a number next to it. The number would indicate the number of items that are due in the past/next couple of days. Clicking the icon would take the user to a new page with a listing of all due items. Clicking on a given element would create that item with the same data as before.

**This is a sort of bonus feature and is not a priority right now.**

---

### Some things to consider:
* [x] Might want to use axios instead of fetch for a better error handling experience (fetch won’t reject on HTTP error status even if the response is an HTTP 404 or 500) => **so in the end I decided to write a custom wrapper around fetch which checks the Response.ok property; if it's anywhere in the range of 200-299 (https://developer.mozilla.org/en-US/docs/Web/API/Response/ok) then we resolve with the response, otherwise we reject with the statusText**
* [x] Sorting by date works but is not very elegant at the moment... sorting by date relies on JS Date Objects but the "dates" we get back when we parse the server response are actually strings... so we have to do some extra work to convert them into date objects again => **instead of simply calling res.json(), we use a custom parser that takes care of the date conversion (see the parseWith and convertDate functions in the helpers)**



---

## New design

I've recently switched to a new design which is now on the main branch.
This design is:

* built with SASS
* has selective Bootstrap 4 imports (currently imported modules: reboot, grid, utilities, modal, forms)
* uses the BEM naming scheme

The new design is a **work in progress**.