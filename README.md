# Display Xbox One Video Game Recordings & Screenshots on our Website





![alt text](https://d13yacurqjgara.cloudfront.net/users/303272/screenshots/1082051/xbox_controller.png " Logo
by Felipe Santana")


## About
A small repo that was created in 30 mins. It allows you to read the json file that stores your video links.
Then display it in a video tag and play muted.
Note this only works on xbox one Gamertags :)
## Demo
See a live demo of it working [here](http://robertjgabriel.github.io/Xbox-One-Gamertag-Videos/).
## Setup
- Include this repo.
- Have Jquery Installed
- Have a div called xboxOneMedia;
- See the flags required (random or all,type, gamertag, width ,height)
- Thats it :)



## Flags
To set up this, you will need to make a call to the xboxVideos.Init. <br>
With the following parameters
```

<body onload="xboxOneMedia.Init(0,'screenshots','Rob Gabriel',899,899);">


```

So the paratmars (Flags) you need to send are the following
- Flag : 1 equals all screenshots/videos, 0 equals random screenshot/video.
- Type : ```  screenshots ``` means screenshot. ```gameclips``` means videos
- gamerTag : The Gamer Tag you want to get videos from.
- width : The width of the Video Player.
- height : The height of the video player.


## How do I add it to my Website, Tumblr etc

###Website
Download or copy the javascript file. And kinda look at the example. Make a call and it will append the results to the div.

###Tumblr Theme
Coming Soon

## Example of Screenshot Json File

```
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

```

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
      },
      {  
         "Id":"20eda4f0-8990-42e6-908d-059fbaf2dbe5",
         "Scid":"1b180100-2e72-4297-a9e6-b79d5a9771a4",
         "Name":"",
         "ClipUri":"http://gameclipscontent-d2009.xboxlive.com/000900000284f400-20eda4f0-8990-42e6-908d-059fbaf2dbe5/GameClip-Original.MP4?sv=2014-02-14\u0026sr=c\u0026sig=6WJlPd5CaEFim5dLPriCwxOrZwu8TO3PoTFVx3nRIJA%3D\u0026st=2015-09-05T11%3A40%3A00Z\u0026se=2015-09-05T12%3A45%3A00Z\u0026sp=r\u0026__gda__=1441457100_cedeb00ba72b42f6d46c97dd08f5e0f2",
         "Preview":"http://gameclipscontent-t2009.xboxlive.com/000900000284f400-20eda4f0-8990-42e6-908d-059fbaf2dbe5-public/Thumbnail_Large.PNG",
         "Thumbnail":"http://gameclipscontent-t2009.xboxlive.com/000900000284f400-20eda4f0-8990-42e6-908d-059fbaf2dbe5-public/Thumbnail_Small.PNG",
         "Expiration":"2015-09-05T12:45:00.2040194Z",
         "Duration":28,
         "UploadTime":"Uploaded 29 days ago",
         "Views":"5 views",
         "TitleId":1519874468,
         "TitleName":"Forza Horizon 2 Presents Fast \u0026 Furious",
         "TitleDetails":"https://store.xbox.com/en-US/Xbox-One/Games/Forza-Horizon-2-Presents-Fast-Furious/aaae1849-53dc-453f-8b38-27955610925d",
         "OwnerGamerTag":"Rob Gabriel",
         "GamerProfile":"https://account.xbox.com/en-US/Profile?gamerTag=Rob+Gabriel"
      },
      {  
         "Id":"2969702b-7217-47c8-906f-3bea9b3e2394",
         "Scid":"1b180100-2e72-4297-a9e6-b79d5a9771a4",
         "Name":"",
         "ClipUri":"http://gameclipscontent-d2009.xboxlive.com/asset-52c6665d-1500-80c3-d0b7-f1e51f7154e9/GameClip-Original.MP4?sv=2014-02-14\u0026sr=c\u0026sig=Y9gFCACocRsiRSS5pWmtKVieQ44sP3DKrBm8yFhOYwU%3D\u0026st=2015-09-05T11%3A40%3A00Z\u0026se=2015-09-05T12%3A45%3A00Z\u0026sp=r\u0026__gda__=1441457100_3dcffa09c0c960f04e2fffb69d44ff36",
         "Preview":"http://gameclipscontent-t2009.xboxlive.com/000900000284f400-2969702b-7217-47c8-906f-3bea9b3e2394/Thumbnail_Large.PNG",
         "Thumbnail":"http://gameclipscontent-t2009.xboxlive.com/000900000284f400-2969702b-7217-47c8-906f-3bea9b3e2394/Thumbnail_Small.PNG",
         "Expiration":"2015-09-05T12:45:00.2040194Z",
         "Duration":53,
         "UploadTime":"Uploaded 6/30/2015",
         "Views":"1 view",
         "TitleId":1519874468,
         "TitleName":"Forza Horizon 2 Presents Fast \u0026 Furious",
         "TitleDetails":"https://store.xbox.com/en-US/Xbox-One/Games/Forza-Horizon-2-Presents-Fast-Furious/aaae1849-53dc-453f-8b38-27955610925d",
         "OwnerGamerTag":"Rob Gabriel",
         "GamerProfile":"https://account.xbox.com/en-US/Profile?gamerTag=Rob+Gabriel"
      },
      {  
         "Id":"44aef341-a343-4753-8179-c26b0bffd48a",
         "Scid":"1b180100-2e72-4297-a9e6-b79d5a9771a4",
         "Name":"",
         "ClipUri":"http://gameclipscontent-d3003.xboxlive.com/000900000284f400-44aef341-a343-4753-8179-c26b0bffd48a/GameClip-Original.MP4?sv=2014-02-14\u0026sr=c\u0026sig=AofNcJvcu59EOc2PaVzA8oglZgaINVt2UQBTFrmtkV4%3D\u0026st=2015-09-05T11%3A40%3A00Z\u0026se=2015-09-05T12%3A45%3A00Z\u0026sp=r\u0026__gda__=1441457100_24d5ff1d2c9a13b43b20f992f8d22153",
         "Preview":"http://gameclipscontent-t3003.xboxlive.com/000900000284f400-44aef341-a343-4753-8179-c26b0bffd48a-public/Thumbnail_Large.PNG",
         "Thumbnail":"http://gameclipscontent-t3003.xboxlive.com/000900000284f400-44aef341-a343-4753-8179-c26b0bffd48a-public/Thumbnail_Small.PNG",
         "Expiration":"2015-09-05T12:45:00.2040194Z",
         "Duration":11,
         "UploadTime":"Uploaded 23 days ago",
         "Views":"2 views",
         "TitleId":1519874468,
         "TitleName":"Forza Horizon 2 Presents Fast \u0026 Furious",
         "TitleDetails":"https://store.xbox.com/en-US/Xbox-One/Games/Forza-Horizon-2-Presents-Fast-Furious/aaae1849-53dc-453f-8b38-27955610925d",
         "OwnerGamerTag":"Rob Gabriel",
         "GamerProfile":"https://account.xbox.com/en-US/Profile?gamerTag=Rob+Gabriel"
      },
      {  
         "Id":"b192d0a6-74b8-47ce-90a3-81fab0ecd178",
         "Scid":"1b180100-2e72-4297-a9e6-b79d5a9771a4",
         "Name":"",
         "ClipUri":"http://gameclipscontent-d2004.xboxlive.com/asset-65d3665d-1500-80c3-cb52-f1e4dc50656c/GameClip-Original.MP4?sv=2014-02-14\u0026sr=c\u0026sig=tC4889e%2BaLEIYQBQgduHSojtXJVo4TZoyneM8O3Bi78%3D\u0026st=2015-09-05T11%3A40%3A00Z\u0026se=2015-09-05T12%3A45%3A00Z\u0026sp=r\u0026__gda__=1441457100_ccfd92a9fee023ba4343700e7e061fb6",
         "Preview":"http://gameclipscontent-t2004.xboxlive.com/000900000284f400-b192d0a6-74b8-47ce-90a3-81fab0ecd178/Thumbnail_Large.PNG",
         "Thumbnail":"http://gameclipscontent-t2004.xboxlive.com/000900000284f400-b192d0a6-74b8-47ce-90a3-81fab0ecd178/Thumbnail_Small.PNG",
         "Expiration":"2015-09-05T12:45:00.2040194Z",
         "Duration":30,
         "UploadTime":"Uploaded 4/6/2015",
         "Views":"2 views",
         "TitleId":1519874468,
         "TitleName":"Forza Horizon 2 Presents Fast \u0026 Furious",
         "TitleDetails":"https://store.xbox.com/en-US/Xbox-One/Games/Forza-Horizon-2-Presents-Fast-Furious/aaae1849-53dc-453f-8b38-27955610925d",
         "OwnerGamerTag":"Rob Gabriel",
         "GamerProfile":"https://account.xbox.com/en-US/Profile?gamerTag=Rob+Gabriel"
      },
      {  
         "Id":"c00b3718-bede-4bb1-8c1b-aa399f536aa8",
         "Scid":"1b180100-2e72-4297-a9e6-b79d5a9771a4",
         "Name":"",
         "ClipUri":"http://gameclipscontent-d3006.xboxlive.com/asset-d6b2555d-1500-80c6-2962-f1e506dc2e7b/GameClip-Original.MP4?sv=2014-02-14\u0026sr=c\u0026sig=ry336%2FHG5BOt%2BRDI0gKKSCO37BDK%2FwD9A0TngT%2Fpqkg%3D\u0026st=2015-09-05T11%3A40%3A00Z\u0026se=2015-09-05T12%3A45%3A00Z\u0026sp=r\u0026__gda__=1441457100_cfe99a73c0121f6f7884cd011b4af7dc",
         "Preview":"http://gameclipscontent-t3006.xboxlive.com/000900000284f400-c00b3718-bede-4bb1-8c1b-aa399f536aa8/Thumbnail_Large.PNG",
         "Thumbnail":"http://gameclipscontent-t3006.xboxlive.com/000900000284f400-c00b3718-bede-4bb1-8c1b-aa399f536aa8/Thumbnail_Small.PNG",
         "Expiration":"2015-09-05T12:45:00.2040194Z",
         "Duration":11,
         "UploadTime":"Uploaded 5/30/2015",
         "Views":"2 views",
         "TitleId":1519874468,
         "TitleName":"Forza Horizon 2 Presents Fast \u0026 Furious",
         "TitleDetails":"https://store.xbox.com/en-US/Xbox-One/Games/Forza-Horizon-2-Presents-Fast-Furious/aaae1849-53dc-453f-8b38-27955610925d",
         "OwnerGamerTag":"Rob Gabriel",
         "GamerProfile":"https://account.xbox.com/en-US/Profile?gamerTag=Rob+Gabriel"
      },
      {  
         "Id":"071f53e5-434d-4a5a-aecd-aba3109f03a0",
         "Scid":"788f0100-a4bc-46c3-b19b-d1001a96545b",
         "Name":"",
         "ClipUri":"http://gameclipscontent-d3005.xboxlive.com/000900000284f400-071f53e5-434d-4a5a-aecd-aba3109f03a0/GameClip-Original.MP4?sv=2014-02-14\u0026sr=c\u0026sig=%2FgshWt7LkUCnNjyH7zYH8OO6Lhom7EtSVDQNFYe%2Bpik%3D\u0026st=2015-09-05T11%3A40%3A00Z\u0026se=2015-09-05T12%3A45%3A00Z\u0026sp=r\u0026__gda__=1441457100_2669f267acbd5c087ac272827db20eb8",
         "Preview":"http://gameclipscontent-t3005.xboxlive.com/000900000284f400-071f53e5-434d-4a5a-aecd-aba3109f03a0-public/Thumbnail_Large.PNG",
         "Thumbnail":"http://gameclipscontent-t3005.xboxlive.com/000900000284f400-071f53e5-434d-4a5a-aecd-aba3109f03a0-public/Thumbnail_Small.PNG",
         "Expiration":"2015-09-05T12:45:00.2040194Z",
         "Duration":29,
         "UploadTime":"Uploaded 1 day ago",
         "Views":"0 views",
         "TitleId":446059611,
         "TitleName":"Forza Horizon 2",
         "TitleDetails":"https://store.xbox.com/en-US/Xbox-One/Games/Forza-Horizon-2/d1f83f36-a0da-4cb2-9a94-b45822d77fb1",
         "OwnerGamerTag":"Rob Gabriel",
         "GamerProfile":"https://account.xbox.com/en-US/Profile?gamerTag=Rob+Gabriel"
      },
      {  
         "Id":"147874fe-ed3a-4d9e-939c-f85c071a9852",
         "Scid":"788f0100-a4bc-46c3-b19b-d1001a96545b",
         "Name":"",
         "ClipUri":"http://gameclipscontent-d3003.xboxlive.com/000900000284f400-147874fe-ed3a-4d9e-939c-f85c071a9852/GameClip-Original.MP4?sv=2014-02-14\u0026sr=c\u0026sig=FDJ0BWo2Ax9cvPyNgupIpv40jh%2FqGuKaZBVCSyEQlgU%3D\u0026st=2015-09-05T11%3A40%3A00Z\u0026se=2015-09-05T12%3A45%3A00Z\u0026sp=r\u0026__gda__=1441457100_5e833b7f7bab1be5fa5e1d017eb5e2aa",
         "Preview":"http://gameclipscontent-t3003.xboxlive.com/000900000284f400-147874fe-ed3a-4d9e-939c-f85c071a9852-public/Thumbnail_Large.PNG",
         "Thumbnail":"http://gameclipscontent-t3003.xboxlive.com/000900000284f400-147874fe-ed3a-4d9e-939c-f85c071a9852-public/Thumbnail_Small.PNG",
         "Expiration":"2015-09-05T12:45:00.2040194Z",
         "Duration":30,
         "UploadTime":"Uploaded 3 days ago",
         "Views":"8 views",
         "TitleId":446059611,
         "TitleName":"Forza Horizon 2",
         "TitleDetails":"https://store.xbox.com/en-US/Xbox-One/Games/Forza-Horizon-2/d1f83f36-a0da-4cb2-9a94-b45822d77fb1",
         "OwnerGamerTag":"Rob Gabriel",
         "GamerProfile":"https://account.xbox.com/en-US/Profile?gamerTag=Rob+Gabriel"
      },
      {  
         "Id":"8c2bfede-165f-400c-8de4-419a06b49291",
         "Scid":"788f0100-a4bc-46c3-b19b-d1001a96545b",
         "Name":"",
         "ClipUri":"http://gameclipscontent-d2002.xboxlive.com/000900000284f400-8c2bfede-165f-400c-8de4-419a06b49291/GameClip-Original.MP4?sv=2014-02-14\u0026sr=c\u0026sig=802jHZspOZ62q9%2B7gvGFU2HR5oaYbOZjsdgjas%2FPcYA%3D\u0026st=2015-09-05T11%3A40%3A00Z\u0026se=2015-09-05T12%3A45%3A00Z\u0026sp=r\u0026__gda__=1441457100_77fe2d5ba00e63599958571100b759fc",
         "Preview":"http://gameclipscontent-t2002.xboxlive.com/000900000284f400-8c2bfede-165f-400c-8de4-419a06b49291-public/Thumbnail_Large.PNG",
         "Thumbnail":"http://gameclipscontent-t2002.xboxlive.com/000900000284f400-8c2bfede-165f-400c-8de4-419a06b49291-public/Thumbnail_Small.PNG",
         "Expiration":"2015-09-05T12:45:00.2040194Z",
         "Duration":28,
         "UploadTime":"Uploaded 1 day ago",
         "Views":"0 views",
         "TitleId":446059611,
         "TitleName":"Forza Horizon 2",
         "TitleDetails":"https://store.xbox.com/en-US/Xbox-One/Games/Forza-Horizon-2/d1f83f36-a0da-4cb2-9a94-b45822d77fb1",
         "OwnerGamerTag":"Rob Gabriel",
         "GamerProfile":"https://account.xbox.com/en-US/Profile?gamerTag=Rob+Gabriel"
      },
      {  
         "Id":"b8f9907e-f741-470a-92ff-de19144f4534",
         "Scid":"788f0100-a4bc-46c3-b19b-d1001a96545b",
         "Name":"",
         "ClipUri":"http://gameclipscontent-d3005.xboxlive.com/000900000284f400-b8f9907e-f741-470a-92ff-de19144f4534/GameClip-Original.MP4?sv=2014-02-14\u0026sr=c\u0026sig=O4bQdQABIAAH2aNjmoXVh7YXSxJw%2FXOFndSc7Gwyjsc%3D\u0026st=2015-09-05T11%3A40%3A00Z\u0026se=2015-09-05T12%3A45%3A00Z\u0026sp=r\u0026__gda__=1441457100_ab56456039e332ff1a621171988a7576",
         "Preview":"http://gameclipscontent-t3005.xboxlive.com/000900000284f400-b8f9907e-f741-470a-92ff-de19144f4534-public/Thumbnail_Large.PNG",
         "Thumbnail":"http://gameclipscontent-t3005.xboxlive.com/000900000284f400-b8f9907e-f741-470a-92ff-de19144f4534-public/Thumbnail_Small.PNG",
         "Expiration":"2015-09-05T12:45:00.2040194Z",
         "Duration":10,
         "UploadTime":"Uploaded 1 day ago",
         "Views":"1 view",
         "TitleId":446059611,
         "TitleName":"Forza Horizon 2",
         "TitleDetails":"https://store.xbox.com/en-US/Xbox-One/Games/Forza-Horizon-2/d1f83f36-a0da-4cb2-9a94-b45822d77fb1",
         "OwnerGamerTag":"Rob Gabriel",
         "GamerProfile":"https://account.xbox.com/en-US/Profile?gamerTag=Rob+Gabriel"
      },
      {  
         "Id":"04272bb9-2a88-4a74-b622-ccde43ca258d",
         "Scid":"c4060100-4951-4a51-a630-dce26c15b8c5",
         "Name":"",
         "ClipUri":"http://gameclipscontent-d2009.xboxlive.com/asset-1b9af54b-b80f-4e90-aa30-2c6932a4e82c/GameClip-Original.MP4?sv=2014-02-14\u0026sr=c\u0026sig=daGvA6%2FBw9H5jNlUrZflgsK6rACAOTQ1qeIfZZ3czHY%3D\u0026st=2015-09-05T11%3A40%3A00Z\u0026se=2015-09-05T12%3A45%3A00Z\u0026sp=r\u0026__gda__=1441457100_3fdde7baf48d79e5af043c3b76ba5047",
         "Preview":"http://gameclipscontent-t2009.xboxlive.com/000900000284f400-04272bb9-2a88-4a74-b622-ccde43ca258d/Thumbnail_Large.PNG",
         "Thumbnail":"http://gameclipscontent-t2009.xboxlive.com/000900000284f400-04272bb9-2a88-4a74-b622-ccde43ca258d/Thumbnail_Small.PNG",
         "Expiration":"2015-09-05T12:45:00.2040194Z",
         "Duration":26,
         "UploadTime":"Uploaded 12/30/2014",
         "Views":"0 views",
         "TitleId":1813362885,
         "TitleName":"FIFA 14",
         "TitleDetails":"https://store.xbox.com/en-US/Xbox-One/Games/FIFA-14/f04f7029-01ea-4d65-988b-56f583fb7f6c",
         "OwnerGamerTag":"Rob Gabriel",
         "GamerProfile":"https://account.xbox.com/en-US/Profile?gamerTag=Rob+Gabriel"
      },
      {  
         "Id":"04adda98-5011-4465-a097-cce5649ad6fc",
         "Scid":"c4060100-4951-4a51-a630-dce26c15b8c5",
         "Name":"",
         "ClipUri":"http://gameclipscontent-d3003.xboxlive.com/000900000284f400-04adda98-5011-4465-a097-cce5649ad6fc/GameClip-Original.MP4?sv=2014-02-14\u0026sr=c\u0026sig=WBict4lajxTRZ%2Fu87sdldEmxhEDSgoGwwc2pDoKUeF0%3D\u0026st=2015-09-05T11%3A40%3A00Z\u0026se=2015-09-05T12%3A45%3A00Z\u0026sp=r\u0026__gda__=1441457100_0f33e5b778c901b5fcc4d929be3981c5",
         "Preview":"http://gameclipscontent-t3003.xboxlive.com/000900000284f400-04adda98-5011-4465-a097-cce5649ad6fc-public/Thumbnail_Large.PNG",
         "Thumbnail":"http://gameclipscontent-t3003.xboxlive.com/000900000284f400-04adda98-5011-4465-a097-cce5649ad6fc-public/Thumbnail_Small.PNG",
         "Expiration":"2015-09-05T12:45:00.2040194Z",
         "Duration":29,
         "UploadTime":"Uploaded 30 days ago",
         "Views":"1 view",
         "TitleId":1813362885,
         "TitleName":"FIFA 14",
         "TitleDetails":"https://store.xbox.com/en-US/Xbox-One/Games/FIFA-14/f04f7029-01ea-4d65-988b-56f583fb7f6c",
         "OwnerGamerTag":"Rob Gabriel",
         "GamerProfile":"https://account.xbox.com/en-US/Profile?gamerTag=Rob+Gabriel"
      },
      {  
         "Id":"07ded08a-608e-44c3-a57b-a5fc5382b3d5",
         "Scid":"c4060100-4951-4a51-a630-dce26c15b8c5",
         "Name":"",
         "ClipUri":"http://gameclipscontent-d3007.xboxlive.com/asset-d0c9555d-1500-80c8-9c57-f1e5094998c9/GameClip-Original.MP4?sv=2014-02-14\u0026sr=c\u0026sig=3HRO%2F2BspFtWrouzB6uz%2BywDLTgvdiIybx9K%2F%2FSHCqQ%3D\u0026st=2015-09-05T11%3A40%3A00Z\u0026se=2015-09-05T12%3A45%3A00Z\u0026sp=r\u0026__gda__=1441457100_c7a5903116a683ef9e7dc0ca6a29f1b0",
         "Preview":"http://gameclipscontent-t3007.xboxlive.com/000900000284f400-07ded08a-608e-44c3-a57b-a5fc5382b3d5/Thumbnail_Large.PNG",
         "Thumbnail":"http://gameclipscontent-t3007.xboxlive.com/000900000284f400-07ded08a-608e-44c3-a57b-a5fc5382b3d5/Thumbnail_Small.PNG",
         "Expiration":"2015-09-05T12:45:00.2040194Z",
         "Duration":28,
         "UploadTime":"Uploaded 6/2/2015",
         "Views":"2 views",
         "TitleId":1813362885,
         "TitleName":"FIFA 14",
         "TitleDetails":"https://store.xbox.com/en-US/Xbox-One/Games/FIFA-14/f04f7029-01ea-4d65-988b-56f583fb7f6c",
         "OwnerGamerTag":"Rob Gabriel",
         "GamerProfile":"https://account.xbox.com/en-US/Profile?gamerTag=Rob+Gabriel"
      },
      {  
         "Id":"157e06d7-75ba-4a21-969b-21b3567fe2b9",
         "Scid":"c4060100-4951-4a51-a630-dce26c15b8c5",
         "Name":"",
         "ClipUri":"http://gameclipscontent-d2002.xboxlive.com/asset-99d5165d-8608-44e9-b99c-7952cbc961a8/GameClip-Original.MP4?sv=2014-02-14\u0026sr=c\u0026sig=hf1NYJURL0GO1XDYnkS%2BIh8%2Bzw29wk2h9K8FSrBmDFw%3D\u0026st=2015-09-05T11%3A40%3A00Z\u0026se=2015-09-05T12%3A45%3A00Z\u0026sp=r\u0026__gda__=1441457100_01bc89f96059b050f1bccad0d9b028e4",
         "Preview":"http://gameclipscontent-t2002.xboxlive.com/000900000284f400-157e06d7-75ba-4a21-969b-21b3567fe2b9/Thumbnail_Large.PNG",
         "Thumbnail":"http://gameclipscontent-t2002.xboxlive.com/000900000284f400-157e06d7-75ba-4a21-969b-21b3567fe2b9/Thumbnail_Small.PNG",
         "Expiration":"2015-09-05T12:45:00.2040194Z",
         "Duration":7,
         "UploadTime":"Uploaded 12/30/2014",
         "Views":"0 views",
         "TitleId":1813362885,
         "TitleName":"FIFA 14",
         "TitleDetails":"https://store.xbox.com/en-US/Xbox-One/Games/FIFA-14/f04f7029-01ea-4d65-988b-56f583fb7f6c",
         "OwnerGamerTag":"Rob Gabriel",
         "GamerProfile":"https://account.xbox.com/en-US/Profile?gamerTag=Rob+Gabriel"
      },
      {  
         "Id":"1d061b65-fdb8-4dfa-95ee-1884fdb138fa",
         "Scid":"c4060100-4951-4a51-a630-dce26c15b8c5",
         "Name":"",
         "ClipUri":"http://gameclipscontent-d2003.xboxlive.com/asset-e3f8f3b0-1e0e-44b1-9efc-5aa65c9f505f/GameClip-Original.MP4?sv=2014-02-14\u0026sr=c\u0026sig=LGk2JWTD8AZOwigU%2FdMcfcTdqvD4lKMUtZCWuuHkn64%3D\u0026st=2015-09-05T11%3A40%3A00Z\u0026se=2015-09-05T12%3A45%3A00Z\u0026sp=r\u0026__gda__=1441457100_f1aee3efa9a4c2c4c7040a054d9ade7f",
         "Preview":"http://gameclipscontent-t2003.xboxlive.com/000900000284f400-1d061b65-fdb8-4dfa-95ee-1884fdb138fa/Thumbnail_Large.PNG",
         "Thumbnail":"http://gameclipscontent-t2003.xboxlive.com/000900000284f400-1d061b65-fdb8-4dfa-95ee-1884fdb138fa/Thumbnail_Small.PNG",
         "Expiration":"2015-09-05T12:45:00.2040194Z",
         "Duration":24,
         "UploadTime":"Uploaded 1/30/2015",
         "Views":"0 views",
         "TitleId":1813362885,
         "TitleName":"FIFA 14",
         "TitleDetails":"https://store.xbox.com/en-US/Xbox-One/Games/FIFA-14/f04f7029-01ea-4d65-988b-56f583fb7f6c",
         "OwnerGamerTag":"Rob Gabriel",
         "GamerProfile":"https://account.xbox.com/en-US/Profile?gamerTag=Rob+Gabriel"
      },
      {  
         "Id":"2efd274f-3c7b-4316-a7f4-7b0806cfa91a",
         "Scid":"c4060100-4951-4a51-a630-dce26c15b8c5",
         "Name":"",
         "ClipUri":"http://gameclipscontent-d3002.xboxlive.com/asset-d4eb61bb-68a4-47f5-a169-e2aae721681a/GameClip-Original.MP4?sv=2014-02-14\u0026sr=c\u0026sig=L%2FLrOfJ%2BMbg1tm%2FcV3dMaj9lw4reY5PSHR2IzwZcFso%3D\u0026st=2015-09-05T11%3A40%3A00Z\u0026se=2015-09-05T12%3A45%3A00Z\u0026sp=r\u0026__gda__=1441457100_ce2d79f59330f5a1bc82dbf98675c725",
         "Preview":"http://gameclipscontent-t3002.xboxlive.com/000900000284f400-2efd274f-3c7b-4316-a7f4-7b0806cfa91a/Thumbnail_Large.PNG",
         "Thumbnail":"http://gameclipscontent-t3002.xboxlive.com/000900000284f400-2efd274f-3c7b-4316-a7f4-7b0806cfa91a/Thumbnail_Small.PNG",
         "Expiration":"2015-09-05T12:45:00.2040194Z",
         "Duration":9,
         "UploadTime":"Uploaded 1/14/2015",
         "Views":"0 views",
         "TitleId":1813362885,
         "TitleName":"FIFA 14",
         "TitleDetails":"https://store.xbox.com/en-US/Xbox-One/Games/FIFA-14/f04f7029-01ea-4d65-988b-56f583fb7f6c",
         "OwnerGamerTag":"Rob Gabriel",
         "GamerProfile":"https://account.xbox.com/en-US/Profile?gamerTag=Rob+Gabriel"
      },
      {  
         "Id":"313c0ef6-75ec-4071-8e16-41e9ba2dc54f",
         "Scid":"c4060100-4951-4a51-a630-dce26c15b8c5",
         "Name":"",
         "ClipUri":"http://gameclipscontent-d2002.xboxlive.com/asset-a8a9665d-1500-80c3-2461-f1e506dcf5c7/GameClip-Original.MP4?sv=2014-02-14\u0026sr=c\u0026sig=hL6p%2BiKZGvFDaRg2%2FhYdIQ33erBDAkuXMu80ewKY3xE%3D\u0026st=2015-09-05T11%3A40%3A00Z\u0026se=2015-09-05T12%3A45%3A00Z\u0026sp=r\u0026__gda__=1441457100_8c5d16b08f36e70e84cc8b510b05770b",
         "Preview":"http://gameclipscontent-t2002.xboxlive.com/000900000284f400-313c0ef6-75ec-4071-8e16-41e9ba2dc54f/Thumbnail_Large.PNG",
         "Thumbnail":"http://gameclipscontent-t2002.xboxlive.com/000900000284f400-313c0ef6-75ec-4071-8e16-41e9ba2dc54f/Thumbnail_Small.PNG",
         "Expiration":"2015-09-05T12:45:00.2040194Z",
         "Duration":41,
         "UploadTime":"Uploaded 5/30/2015",
         "Views":"0 views",
         "TitleId":1813362885,
         "TitleName":"FIFA 14",
         "TitleDetails":"https://store.xbox.com/en-US/Xbox-One/Games/FIFA-14/f04f7029-01ea-4d65-988b-56f583fb7f6c",
         "OwnerGamerTag":"Rob Gabriel",
         "GamerProfile":"https://account.xbox.com/en-US/Profile?gamerTag=Rob+Gabriel"
      },
      {  
         "Id":"44c41c90-487b-47c8-a3c3-49a299626f07",
         "Scid":"c4060100-4951-4a51-a630-dce26c15b8c5",
         "Name":"",
         "ClipUri":"http://gameclipscontent-d3002.xboxlive.com/000900000284f400-44c41c90-487b-47c8-a3c3-49a299626f07/GameClip-Original.MP4?sv=2014-02-14\u0026sr=c\u0026sig=OUnxC39R2e%2FSya66RwkLKiUJfwAwJh3ybaSO4jL%2BDIY%3D\u0026st=2015-09-05T11%3A40%3A00Z\u0026se=2015-09-05T12%3A45%3A00Z\u0026sp=r\u0026__gda__=1441457100_ac051fd10491789aef944d8eb5a4fecb",
         "Preview":"http://gameclipscontent-t3002.xboxlive.com/000900000284f400-44c41c90-487b-47c8-a3c3-49a299626f07-public/Thumbnail_Large.PNG",
         "Thumbnail":"http://gameclipscontent-t3002.xboxlive.com/000900000284f400-44c41c90-487b-47c8-a3c3-49a299626f07-public/Thumbnail_Small.PNG",
         "Expiration":"2015-09-05T12:45:00.2040194Z",
         "Duration":9,
         "UploadTime":"Uploaded 8/5/2015",
         "Views":"1 view",
         "TitleId":1813362885,
         "TitleName":"FIFA 14",
         "TitleDetails":"https://store.xbox.com/en-US/Xbox-One/Games/FIFA-14/f04f7029-01ea-4d65-988b-56f583fb7f6c",
         "OwnerGamerTag":"Rob Gabriel",
         "GamerProfile":"https://account.xbox.com/en-US/Profile?gamerTag=Rob+Gabriel"
      }
   ]
}


```
