let posts = [];

const titleinputNode = document.querySelector('.js-user_title');
const textinputNode = document.querySelector('.js-user_text');
const postNode = document.querySelector('.js-post_btn');
const postsNode = document.querySelector('.js-posts');
const validation_msg = document.getElementById('validation_msg');

postNode.addEventListener('click', function() {

    const postfromuser = getPostFromUser();
    
    addPost(postfromuser);
    
    renderposts();

    document.querySelector('.js-user_title').value = '';
    document.querySelector('.js-user_text').value = '';
});

titleinputNode.addEventListener('input', function() {
    validation();
});
textinputNode.addEventListener('input', function() {
    validation();
});

function validation() {
    const titleLen = titleinputNode.value.length;
    const textLen = textinputNode.value.length;
    if (titleLen > 10) {
        validation_msg.innerText = `Длина заголока не должна превышать 10 символов`;
        validation_msg.classList.remove("validation_msg_hidden");
        postNode.setAttribute('disabled', '');
        return;
    };
    if (textLen > 20) {
        validation_msg.innerText = `Длина текста не должна превышать 20 символов`;
        validation_msg.classList.remove("validation_msg_hidden");
        postNode.setAttribute('disabled', '');
        return;
    };
    validation_msg.classList.add("validation_msg_hidden");
    postNode.removeAttribute('disabled', '');
};

function getPostFromUser() {
    const title = titleinputNode.value;
    const text = textinputNode.value;

    return post = {
        title: title,
        text: text,
    };
};
function addPost({title, text}) {
    const currentDate = new Date();
    const dt = `${currentDate.getDate()}.${currentDate.getMonth()}.${currentDate.getFullYear()}  ${currentDate.getHours()}:${currentDate.getMinutes()}`;
    posts.push({
        dt,
        title,
        text,
});
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
                <p class='wall_post_date'>
                ${post.dt}
                </p>
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