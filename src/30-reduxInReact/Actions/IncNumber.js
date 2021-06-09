const incNumber = (num) => {
  return {
    type: 'INCREMENT',
    payload: num,
  }
}

export { incNumber }
