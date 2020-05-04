'use strict';

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// server functions:

const {
  loginPage,
  listEmployees,
  listScheduledEmployees,
  setupDateInDB,
} = require('./functions/initialFunctions');
const { uploadScheduleDraft } = require('./functions/uploadSchedule');
const { getEmployeeSched } = require('./functions/getEmployeeSched');
const {
  punchClock,
  viewPunchesForDate,
  validatePunch,
} = require('./functions/punchclockFunctions');

const PORT = 8080;

express()
  .use(function (req, res, next) {
    // allow all types of requests to the server:
    res.header('Access-Control-Allow-Origin', '*');
    // allow Origin, X-requested-with, content-type and accept headers (we use some of these for posts!)
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('dev'))
  .use(express.static('./server/assets'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use('/', express.static(__dirname + '/'))

  // ENDPOINTS: must all be prefaced with '/api/' for the FE to not get confused!
  // login page: recieve employee id and pw; send back confirmation (NOTE: And retain the id of the logged-in employee??)
  .post('/api/login', loginPage)
  // get employee ids (future upgrade returns only the id's of people on TODAY's schedule) to assist with punchclock activity:
  .get('/api/schedule_ids', listScheduledEmployees)
  // ensure there is an empty date in the database for punches to go into (this happens on initial load of the app):
  .post('/api/setup_date', setupDateInDB)
  // punchclock endpoints: use req body for employee id, time, in/out (one endpoint for both since they both go together):
  .post('/api/punch', punchClock)
  //// ** ADMIN ENDPOINTS FOR VIEWING/APPROVING PUNCHCLOCK ACTIVITY:
  // For viewing a single date's punches:
  .get('/api/admin/punches/:date', viewPunchesForDate)
  // For approving a single punch:
  .post('/api/admin/punches/validate/:date', validatePunch)
  // sends the list of employees from the DB (minus their passwords, haha)
  .get('/api/admin/employees', listEmployees)
  // recieves a draft of a week's schedule as one big blob - will parse into dates before uploading to the DB:
  .post('/api/admin/draft-schedule', uploadScheduleDraft)
  // what we need now is an endpoint for an individual employee's schedule for a given week:
  .get('/api/schedule/:employee/:weekof', getEmployeeSched) // week of = first date in the selected week

  .listen(PORT, () => console.log(`listening on port ${PORT}`));
