async function eventFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('#eItem-Title').value.trim();
  const notes = document.querySelector('#eItem-Notes').value.trim();
  const event_id = document.querySelector('#eventID').value.trim();
  //const eventNotes = document.querySelector('input[name="event-notes"]').value;

  const response = await fetch(`/api/eventsnotes/`, {
    method: 'post',
    body: JSON.stringify({
      title,
      notes,
      event_id
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

document.querySelector('.new-eItem-form').addEventListener('submit', eventFormHandler);