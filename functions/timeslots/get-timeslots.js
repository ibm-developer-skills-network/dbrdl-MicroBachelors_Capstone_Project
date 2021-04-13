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
    // let result = {
    //   date: params.date
    // }

    let result = {
      "arr": [
        {
          "title": `Available time slots for ${params.date}`,
          "options": [
          ],
          "description": "",
          "response_type": "option"
        }
      ]
    }

    switch (d.getDay()) {
      case 0:
        // Sunday
        // result.day = "Sunday";
        getSlots(result);
        break;
      case 1:
        // Monday
        getSlots(result);
        break;
      case 2:
        // Tue
        getSlots(result);
        break;
      case 3:
        // Wed
        getSlots(result);
        break;
      case 4:
        // Thu
        getSlots(result);
        break;
      case 5:
        // Fri
        getSlots(result);
        break;
      case 6:
        // Sat
        getSlots(result);
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

function getWeekend(result) {
  //Learner: add code to return the following available times for the weekend:
  // 7:00am - 9:00am
  // 2:00pm - 3:00pm
}

function getSlots(result) {
  result.arr[0].options.push(
    {
      "label": "8:00am - 9:00am",
      "value": {
        "input": {
          "text": "8:00am - 9:00am"
        }
      }
    });

  result.arr[0].options.push({
    "label": "11:00am - 1:00pm",
    "value": {
      "input": {
        "text": "11:00am - 1:00pm"
      }
    }
  });

  return result;
}

// console.log(JSON.stringify(main({ date: '04/02/21' })));

exports.main = main;