var mediaSrc = [];
var numberOfVideos, numberOfScreenshots = 0;
var mediaWidth, mediaHeight = 0;
var getType = null;

var xboxOneMedia = {
    Init: function (flag, type, gamerTag, width, height,limit) {
        mediaWidth = width;
        mediaHeight = height;
        getType = type;
        numberOfVideos = typeof limit !== 'undefined' ? limit:null;
        numberOfScreenshots = typeof limit !== 'undefined' ? limit:null;

        makeXboxCall(flag, type, gamerTag);
    }
};

function makeXboxCall(flag, type, gamerTag) {
    $.ajax({
        url: 'https://account.xbox.com/en-us/' + getType + '/loadByUser?gamerTag=' + gamerTagValadator(gamerTag),
        type: "GET",
        dataType: "json",
        success: function (data) {
            if (getType === 'gameclips') {
                getGameclips(data, flag);
            } else {
                getScreenshots(data, flag);
            }
        }
    });
}

function getGameclips(data, flag) {
    numberOfVideos = data.GameClips.length;
    var i;
    for (i = 0; i < numberOfVideos; i++) {
        var temp = data.GameClips[i]['ClipUri'];
        mediaSrc.push(temp);
    }
    renderMedia(flag);
}

function getScreenshots(data, flag) {
    console.log(numberOfScreenshots);
    var limit =  numberOfScreenshots !== 'null' ? data.data.Screenshots.length:numberOfScreenshots;
    console.log(limit);
    var i;
    for (i = 0; i < limit; i++) {
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
    x.setAttribute("width", mediaWidth);
    x.setAttribute("height", mediaHeight);
    xboxDiv.appendChild(x);
}

function createVideo(src) {
    var x = document.createElement("VIDEO");
    var videoDiv = document.getElementById("xboxOneMedia");
    if (x.canPlayType("video/mp4")) {
        x.setAttribute("src", src);
    } else {
        x.setAttribute("src", src);
    }
    x.setAttribute("width", mediaWidth);
    x.setAttribute("height", mediaHeight);
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
