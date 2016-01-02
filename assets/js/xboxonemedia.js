var title = [];
var uploadTime = [];
var mediaSrc = [];
var screenPreview = [];
var limits = 0;
var mediaWidth, mediaHeight = 0;
var getType = null;
var token = '';
var myBtn = document.getElementById('buttonSearch');
var xboxDiv = document.getElementById('xboxOneMedia');



var xboxOneMedia = {
    Init: function (flag, type, gamerTag, width, height, limit) {
        getType !== type ? screenPreview = [] : 0;
        getType !== type ? mediaSrc = [] : 0;
        getType !== type ? uploadTime = [] : 0;
        getType !== type ? title = [] : 0;
        xboxDiv.innerHTML = ""; //Clear div
        mediaWidth = width;
        mediaHeight = height;
        getType = type;
        limits = typeof limit !== 'undefined' ? limit : 0;
        typeof token === 'undefined' ? token = '' : 0;
        makeXboxCall(flag, type, gamerTag, limits);
    }
};

function makeXboxCall(flag, type, gamerTag, limits) {
    myBtn.innerHTML = "loading ......"; //Clear div
    $.ajax({
        url: 'https://account.xbox.com/en-us/' + getType + '/loadByUser?gamerTag=' + gamerTagValadator(gamerTag) + '&ContinuationToken=' + token,
        type: "GET",
        dataType: "json",
        success: function (data) {
            data.ContinuationToken !== 'undefined' ? token = data.ContinuationToken : token = '';
            getType === 'gameclips' ? getGameclips(data, flag, limits) : getScreenshots(data, flag, limits);
            if (token === undefined || token === null) {
                myBtn.innerHTML = "All Media Loaded"; //Clear div
            }
        }
    });
}

function getGameclips(data, flag, limits) {
    limits = limits === 0 ? data.GameClips.length : limits;
    var i;
    for (i = 0; i < limits; i++) {
        title.push(data.GameClips[i]['TitleName']);
        uploadTime.push(data.GameClips[i]['UploadTime']);
        mediaSrc.push(data.GameClips[i]['ClipUri']);
        screenPreview.push(data.GameClips[i]['Thumbnail']);
    }
    renderMedia(flag, limits);
}

function getScreenshots(data, flag, limits) {
    limits = limits === 0 ? data.data.Screenshots.length : limits;
    var i;
    for (i = 0; i < limits; i++) {
        title.push(data.data.Screenshots[i]['TitleName']);
        uploadTime.push(data.data.Screenshots[i]['CaptureTime']);
        mediaSrc.push(data.data.Screenshots[i]['Uri']);
        screenPreview.push(data.data.Screenshots[i]['Thumbnail']);
    }
    renderMedia(flag, limits);
}

function gamerTagValadator(gamerTag) {
    var valadated_Gamer_Tag = encodeURIComponent(gamerTag.trim());
    return valadated_Gamer_Tag;
}

function createImage(src, previewImage, title, uploadTime) {
    var x = document.createElement("img");
        x.setAttribute("src", previewImage);
        x.setAttribute("width", mediaWidth);
        x.setAttribute("height", mediaHeight);
        x.setAttribute("class", "img-responsive ");
    var link = document.createElement("A");
        link.setAttribute("href", src);
        link.setAttribute("class", "thumbnail");
        link.appendChild(x);
    xboxDiv.appendChild(createPanel(link, title, uploadTime));
}

function createVideo(src, poster, title, uploadTime) {
    var x = document.createElement("VIDEO");
        x.canPlayType("video/mp4") === true ? x.setAttribute("src", src) : x.setAttribute("src", src);
        x.setAttribute("preload", "none");
        x.setAttribute("width", mediaWidth);
        x.setAttribute("poster", poster);
        x.setAttribute("height", mediaHeight);
        x.setAttribute("class", "img-responsive ");
        x.setAttribute("controls", "controls");
    xboxDiv.appendChild(createPanel(x, title, uploadTime));
}


function createPanel(media, title, uploadTime) {
    var panel = document.createElement("div");
        panel.setAttribute("class", "panel panel-primary");

    var panelHeading = document.createElement("div");
        panelHeading.setAttribute("class", "panel-heading");

    var h3 = document.createElement("h3");
        h3.setAttribute("class", "panel-title");
    
    var text = document.createTextNode(title + "  " + uploadTime);
        h3.appendChild(text);

    panelHeading.appendChild(h3);

    var panelBody = document.createElement("div");
        panelBody.setAttribute("class", "panel-body");
        panelBody.appendChild(media);
   
    panel.appendChild(panelHeading);
    panel.appendChild(panelBody);

    return panel;
}


function renderMedia(flag, limits) {
    var i;
    var randomNumber = Math.floor(Math.random() * mediaSrc.length) + 0;
    if (flag === 1) {
        for (i = 0; i < mediaSrc.length; i++) {
            getType === 'gameclips' ? createVideo(mediaSrc[i], screenPreview[i], title[i], uploadTime[i]) : createImage(mediaSrc[i], screenPreview[i], title[i], uploadTime[i]);
            
        }
    } else {
    getType === 'gameclips' ? createVideo(mediaSrc[randomNumber], screenPreview[randomNumber], title[randomNumber], uploadTime[randomNumber]) :
            createImage(mediaSrc[randomNumber], screenPreview[randomNumber], title[randomNumber], uploadTime[randomNumber]);   
    }
    myBtn.innerHTML = "Load More"; //Clear div
}
