import * as requester from './requester';

function create(name, description, image, callback) {
    let productData = {
        name: name,
        description: description,
        image: image
    };

    requester.post('appdata', 'products', 'kinvey', productData)
        .then(() => callback(true))
        .catch(() => callback(false));
}

function postComment(author, comment, productId, callback) {
    let commentData = {
        author: author,
        comment: comment,
        productId: productId
    };

    requester.post('appdata', 'comments', 'kinvey', commentData)
        .then(() => callback(true))
        .catch(() => callback(false));
}

function loadProducts(callback) {
    requester.get('appdata', 'products', 'kinvey')
        .then(callback);
}

function loadDetails(productId, callback) {
    requester.get('appdata', 'products/' + productId, 'kinvey')
        .then(callback);
}

function loadComments(productId, callback) {
    let query = 'query={"comments.productId":"' + productId + '"}';
    requester.get('appdata', `comments/?query={"productId":"`+ productId+`"}`, 'kinvey')
        .then(callback);
}

function edit(productId, name, description, image, callback) {
    let productData = {
        name: name,
        description: description,
        image: image
    };

    requester.update('appdata', 'products/' + productId, 'kinvey', productData)
        .then(() => callback(true))
        .catch(() => callback(false));
}

function deleteProduct(productId, callback) {

    requester.deleteProduct('appdata', 'products/' + productId, 'kinvey')
        .then(() => callback(true))
        .catch(() => callback(false));
}

export {create, postComment, loadProducts, loadDetails, loadComments, edit, deleteProduct};