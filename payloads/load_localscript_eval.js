(async function () {
    const js_code = `
        (async () => {
            await log("Hello from eval payload!");
            send_notification("Hello from eval payload!");
        })();
    `;

    await eval(js_code);
  })();