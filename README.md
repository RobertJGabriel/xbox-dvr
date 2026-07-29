# xbox-dvr

![Xbox One](.github/readme.png "Xbox One")

> Display your Xbox One game recordings and screenshots on your own website.

Reads the JSON feed of clips and screenshots for an Xbox One gamertag and appends
them to a div on your page — videos in a muted, autoplaying `<video>` tag.

Written in about 30 minutes. Xbox One gamertags only.

## Demo

[See it working here](http://robertjgabriel.github.io/xbox-dvr/).

## Requirements

- jQuery
- A `div` with the id `xboxOneMedia` for the output

## Usage

Include the script, then call `Init` with six arguments:

```html
<body onload="xboxOneMedia.Init(0,'screenshots','Rob Gabriel',899,899,1);">
```

## Parameters

| Position | Name | Values |
| --- | --- | --- |
| 1 | Flag | `1` for all screenshots/videos, `0` for a random one |
| 2 | Type | `screenshots` for screenshots, `gameclips` for videos |
| 3 | Gamertag | The gamertag to pull media from |
| 4 | Width | Width of the video player |
| 5 | Height | Height of the video player |
| 6 | Limit | Maximum number of videos or images |

Results are appended to the `xboxOneMedia` div.

## Adding it to a site

Copy the JavaScript file into your project, include it, and make the `Init` call
above. The example page in the repo is the shortest way to see the shape of it.

## Expected JSON

The feed is the standard Xbox Live screenshot/clip response — each entry carries
`Uri`, `Preview`, `Thumbnail`, `TitleName`, `CaptureTime` and `Views` among other
fields. See `example.json` in the repository for a full sample.

Note that the `Uri` values in these feeds are time-limited signed URLs, so a saved
JSON file will stop resolving once its `Expiration` passes.

## Status

Depends on the Xbox Live media feed format as it was in 2015. Not maintained.

## License

No licence file. All rights reserved unless stated otherwise.
