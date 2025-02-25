import { formatDuration, format } from "date-fns";

const input = document.querySelector('.input-date')
const button = document.querySelector('.button')
const resultDiv = document.querySelector('.result')


button.addEventListener('click', getDate)


function getDate(event) {
    event.preventDefault()
    let inputValue = input.value

    if (inputValue === '') {
        console.log('Отсутствуют данные ввода')
    } else {
        let arrInputValue = inputValue.split('-').map((el) => Number(el))

        let dateArr = format(new Date(arrInputValue), "yyyy, MM, dd").split(',')
        let nowDateArr = format(new Date(), "yyyy, MM, dd").split(',')

        let year = nowDateArr[0] - dateArr[0]
        let month = nowDateArr[1] - dateArr[1]
        let day = nowDateArr[2] - dateArr[2]

        if (nowDateArr[2] < dateArr[2] && nowDateArr[1] < dateArr[1]) {
            let dayDifference = nowDateArr[2] - dateArr[2]
            let monthDifference = nowDateArr[1] - dateArr[1]

            year = year - 1
            day = 31 - dayDifference * (-1)
            month = 12 - monthDifference * (-1) -1
            const result = formatDuration({ years: year, months: month, days: day }, {locale: ru})
            resultDiv.innerHTML = result

            console.log(month)
        } else if (nowDateArr[2] < dateArr[2] && nowDateArr[1] > dateArr[1]) {
            let dayDifference = nowDateArr[2] - dateArr[2]
            day = 31 - dayDifference * (-1)
            month = month - 1

            const result = formatDuration({ years: year, months: month, days: day },{locale: ru})
            resultDiv.innerHTML = result

            console.log(2)

        } else if (nowDateArr[1] < dateArr[1] && nowDateArr[2] > dateArr[2]) {
            let monthDifference = nowDateArr[1] - dateArr[1]
            month = 12 - monthDifference * (-1)
            year = year - 1

            const result = formatDuration({ years: year, months: month, days: day }, {locale: ru})
            resultDiv.innerHTML = result

            console.log(3)

        } else {
            day = nowDateArr[2] - dateArr[2]
            month = nowDateArr[1] - dateArr[1]

            const result = formatDuration({ years: year, months: month, days: day })
            resultDiv.innerHTML = result
        }


    }

}

