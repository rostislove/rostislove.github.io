$(document).ready(function() {

    // Массив событий и акций
    var eventsArray = [
        {
            headline: "Ледовое шоу «Северное сияние» и «Кролик в шляпе»",
            text: "Приглашаем вас с детьми на наши волшебные новогодние шоу на льду! Вас ждут увлекательные истории, мастерство фигурного катания, красивые костюмы, настоящие цирковые трюки и&nbsp;обязательный интерактив с&nbsp;маленьким зрителями — ведь без помощи детей наши герои не&nbsp;смогут справиться. Ждем вас!",
            id: "0",
            date: "23, 24, 25-30 декабря • 1-6 января",
            place: "Ледовый каток Mega Ice, 4 этаж",
            image: "url('../images/found_img_00.jpg')"
        },
        {
            headline: "Ледовое шоу «Руслан и Людмила»",
            text: "Татьяна Навка представляет мировую премьеру мюзикла на льду – «Руслан и Людмила». Шоу-сказка беспрецедентного уровня ознаменует собой новый взгляд на великое произведение великого писателя и поэта А.С. Пушкина. Потрясающие спортсмены и артисты шоу исполнят на катке торгового центра несколько отрывков из шоу, а после будут рады встретиться с поклонниками и провести автограф-сессию.",
            id: "1",
            date: "27 декабря, в 17.00 на катке Mega Ice, на 4 этаже.",
            place: "Вход свободный!",
            image: "url('../images/found_img_01.jpg')"
        },
        {
            headline: "Новогодний Music Happy Hour",
            text: "Традиционный MUSIC HAPPY HOUR начнет свое новогоднее звучание 15 декабря. Всех гостей торгового центра ждет часовое живое выступление различных музыкальных групп с собственным и любимым всеми новогодним репертуаром.",
            id: "2",
            date: "22—24, 29—30 декабря • 2—6 января",
            place: "Центральный атриум, 3 этаж",
            image: "url('../images/found_img_02.jpg')"
        },
        {
            headline: "Бесплатная упаковка подарков",
            text: "Совершите покупки в АВИАПАРКЕ на сумму от 1 000 рублей и получите бесплатную упаковку в подарок! Чеки не суммируются.",
            id: "3",
            date: "3—31 декабря",
            place: "Северная галерея, 1 этаж (около магазина ZARA), Северная галерея, 2 этаж (около магазина H&M)",
            image: "url('../images/found_img_03.jpg')"
        },
        {
            headline: "Досуг для ребенка",
            text: "Развлечем вашего ребенка, пока вы продолжаете покупки! Совершите покупки в АВИАПАРКЕ на сумму от 5 000 рублей и получите сертификат в детский досуговый центр в подарок. Чеки не суммируются.",
            id: "4",
            date: "3—31 декабря",
            place: "Сервис-центр в центральном атриуме, 1&nbsp;этаж",
            image: "url('../images/found_img_04.jpg')"
        },
        {
            headline: "Такси до дома",
            text: "Совершите покупки в АВИАПАРКЕ на сумму от 15 000 рублей, и мы бесплатно доставим до дома вас и ваши покупки! Чеки суммируются от 3 000 рублей.",
            id: "5",
            date: "3—31 декабря",
            place: "Сервис-центр в центральном атриуме, 1&nbsp;этаж",
            image: "url('../images/found_img_05.jpg')"
        },
        {
            headline: "Приемная Деда Мороза",
            text: "Ваш ребенок может сфотографироваться с настоящим Дедом Морозом, рассказать стишок и получить приятный сюрприз в подарок.",
            id: "6",
            date: "8 декабря—7 января",
            place: "Центральный атриум, у аквариума, 1&nbsp;этаж",
            image: "url('../images/found_img_06.jpg')"
        },
        {
            headline: "Дерево Желаний",
            text: "Оставьте свое пожелание другу, наш Дед Мороз, ежедневно в 17:00 выбирает трех счастливчиков и дарит подарок от АВИАПАРКА!",
            id: "7",
            date: "8 декабря—7 января",
            place: "Центральный атриум, у аквариума, 1&nbsp;этаж",
            image: "url('../images/found_img_07.jpg')"
        },
        {
            headline: "Новогодняя почта",
            text: "Настоящая новогодняя почта! Поделитесь своим волшебным настроением, отправьте открытку с новогодними пожеланиями своим друзьям и родным!",
            id: "8",
            date: "8 декабря—7 января",
            place: "Центральный атриум, у аквариума, 1&nbsp;этаж",
            image: "url('../images/found_img_08.jpg')"
        },
        {
            headline: "Новогодняя ярмарка",
            text: "Новогодняя ярмарка АВИАПАРКА традиционно красива и притягательна. Разнообразные новогодние украшения, аксессуары для дома, сувениры и вкусные угощения приятно удивят вас. Ярмарка поддерживает благотворительный проект «Добрая Фея». Покупая деревянные игрушки от Фонда «Жизнь как чудо» и вы поможете детям с тяжелым заболеванием печени.",
            id: "9",
            date: "15 декабря—7 января",
            place: "Зеленая зона, синяя зона, малая галерея, 1&nbsp;этаж",
            image: "url('../images/found_img_09.jpg')"
        }
    ];

    // Функция перемешивания
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };

    // Перемешать и создать карточки
    var obj = [];
    for(i = 0; i < eventsArray.length; i++) { obj.push(i); }
    var shu = shuffle( $.merge(obj, obj) )

    for(i = 0; i < shu.length; i++) {
        $('<div class="card">'+'<div class="flipper"><div class="face" id="game_'+i+'"></div><div class="back" id="event_'+shu[i]+'"></div></div>'+
        '</div>').appendTo('.container__card');
    }

    // Начать отчет времени
    var currentTime = new Date();
    var time = 0;
    // console.log(currentTime);

    // Количество попыток перевернуть карточки
    var turns = 0;

    // Установить действия для карточек
    $('.container__card .card').on({
    'click' : function(){
        ++turns;
        // console.log(turns);
        // if($('.container__card').attr('data-paused') == 1) {return;}
        var backId = $(this).addClass('active').find('.back').attr('id');
        // console.log(backId);
        if( $('.container__card').find('.card.active').length > 1){
            setTimeout(function(){
                var thisCard = $('.container__card .active .back[id='+backId+']');

                if( thisCard.length > 1 ) {
                    thisCard.parents('.card').toggleClass('active card found');

                    var currentId = backId.substr(-1);
                    $('<div class="eventPopUp"><div class="eventPopUp__left" id="found_'+currentId+'"></div><div class="eventPopUp__right"><h2>'+eventsArray[currentId]["headline"]+'</h2><p class="text">'+eventsArray[currentId]["text"]+'</p><p class="date">'+eventsArray[currentId]['date']+'</p><p class="place">'+eventsArray[currentId]['place']+'</p><div class="btn">Продолжить игру</div></div></div>').appendTo('.pop-up');
                    
                    // Показать событие при совпадении двух карточек 
                    $('.pop-up').addClass('visible');

                    // Зафиксировать прошедшее время
                    time += new Date() - currentTime;
                    // console.log(time);

                    $('.btn').click(function (){
                        $('.eventPopUp').remove();
                        $('.pop-up').removeClass('visible');
                        currentTime = new Date();
                    });

                    // Win game
                    if( !$('.container__card .card').length ){
                        // var time = $.now() - startGame;
                        // if( get('flip_'+difficulty) == '-:-' || get('flip_'+difficulty) > time ){
                        //     set('flip_'+difficulty, time); // increase best score
                        // }
                        // startScreen('nice');
                        $('.btn').click(function() {
                            $('.pop-up').addClass('visible');
                            $('.resultPopUp').addClass('activeResultPopUp');
                            
                            time += new Date() - currentTime;
                            var sec = time / 1000;
                            var points = Math.round((10000000/(sec*turns)));
                            $("<h2>Поздравляем! Ваш результат —"+points+".</h2>").prependTo('.resultPopUp__container');
                            $("<input name='result' type='text' value='"+points+"'>").appendTo('.container_result'); 
                            // console.log(points);
                        })
                    }
                }
                else {
                    $('.container__card .card.active').removeClass('active'); 
                }
            }, 500);
        }
    }
    });

    function popupOpenClose(popup) {
	
        /* Add div inside popup for layout if one doesn't exist */
        if ($(".wrapper").length == 0){
            $(popup).wrapInner("<div class='wrapper'></div>");
        }
        
        /* Open popup */
        $(popup).show();
    
        /* Close popup if user clicks on background */
        $(popup).click(function(e) {
            if ( e.target == this ) {
                if ($(popup).is(':visible')) {
                    $(popup).hide();
                }
            }
        });
    
        /* Close popup and remove errors if user clicks on cancel or close buttons */
        $(popup).find("button[name=close]").on("click", function() {
            if ($(".formElementError").is(':visible')) {
                $(".formElementError").remove();
            }
            $(popup).hide();
        });
    }
    
    $(document).ready(function () {
        $("[data-js=open]").on("click", function() {
            popupOpenClose($(".popup"));
        });
    });

    jQuery(document).ready(function ($) {

        $('#checkbox').change(function(){
          setInterval(function () {
              moveRight();
          }, 3000);
        });
        
          var slideCount = $('#slider ul li').length;
          var slideWidth = $('#slider ul li').width();
          var slideHeight = $('#slider ul li').height();
          var sliderUlWidth = slideCount * slideWidth;
          
          $('#slider').css({ width: slideWidth, height: slideHeight });
          
          $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
          
          $('#slider ul li:last-child').prependTo('#slider ul');
      
          function moveLeft() {
              $('#slider ul').animate({
                  left: + slideWidth
              }, 200, function () {
                  $('#slider ul li:last-child').prependTo('#slider ul');
                  $('#slider ul').css('left', '');
              });
          };
      
          function moveRight() {
              $('#slider ul').animate({
                  left: - slideWidth
              }, 200, function () {
                  $('#slider ul li:first-child').appendTo('#slider ul');
                  $('#slider ul').css('left', '');
              });
          };
      
          $('a.control_prev').click(function () {
              moveLeft();
          });
      
          $('a.control_next').click(function () {
              moveRight();
          });
      
      });    
      
});
