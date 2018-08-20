$(document).ready(function() {

    var elements = [$("html"), $(".smoothscroll")];

    elements.map(function (target) {

        target.on('mousewheel', function (event, delta) {
            if ( !target.is(':input,iframe') ) {
                var that = this,
                    duration = 1000,
                    easing = 'easeOutCirc',
                    step = 80,                    
                    scrollHeight = target.prop('scrollHeight'),
                    scrollTop = that.last !== undefined ? that.last : target.scrollTop(),
                    viewportHeight = target.height(),
                    multiply = (event.deltaMode === 1) ? step : 1;

                scrollTop -= delta * multiply * step;
                scrollTop = Math.min((scrollHeight - viewportHeight), Math.max(0, scrollTop));
                that.last = scrollTop;

                target.stop().animate({
                    scrollTop: scrollTop
                }, {
                    easing: easing,
                    duration: duration,
                    complete: function () {
                        delete that.last;
                    }
                });

                event.preventDefault();
                event.stopPropagation();
            }
        });
    });
});