$(document).ready(function () {
    $(".reaction-icon").click(function () {
        let likeSrc = "../resources/svg/like.svg";
        let likeActiveSrc = "../resources/svg/likeactive.svg";

        let currentSrc = $(this).attr("src");
        $(this).attr("src", currentSrc === likeSrc ? likeActiveSrc : likeSrc);
    });
});