function toggleNavbar() {
    document.getElementById('navbar').classList.toggle('show');
}

const videoList = [
    {
        video: 'xFiles/vids/create_tiktok.mp4',
        title: 'How to create account? (Aanhon pag himo hit account?)'
    },
    {
        video: 'xFiles/vids/scrolling_tiktok.mp4',
        title: 'How to Scroll on Tiktok? (Aanhon it pag kulaw ha Tiktok?)'
    },
    {
        video: 'xFiles/vids/post_Tiktok.mp4',
        title: 'How to post on Tiktok? (Aanhon it pag post ha Tiktok?)'
    },
    {
        video: 'xFiles/vids/shopping_Tiktok.mp4',
        title: 'How to shop on Tiktok? (Aanhon it pag palit ha Tiktok?)'
    },
]

const categories = [...new Set(videoList.map((item) => item))];
document.getElementById('videoList').innerHTML = categories.map((item) => {
    var { video, title } = item;
    return (
        `<div class="list active">
            <video src="${video}" class="list-video"></video>
            <h3 class="list-title">${title}</h3>
        </div>`
    );
}).join('');

let videoItems = document.querySelectorAll('.video-list-container .list');
videoItems.forEach(remove => { remove.classList.remove('active') });
videoItems.forEach(vid => {
    vid.onclick = () => {
        videoItems.forEach(remove => { remove.classList.remove('active') });
        vid.classList.add('active');
        let src = vid.querySelector('.list-video').src;
        let title = vid.querySelector('.list-title').innerHTML;
        document.querySelector('.video-wrapper .main-video').src = src;
        document.querySelector('.video-wrapper .main-video').play();
        document.querySelector('.video-wrapper .main-vid-title').innerHTML = title;
    };
});
