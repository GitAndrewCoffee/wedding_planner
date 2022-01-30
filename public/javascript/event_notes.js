async function eventFormHandler(event) {
  event.preventDefault();
  console.log('post event item running');

  const title = document.querySelector('#eTitle').value.trim();
  const notes = document.querySelector('#eNotes').value;
  const event_id = document.querySelector('#eventID').textContent;
  

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
    document.location.replace(`/eventnotes/${event_id}`);
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-eItem-form').addEventListener('submit', eventFormHandler);