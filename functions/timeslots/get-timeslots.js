/**
  *
  * main() will be run when you invoke this action
  *
  * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
  *
  * @return The output of this action, which must be a JSON object.
  *
  */

const logger = require('pino')();
function main(params) {

  // ideally the code would look this up in the database, but due to limited time, this function returns some hardcoded values at this time
  if (params && params.date) {
    const d = new Date(params.date);
    let result = {
      date: params.date
    }
    switch (d.getDay()) {
      case 0:
        // Sunday
        result.day = "Sunday";
        result.timeslots = [
          {
            "start": "8:00 am",
            "end": "8:30am"
          },
          {
            "start": "11:00 am",
            "end": "11:30 am"
          }
        ]
        break;
      case 1:
        // Monday
        result.day = "Monday";
        result.timeslots = [
          {
            "start": "8:00 am",
            "end": "8:30am"
          },
          {
            "start": "11:00 am",
            "end": "11:30 am"
          }
        ]
        break;
      case 2:
        // Tue
        result.day = "Tuesday";
        result.timeslots = [
          {
            "start": "8:00 am",
            "end": "8:30am"
          },
          {
            "start": "11:00 am",
            "end": "11:30 am"
          }
        ]
        break;
      case 3:
        // Wed
        result.day = "Wednesday";
        result.timeslots = [
          {
            "start": "8:00 am",
            "end": "8:30am"
          },
          {
            "start": "11:00 am",
            "end": "11:30 am"
          }
        ]
        break;
      case 4:
        // Thu
        result.day = "Thursday";
        result.timeslots = [
          {
            "start": "8:00 am",
            "end": "8:30am"
          },
          {
            "start": "11:00 am",
            "end": "11:30 am"
          }
        ]
        break;
      case 5:
        // Fri
        result.day = "Friday";
        result.timeslots = [
          {
            "start": "8:00 am",
            "end": "8:30am"
          },
          {
            "start": "11:00 am",
            "end": "11:30 am"
          }
        ]
        break;
      case 6:
        // Sat
        result.day = "Saturday";
        result.timeslots = [
          {
            "start": "8:00 am",
            "end": "8:30am"
          },
          {
            "start": "11:00 am",
            "end": "11:30 am"
          }
        ]
        break;
      default:
        result = {
          error: "Something went wrong!"
        }
        break;
    }
    return result;
  }
}

console.log(main({ date: '04/02/21' }));

exports.main = main;