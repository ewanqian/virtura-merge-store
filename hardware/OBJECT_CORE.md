# VIRTURA OBJECT CORE v0.1

Suggested prototype core:
- ESP32-S3
- MEMS microphone
- USB-C
- addressable LED output
- optional IMU
- optional battery

## Pipeline
MIC / BUTTON / IMU → feature extraction → state machine → LED/render output.

## Shared firmware states
IDLE / LISTEN / LOCK / FOLLOW / HOLD / RELEASE / REWIND.

## Product mappings
- SYNC OBJECT: mic + audio features + LED renderer
- TIMER / REWIND: IMU/orientation + timer state + optional display/LED
- DROP FLOW / ∞: LED/optical output + optional mic-reactive parameters

The first goal is a reusable prototype core, not a custom PCB.
