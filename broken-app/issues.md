# Broken App Issues


##1. Missing Middleware to Parse JSON
the original code fif not use middleware to parse JSON bodies in incoming request, causing the 'req.body' to be undefined.

##2. Incorrect Handling of Promises
the original code used 'map' with 'async' functions, which returns an array of promises. These promises were not resolved, lead to incorrect handling of the tresults.

##3. Error Handling
the original error handler did not have the 'err' parameter in the catch block

##4. Incorrect JSON Response
the original response used 'res.send' with manually stringified JSON. It should use 'res.json' to send the response.

##5. Added 'express.json()', used 'Promise.all', Improved error handling with a proper parameter in the catch block and added centralized error handling middleware, used 'res.json' to send the JSON response.
