let json = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
];

let daily = document.getElementById("daily");
let weekly = document.getElementById("weekly");
let monthly = document.getElementById("monthly");
let currentHours = document.querySelectorAll(".current_hours");
let pastHours = document.querySelectorAll(".past_hours");

daily.addEventListener("click", setTime);
weekly.addEventListener("click", setTime);
monthly.addEventListener("click", setTime);

function setTime(e) {
    let timeFrame = e.target.id == "daily" ? "day" : e.target.id == "weekly" ? "week" : "month";
    focusElement(timeFrame);

    for (let i = 0; i < json.length; i++) {
        let currentHrs = json[i].timeframes[e.target.id].current;
        let pastHrs =  json[i].timeframes[e.target.id].previous;
        currentHours[i].textContent = currentHrs + "hrs";
        pastHours[i].textContent = "Last " + timeFrame + " - " + pastHrs + "hrs";
    }
}

function focusElement(timeframe) {
    if (timeframe == "day") {
        weekly.style.color = "var(--desaturated-blue)";
        monthly.style.color = "var(--desaturated-blue)";
        daily.style.color = "white";

    } else if (timeframe == "week") {
        weekly.style.color = "white";
        monthly.style.color = "var(--desaturated-blue)";
        daily.style.color = "var(--desaturated-blue)";

    } else {
        weekly.style.color = "var(--desaturated-blue)";
        monthly.style.color = "white";
        daily.style.color = "var(--desaturated-blue)";
    }
}