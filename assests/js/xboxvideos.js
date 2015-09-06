var videosSrc = [];
var numberOfVideos = 0;
var videoWidth = 0;
var videoHeight = 0;

var xboxVideos = {
    Init: function (flag, gamerTag, width, height) {
        videoWidth = width;
        videoHeight = height;

        $.ajax({
            url: 'https://account.xbox.com/en-us/gameclips/loadByUser?gamerTag=' + gamerTagValadator(gamerTag),
            type: "GET",
            dataType: "json",
            success: function (data) {
                numberOfVideos = data.GameClips.length;
                var i;
                for (i = 0; i < numberOfVideos; i++) {
                    var temp = data.GameClips[i]['ClipUri'];
                    videosSrc.push(temp);
                }
                renderVideos(flag);
            }
        });
    }
};

function gamerTagValadator(gamerTag) {

    var valadated_Gamer_Tag = encodeURIComponent(gamerTag.trim());
    return valadated_Gamer_Tag;
}

function createVideo(src) {
    var x = document.createElement("VIDEO");
    var videoDiv = document.getElementById("videos");
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

function renderVideos(flag) {
    var i;
    var randomNumber = Math.floor(Math.random() * videosSrc.length) + 0;
    if (flag === 1) {
        for (i = 0; i < videosSrc.length; i++) {
            createVideo(videosSrc[i]);
        }
    } else if (flag === 0) {
        createVideo(videosSrc[randomNumber]);
    }
}
