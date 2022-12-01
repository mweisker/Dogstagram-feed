
const userName = localStorage['name'];

$(document).ready(function(){
    document.getElementById('name').innerHTML = localStorage['name'];
    const profilePhoto = document.getElementById('profile-photo');
    profilePhoto.src = localStorage['src']

    const photoArray = JSON.parse(localStorage.getItem('data'))

    
        for (let i = photoArray.length - 1; i >= 0; i--) {

            // Create feed div
            const feedDiv = document.getElementById('feed-div');

            // Create poster div
            const posterDiv = document.createElement('div');
            posterDiv.setAttribute('class', 'poster-div');
            feedDiv.appendChild(posterDiv);

            // Create poster picture
            const posterImg = document.createElement('img');
            posterImg.src = localStorage['src'];
            posterImg.setAttribute('class', 'poster-img');
            posterDiv.appendChild(posterImg);

            // Create poster name
            const posterName = document.createElement('span');
            posterName.setAttribute('class', 'poster-name')
            posterName.appendChild(document.createTextNode(localStorage['name']))
            posterDiv.appendChild(posterName);

            // Create post
            const poster = document.createElement('span');
            poster.setAttribute('class', 'poster')
            poster.setAttribute('id', 'poster' + i)
            posterDiv.appendChild(poster);
            
            // Create line of images
            const imgDiv = document.createElement('div');
            imgDiv.classList.add('img-div');

            const img = document.createElement('img');
            img.src = photoArray[i];
            img.alt = 'dog';
            img.classList.add('feed-img');
            img.setAttribute('id', 'feed-img' + i)

            feedDiv.appendChild(imgDiv)
            imgDiv.appendChild(img);

            // Create info div
            const infoDiv = document.createElement('div');
            infoDiv.classList.add('info-div');

            // Create like bar 
            const likeDiv = document.createElement('div');
            likeDiv.classList.add('like-div');

            const like = document.createElement('i');
            like.classList.add('fa-solid', 'fa-heart')


            const likes = document.createElement('p');
            likes.classList.add('likes');
            likes.setAttribute('id', 'likes' + i);

            // Like button 
            like.onclick = function () {addLike(i)}; 

            $('#feed-img' + i).dblclick(function() {
                addLike(i);
            });

            likeDiv.appendChild(like);
            likeDiv.appendChild(likes);
            infoDiv.appendChild(likeDiv);

            // Create comment bar 
            const comments = 0;

            const commentCache = document.createElement('div');
            commentCache.setAttribute('class', 'comment-cache');
            commentCache.setAttribute('id', 'comment-cache');

            infoDiv.appendChild(commentCache)

            // Create form 
            const form = document.createElement('form');
            form.classList.add('comment-form');

            infoDiv.appendChild(form);

            const commentInput = document.createElement('input');
            commentInput.classList.add('comment-input');
            commentInput.setAttribute('id', 'input' + i)
            commentInput.placeholder = 'Add a comment...';

            form.appendChild(commentInput);

            const post = document.createElement('button');
            post.classList.add('post');
            post.type = 'button';
            post.appendChild(document.createTextNode('Post'))

            // Create input button 
            post.onclick = function() {addComment(i, commentCache)}

            form.appendChild(post);

            feedDiv.appendChild(infoDiv);

        }

    })

function addLike(i) {
    if (document.getElementById('likes' + i).innerHTML.length === 0) {
        document.getElementById('likes' + i).innerHTML = userName + ' liked this post';
    } else {
        document.getElementById('likes' + i).innerHTML = '';
    }
    
};

function addComment(postNumber, commentCache) {

    // Create comment box 
    const commentBox = document.createElement('div');
    commentBox.setAttribute('class', 'comment-box');
    commentBox.setAttribute('id', 'comment-box' + postNumber);
    // Create comment image 
    let commentImg = document.createElement('img');
    commentImg.setAttribute('class', 'comment-img');
    commentImg.src = localStorage['src'];
    commentBox.appendChild(commentImg)
    // Create comment name 
    let commentName = document.createElement('span');
    commentName.setAttribute('class', 'comment-name');
    commentName.setAttribute('id', 'comment-name' + postNumber);
    commentName.appendChild(document.createTextNode(localStorage['name']));
    commentBox.appendChild(commentName);
    // Add comment value 
    commentBox.appendChild(document.createTextNode(' ' + document.getElementById('input' + postNumber).value))

    document.getElementById('input' + postNumber).value = '';

    commentCache.appendChild(commentBox);
}

$(document).ready(function(){
    const number = localStorage['number'];
    if (number == 1) {
        const firstPost = document.getElementById('poster0')
        firstPost.appendChild(document.createTextNode('Happy halloween 👻🎃🍬'));

        const secondPost = document.getElementById('poster1');
        secondPost.appendChild(document.createTextNode('This was a fun day and I really hope I get to sniff more butts in the future'))

        const thirdPost = document.getElementById('poster2');
        thirdPost.appendChild(document.createTextNode('Had a long day today'))

        const fourthPost = document.getElementById('poster3');
        fourthPost.appendChild(document.createTextNode('Sometimes I make weird faces so owner feels less self-conscious about his face'))

        const fifthPost = document.getElementById('poster4');
        fifthPost.appendChild(document.createTextNode('Met a very suspicious stranger today, owner simply laughed at my suspicions'))

        const sixthPost = document.getElementById('poster5');
        sixthPost.appendChild(document.createTextNode('Not really sure what was happening this day, but at least I look cute'))
    }
    if (number == 2) {
        const firstPost = document.getElementById('poster0');
        firstPost.appendChild(document.createTextNode('Sometimes all you need in life is sun and grass \n#blessed'))

        const secondPost = document.getElementById('poster1');
        secondPost.appendChild(document.createTextNode('I could chase this thing all day!'))

        const thirdPost = document.getElementById('poster2');
        thirdPost.appendChild(document.createTextNode('I LOVE SHTICCCCKS!!!!!'))

        const fourthPost = document.getElementById('poster3');
        fourthPost.appendChild(document.createTextNode('PHTICCCC!!!'))

        const fifthPost = document.getElementById('poster4');
        fifthPost.appendChild(document.createTextNode('If a tree falls in a forest, and no one is around to see....\ndoes that mean I can pee on it?'))

        const sixthPost = document.getElementById('poster5');
        sixthPost.appendChild(document.createTextNode('Typical day when the young owner is here'))
    }

    if (number == 3) {
        const firstPost = document.getElementById('poster0');
        firstPost.appendChild(document.createTextNode('Thought I looked cute, might delete later #influencer #SunsOutTonguesOut'))

        const secondPost = document.getElementById('poster1');
        secondPost.appendChild(document.createTextNode('I\'m questioning these results...'))

        const thirdPost = document.getElementById('poster2');
        thirdPost.appendChild(document.createTextNode('Dreaming of Disney 🐭🏰'))

        const fourthPost = document.getElementById('poster3');
        fourthPost.appendChild(document.createTextNode('Late night chat with dad #2, wish he was here'))

        const fifthPost = document.getElementById('poster4');
        fifthPost.appendChild(document.createTextNode('Dads keep trying to change the house, I will continue to pee in protest'))
    }
})

        // const Post = document.getElementById('post');
        // Post.appendChild(document.createTextNode(''))


