# homebridge-cec-accessory
Homebridge support for CEC devices over HDMI

## About

homebridge-cec-accessory was written with Raspberry Pi in mind.

Create homebridge accessories for each CEC device you'd like to control.
Currently `power` and `volume` are the only available controls, and `volume`
only toggles mute (and probably only works with an attached receiver).

No automatic detection of attached devices is performed. For each device, create
an accessory entry in your `config.json`.

Bug reports, feature requests, and pull requests welcome.

## Installation

### On a Raspberry Pi

1. Follow [these instructions](https://github.com/nfarina/homebridge/wiki/Running-HomeBridge-on-a-Raspberry-Pi)
to install and run homebridge on Raspberry Pi. Don't give up. Hang in there.

2. Install cec-utils using package manager:  
`$ apt-get install cec-utils`

3. Install homebridge-platform-cec:  
`$ npm install -g homebridge-cec-accessory`

4. Open an issue if you run into problems.

## Configuration

Here is a sample of what you might put in your `~/.homebridge/config.json`

```
"accessories": [
  {
    "accessory": "cec",
    "name": "TV Power",
    "type": "power",
    "address": 0
  },
  {
    "accessory": "cec",
    "name": "Amp Volume",
    "type": "volume",
    "address": 5
  }
]
```

`"name"` can be any string you want, but must be unique. Try to keep it short
and descriptive.

`"type"` must be either `"power"` or `"volume"`.

`"address"` specifies the CEC destination address of the device, represented
as an integer. Here are the possible devices:

`0`: TV  
`1`: Recording 1  
`2`: Recording 2  
`3`: Tuner 1  
`4`: Playback 1  
`5`: Audio system  
`6`: Tuner 2  
`7`: Tuner 3  
`8`: Playback 2  
`9`: Recording 3  
`10`: Tuner 4  
`11`: Playback 4  

## Additional resources

+ [homebridge](https://github.com/nfarina/homebridge)
+ [libCEC by Pulse Eight](http://libcec.pulse-eight.com)
+ [CEC-O-MATIC](http://www.cec-o-matic.com)
