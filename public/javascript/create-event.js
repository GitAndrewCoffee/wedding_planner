async function eventFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="event-title"]').value;
  const wedding_id = 2
  //const eventNotes = document.querySelector('input[name="event-notes"]').value;

  const response = await fetch(`/api/events`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      wedding_id
      //eventNotes
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/event-calendar');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-event-form').addEventListener('submit', eventFormHandler);