import $ from 'jquery';

const baseUrl = "https://baas.kinvey.com/";
const appKey = "kid_SyFPp0lml";
const appSecret = "7299d8393b4f4502bb4c984954831923";

function makeAuth(auth) {
    let header = { "Authorization": '' };
    switch (auth) {
        case "basic":
            header["Authorization"] = "Basic " + btoa(appKey + ":" + appSecret);
            break;
        case "kinvey":
            header["Authorization"] = "Kinvey " + sessionStorage.getItem('authToken');
            break;
    }
    return header;
}

function get(module, url, auth) {
    let hostUrl = baseUrl + module + "/" + appKey + "/" + url;
    let header = makeAuth(auth);

    return $.ajax({
        method: "GET",
        url: hostUrl,
        headers: header
    });
}

function post(module, url, auth, data) {
    let hostUrl = baseUrl + module + "/" + appKey + "/" + url;
    let header = makeAuth(auth);

    let request = {
        method: "POST",
        url: hostUrl,
        headers: header
    }

    if(data) {
        request.data = data;
    }

    return $.ajax(request);
}

function update(module, url, auth, data) {
    let hostUrl = baseUrl + module + "/" + appKey + "/" + url;
    let header = makeAuth(auth);

    let request = {
        method: "PUT",
        url: hostUrl,
        headers: header,
        data: data
    };

    return $.ajax(request);
}



export {get, post, update};