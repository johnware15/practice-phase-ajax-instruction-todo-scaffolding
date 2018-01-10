# practice-phase-ajax-instruction
Starter repo for instruction on 1-10-17 practice phase instruction

# Instructions
## Set up:
1. fork and clone this repo
1. ~`npm i`
1. ~`npm run db:create`
1. ~`npm run start`
## Files to Edit
`public/script.js`
## Info:
- If you go to `localhost:300' you will see a non-AJAX working simple todo list.
- The AJAX version can be accessed at `localhost:3000/ajax`, though it is unfinished to begin.
- `src/routes/ajax.js` shows the code for the AJAX api
## Specs:
- [ ] AJAX version adds feature of inline updating of todo list items.
- [ ] Each item should have an `Edit` button that when clicked changes the item text to an auto-populated input field and the edit button changes to a `Save` button which when clicked updates the database with the updated values.
- [ ] Each item should have a `Delete` button which deleted the item from the database and removes the row from the table.
- [ ] Each item should have a `Complete` button which marks the item as completed and updates the DOM. (optional: completed items are seen with a strikethrough instead of removed. This would mean editing the `src/actions/getAll.js` file as well)
- [ ] All actions should happen and be witnessed without a page refresh.
- [ ] There is a form to add a new list item, which upon submission adds the new item to the list using AJAX and witnessed without page refresh.
  
