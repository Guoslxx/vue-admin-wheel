export default () => {
    var normalTitle = document.title;
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            setTimeout(() => {
                if(!document.hidden) return;
                document.title = 'wow,页面崩溃了!!!';
            }, 3000);
        } else {
            document.title = 'yo,又好了-,-';
            setTimeout(() => {
                if(document.hidden) return;
                document.title = normalTitle;
            }, 1000);
        }
    })
}