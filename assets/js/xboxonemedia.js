var mediaSrc = [];
var screenPreview = [];
var limits = 0;
var mediaWidth, mediaHeight = 0;
var getType = null;
var token = '';
var myBtn = document.getElementById('buttonSearch');

var xboxOneMedia = {
    Init: function (flag, type, gamerTag, width, height, limit) {
        console.log(getType + type)
        getType === type ? console.log('test') : mediaSrc = [], screenPreview = [];
        document.getElementById("xboxOneMedia").innerHTML = ""; //Clear div
        mediaWidth = width;
        mediaHeight = height;
        getType = type;
        limits = typeof limit !== 'undefined' ? limit : 0;
        makeXboxCall(flag, type, gamerTag, limits);
    }
};

function makeXboxCall(flag, type, gamerTag, limits) {

    myBtn.innerHTML = "loading ......"; //Clear div
    token === 'undefined' ? token = '' : token = '';
    $.ajax({
        url: 'https://account.xbox.com/en-us/' + getType + '/loadByUser?gamerTag=' + gamerTagValadator(gamerTag) + '&ContinuationToken=' + token,
        type: "GET",
        dataType: "json",
        success: function (data) {
            data.ContinuationToken !== 'undefined' ? token = data.ContinuationToken : token = '';
            getType === 'gameclips' ? getGameclips(data, flag, limits) : getScreenshots(data, flag, limits);
            if (token === undefined || token === null) {
                myBtn.innerHTML = "All Media Loaded"; //Clear div
                myBtn.disabled = true;
            }

        }
    });
}

function getGameclips(data, flag, limits) {
    limits = limits === 0 ? data.GameClips.length : limits;
    var i;
    for (i = 0; i < limits; i++) {
        var temp = data.GameClips[i]['ClipUri'];
        var preview = data.GameClips[i]['Thumbnail'];
        mediaSrc.push(temp);
        screenPreview.push(preview);
    }
    renderMedia(flag, limits);
}

function getScreenshots(data, flag, limits) {
    limits = limits === 0 ? data.data.Screenshots.length : limits;
    var i;
    for (i = 0; i < limits; i++) {
        var temp = data.data.Screenshots[i]['Uri'];
        var preview = data.data.Screenshots[i]['Thumbnail'];
        mediaSrc.push(temp);
        screenPreview.push(preview);
    }

    renderMedia(flag, limits);
}

function gamerTagValadator(gamerTag) {
    var valadated_Gamer_Tag = encodeURIComponent(gamerTag.trim());
    return valadated_Gamer_Tag;
}

function createImage(src, previewImage) {
    var x = document.createElement("img");
    var xboxDiv = document.getElementById("xboxOneMedia");
    x.setAttribute("src", previewImage);
    x.setAttribute("width", mediaWidth);
    x.setAttribute("height", mediaHeight);
    x.setAttribute("class", "shadow-z-1 img-responsive img-thumbnail");
    var link = document.createElement("A");
    link.setAttribute("href", src);
    link.appendChild(x);
    xboxDiv.appendChild(link);
}

function createVideo(src, poster) {
    var x = document.createElement("VIDEO");
    var videoDiv = document.getElementById("xboxOneMedia");
    if (x.canPlayType("video/mp4")) {
        x.setAttribute("src", src);
    } else {
        x.setAttribute("src", src);
    }
    x.setAttribute("preload", "none");
    x.setAttribute("width", mediaWidth);
    x.setAttribute("poster", poster);
    x.setAttribute("height", mediaHeight);
    x.setAttribute("class", "shadow-z-1 img-responsive img-thumbnail");
    x.setAttribute("controls", "controls");
    videoDiv.appendChild(x);
}



function renderMedia(flag, limits) {
    var i;
    var randomNumber = Math.floor(Math.random() * mediaSrc.length) + 0;
    if (flag === 1) {
        for (i = 0; i < mediaSrc.length; i++) {
            if (getType === 'gameclips') {
                createVideo(mediaSrc[i], screenPreview[i]);
            } else {
                createImage(mediaSrc[i], screenPreview[i]);
            }
        }
    } else {
        if (getType === 'gameclips') {
            createVideo(mediaSrc[randomNumber], screenPreview[randomNumber]);
        } else {
            createImage(mediaSrc[randomNumber], screenPreview[randomNumber]);
        }
    }
    myBtn.innerHTML = "Load More"; //Clear div
}
