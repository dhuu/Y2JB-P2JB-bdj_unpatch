(async () => {
    await log("nanosleep start");
    nanosleep(3 * 1_000_000_000);
    await log("nanosleep end");
})()