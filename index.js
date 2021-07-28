
const Throw = function (err) {
    console.warn("Log Catch", err.message || err);
    throw new Error(err);
  }
  const Return = function (err) {
      console.warn("Log Catch", err.message || err);
      return err;
    }

const LogCatch = {
    Throw: Throw,
    Return: Return,
}

  export default LogCatch;