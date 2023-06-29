const scriptURL = 'https://script.google.com/macros/s/AKfycbxeHtJ4_g-yNkgQr-44WDWg1vaDZgJBIUbRxAQrHprALLKUN8pn05YyvqiET_1N0mIS2A/exec'

const form = document.forms['Order-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})