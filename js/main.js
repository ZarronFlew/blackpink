/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function () { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function () {

        eval("// Задаем начальное время обратного отсчета\r\nvar startTime = \"2:59:47\";\r\n\r\n// Получаем элемент таймера\r\nvar timerElement = document.getElementById(\"timer\");\r\n\r\n// Преобразуем начальное время в секунды\r\nvar timeArray = startTime.split(\":\");\r\nvar hours = parseInt(timeArray[0]);\r\nvar minutes = parseInt(timeArray[1]);\r\nvar seconds = parseInt(timeArray[2]);\r\nvar totalSeconds = hours * 3600 + minutes * 60 + seconds;\r\n\r\n// Функция для обновления таймера\r\nfunction updateTimer() {\r\n    // Проверяем, если время истекло\r\n    if (totalSeconds <= 0) {\r\n        timerElement.textContent = \"Время истекло!\";\r\n        return;\r\n    }\r\n\r\n    // Вычисляем оставшееся время в часах, минутах и секундах\r\n    var remainingHours = Math.floor(totalSeconds / 3600);\r\n    var remainingMinutes = Math.floor((totalSeconds % 3600) / 60);\r\n    var remainingSeconds = totalSeconds % 60;\r\n\r\n    // Форматируем значения времени\r\n    var formattedTime =\r\n        (\"0\" + remainingHours).slice(-2) +\r\n        \":\" +\r\n        (\"0\" + remainingMinutes).slice(-2) +\r\n        \":\" +\r\n        (\"0\" + remainingSeconds).slice(-2);\r\n\r\n    // Обновляем текст в элементе таймера\r\n    timerElement.textContent = formattedTime;\r\n\r\n    // Уменьшаем общее количество секунд на 1\r\n    totalSeconds--;\r\n}\r\n\r\n// Вызываем функцию updateTimer каждую секунду\r\nsetInterval(updateTimer, 1000);\r\n\r\n// burger menu\r\nlet burgerBtn = document.querySelector('.burger');\r\nlet burgerMenu = document.querySelector('.mobile-menu');\r\nlet body = document.querySelector('body');\r\nburgerBtn.addEventListener('click', () => {\r\n    burgerBtn.classList.toggle('open');\r\n    if (burgerMenu.classList.contains('open')) {\r\n        burgerMenu.style.left = '100%';\r\n        burgerMenu.classList.remove('open');\r\n        body.style.overflow = 'auto';\r\n    } else {\r\n        burgerMenu.style.left = '0';\r\n        burgerMenu.classList.add('open');\r\n        body.style.overflow = 'hidden';\r\n    }\r\n})\r\n\r\nlet exit = document.querySelector(\".footer-exit\");\r\nlet footer = document.querySelector(\".footer\");\r\nexit.addEventListener('click', function () {\r\n    footer.style.display = 'none';\r\n})\r\n\r\n// Получение текущей даты\r\nvar currentDate = new Date();\r\n\r\n// Добавление двух дней\r\ncurrentDate.setDate(currentDate.getDate() + 2);\r\n\r\n// Получение дня, месяца и года\r\nvar day = currentDate.getDate();\r\nvar month = currentDate.getMonth() + 1; // Месяцы в JavaScript нумеруются с 0, поэтому добавляем 1\r\nvar year = currentDate.getFullYear();\r\n\r\n// Форматирование даты\r\nvar formattedDate = day + '.' + month + '.' + year;\r\n\r\n// Изменение HTML содержимого элемента с классом \"date\"\r\ndocument.querySelector('.date').innerHTML = `Скидка действительна до ${formattedDate}`;\n\n//# sourceURL=webpack://mygulp/./src/js/main.js?");

        /***/
})

    /******/
});
  /************************************************************************/
  /******/
  /******/ 	// startup
  /******/ 	// Load entry module and return exports
  /******/ 	// This entry module can't be inlined because the eval devtool is used.
  /******/ 	var __webpack_exports__ = {};
  /******/ 	__webpack_modules__["./src/js/main.js"]();
  /******/
  /******/
})()
  ;