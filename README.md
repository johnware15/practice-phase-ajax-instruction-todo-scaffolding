# practice-phase-ajax-instruction
Starter repo for instruction on 1-10-17 practice phase instruction

# Instructions
## Set up:
1. fork and clone this repo
1. $`npm i`
1. $`npm run db:create`
1. $`npm run start`
## Info:
- If you go to `localhost:3000` you will see a non-AJAX working simple todo list.
- The AJAX version can be accessed at `localhost:3000/ajax`, though it is unfinished to begin.
- `src/routes/ajax.js` shows the code for the AJAX api.
- Bootstrap is linked in to the project already if you wish to use it.
## Specs:
- [ ] AJAX version **adds** feature of inline updating of todo list items.
  - [ ] Each item should have an `Edit` button that when clicked changes the item text to an auto-populated input field and the edit button changes to a `Save` button which when clicked updates the database with the updated values.
- [ ] Each item should have a `Delete` button which deletes the item from the database and removes the row from the table.
- [ ] Each item should have a `Complete` button which marks the item as completed in the database and updates the DOM. (optional: completed items are seen with a strikethrough instead of removed. This would mean editing the `src/actions/getAll.js` file as well)
- [ ] There is a form to add a new list item, which upon submission adds the new item to the list using AJAX and updates the page without refresh.
## Feeling overwhelmed or stuck?
- If you go in to `views/partials/footer.ejs` you can see a comment where you can start off with all the jQuery DOM manipulation done so you can just focus on using AJAX. Cool, huh?
## Files to Edit
`public/script.js`  or `public/starterScipt.js`
