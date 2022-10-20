function backToTop() {
    let button = $('.btn-shown-a');

 
    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({ scrollTop: 0 }, 1000);
    })
}
backToTop();