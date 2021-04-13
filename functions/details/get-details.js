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
    if(params && params.type === "reviews") {
        return getReviews();
    } else if (params && params.type === "timeslots") {
        if(params.date) {
            return getTimeSlots(params.date);
        } else {
                return getTimeSlots(new Date());
        }
    }
    
}

function getReviews() {
    return {
        reviews: [
          {
            "id": 1,
            "name": "Berkly Shepley",
            "dealership": 14,
            "review": "Total grid-enabled service-desk",
            "purchase": true,
            "purchase_date": "07/11/2020",
            "car_make": "Audi",
            "car_model": "A6",
            "car_year": 2010
          },
          {
            "id": 2,
            "name": "Gwenora Zettoi",
            "dealership": 14,
            "review": "Future-proofed foreground capability",
            "purchase": true,
            "purchase_date": "09/17/2020",
            "car_make": "Pontiac",
            "car_model": "Firebird",
            "car_year": 1995
          }
        ]
      };
}


function getTimeSlots(date) {

    // ideally the code would look this up in the database, but due to limited time, this function returns some hardcoded values at this time
      console.log("Inga varumbodhu date  "+date);
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
  
exports.main = main;

