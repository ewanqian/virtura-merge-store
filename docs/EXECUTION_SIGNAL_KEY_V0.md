# SIGNAL KEY V0 — Physical Prototype Execution Pack

Status: P0 commercial proof
Owner: A2 Industrial / Hardware
Object: OBJ-005 SIGNAL KEY SET 01

## Objective
Build one physical acoustic-control key that can be pressed and reliably recognized by a nearby microphone without pairing.

## V0 hardware target
- 1 interchangeable 3D-printed keycap
- 1 tactile / dome / low-profile switch
- 1 low-power MCU
- 1 piezo transducer or compact buzzer
- 1 coin-cell holder
- CR2032 as first packaging/power baseline; only move larger if measured current/pulse behavior requires it
- no Bluetooth dependency for the primary interaction
- optional LED only for bench/debug use

## Functional chain
`PRESS → CODE → PIEZO → AIR → MIC → DETECTOR → EVENT`

## Acoustic protocol V0
Do not ship a long pure tone. Test short signatures.

Recommended test families:
1. two-tone sequence: A → B
2. short upward chirp
3. short downward chirp
4. two-tone sequence with fixed timing gap

Target total code duration: 80–160 ms.

## Mechanical envelope — first prototype
- target footprint: 28–36 mm square
- target total height: 9–16 mm before keycap iteration
- keycap must be removable without exposing fragile wiring
- battery replacement must not require destructive disassembly
- sound aperture must remain visually restrained

## Test matrix
Record every result, not impressions.

### Distance
- 0.5 m
- 1 m
- 2 m
- 4 m

### Environment
- quiet room
- normal speech nearby
- music at conversational level
- loud music / performance-like playback
- reverberant room

### Metrics
- recognition success rate over 50 presses
- false positives per 10 min
- median event latency
- audible annoyance / perceived loudness
- battery voltage before/after test
- estimated pulse current

## Pass gate
V0 is commercially promising only if:
- ≥95% recognition at 1 m in quiet and speech environments
- ≥90% recognition at 2 m in ordinary music playback
- false-positive rate is low enough that a user would trust the control
- the sound signature is not excessively intrusive
- enclosure can plausibly remain pocketable

## Failure branches
If recognition is weak:
- increase spectral separation
- use two-part signatures instead of single frequency
- use matched filtering / correlation instead of simple FFT peak detection
- test higher-frequency signatures if hardware/mic response allows
- use a receiver-side confidence threshold + debounce window

If power is weak:
- measure actual pulse current
- shorten duty cycle
- evaluate transducer efficiency
- only then move from CR2032 to a higher-capacity cell

## Evidence to capture
- clean still of assembled V0
- exploded layout
- short press/recognition video
- oscilloscope/audio waveform screenshot if available
- distance test table
- failure notes
- revision number engraved or labelled on prototype

## Output naming
`SIGKEY-V0-001`

Do not call it production-ready until repeatability and battery behavior are measured.