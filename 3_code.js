let post = {
    title: '',
    text: ''
};

const titleinputNode = document.querySelector('.js-user_title');
const textinputNode = document.querySelector('.js-user_text');
const postNode = document.querySelector('.js-post_btn');
const postsNode = document.querySelector('.js-posts');

postNode.addEventListener('click', function() {

    const postfromuser = getPostFromUser();
    
    setPost(postfromuser);
    
    renderpost();

});

function getPostFromUser() {
    const post_title = titleinputNode.value;
    const post_text = textinputNode.value;

    return post = {
        title: post_title,
        text: post_text,
    };
};
function setPost(Newpost) {
    post = Newpost;
};
function getpost() {
    return post;
};
function renderpost() {
    const post = getpost();

    const postHTML = `
    <div class='post'>
        <p class='wall_post_title'>
        ${post.title}
        </p>
        <p class='wall_post_text'>
        ${post.text}
        </p>
    </div>
    `;
    postsNode.innerHTML = postHTML;
};