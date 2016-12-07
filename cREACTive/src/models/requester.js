import $ from 'jquery';

const baseUrl = "https://baas.kinvey.com/";
const appKey = "kid_B1ZJNFXQg";
const appSecret = "f64d6f61ddd14408a8ac9e095271b0e9";

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

function deleteProduct(module, url, auth) {
    let hostUrl = baseUrl + module + "/" + appKey + "/" + url;
    let header = makeAuth(auth);

    let request = {
        method: "DELETE",
        url: hostUrl,
        headers: header
    };

    return $.ajax(request);
}


// function deleteBook(bookId) {
//     return $.ajax({
//         method: "DELETE",
//         url: baseUrl + "appdata/" + appKey + "/books/" + bookId,
//         headers: getKinveyUserAuthHeaders()
//     });
// }

export {get, post, update, deleteProduct};