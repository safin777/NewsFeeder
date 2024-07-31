const getDateFormat = (date) => {
  //if date is match today date
  if (date === new Date().toLocaleDateString()) {
    return 'Today'
  } else if (
    date ===
    new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString()
  ) {
    return 'Yesterday'
  } else {
    // convert the date into a more readable format
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(date).toLocaleDateString(undefined, options)
  }
}

export { getDateFormat }
