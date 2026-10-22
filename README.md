# Fog Mirror

A steamy bathroom mirror in your browser. Your webcam is the glass, the fog covers it, and you wipe it clear with the mouse, your finger, or just your hand in the air.

**Live:** https://fog-mirror-atharv.netlify.app

![Wiping the fog](docs/demo.gif)

## Why I built it

I wanted to see how real a fogged mirror could feel with nothing but a browser: no app, no build, no install. Then I added hand tracking so you do not have to touch anything.

## What it does

- Shows your camera mirrored, like a real mirror.
- Covers it with fog made of thousands of procedural droplets with highlights and shadowed edges.
- Tracks your hands: point to wipe a thin line, open your palm for a big wipe, use two hands at once.
- Hold a fist for about a second to steam the mirror up again.
- Drips run down the glass from wiped areas, and the fog slowly creeps back if you leave it on.
- Makes its own sound (a squeak that follows your wipe speed, and a steam hiss) with the Web Audio API. There are no audio files.
- Saves a polaroid-style PNG snapshot.
- Installs to the home screen on a phone, with fullscreen mode and double-tap to steam up.

## Hand gestures

| Gesture | Result |
|---|---|
| Index finger out | Precise wipe |
| Open palm | Big wipe |
| Fist, hold 1 second | Steam up again |
| Two hands | Both wipe |

Hand positions are smoothed with a One Euro filter and nudged with velocity prediction, so the brush follows without jitter or lag. Brush size scales with how close your hand is.

## Controls

| Control | Does |
|---|---|
| hands | switch between hand tracking and mouse mode |
| brush | wipe radius |
| fog | fog density |
| re-fog | fog slowly returns, on or off |
| hiss | steam sound, on or off |
| snapshot | download a PNG |
| fullscreen | immersive view |
| steam up | reset the fog |

## How it is built

The whole app is one `index.html`. No backend, no build step. It loads Tailwind (CDN) for styling, Lucide for icons and MediaPipe Hands for tracking. The fog is drawn on an HTML canvas and wiped with `destination-out` compositing.

## Run it

Open `index.html` in a modern browser. The camera and hand tracking need HTTPS or `localhost`. For `localhost`:

```bash
python3 -m http.server 8000
```

To deploy, put the folder on any static host. I use Netlify.

## Screenshots

![Full fog](docs/full-fog.png)

![On a phone](docs/mobile.png)
