/**
  *
  * main() will be run when you invoke this action
  *
  * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
  *
  * @return The output of this action, which must be a JSON object.
  *
  */
function main(params) {
  // given a date
  // convert to day
  // return time slots

  if (params && params.date) {
    const d = new Date(params.date);
    switch (d.getDay()) {
      case 0:
        // Sunday
        break;
      case 0:
        // Sunday
        break;
      case 0:
        // Sunday
        break;
      case 0:
        // Sunday
        break;
      default:
        break;
    }
  }
  return {
    timeslots: [
      {
        "start": "8:00 am",
        "end": "8:30am"
      },
      {
        "start": "11:00 am",
        "end": "11:30 am"
      }
    ]
  };
}

// console.log(main({ date: "2021-03-21" }));
