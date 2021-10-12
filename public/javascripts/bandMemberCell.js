$(document).ready(function(){

    var bandMemberCell = $('.bandMemberCell')

    bandMemberCell.each(function() {
        var cell = $(this)
        cell.on('click', function (e) {
            bandMemberClick(cell.data('id'));
        })
    })

    function bandMemberClick(bandMemberID) {
        $('#' + bandMemberID).toggleClass('expand');
    }
})