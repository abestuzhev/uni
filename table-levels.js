$(function(){
    $('.table-level__name').on(function(e){
        e.preventDefault();
        console.log('click');

        $(this).siblings('.table-level-list').toggle();
    });
});