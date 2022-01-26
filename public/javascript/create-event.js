async function eventFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('#event-title').value.trim();
  const start_time = document.querySelector('#start-time').value.trim();
  const end_time = document.querySelector('#end-time').value.trim();
  
  
  
  //const eventNotes = document.querySelector('input[name="event-notes"]').value;
  
  const response = await fetch(`/api/events`, {
    method: 'post',
    body: JSON.stringify({
      title,
      start_time,
      end_time

    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/events');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-event-form').addEventListener('submit', eventFormHandler);