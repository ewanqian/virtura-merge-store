# OBJ-005 — SIGNAL KEY SET 01 / 信号键组

Status: prototype architecture

## Product idea
A set of interchangeable 3D-printed physical keys. Pressing a key emits a short acoustic code. A nearby microphone (SYNC OBJECT, phone, laptop or performance system) recognizes the code locally and converts it into a control event.

`PRESS → SOUND CODE → MICROPHONE → LOCAL DETECTOR → EVENT`

This deliberately avoids pairing as the primary interaction. Bluetooth can remain an optional service/configuration channel later.

## Why acoustic control
- no pairing ceremony for the performance interaction
- one transmitter can be heard by multiple receivers
- works across phone / laptop / embedded microphone / stage computer
- physically legible: the button itself still feels like a real object
- the sound can become part of the object's identity rather than hidden RF traffic

## V0 — browser proof
The current `site/signal.html` demo maps nine keys to distinct short chirps in roughly the 0.5–2.1 kHz range. The browser can request microphone access and perform local FFT peak detection.

This is intentionally easy to inspect, not the final protocol.

## V1 — physical prototype
Suggested transmitter:
- low-power MCU: nRF52-family / low-power AVR / similar
- piezo transducer or small acoustic buzzer
- 3D-printed interchangeable keycap
- tactile switch / dome switch
- coin-cell holder
- optional status LED (normally off)

Receiver:
- MEMS microphone
- local DSP / FFT or matched-filter detector
- event mapping layer
- optional OSC / WebSocket / MIDI output

## Acoustic code recommendation
Do **not** rely on one long pure tone in the final product.

Prefer a short signature such as:
1. tone A, 35–55 ms
2. 10–25 ms gap
3. tone B, 35–55 ms

or a short upward/downward chirp.

Each key gets a distinct pair/direction. This gives more information than a single peak and reduces false triggers from music, speech and room resonances.

Example state mapping:
- ○ = READY
- │ = ADVANCE
- ✣ = BUILD
- LIVE = LIVE
- HOLD = HOLD
- EXIT = RELEASE
- × = CANCEL
- — = REDUCE
- ⋮ = NEXT / OPTION

## Power study
### CR2032
Good first mechanical benchmark for a very thin object. Energizer lists CR2032 as a 3 V lithium coin cell around 240 mAh under low-drain rating conditions. Coin cells are best treated as low-average-current sources.

### CR2450
If the acoustic transducer/current pulse budget is uncomfortable, CR2450 is a more forgiving option while remaining a coin cell; Energizer specifies 3 V and about 620 mAh typical capacity.

### CR3230
Do not lock the industrial design around `CR3230` yet. It is not present in the common Energizer lithium-coin family list used for this study. Confirm a real supplier/standard designation before designing the enclosure around it.

## Electrical strategy
The product should sleep almost all the time.

Press:
1. wake MCU
2. identify switch
3. generate 80–130 ms acoustic code
4. optional 30–60 ms confirmation LED
5. return to deep sleep

A piezo transducer is preferable to a conventional miniature speaker for the first thin prototype because the required output is a coded signal rather than high-fidelity audio.

## Mechanical system
Two layers:
- **electronics base**: same for all keys
- **3D printed keycap / tile**: replaceable identity + tactile geometry

Prototype form factors:
- single key, ~45–60 mm square
- 3×3 dock/grid
- detachable magnetic or snap-fit tiles
- ultra-flat remote strip

## Test matrix
1. quiet room, 0.5 / 1 / 2 / 4 m
2. music playback at moderate/high SPL
3. speech nearby
4. reverberant room
5. multiple receivers simultaneously
6. receiver microphone orientation
7. false positive rate over 30–60 min
8. CR2032 voltage sag during repeated bursts

## Acceptance for V1
- 9 codes recognized at ≥95% in a quiet room at 2 m
- ≥90% with moderate background music after moving from single-tone to two-part codes
- no false trigger during a 10-minute music-only test
- transmitter returns to low-power sleep after each press
