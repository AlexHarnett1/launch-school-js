function getSchedules() {
  let request = new XMLHttpRequest();

  request.open('GET', 'http://localhost:3000/api/schedules');
  request.response = 'json';
  request.timeout = 5000;

  request.addEventListener('load', event => {
    let data = JSON.parse(request.response);
    let availableStaff = {};

    data.forEach(schedule => {
      if (schedule['student_email'] === null) {
        let staffId = schedule.staff_id
        let staffKey = `Staff ${staffId}`;
        if (availableStaff[staffKey]) {
          availableStaff[staffKey] += 1
        } else {
          availableStaff[staffKey] = 1;
        }
      }
    });
    console.log(data);
    console.log(availableStaff);
  });

  request.addEventListener('timeout', event => {
    console.log('Request timed out. Try again');
  });

  request.send();
}

getSchedules();