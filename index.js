// to do: https://stackoverflow.com/a/48283183/2301161
const Throw = function (err) {
  console.warn("Log Catch", err.message || err);
  throw new Error(err);
}
const Return = function (err) {
  console.warn("Log Catch", err.message || err);
  return err;
}



export default { Throw, Return };