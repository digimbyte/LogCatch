
LogCatch is designed to fill in any time you need to log and throw an error from a Promise catch

  

Simply import or require it

`import LogCatch from "logcatch";`

  

Use as such:

Log as a Warning and throw the error

`.catch(LogCatch.Throw)`

Log as a Warning and return the error

`.catch(LogCatch.Return)`