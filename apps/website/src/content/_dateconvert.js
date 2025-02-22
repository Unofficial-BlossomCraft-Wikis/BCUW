// Function to convert a datetime string to the desired format
function convertToISOFormat(dateString) {
  const date = new Date(dateString);
  const isoString = date.toISOString()
  return isoString;
}

const formattedDate = convertToISOFormat('12/21/2020 11:16 PM');
console.log(formattedDate);
