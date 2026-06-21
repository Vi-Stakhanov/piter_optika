$(document).ready(function() {

    $('.select_1').select2({
        minimumResultsForSearch: -1
    });

    $('.select_2').select2({
        minimumResultsForSearch: -1
    });

    $('.select_3').select2({
        minimumResultsForSearch: -1
    });

    $('.select_4').select2({
        minimumResultsForSearch: -1
    });

    $('.burger').click(function(){
        $(this).toggleClass('active');
        $('.menu-mob').toggle();
    });

    $('.footer .subtitle').click(function(){
        $(this).toggleClass('active');
        $(this).next('.footer__full').toggle();
    });

    $('.card__toggle').click(function(){
        $(this).toggleClass('active');
        $(this).next('.card__full').toggle();
    });

    $('.nav-mob .open-1').on('click', function() {
      event.preventDefault();
      $('.nav-mob__level-1').hide();
      var openid_1 = $(this).data('openid_1');
        $('#' + openid_1).fadeIn();
        $('.menu-mob .bottom').hide();
    });

    $('.level-back-1').click(function(){
        $('.nav-mob__level-1').fadeIn();
        $('.nav-mob__level-2').hide();
        $('.menu-mob .bottom').fadeIn();
    });

    $('.nav-mob .open-2').on('click', function() {
      event.preventDefault();
      $('.nav-mob__level-2').hide();
      var openid_2 = $(this).data('openid_2');
        $('#' + openid_2).fadeIn();
    });

    $('.level-back-2').click(function(){
        $('.nav-mob__level-2').fadeIn();
        $('.nav-mob__level-3').hide();
    });

    $('.btn-cart-add').click(function(){
        $(this).toggleClass('active');
    });

    $('.btn-search-mob').click(function(){
        $(this).toggleClass('active');
        $('.search-mob').slideToggle();
    });

    $('.btn-fav').click(function() {
        $(this).toggleClass('active');
    });

    $('.enroll__open').click(function() {
        $('.enroll__full').slideToggle();
        $(this).hide();
        $('.enroll__hide').fadeIn();
    });

    $('.btn-filter, #filter-close_1').click(function(){
        //$(this).toggleClass('active');
        $('#filter-1').toggleClass('active');
        $('body, html').toggleClass('no-scroll');
    });

    $('#soting-toggle_1, #filter-close_2').click(function(){
        //$(this).toggleClass('active');
        $('#filter-2').toggleClass('active');
        $('body, html').toggleClass('no-scroll');
    });

    $('#soting-toggle_2, #filter-close_3').click(function(){
        //$(this).toggleClass('active');
        $('#filter-3').toggleClass('active');
        $('body, html').toggleClass('no-scroll');
    });

    $('#soting-toggle_3, #filter-close_4').click(function(){
        //$(this).toggleClass('active');
        $('#filter-4').toggleClass('active');
        $('body, html').toggleClass('no-scroll');
    });

    $('#soting-toggle_4, #filter-close_5').click(function(){
        //$(this).toggleClass('active');
        $('#filter-5').toggleClass('active');
        $('body, html').toggleClass('no-scroll');
    });

    $('#soting-toggle_5, #filter-close_6').click(function(){
        //$(this).toggleClass('active');
        $('#filter-6').toggleClass('active');
        $('body, html').toggleClass('no-scroll');
    });

    // Находим поле ввода внутри блока .search
    var $input = $('.search input');
    var $searchBlock = $('.search'); // или $input.closest('.search')

    // Событие input срабатывает при каждом изменении содержимого поля
    $input.on('input', function() {
        var value = $(this).val().trim(); // убираем пробелы по краям

        if (value.length > 0) {
            // Если в поле есть символы – добавляем класс active
            $searchBlock.addClass('active');
        } else {
            // Если поле пустое – удаляем класс active
            $searchBlock.removeClass('active');
        }
    });

    // Дополнительно: если поле теряет фокус и пустое – убираем active,
    // чтобы при клике вне поля оно закрывалось (по желанию)
    $input.on('blur', function() {
        var value = $(this).val().trim();
        if (value.length === 0) {
            $searchBlock.removeClass('active');
        }
    });

    // Если пользователь кликает на поле, но там уже есть текст – active уже должен быть,
    // но на случай, если он был убран ранее, можно проверить при фокусе
    $input.on('focus', function() {
        var value = $(this).val().trim();
        if (value.length > 0) {
            $searchBlock.addClass('active');
        }
    });

	$('.intro-slider-1').slick({
        autoplay: false,
        arrows: false, 
        //fade: true,
        //cssEase: 'linear',
        dots: true     
    });

    $('.cat-slider-1').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: false, 
        adaptiveHeight: true,
        swipeToSlide: true,
        responsive: [
            {   
              breakpoint: 1441,
              settings: {
                slidesToShow: 6
              }
            },
            {   
              breakpoint: 1201,
              settings: {
                slidesToShow: 7
              }
            },
            {   
              breakpoint: 992,
              settings: {
                slidesToShow: 5
              }
            },
            {   
              breakpoint: 768,
              settings: {
                slidesToShow: 4
              }
            },
            {   
              breakpoint: 576,
              settings: {
                slidesToShow: 3
              }
            } 
        ]
    });

    $('.products-slider-1').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: false, 
        adaptiveHeight: true,
        swipeToSlide: true,
        appendArrows: $('#arrows-append_1'),
        responsive: [
            {   
              breakpoint: 1200,
              settings: {
                slidesToShow: 4
              }
            },
            {   
              breakpoint: 992,
              settings: {
                slidesToShow: 3
              }
            },
            {   
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            } 
        ]
    });

    $('.card-slider-1').slick({
        autoplay: false,
        arrows: false, 
        //fade: true,
        //cssEase: 'linear',
        dots: false,
        asNavFor: '.card-slider-2',
        responsive: [            
            {   
              breakpoint: 768,
              settings: {
                
              }
            } 
        ]
        
    });
    $('.card-slider-2').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        asNavFor: '.card-slider-1',
        focusOnSelect: true,
        vertical: true,
        responsive: [            
            {   
              breakpoint: 1200,
              settings: {
                vertical: false
              }
            } 
        ]
    });

    // ------------------- НАСТРОЙКИ -------------------
        // Месяца на русском (для заголовка)
        const monthNamesRu = [
            'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
        ];

        // Текущий отображаемый год и месяц (0-11)
        let currentYear = 2026;
        let currentMonth = 4;      // 4 = Май (0-индекс)
        
        // Выбранная дата (объект Date, храним только год/месяц/число)
        let selectedDate = new Date(2026, 4, 19);   // 19 мая 2026 (по умолчанию из примера)
        
        // Обновить текстовое отображение выбранной даты внизу
        function updateSelectedDateDisplay() {
            if (!selectedDate) {
                $('#selectedDateDisplay').text('—');
                return;
            }
            const day = selectedDate.getDate();
            const month = monthNamesRu[selectedDate.getMonth()];
            const year = selectedDate.getFullYear();
            $('#selectedDateDisplay').text(`${day} ${month} ${year}`);
        }
        
        // Получить количество дней в месяце
        function getDaysInMonth(year, month) {
            return new Date(year, month + 1, 0).getDate();
        }
        
        // Рендер календаря на основе currentYear/currentMonth и подсветка selectedDate
        function renderCalendar() {
            // 1. Обновляем заголовок
            $('.calendar .month').text(`${monthNamesRu[currentMonth]} ${currentYear}`);
            
            // 2. Определяем параметры для построения сетки
            const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
            // Первый день недели: в JS 0 = воскресенье, нам нужно ПН = 0 (индекс для строк)
            // Вычисляем смещение: для ПН нужно, чтобы воскресенье было последним (индекс 6)
            let startOffset = firstDayOfMonth.getDay(); // 0 вс, 1 пн, 2 вт...6 сб
            // Преобразуем: если воскресенье (0) -> ставим индекс 6 (воскресенье в конце)
            // Для пн(1) -> 0, вт(2) -> 1, ср(3)->2, чт(4)->3, пт(5)->4, сб(6)->5, вс(0)->6
            let offsetIndex = (startOffset === 0) ? 6 : startOffset - 1;
            
            const totalDaysCurrent = getDaysInMonth(currentYear, currentMonth);
            
            // Предыдущий месяц (для заполнения пустых ячеек)
            let prevMonthYear = currentYear;
            let prevMonth = currentMonth - 1;
            if (prevMonth < 0) {
                prevMonth = 11;
                prevMonthYear = currentYear - 1;
            }
            const daysInPrevMonth = getDaysInMonth(prevMonthYear, prevMonth);
            
            // Следующий месяц (для хвостовых ячеек)
            let nextMonthYear = currentYear;
            let nextMonth = currentMonth + 1;
            if (nextMonth > 11) {
                nextMonth = 0;
                nextMonthYear = currentYear + 1;
            }
            
            // Генерируем массив ячеек: 6 строк * 7 = 42 ячейки
            const totalCells = 42;
            let daysArray = [];
            
            // Заполняем предыдущим месяцем (ячейки с class="no")
            for (let i = 0; i < offsetIndex; i++) {
                const prevDayNum = daysInPrevMonth - offsetIndex + i + 1;
                daysArray.push({
                    type: 'prev',
                    day: prevDayNum,
                    year: prevMonthYear,
                    month: prevMonth,
                    isCurrentMonth: false
                });
            }
            
            // Заполняем текущий месяц
            for (let d = 1; d <= totalDaysCurrent; d++) {
                daysArray.push({
                    type: 'current',
                    day: d,
                    year: currentYear,
                    month: currentMonth,
                    isCurrentMonth: true
                });
            }
            
            // Заполняем следующий месяц до 42 ячеек
            const remaining = totalCells - daysArray.length;
            for (let i = 1; i <= remaining; i++) {
                daysArray.push({
                    type: 'next',
                    day: i,
                    year: nextMonthYear,
                    month: nextMonth,
                    isCurrentMonth: false
                });
            }
            
            // 3. Очищаем контейнер .days и строим rows
            const $daysContainer = $('.days');
            $daysContainer.empty();
            
            // Строим ряды по 7 элементов
            for (let row = 0; row < 6; row++) {
                const $row = $('<div>').addClass('row');
                for (let col = 0; col < 7; col++) {
                    const cellData = daysArray[row * 7 + col];
                    if (!cellData) continue;
                    
                    const $cell = $('<div>');
                    const $span = $('<span>').text(cellData.day);
                    $cell.append($span);
                    
                    // Добавляем класс .no для дней предыдущего/следующего месяца
                    if (!cellData.isCurrentMonth) {
                        $cell.addClass('no');
                    } else {
                        // Для текущего месяца проставляем data-атрибуты (для выбора даты)
                        $cell.attr('data-year', cellData.year);
                        $cell.attr('data-month', cellData.month);
                        $cell.attr('data-day', cellData.day);
                    }
                    
                    // Подсветка активной даты (если выбрана и совпадает с текущей ячейкой)
                    if (selectedDate && cellData.isCurrentMonth &&
                        cellData.year === selectedDate.getFullYear() &&
                        cellData.month === selectedDate.getMonth() &&
                        cellData.day === selectedDate.getDate()) {
                        $cell.addClass('active');
                    }
                    
                    $row.append($cell);
                }
                $daysContainer.append($row);
            }
            
            // обновим текстовый блок выбранной даты
            updateSelectedDateDisplay();
        }
        
        // Изменить месяц (направление: +1 = следующий, -1 = предыдущий)
        function changeMonth(delta) {
            let newMonth = currentMonth + delta;
            let newYear = currentYear;
            if (newMonth < 0) {
                newMonth = 11;
                newYear--;
            } else if (newMonth > 11) {
                newMonth = 0;
                newYear++;
            }
            currentMonth = newMonth;
            currentYear = newYear;
            renderCalendar();   // перерисовка с выбранной датой (selectedDate остаётся прежней)
        }
        
        // Выбор даты (клик по дню текущего месяца)
        function handleDateSelection($targetCell) {
            // Проверяем: если у ячейки есть класс .no — игнорируем (неактивный день)
            if ($targetCell.hasClass('no')) return;
            
            // Получаем данные о дате из атрибутов
            const year = parseInt($targetCell.attr('data-year'));
            const month = parseInt($targetCell.attr('data-month'));
            const day = parseInt($targetCell.attr('data-day'));
            
            if (isNaN(year) || isNaN(month) || isNaN(day)) return;
            
            // Создаём новую выбранную дату (локальное время, без смещения)
            const newSelected = new Date(year, month, day);
            selectedDate = newSelected;
            
            // Обновить активный класс в календаре
            $('.days .row div').removeClass('active');
            $targetCell.addClass('active');
            
            // Обновить отображение выбранной даты внизу
            updateSelectedDateDisplay();
        }
        
        // ---------- ИНИЦИАЛИЗАЦИЯ И СОБЫТИЯ ----------
        
        // Первая отрисовка (май 2026)
        renderCalendar();
        
        // Стрелка "назад" (prev)
        $('.calendar .prev').on('click', function() {
            changeMonth(-1);
        });
        
        // Стрелка "вперед" (next)
        $('.calendar .next').on('click', function() {
            changeMonth(1);
        });
        
        // Делегирование события клика по дням (динамические элементы)
        $('.days').on('click', '.row div', function(e) {
            const $this = $(this);
            // Если день неактивен (no) – не выбираем
            if ($this.hasClass('no')) return;
            handleDateSelection($this);
        });
        
        // Дополнительно: если необходимо программно обновить, можно также при ресайзе ничего не делать.
        // Синхронизация отображения выбранной даты при загрузке уже есть.
        
        // (опционально) при клике на уже активную дату ничего не сломается
        // добавим также hover для активной даты без конфликта (CSS уже)
        
        // Для удобства: если выбранная дата изначально соответствует маю 2026, 
        // и если пользователь переключает месяцы — актив сохраняется там, где день совпадает, 
        // но если числа нет в новом месяце, то актив не показывается (т.к. ячейка .no или не совпадает)
        // Это ожидаемое поведение, так как выбрана дата 19 мая 2026. При переключении на июнь,
        // актив пропадает (нет 19 июня в выбранной дате?). Но selectedDate неизменна. 
        // Если нужен автосброс? По заданию просто выбор даты + листание. Всё корректно.
        // Также можно дополнительно обработать "текущая дата" — но не требуется, оставляем чистый датапикер.
        
        // Если при переключении месяца пользователь захочет выбрать другой день, 
        // selectedDate изменится и будет отображаться в новом месяце.
        
        // Добавим небольшой эффект для лучшего UX: синхронизация при инициализации,
        // а также при перелистывании месяцев, если выбранная дата существует в текущем отображаемом месяце -
        // актив подсветится автоматически из-за условия в renderCalendar()
        
        // Покажем console.log для отладки (убрать можно)
       

    
          

});