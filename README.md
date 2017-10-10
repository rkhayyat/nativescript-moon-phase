[![npm](https://img.shields.io/npm/v/nativescript-moon-phase.svg)](https://www.npmjs.com/package/nativescript-moon-phase)
[![npm](https://img.shields.io/npm/dt/nativescript-moon-phase.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-moon-phase)
[![twitter: @rakhayyat](https://img.shields.io/badge/twitter-%40rakhayyat-2F98C1.svg)](https://twitter.com/rakhayyat)

[![NPM](https://nodei.co/npm/nativescript-hijri.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/nativescript-moon-phase/)

# Nativescript moon phase plugin
This plugin is a complementary to my previous plugin that converts from gregorian to hijri dates https://github.com/rkhayyat/nativescript-hijri

# Nativescript-moon-phase

Moon Phase plugin allows you show the moon phase for a given date. 
<p align="center">
  <img src="https://github.com/rkhayyat/nativescript-hijri/blob/master/screenshot/nativescript-hijri.gif" width="300"/>
</p>

## Installation

```javascript
tns plugin add nativescript-moon-phase
```

## Usage 

## Typescript NativeScript

### main-view-model
```typescript
import {Observable} from 'data/observable';
import {Hijri, islamicDateObject} from 'nativescript-hijri';


export class HelloWorldModel extends Observable {
  public message: string;
  private hijri: Hijri;

  constructor() {
    super();

    this.hijri = new Hijri(new Date,0);
    this.message = this.hijri.hijri_en.dayOfWeekText;
    console.dir(this.hijri.hijri_en);

  }
}
```

## API

### Methods

| Method | Return | Description |
| --- | --- | --- |
| `hijri_ar` | `Object:islamicDateObject` | Accepts 2 Arguments Date , Date Adjustment by days.<br> return Object of islamicDateObject where day and month are written in arabic alphabet.|
| `hijri_en`| `Object:islamicDateObject` | Accepts 2 Arguments Date , Date Adjustment by days.<br> return Object of islamicDateObject where day and month are written in English alphabet. |

## NativeBaguette 🥖

[<img alt="Rachid Al Kayat" src="https://avatars1.githubusercontent.com/u/10686043?v=3&s=400" width="117">](https://github.com/rkhayyat) |
:---: |
[rkhayyat](https://github.com/rkhayyat)  |

