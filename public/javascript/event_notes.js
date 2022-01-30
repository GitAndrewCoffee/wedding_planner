// async function eventFormHandler(event) {
//   event.preventDefault();

//   const title = document.querySelector('#event-title').value.trim();
//   //const eventNotes = document.querySelector('input[name="event-notes"]').value;

//   const response = await fetch(`/api/eventsnotes/`, {
//     method: 'post',
//     body: JSON.stringify({
//       title,
//       //eventNotes
//     }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });

//   if (response.ok) {
//     document.location.replace('/events');
//   } else {
//     alert(response.statusText);
//   }
// }

// document.querySelector('.new-event-form').addEventListener('submit', eventFormHandler);