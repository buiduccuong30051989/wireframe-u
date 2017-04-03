$(document).ready(function() {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    nav: false,
    loop: true, 
    items: 1,
    autoplay: true
  });

  const peopleInRoom = 4;
  var currentRoom = parseInt($('.js-update-room:first').text());
  var currentPeople = parseInt($('.js-update-people:first').text());
  var roomRequire = currentPeople / peopleInRoom;
  var peopleRequire = currentRoom * peopleInRoom;
  $('.js-increment-room').on('click',function(e){
      currentRoom+=1;
      $('.js-update-room').text(currentRoom);
      if(currentRoom>currentPeople){
        currentPeople+=1;
        $('.js-update-people').text(currentPeople);
      }
      e.stopPropagation();
  });

  $('.js-decrement-room').on('click',function(e){
        if(currentRoom>1){
            currentRoom-=1;
            $('.js-update-room').text(currentRoom);
            if(currentPeople>currentRoom){
                peopleRequire = currentRoom * peopleInRoom;
                $('.js-update-people').text(peopleRequire);
                currentPeople = peopleRequire;
                $('.js-update-room').text(currentRoom);
            }
        }
        e.stopPropagation();
  });

  $('.js-increment-people').on('click',function(e){
    currentPeople+=1;
    $('.js-update-people').text(currentPeople);
    roomRequire = Math.ceil(currentPeople / peopleInRoom);
    $('.js-update-room').text(roomRequire);
    currentRoom = roomRequire;
    e.stopPropagation();
  });

  $('.js-decrement-people').on('click',function(e){
        if(currentPeople>1){
            currentPeople-=1;
            $('.js-update-people').text(currentPeople);
            roomRequire = Math.ceil(currentPeople / peopleInRoom);
            currentRoom = roomRequire;
            $('.js-update-room').text(currentRoom);
        }
        e.stopPropagation();
  });


    $(function() {
        $('input#daterange').daterangepicker({
            timePicker: false,
            autoApply: true,
            opens:'right',
            locale: {
                format: 'MM/DD/YYYY'
            }
        });
    });

    $(function() {
        $('input.js-dateOfBirth').daterangepicker({
            timePicker: false,
            autoApply: false,
            opens:'center',
            singleDatePicker: true,
            locale: {
                format: 'MM/DD/YYYY',
                cancelLabel: 'Clear'
            }
        });
        $('input.js-dateOfBirth').val('Date Of Birth');
    });

    $( "#js-popup-suggest-search li span" ).on( "click", function() {
        var value = $(this).text();
        $('#js-input-search').val(value);
    });

    $(document).on('click', '.js-btn-remove-participant', function(e) {
        var count = $('#js-add-participant-wrap .participants-form-inner').length;
        if(count>1){
            $(this).parent().parent().remove();
        }
        else{
            return false;
        }
    });

    $('.js-add-participant').on('click',function(e){
        var clone = $('#js-add-participant-wrap .participants-form-inner:first').clone();
        $(clone).insertBefore( $(this));
        $(clone).find('input.js-dateOfBirth').daterangepicker({
            singleDatePicker : true,
            format : 'MM/DD/YYYY',
            startDate : moment().format('MM/DD/YYYY'),
            endDate : moment().format('MM/DD/YYYY')
        });
        console.log(clone);
        e.preventDefault();
    });

})