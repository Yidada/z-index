(function () {
    var getCookie = function (name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return decodeURIComponent(arr[2]);
        else
            return null;
    };


    // loading control
    var loaded = getCookie("loaded");
    if (!loaded) {
        var loading = setTimeout(function () {
            $('.loading').css("height", "0");
            $('.loading h1').hide();
            document.cookie = "loaded=" + true;

        }, 5000)
    } else {
        $('.loading').css("height", "0");
        $('.loading h1').hide()
    }


    //#content-outer control
    var contentResize = function () {
        var $contentOuter = $('#content-outer')[0];
        var bodyHeight = document.body.clientHeight;
        $contentOuter.style.height = (bodyHeight - 60) + "px";
    };
    contentResize();
    $(window).resize(contentResize);


    //recent-post-item control
    var $postArray = $('.recent-post-item');
    $($postArray[0]).addClass('front-post');
    var curPost = 0;
    var showPost = function (cur) {
        $($postArray).removeClass('front-post');
        $($postArray[cur]).addClass('front-post');
        $('#cur-post').html(cur + 1 + '/' + $postArray.length)
    };

    var $prevButton = $('.pre-post')[0];
    var $nextButton = $('.next-post')[0];
    if ($prevButton) {
        $prevButton.addEventListener('click', function (e) {
            if (curPost > 0) {
                --curPost;
                showPost(curPost);
            }
        });
    }

    if ($nextButton) {
        $nextButton.addEventListener('click', function (e) {
            if (curPost < $postArray.length - 1) {
                ++curPost;
                showPost(curPost);
            }
        });
    }
    //scroll event
    document.body.onmousewheel = function (event) {
        event = event || window.event;
        console.dir(event);
    };
}());
