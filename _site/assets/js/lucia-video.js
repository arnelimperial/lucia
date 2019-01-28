$(document).ready(function(){

    /* Get iframe src attribute value i.e. YouTube video url

    and store it in a variable */

    var url = $("#lucia-video").attr('src');

    

    /* Assign empty url value to the iframe src attribute when

    modal hide, which stop the video playing */

    $("#modal8").on('hide.bs.modal', function(){

        $("#lucia-video").attr('src', '');

    });

    

    /* Assign the initially stored url back to the iframe src

    attribute when modal is displayed again */

    $("#modal8").on('show.bs.modal', function(){

        $("#lucia-video").attr('src', url);

    });

});
