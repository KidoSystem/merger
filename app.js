let row = 2
let col = 2
let firstField = []
let secondField = []

addField(row, col) // Функция для создания контуров куда ствится блок справа с нажатиями то есть для ответа юзера
addBlocks(row, col) // Функция для создания блока справа с нажатиями то есть для ответа юзера
addFieldToFirstBlock(row, col) // Функция для создания контуров куда ствится блок сдева (1й блок)
addBlocksToFirsBlock(row, col) // Функция для создания блока слева (1й блок)

$('.field__svg').click(function () {
    let userAnswerPos = [
        +$(this).attr('positionx'),
        +$(this).attr('positiony')
    ]

    toggleBlock(event, true)

}) // функция клика для того что бы тоглить блок с d-none в d-block

function addField(row, col) {
    for (let i = 0; i < row * col; i++) {
        $('#third__block').append(`<img src="img/field.png" id="field_${i}" class="field__svg">`)
        $('#third__block').append(`<img src="img/block.png" id="block_${i}" class="box__svg">`)
    }

    let colCounter = 0
    let rowCounter = 0
    let changeLeft = $('.field__svg').width()
    let changeTop = $('.field__svg').height()
    let prevLeft;
    let prevTop;
    let startLeft;
    let startTop;

    $('.field__svg').each(function () {
        if ($(this).attr('id') !== 'field_0') {
            if (colCounter < col) {
                $(this).attr({
                    positionx: colCounter,
                    positiony: rowCounter
                })

                $(this).css({
                    left: `${prevLeft + changeLeft}px`,
                    top: `${prevTop}px`
                })

                prevLeft = $(this).position().left
                prevTop = $(this).position().top

                colCounter++
            } else {
                rowCounter++

                $(this).css({
                    left: `${startLeft}px`,
                    top: `${startTop + changeTop}px`
                })

                startLeft = $(this).position().left
                startTop = $(this).position().top
                prevLeft = $(this).position().left
                prevTop = $(this).position().top
                colCounter = 1

                $(this).attr({
                    positionx: colCounter - 1,
                    positiony: rowCounter
                })
            }
        } else {
            $(this).attr({
                positionx: colCounter,
                positiony: rowCounter
            })

            colCounter++

            startLeft = $(this).position().left
            startTop = $(this).position().top
            prevLeft = $(this).position().left
            prevTop = $(this).position().top
        }
    })
}

function addBlocks(row, col) {
    let colCounter = 0
    let rowCounter = 0
    let changeLeft = $('.box__svg').width()
    let changeTop = $('.box__svg').height() * 0.54
    let prevLeft;
    let prevTop;
    let startLeft;
    let startTop;

    $('.box__svg').each(function () {
        if ($(this).attr('id') !== 'block_0') {
            if (colCounter < col) {
                $(this).attr({
                    positionx: colCounter,
                    positiony: rowCounter
                })

                $(this).css({
                    left: `${prevLeft + changeLeft}px`,
                    top: `${prevTop}px`
                })

                prevLeft = $(this).position().left
                prevTop = $(this).position().top

                colCounter++
            } else {
                rowCounter++

                $(this).css({
                    top: `${startTop + changeTop}px`,
                    left: `${startLeft}px`
                })

                startLeft = $(this).position().left
                startTop = $(this).position().top
                prevLeft = $(this).position().left
                prevTop = $(this).position().top

                colCounter = 1

                $(this).attr({
                    positionx: colCounter - 1,
                    positiony: rowCounter
                })
            }
        } else {
            $(this).attr({
                positionx: colCounter,
                positiony: rowCounter
            })

            colCounter++

            startLeft = $(this).position().left
            startTop = $(this).position().top
            prevLeft = $(this).position().left
            prevTop = $(this).position().top
        }
    })
}

function addFieldToFirstBlock(row, col) {
    for (let i = 0; i < row * col; i++) { // добавлкние блоков и контуров в определенные блоки
        $('#first__block').append(`<img src="img/field.png" class="first__block-field" id="first__block-${i}">`)
        $('#first__block').append(`<img src="img/block.png" class="first__block-box" id="first__box-${i}">`)
    }

    let changeLeft = $('.first__block-field').width() // Ширина блока для сдвига влево
    let changeTop = $('.first__block-field').height() // Высота блока для сдвига влево
    let colCounter = 0
    let rowCounter = 0
    let prevLeft, prevTop;
    let startLeft, startTop;

    $('.first__block-field').each(function () { // Перебор для позиционирования элементов
        if ($(this).attr('id') !== 'first__block-0') {
            if (colCounter < col) {
                $(this).attr({
                    positionx: colCounter,
                    positiony: rowCounter
                })

                $(this).css({
                    left: `${prevLeft + changeLeft}px`,
                    top: `${prevTop}px`
                })

                prevLeft = $(this).position().left
                prevTop = $(this).position().top

                colCounter++
            } else {
                rowCounter++

                $(this).css({
                    top: `${startTop + changeTop}px`,
                    left: `${startLeft}px`
                })

                startLeft = $(this).position().left
                startTop = $(this).position().top
                prevTop = $(this).position().top
                prevLeft = $(this).position().left

                $(this).attr({
                    positionx: colCounter - 1,
                    positiony: rowCounter
                })

                colCounter = 1
            }
        } else {
            $(this).attr({
                positionx: colCounter,
                positiony: rowCounter
            })

            colCounter++

            startLeft = $(this).position().left
            startTop = $(this).position().top
            prevLeft = $(this).position().left
            prevTop = $(this).position().top
        }
    })
}

function addBlocksToFirsBlock(row, col) {
    let changeLeft = $('.first__block-box').width()
    let changeTop = $('.first__block-box').height() * 0.54
    let colCounter = 0
    let rowCounter = 0
    let prevLeft, prevTop;
    let startTop, startLeft;

    $('.first__block-box').each(function () {
        if ($(this).attr('id') !== 'first__box-0') {
            if (colCounter < col) {
                $(this).attr({
                    positionx: colCounter,
                    positiony: rowCounter
                })

                $(this).css({
                    left: `${prevLeft + changeLeft}px`,
                    top: `${prevTop}px`
                })

                prevLeft = $(this).position().left
                prevTop = $(this).position().top

                colCounter++
            } else {
                rowCounter++

                $(this).css({
                    left: `${startLeft}px`,
                    top: `${startTop + changeTop}px`
                })

                startLeft = $(this).position().left
                startTop = $(this).position().top
                prevTop = $(this).position().top
                prevLeft = $(this).position().left

                colCounter = 1

                $(this).attr({
                    positionx: colCounter - 1,
                    positiony: rowCounter
                })
            }
        } else {
            $(this).attr({
                positionx: colCounter,
                positiony: rowCounter
            })

            colCounter++

            startLeft = $(this).position().left
            startTop = $(this).position().top
            prevTop = $(this).position().left
            prevLeft = $(this).position().top
        }
    })
}

function toggleBlock(event) {
    let boxSvg = event.target.nextSibling

    if ($(boxSvg).css('display') == 'none') {
        $(boxSvg).css({
            display: 'block'
        })
    } else {
        $(boxSvg).css({
            display: 'none'
        })
    }
} // Функция которя вызывается по клику и скрывает либо же добавляет блок
