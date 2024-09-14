function updateTime() {
      const timeDisplays = document.querySelectorAll('.time-div');
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');

      timeDisplays.forEach(function(dis){

            dis.textContent = `${hours}:${minutes}`
      })
  }

  // Update the time every second
  setInterval(updateTime, 1000);

  // Initialize the time immediately
  updateTime();