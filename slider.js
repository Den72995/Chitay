 /*Здесь изменять количество изображений(число, между "=" и ";")
    	                  |
    	                  |
    				     \|/
    				      -                                                                                                   */
 var numberofimages = 5;
 //Сюда вставлять ссылки на изображения(заключать в одинаковые ковычки, через запятые)
 //Изображения должны находиться в папке с этим файлом
 var one = [
 	'CvR7qGLUIAEpdKb.jpg',
 	'butg.png',
 	'nature-3082832__340.jpg',
 	'tree-3097419_960_720.jpg',
 	'Drag_image.png',
 	'',
 	'',
 	'',
 	'',
 	''
 ];
//Типы слайдера
//Обычное пролистывание "swipe"
//Пролистывание с уменьшением и увелечением ширины картинок "widthresize"
//Пролистывание с появлением изображения "appearance"
//Здесь изменять тип слайдера
/*                 |
				   |
				  \|/
                   -                                                          */
 var typeslider = "on";








 // JavaScript Document
 //Код слайдера
 //Проверяем не больше ли изображений чем разрешается
 if (numberofimages > 10) {
 	numberofimages = 10;
 }
 //Нужно для следующего слайда
 var numberofimagesmore = numberofimages + 1;
 var nei = -1;
 var nei2 = 699;


 if (typeslider === "swipe") {
 	var widthone = 699;
 	var level = 'one';
 	var level2 = 'one2';
 	var widthtwo = 1;
 	var first = 'second';
 }




 //Обьявляем две переменные для указания номера фото, отличных друг от друга на 1
 var numb = 2;
 var numb2 = 3;
 // Делаем ссылку на 2 узла элемента DOM, что бы использовать экономично
 var t = document.getElementById("sl");
 var t2 = document.getElementById("sl2");
 //Автоперелистывание слайдера начинается с таймера в 6 сек
 setInterval(function () {
 	//Автоперемещение слайдов в 1 пиксель в промежуток в 0.001 сек
 	var inter = setInterval(function () {


 if (typeslider===«wipe){
 			switch (first) {
 				case 'second':
					t2.style.left = nei2 + "px";
 					t2.style.width = widthtwo + "px";
 					t.style.width = widthone + "px";
 					break;
 				case 'first':
 					t.style.left = nei + "px";
 					t.style.width = widthone + "px";
 					t2.style.width = widthtwo + "px";
 					break;
 			}
 		}


 		//Перемещение 1 изображения на 1 пиксель
 		if (typeslider !== "on") {
 			t.style.left = nei + "px";
 		}
 		if (typeslider !== "on") {
 			//Перемещение 2 изображения на 1 пиксель

 			t2.style.left = nei2 + "px";
 		}

 		if (typeslider === "on") {
 			switch (level) {
 				case 'one':
 					widthone--;
 					break;
 				case 'two':
 					widthone++;
 					break;
 			}
 			switch (level2) {
 				case 'one2':
 					widthtwo++;
 					break;
 				case 'two2':
 					widthtwo--;
 					break;
 			}
 		}

 		nei2--;
 		nei--;
 		nei2--;
 		nei--;
 		nei2--;
 		nei--;

 		if (nei <= -700) {
 			clearInterval(inter);
 			t.style.left = "700px";
 			nei = 699;
 			if (typeslider === "on") {
 				widthone = 1;
 				level = 'two';
 				level2 = 'two2';
 				first = "first";
 			}
 			if (numb === numberofimages) {
 				numb = 0;
 			}
 			if (numb >= numberofimagesmore) {
 				numb = 1;
 			}

 			t.src = one[numb];

 			//Следующее фото
 			numb++;
 			numb++;

 			//Выведение фото на слайдер

 		}

 		if (nei2 <= -700) {
 			clearInterval(inter);


 			t2.style.left = "700px";
 			nei2 = 699;
 			if (typeslider === "on") {
 				widthtwo = 1;
 				level = 'one';
 				level2 = 'one2';
 				first = "second";
 			}
 			if (numb2 === numberofimages) {
 				numb2 = 0;
 			}
 			if (numb2 === numberofimagesmore) {
 				numb2 = 1;
 			}

 			t2.src = one[numb2];

 			//Следующее фото
 			numb2++;
 			numb2++;

 			//Выведение фото на слайдер

 		}


 	}, 0, 01);




 	//Проверяем не кончились ли фото и начинать сначала

 }, 6000);
