const Throw = function (/** @type {ErrorEvent} */ err) {
  console.warn("Log Catch", err.message || err);
  throw err;
}
const Return = function (/** @type {ErrorEvent} */ err) {
  console.warn("Log Catch", err.message || err);
  return err;
}



export default { Throw, Return };