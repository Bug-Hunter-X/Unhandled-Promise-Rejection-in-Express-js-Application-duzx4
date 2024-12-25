# Unhandled Promise Rejection in Node.js Express.js Application

This repository demonstrates a common error in Node.js applications using Express.js: unhandled promise rejections.  The `bug.js` file shows an example of an asynchronous operation within an Express.js route handler that lacks proper error handling. This can lead to unexpected behavior or application crashes. The solution, in `bugSolution.js`, demonstrates how to handle these rejections gracefully.

## Problem

Asynchronous operations, such as database queries or external API calls, can fail.  If these failures aren't handled properly, they can lead to unhandled promise rejections, which are difficult to debug and can silently break your application.

## Solution

Always use `.catch()` to handle potential errors in your asynchronous operations.  This ensures that errors are caught and dealt with appropriately. Consider sending proper error responses to the client (e.g., 500 Internal Server Error) to provide more information in case of issues.
