Basic script injector.

## How to use:
- Copy link to your script and paste it in fetch("").
- Join in game.

## How to inject more scripts:
- Copy this code:
await fetch("").then((res) => res.text()).then((text) => {
    eval(text);
});

- Paste it with other links in injector.

