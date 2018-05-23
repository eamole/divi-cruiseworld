//keep element in view
(function($)
{

    $(document).ready( function()
    {
        var id='#legend';        
        var el= document.getElementById(id);
        if(el) keep_in_view(el);

        /* 
            markup the menu 
        */
        $(".menu-item-home a").prepend('<i class="fa fa-home fa-4"></i>');
        $("#top-menu").addClass("rainbow");        
        // try pushme
        //  $("#menu-item-1305").addClass("pushme");
        // $("#menu-item-1305 a").first().addClass("inner");
        // // $("#menu-item-1305 a:first-child").addClass("inner");


    });



    // Design / Dribbble by:
    // Adam Whitcroft
    // URL: https://dribbble.com/shots/969445-The-Double-Delete

    $("#delete-button").click(function(){
        if($(this).hasClass("delete-confirm")){
            $(this).addClass("delete-done");
            $("#delete-span").text("Done");
        } else {
            $(this).addClass("delete-confirm");
            $("#delete-span").text("Are you sure?");
        }
    });

    // Reset
    $("#delete-button").on('mouseout', function(){
        if($(this).hasClass("delete-confirm") || $(this).hasClass("delete-done")){
            setTimeout(function(){
                $("#delete-button").removeClass("delete-confirm").removeClass("delete-done");
                $("#delete-span").text("Delete");
            }, 3000);
        }
    });

















    function keep_in_view(el) {
        if(el) {

            var elementPosTop = $(el).position().top;
            $(window).scroll(function()
            {
                var wintop = $(window).scrollTop(), docheight = $(document).height(), winheight = $(window).height();
                //if top of element is in view
                if (wintop > elementPosTop)
                {
                    //always in view
                    $(id).css({ "position":"fixed", "top":"20px" });
                }
                else
                {
                    //reset back to normal viewing
                    $(id).css({ "position":"inherit" });
                }
            });



        }
    }
})(jQuery);

