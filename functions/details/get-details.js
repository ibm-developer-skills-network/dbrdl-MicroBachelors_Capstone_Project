var Cloudant = require('@cloudant/cloudant');

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
  return new Promise((resolve, reject) => {
    if (params && params.type === "reviews") {
      getReviews(params).then(reviews => {
        resolve({"reviews":reviews.docs})
      });
    } else if (params && params.type === "timeslots") {
      if (params.date) {
        resolve(getTimeSlots(params.date));
      } else {
        resolve(getTimeSlots(new Date()));
      }
    }
  })
}

function getReviews(params) {
  console.log(params.CLOUDANT_URL);
  console.log(params.CLOUDANT_APIKEY);
  let reviews = [];
  const cloudant = Cloudant({ url: params.CLOUDANT_URL, plugins: { iamauth: { iamApiKey: params.CLOUDANT_APIKEY } } });
  const db = cloudant.db.use('reviews')

  return db.find({ selector: { dealership: 14 }}) ;

  // db.find({ selector: { dealership: 14 } }, function (err, result) {
  //   if (err) {
  //     throw err;
  //   }

  //   console.log('Found %d documents', result.docs.length);
  //   console.log(JSON.stringify(result));
  //   result.docs.forEach(review => {
  //     console.log('  Doc id: %s', review._id);
  //     reviews.push(review)
  //   });
  // });
  // return reviews;
}


function getTimeSlots(date) {

  // ideally the code would look this up in the database, but due to limited time, this function returns some hardcoded values at this time
  console.log("Inga varumbodhu date  " + date);
  const d = new Date(date);

  let result = {
    "arr": [
      {
        "title": `Available time slots for ${date}`,
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

// main({
//   type: "reviews",
//   CLOUDANT_APIKEY: "vg7UbPIWuF5VgcQckaXlN71OvC-bIS4dImK3QIJfCWFp",
//   CLOUDANT_URL: "https://923526c1-b1da-4c83-a39f-54372cb71c8d-bluemix.cloudantnosqldb.appdomain.cloud"
// }).then(response => {
//   console.log('response');
//   console.log(response);
// })

exports.main = main;

