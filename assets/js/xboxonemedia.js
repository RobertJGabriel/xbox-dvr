var mediaSrc = [];
var limits = 0;
var mediaWidth, mediaHeight = 0;
var getType = null;

var xboxOneMedia = {
    Init: function (flag, type, gamerTag, width, height,limit) {
        mediaWidth = width;
        mediaHeight = height;
        getType = type;
        limits = typeof limit !== 'undefined' ? limit:0;
        makeXboxCall(flag, type, gamerTag,limits);
    }
};

function makeXboxCall(flag, type, gamerTag,limits) {
    $.ajax({
        url: 'https://account.xbox.com/en-us/' + getType + '/loadByUser?gamerTag=' + gamerTagValadator(gamerTag),
        type: "GET",
        dataType: "json",
        success: function (data) {
            if (getType === 'gameclips') {
                getGameclips(data, flag,limits);
            } else {
                getScreenshots(data, flag,limits);
            }
        }
    });
}

function getGameclips(data, flag,limits) {
    limits = limits === 0 ? data.GameClips.length:limits;
    var i;
    for (i = 0; i < limits; i++) {
        var temp = data.GameClips[i]['ClipUri'];
        mediaSrc.push(temp);
    }
    renderMedia(flag,limits);
}

function getScreenshots(data, flag,limits) {
    limits = limits === 0 ? data.data.Screenshots.length:limits;
    var i;
    for (i = 0; i < limits; i++) {
        var temp = data.data.Screenshots[i]['Uri'];
        mediaSrc.push(temp);
    }
    renderMedia(flag,limits);
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

function renderMedia(flag,limits) {
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