var mediaSrc = [];
var numberOfVideos, numberOfScreenshots = 0;
var videoWidth = 0;
var videoHeight = 0;
var getType = null;
var xboxOneMedia = {
    Init: function (flag, media, gamerTag, width, height) {
        videoWidth = width;
        videoHeight = height;
        getType = media;
        $.ajax({
            url: 'https://account.xbox.com/en-us/' + media + '/loadByUser?gamerTag=' + gamerTagValadator(gamerTag),
            type: "GET",
            dataType: "json",
            success: function (data) {
                if (media === 'gameclips') {
                    getGameclips(data, flag);
                } else {
                    getScreenshots(data, flag);
                }
            }
        });
    }
};


function getGameclips(data, flag) {
    numberOfVideos = data.GameClips.length;
    console.log(data);
    console.log(data.GameClips.length);
    var i;
    for (i = 0; i < numberOfVideos; i++) {
        var temp = data.GameClips[i]['ClipUri'];
        mediaSrc.push(temp);
    }
    renderMedia(flag);
}

function getScreenshots(data, flag) {

    numberOfScreenshots = data.data.Screenshots.length;
    var i;
    for (i = 0; i < numberOfScreenshots; i++) {
        var temp = data.data.Screenshots[i]['Uri'];
        mediaSrc.push(temp);
    }
    renderMedia(flag);
}


function gamerTagValadator(gamerTag) {

    var valadated_Gamer_Tag = encodeURIComponent(gamerTag.trim());
    return valadated_Gamer_Tag;
}

function createImage(src) {
    var x = document.createElement("img");
    var xboxDiv = document.getElementById("xboxOneMedia");
    x.setAttribute("src", src);
    x.setAttribute("width", videoWidth);
    x.setAttribute("height", videoHeight);
    xboxDiv.appendChild(x);
}

function createVideo(src) {
    console.log(src);
    var x = document.createElement("VIDEO");
    var videoDiv = document.getElementById("xboxOneMedia");
    if (x.canPlayType("video/mp4")) {
        x.setAttribute("src", src);
    } else {
        x.setAttribute("src", src);
    }
    x.setAttribute("width", videoWidth);
    x.setAttribute("height", videoHeight);
    x.setAttribute("controls", "controls");
    videoDiv.appendChild(x);
}

function renderMedia(flag) {
    var i;
    var randomNumber = Math.floor(Math.random() * mediaSrc.length) + 0;
    if (flag === 1) {
        for (i = 0; i < mediaSrc.length; i++) {
            if (getType === 'gameclips') {
                createVideo(mediaSrc[i]);
            } else {
                createImage(mediaSrc[i]);
            }
        }
    } else {
        if (getType === 'gameclips') {
            createVideo(mediaSrc[randomNumber]);
        } else {
            createImage(mediaSrc[randomNumber]);

        }
    }
}
