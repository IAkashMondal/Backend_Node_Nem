function getCurrentDateTimeFormatted() {
  const now = new Date();

  // Get the individual components
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // Concatenate the components with the desired format
  const formattedDateTime = ` ${day}-${month}-${year} ${hours}-${minutes}-${seconds}`;

  return formattedDateTime;
}

const formattedDateTime = getCurrentDateTimeFormatted();
module.exports = {
  formattedDateTime: formattedDateTime,
};
