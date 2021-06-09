const decNumber = (num) => {
  return {
    type: 'DECREMENT',
    payload: num,
  }
}

export { decNumber }
