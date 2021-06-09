export function fetchData() {
  let namePromise = fetchName()
  let addressPromise = fetchAddress()

  return {
    name: wrapPromise(namePromise),
    address: wrapPromise(addressPromise),
  }
}

function fetchName() {
  const getName = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Amit Roy')
    }, 4000)
  })

  return getName
}

function fetchAddress() {
  const getAddress = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Ranchi, Jharkhand')
    }, 4000)
  })

  return getAddress
}

function wrapPromise(promise) {
  let status = 'pending'
  let result
  let suspender = promise.then(
    (resolve) => {
      status = 'success'
      result = resolve
    },
    (error) => {
      status = 'error'
      result = error
    }
  )

  return {
    read() {
      if (status === 'pending') {
        throw suspender
      } else if (status === 'error') {
        throw result
      } else if (status === 'success') {
        return result
      }
    },
  }
}
