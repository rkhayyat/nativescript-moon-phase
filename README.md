[![npm](https://img.shields.io/npm/v/nativescript-moon-phase.svg)](https://www.npmjs.com/package/nativescript-moon-phase)
[![npm](https://img.shields.io/npm/dt/nativescript-moon-phase.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-moon-phase)
[![twitter: @rakhayyat](https://img.shields.io/badge/twitter-%40rakhayyat-2F98C1.svg)](https://twitter.com/rakhayyat)

[![NPM](https://nodei.co/npm/nativescript-moon-phase.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/nativescript-moon-phase/)

# Nativescript moon phase plugin
This plugin is a complementary to my previous plugin that converts from gregorian to hijri dates https://github.com/rkhayyat/nativescript-hijri

# Nativescript-moon-phase

Moon Phase plugin allows you show the moon phase for a given date. 
<p align="center">
  <img src="https://github.com/rkhayyat/nativescript-moon-phase/blob/master/screenshot/nativescript-moon.gif" width="300"/>
</p>

## Installation

```javascript
tns plugin add nativescript-moon-phase
```

## Usage 

## Typescript NativeScript

### XML
```xml
<Page 
 xmlns="http://schemas.nativescript.org/tns.xsd" 
  xmlns:customControls="nativescript-moon-phase"
 loaded="pageLoaded" class="page">
  <StackLayout class="p-20">
  <customControls:MoonPhase items="{{ DateValue }}" />
    <DatePicker id="date" loaded="onPickerLoaded" dateChange="onDateChanged" verticalAlignment="center">
    </DatePicker>
    <Button text="Valider" tap="see"></Button>
  </StackLayout>
</Page>
```

### main-view-model
```typescript
import {Observable} from 'tns-core-modules/data/observable';
import {Hijri} from 'nativescript-moon-phase';

export class HelloWorldModel extends Observable {
public monthText : string;
public DateValue: Date;

  constructor(currentDate) {
    super();

    this.DateValue = currentDate;
  }
}```

### main-page
```typescript
import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { DatePicker } from "tns-core-modules/ui/date-picker";
import {HelloWorldModel} from './main-view-model';
var view = require("ui/core/view");
var MainViewModel = require("./main-view-model");

let page;

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel(new Date());
}

exports.see = function(args) {
    var sender = args.object;
    var parent = sender.parent;
    var year = view.getViewById(parent,"date").year;
    var month = view.getViewById(parent,"date").month
    var day = view.getViewById(parent,"date").day;
    var convertDate = new Date(year, month-1, day);
    page.bindingContext = new HelloWorldModel(convertDate);
}```

## API

### Methods

| Method | Return | Description |
| --- | --- | --- |
| `items` | `Date` | Date passed to show the corseponding moon phase image. |

## NativeBaguette 🥖

[<img alt="Rachid Al Kayat" src="https://avatars1.githubusercontent.com/u/10686043?v=3&s=400" width="117">](https://github.com/rkhayyat) |
:---: |
[rkhayyat](https://github.com/rkhayyat)  |

