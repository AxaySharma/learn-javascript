/*Calculate the time it takes between a setTimeout call and the inner function actually running */

// Record the time before calling setTimeout
const startTime = Date.now();

// Set a timeout of 1000 milliseconds (1 second)
setTimeout(function() {
    // Record the time after the function runs
    const endTime = Date.now();

    // Calculate the actual time difference
    const elapsedTime = endTime - startTime;

    // Log the elapsed time
    console.log(`Expected time: 1000ms`);
    console.log(`Actual time: ${elapsedTime}ms`);
}, 1000);

/* The time reported by setTimeout might be longer than the specified delay due to factors like:

    The JavaScript event loop being busy with other tasks.

    System performance and load.

    The callback being added to the event queue and waiting for the current execution stack to clear.

    You’ll likely see that the actual time (the value returned from elapsedTime) can be equal to or greater than 1000ms, but it may vary slightly depending on these conditions. */