$(document).ready(function(){

    var bandMemberCell = $('.bandMemberCell')

    bandMemberCell.each(function() {
        var cell = $(this)
        cell.on('click', function (e) {
            bandMemberClick(cell.data('name'));
        })
    })

    function bandMemberClick(bandMemberName) {
        $(`#bandMember${bandMemberName}`).toggleClass('expand');
        $(`#bandMemberDescription${bandMemberName}`).toggle();
        $(`#bandMemberSocials${bandMemberName}`).toggle();
    }
})