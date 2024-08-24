// #for time 


function updateFooterTime() {
    const timeSpan = document.getElementById('time_span');
    const zoneSpan = document.getElementById('zone_span');
    
    // Get the current time in Karachi (UTC+5)
    const currentTime = new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Karachi"}));
    
    
    // Extract hours, minutes, and seconds from the current time
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    
    // Format the time as HH:MM:SS
    const time = `${hours}:${minutes.toString().padStart(2, '0')}`;
    
    // Set the text content of the #time_span element to the formatted time
    timeSpan.textContent = time;
    
    // Set the text content of the #zone_span element to "PKT" (Pakistan Standard Time)
    zoneSpan.textContent = "PKT";
    // console.log("gg")
  }

  updateFooterTime()
