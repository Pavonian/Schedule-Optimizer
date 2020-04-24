# Schedule Optimizer: Final Project Outline

## The schedule optimizer will be designed as a tool for employers and employees to use as an integrated scheduling and punchclock system, to be used by staff and administrators in a shift-based work environment. It will be built using React, Node.js and MongoDB, and Redux.

## Features I intend to incorporate:

1. 3 Separate but integrated UIs: Manager account, Employee account and punchclock interface. Employee account will be mobile-oriented and built outwards from a small screen size, whereas the manager's version will be built with a desktop-oriented layout and shrunken down if time permits (which it likely won't). The punchclock UI will be displayed on the main page of the app, so people can enter a PIN to punch in without having to sign into their account.

2. Signin page for staff where the manager will send passkeys to individuals when they're 'hired'.

3. Mongo DB database to store information relating to previous schedules, punchclock records, employee details etc.

4. Server will handle all interactions between the FE and DB.

## Details on Manager-side features:

1. Manager can create, view, update and remove employees' info.

2. Manager can create, edit, or delete a schedule.

3. Manager can create, view and alter punch-clock records.

4. When manager POSTS a schedule it becomes visible by the employees, who can see their own shifts but no one else's.

5. Manager can send notifications to all staff or to individual employees and receive confirmation when the notification is viewed.

6. Manager can approve shift trades between staff members.

7. Manager has a production needs forecast which will display semi-randomized sales data to make scheduling more realistic.

8. STRETCH: Employee performance metrics shown on employee detail pages (track productivity, attendance/punctuality, specific skills, etc.)

## Details on Employee-account features:

1. Employee can sign in with passkey (given by the manager) and then change their password for their account.

2. Employee can see their schedule when it is posted.

3. Employee can see their history of punch-clock records and paystubs.

4. Employees can recieve notifications from their manager.

5. Employees can post messages on company wall/feed page.

6. Employees can offer shifts up for trade with their peers.

## Details on Punchclock interface:

1. Built into the App's pre-sign-in UI/main page.

2. Employees punch in by hitting a button and entering a PIN or their password.
