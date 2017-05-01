
![alt text](.github/readme.png " Xbox One Logo")


# About

***Display Xbox One Video Game Recordings & Screenshots on our Website***

A small repo that was created in 30 mins. It allows you to read the json file that stores your video links.
Then display it in a video tag and play muted.
Note this only works on xbox one Gamertags :)

## Demo

See a live demo of it working [here](http://robertjgabriel.github.io/xbox-dvr/).

## Setup

- Include this repo.
- Have Jquery Installed
- Have a div called xboxOneMedia;
- See the flags required (random or all,type, gamertag, width ,height)
- Thats it :)



## Flags

To set up this, you will need to make a call to the xboxVideos.Init.
With the following parameters

```html

<body onload="xboxOneMedia.Init(0,'screenshots','Rob Gabriel',899,899,1);">

```

So the paratmars (Flags) you need to send are the following

- Flag : 1 equals all screenshots/videos, 0 equals random screenshot/video.
- Type : ``` screenshots ``` means screenshot. ```gameclips``` means videos
- ```gamerTag``` : The Gamer Tag you want to get videos from.
- ```width`` : The width of the Video Player.
- ```height``` : The height of the video player.
- Number of Videos/images : Incase you want to limit it.

## How do I add it to my Website, Tumblr etc

### Website

Download or copy the javascript file. And kinda look at the example. Make a call and it will append the results to the div.

## Example of Screenshot Json File

```json
{  
   "result":true,
   "data":{  
      "ContinuationToken":null,
      "Screenshots":[  
         {  
            "Id":"9e8a5803-a495-4a29-b21a-c64602434393",
            "Scid":"c4060100-4951-4a51-a630-dce26c15b8c5",
            "Name":"",
            "Uri":"http://screenshotscontent-t5002.xboxlive.com/000900000284f400-9e8a5803-a495-4a29-b21a-c64602434393/Screenshot-Original.png?sv=2014-02-14\u0026sr=c\u0026sig=K8Tn%2FgFZeSH8hi6porRPNC18RXkIIfveQoKa00D6zp4%3D\u0026st=2015-09-07T21%3A31%3A54Z\u0026se=2015-09-07T22%3A36%3A54Z\u0026sp=r\u0026__gda__=1441665414_1a6bf18ae80dc665c7f877f53f10d049",
            "Preview":"http://screenshotscontent-t5002.xboxlive.com/000900000284f400-9e8a5803-a495-4a29-b21a-c64602434393/Thumbnail_Large.PNG",
            "Thumbnail":"http://screenshotscontent-t5002.xboxlive.com/000900000284f400-9e8a5803-a495-4a29-b21a-c64602434393/Thumbnail_Small.PNG",
            "Expiration":"2015-09-07T22:36:54.5126079Z",
            "Duration":0,
            "CaptureTime":"Uploaded 8/5/2015",
            "ViewCount":4,
            "Views":"4 views",
            "TitleId":1813362885,
            "TitleName":"FIFA 14",
            "TitleLink":"https://store.xbox.com/en-US/Xbox-One/Games/FIFA-14/f04f7029-01ea-4d65-988b-56f583fb7f6c",
            "OwnerGamerTag":null,
            "OwnerProfile":null,
            "OwnerGamerPic":null
         },
         {  
            "Id":"196aad38-cc91-4760-9beb-fb0c07e0c8a5",
            "Scid":"1b180100-2e72-4297-a9e6-b79d5a9771a4",
            "Name":"",
            "Uri":"http://screenshotscontent-t4002.xboxlive.com/000900000284f400-196aad38-cc91-4760-9beb-fb0c07e0c8a5/Screenshot-Original.png?sv=2014-02-14\u0026sr=c\u0026sig=s9dqA1I%2Bdjv1oTxM%2FmX%2B0tYj8RD2eysCWgp1XAQ6xA4%3D\u0026st=2015-09-07T21%3A31%3A54Z\u0026se=2015-09-07T22%3A36%3A54Z\u0026sp=r\u0026__gda__=1441665414_379050eaf43b062e85d9af7811df2300",
            "Preview":"http://screenshotscontent-t4002.xboxlive.com/000900000284f400-196aad38-cc91-4760-9beb-fb0c07e0c8a5/Thumbnail_Large.PNG",
            "Thumbnail":"http://screenshotscontent-t4002.xboxlive.com/000900000284f400-196aad38-cc91-4760-9beb-fb0c07e0c8a5/Thumbnail_Small.PNG",
            "Expiration":"2015-09-07T22:36:54.5126079Z",
            "Duration":0,
            "CaptureTime":"Uploaded 5/30/2015",
            "ViewCount":0,
            "Views":"0 views",
            "TitleId":1519874468,
            "TitleName":"Forza Horizon 2 Presents Fast \u0026 Furious",
            "TitleLink":"https://store.xbox.com/en-US/Xbox-One/Games/Forza-Horizon-2-Presents-Fast-Furious/aaae1849-53dc-453f-8b38-27955610925d",
            "OwnerGamerTag":null,
            "OwnerProfile":null,
            "OwnerGamerPic":null
         }
      ]
   }
}


```


## Example of Gameclips Json File

```json

{  
   "ContinuationToken":"abcde_vwxyzEgAAAA2",
   "GameClips":[  
      {  
         "Id":"e97703cd-2359-4940-9ef5-04e7be160688",
         "Scid":"1658e0c0-e7b7-47a1-9043-60d3a65ea14a",
         "Name":"",
         "ClipUri":"http://gameclipscontent-d2001.xboxlive.com/asset-e2600b1c-ad10-42bd-bff7-e44399a72941/GameClip-Original.MP4?sv=2014-02-14\u0026sr=c\u0026sig=AY8n%2FH%2FMfrgTLZ%2BqjXkdC5GbzPYDvm2TApSXOBWbFzc%3D\u0026st=2015-09-05T11%3A40%3A00Z\u0026se=2015-09-05T12%3A45%3A00Z\u0026sp=r\u0026__gda__=1441457100_fb3587133ce662f9b4254f60da28dc99",
         "Preview":"http://gameclipscontent-t2001.xboxlive.com/000900000284f400-e97703cd-2359-4940-9ef5-04e7be160688/Thumbnail_Large.PNG",
         "Thumbnail":"http://gameclipscontent-t2001.xboxlive.com/000900000284f400-e97703cd-2359-4940-9ef5-04e7be160688/Thumbnail_Small.PNG",
         "Expiration":"2015-09-05T12:45:00.2040194Z",
         "Duration":29,
         "UploadTime":"Uploaded 12/30/2014",
         "Views":"1 view",
         "TitleId":556718860,
         "TitleName":"Assassin\u0027s Creed IV Black Flag",
         "TitleDetails":"https://store.xbox.com/en-US/Xbox-One/Games/Assassins-Creed-IV-Black-Flag/0044aef3-bd7e-4478-8782-6191546dcd9a",
         "OwnerGamerTag":"Rob Gabriel",
         "GamerProfile":"https://account.xbox.com/en-US/Profile?gamerTag=Rob+Gabriel"
      }
   ]
}


```

## Roadmap 

The more people help the fast we can share.

- Download videos and Screenshots
- See Friends list and there game videos and screenshots.
