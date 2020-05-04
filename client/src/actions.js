// ACTIONS LIST, categorized by action type:

//// ** USER STATUS actions - for logging in and determining admin privileges:

export const signInUser = (user) => ({
  type: 'SIGN_IN_USER',
  user,
});

//// ** EMPLOYEE ACTIONS: for fetching, modifying and creating employee data:

// for fetching all info for all employees:
export const getEmployeesFromDB = (employees) => ({
  type: 'GET_EMPLOYEES_FROM_DB',
  employees,
});

// for fetching just the ID's of employees (for punchclock to tell which numbers to accept):
export const getScheduledEmployeeIds = (employees) => ({
  type: 'GET_SCHEDULED_EMPLOYEE_IDS',
  employees,
});

// for employee details box/page:
export const focusOnEmployee = (employee) => ({
  type: 'FOCUS_ON_EMPLOYEE',
  employee,
});

// for getting an employee's shifts into state (no employee name needed since it'll be from their profile as 'current user'):
export const setEmployeeShifts = (shifts) => ({
  type: 'SET_EMPLOYEE_SHIFTS',
  shifts,
});

//// ** SCHEDULE ACTIONS: Changing the variables that govern the display and creation of new schedules:

// for setting the number of shifts per day (opens up more start/finish time slots also):
export const setShiftNum = (numShifts) => ({
  type: 'SET_SHIFT_NUMBER',
  numShifts,
});

// for setting the value of the start time for a particular shift:
export const setShiftStart = (shiftNum, start) => ({
  type: 'SET_SHIFT_START_TIME',
  shiftNum,
  start,
});

// for setting the value of the finish time for a particular shift:
export const setShiftFinish = (shiftNum, finish) => ({
  type: 'SET_SHIFT_FINISH_TIME',
  shiftNum,
  finish,
});

//// ** SCHEDULE DRAFT ACTIONS:

// Adding dates to the draft by opening the 'new schedule' page:
export const addDate = (date) => ({
  type: 'ADD_DATE',
  date,
});

// adding a shift to the schedule draft takes three tiers of info, so let's add one at a time shall we?
// First, tell the dates how many shifts they're divided into:
export const divideDatesToShifts = (numShifts) => ({
  type: 'DIVIDE_DATES_INTO_SHIFTS',
  numShifts,
});
// Second, let us add roles to an individual shift:
export const addRoleToShift = (date, shift, role) => ({
  type: 'ADD_ROLE_TO_SHIFT',
  date,
  shift,
  role,
});
// And third, assign an employee to a specific role (And throw in the start/end times while we're at it, why not eh?)
export const assignEmployeeToRole = (
  date,
  shift,
  role,
  _id,
  start,
  finish
) => ({
  type: 'ASSIGN_EMPLOYEE_TO_ROLE',
  date,
  shift,
  role,
  _id,
  start,
  finish,
});

// Finally, the upload version shift assignment function: add all the data about a role to the date directly for uploading to DB:

export const addEmployeeToDate = (date, _id, role, start, finish) => ({
  type: 'ADD_EMPLOYEE_TO_DATE',
  date,
  _id,
  role,
  start,
  finish,
});

//// ** PUNCHCLOCK DISPLAY ACTIONS:

// get today's punchclock activity into state from server fetch:
export const getPunchDataForToday = (date, punches) => ({
  type: 'GET_PUNCH_DATA_FOR_TODAY',
  date,
  punches,
});
