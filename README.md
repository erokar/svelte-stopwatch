# Svelte-stopwatch

A Svelte timer component with a countdown option and events for start, stop and reset of the timer.

TODO: [`Live demo`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Installation

```bash
npm install svelte-stopwatch
```

## Props

All props are optional.

| Name                 | Default | Description                                                                                       |
| -------------------- | ------- | ------------------------------------------------------------------------------------------------- |
| `seconds`            | 0       | The number of seconds to count down. If no value is provided the timer will count up (stopwatch). |
| `timeDisplayClasses` | ''      | String containing one or more classes to style the time displayed as HH:MM:SS.                    |
| `startButtonClasses` | ''      | String containing one or more classes to style the start/pause button.                            |
| `resetButtonClasses` | ''      | String containing one or more classes to style the time reset button.                             |

**NB:** In Svelte a component's child components will not inherit its styles. The classes that are sent in to the classes props therefore need to be global. This can be acheived via Svelte's `<style global>` option, by CSS' global option (`:global(.className) { ... }`), or by adding the classes in a globa stylesheet, e.g. `app.css`.

## Events

| Name       | Description                             |
| ---------- | --------------------------------------- |
| `finished` | Timer is 0 (when using countdown timer) |
| `started`  | Timer has been started.                 |
| `stopped`  | Timer has been stopped.                 |
| `reset`    | Timer has been reset.                   |
