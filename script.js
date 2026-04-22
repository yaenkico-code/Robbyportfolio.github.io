// AOS INIT
AOS.init({
    duration: 1000,
    once: true
});

// LOAD VIDEO ON CLICK
/* document.querySelectorAll('.video-thumbnail').forEach(el => {
    el.addEventListener('click', () => {
        const videoId = el.getAttribute('data-video');

        el.innerHTML = `
            <iframe 
            src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
            </iframe>
        `;
    });
}); */

document.querySelectorAll('.video-thumbnail').forEach(el => {
    el.addEventListener('click', () => {

        const videoId = el.getAttribute('data-video');
        const videoName = el.getAttribute('data-name');

        /* TRACK CLICK */
        gtag('event', 'video_click', {
            event_category: 'engagement',
            //event_label: videoId
            event_label: videoName
        });

        /* LOAD VIDEO */
        el.innerHTML = `
            <iframe 
            src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0"
            allowfullscreen>
            </iframe>
        `;
    });
});

AOS.init({
    duration: 900,
    easing: 'ease-out-cubic',
    once: true
});

function trackClick(name) {
    gtag('event', 'click', {
        event_category: 'engagement',
        event_label: name
    });
}