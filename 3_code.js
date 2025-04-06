let post_title = '';

const titleinputNode = document.querySelector('.js-user_title');
const postNode = document.querySelector('.js-post_btn');
const postsNode = document.querySelector('.js-posts');

postNode.addEventListener('click', function() {
    post_title = titleinputNode.value;
    postsNode.innerText = post_title;
});