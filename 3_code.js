let posts = [];

const titleinputNode = document.querySelector('.js-user_title');
const textinputNode = document.querySelector('.js-user_text');
const postNode = document.querySelector('.js-post_btn');
const postsNode = document.querySelector('.js-posts');

postNode.addEventListener('click', function() {

    const postfromuser = getPostFromUser();
    
    addPost(postfromuser);
    
    renderposts();

});

function getPostFromUser() {
    const post_title = titleinputNode.value;
    const post_text = textinputNode.value;

    return post = {
        title: post_title,
        text: post_text,
    };
};
function addPost(post) {
    posts.push(post);
};
function getposts() {
    return posts;
};
function renderposts() {
    const posts = getposts();

    let postsHTML = '';

    posts.forEach(post => {
        postsHTML += `
            <div class='post'>
                <p class='wall_post_title'>
                ${post.title}
                </p>
                <p class='wall_post_text'>
                ${post.text}
                </p>
            </div>
            `;
    });
    postsNode.innerHTML = postsHTML;
};