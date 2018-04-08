# Income-Expense app

An application to help you keep track of your income and expenses.

### Technologies used:
* React
* Redux for state management
* Bootstrap 4, SASS (see new-design folder)

### Functionality that has been already implemented:
* [x] Period toggling (weekly/monthly/yearly views)
* [x] Date toggling within selected period
* [x] Filter by type (all/income/expense)

### Todo:
* [ ] Switch to new design (see below)
* [ ] Add items form
* [ ] Full CRUD funcitonality
* [ ] Additional filters/sorting (e.g. by category, by amount, etc)
* [ ] Implement backend and database

---

## New design

While the current design is entirely functional, I'd prefer something that is a bit more clean & minimalistic. I've already begun working on a new design which can be viewed in the new-design folder.

Apart from the aesthetic differences, I've made the following modifications:

* built with SASS
* selective Bootstrap 4 imports (currently imported modules: reboot, grid, utilities, modal)
* BEM naming scheme

The new design is a **work in progress** and is only a static page at the moment.

To view it in its current state:
1. cd into new-design
2. npm install
3. npm start