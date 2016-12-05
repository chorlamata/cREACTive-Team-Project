
import * as requester from './requester'

function leaveComment(content, postId, callback) {
    let productData = {
        content:content,
        postId: postId,
    };
    requester.post('appdata', 'comments', 'kinvey', productData)
        .then(()=> callback(true))
        .catch(()=> callback(false))
}
function loadComments(productId, callback) {
    requester.get('appdata', `comments/?query={"postId":"`+ productId+`"}`, 'kinvey')
        .then(callback);
}
export {leaveComment, loadComments}