async function deleteContact(id) {
  await fetch(`http://localhost:3004/contacts/${id}`, {
    method: 'Delete',
  }).then((result) => {
    result.json().then((resp) => {
      console.log('Delete response', resp)
    })
  })
}

export { deleteContact }
