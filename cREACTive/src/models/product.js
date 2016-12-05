import  * as requester from './requester'

function create(name, link, description, callback) {
    let productData = {
        name:name,
        link:link,
        description:description
    };
    requester.post('appdata', 'products', 'kinvey', productData)
        .then(()=> callback(true))
        .catch(()=> callback(false))
}
function loadProducts(callback) {
    requester.get('appdata', 'products', 'kinvey')
        .then(callback);
}
function loadProductDetails(productId, callback) {
    requester.get('appdata', 'products/' + productId, 'kinvey')
        .then(callback);
}
function editProduct(productId, name, link, description, callback) {
    let productData = {
        name:name,
        link:link,
        description:description
    };
    requester.update('appdata', 'products/:'+productId, 'kinvey', productData)
        .then(()=> callback(true))
        .catch(()=> callback(false))
}
function deleteProduct(productId, callback) {
    requester.remove('appdata', 'products/'+productId, 'kinvey')
        .then(()=> callback(true))
        .catch(()=> callback(false))
}
export {create, loadProducts, loadProductDetails, editProduct, deleteProduct}