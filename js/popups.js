"use strict";

var enterButton = document.getElementById("enter");
var documentHtml = document.getElementsByTagName("html")[0];
var callbackButton = document.getElementById("callback");

enterButton.addEventListener("click", function () {
		var formEnter = document.createElement("div");
		formEnter.classList.add("popup-wrapper");
		formEnter.setAttribute("id", "popup-wrapper");
		documentHtml.prepend(formEnter);
		formEnter.innerHTML = "\n  <form class=\"popup__form-enter\" id=\"popup__form-enter\" action=\"#\">\n  <div class=\"popup__reg\">\n  <div class=\"popup_close\" id=\"popup_close\"></div>\n\t\t<div class=\"popup__reg__block_1\">\n\t\t\t<h2 class=\"popup__h2\">\u0412\u0445\u043E\u0434 \u0432 \u043B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442</h2>\n\t\t\t<h5 class=\"popup__h5\">\u0412\u0430\u0448 email</h5>\n\t\t\t<input class=\"popup__email\" type=\"email\" placeholder=\"mikel_ivanov98@gmail.com\">\n\t\t\t<h5 class=\"popup__h5 popup__h5__mrg\">\u041F\u0430\u0440\u043E\u043B\u044C</h5>\n\t\t\t<input class=\"popup__email\" minlength=\"4\" data-from=\"4\" type=\"password\" placeholder=\"*************\"><br>\n\t\t\t<label class=\"popup__checkbox\"><input type=\"checkbox\">\u0417\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C \u043C\u0435\u043D\u044F</label>\n\t\t\t<div class=\"popup_links\">\n\t\t\t\t<a class=\"popup_link_1\" href=\"\">\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?</a><a class=\"popup_link_2\" href=\"\">\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F</a>\n\t\t\t</div>\n\t\t\t<button class=\"popup_button\" id=\"personalCabinetBtn\">\u0412\u043E\u0439\u0442\u0438 \u0432 \u043B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442</button>\n\t\t</div>\n\t\t<div class=\"popup__reg__block_2\">\n\t\t\t<h2 class=\"popup__h2help\">\u0412\u043E\u0439\u0442\u0438 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E</h2>\n\t\t\t<div class=\"popup__help\">\n\t\t\t\t<button class=\"popup_submit popup_submit_blue\"><svg class=\"svg-pop\" viewBox=\"-110 1 511 511.99896\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m207.363281 126.734375c.699219-.789063 3.96875-3.367187 16.808594-3.367187l42.097656-.015626c13.695313 0 24.832031-11.140624 24.832031-24.835937v-73.578125c0-13.671875-11.121093-24.8125-24.792968-24.835938l-62.53125-.101562c-38.59375 0-71.402344 12.730469-94.878906 36.820312-23.371094 23.980469-35.726563 57.457032-35.726563 96.804688v39.683594h-47.835937c-13.695313 0-24.835938 11.140625-24.835938 24.835937v79.242188c0 13.695312 11.140625 24.835937 24.835938 24.835937h47.835937v184.941406c0 13.695313 11.140625 24.835938 24.835937 24.835938h81.992188c13.695312 0 24.835938-11.140625 24.835938-24.835938v-184.9375h58.472656c13.695312 0 24.832031-11.144531 24.832031-24.832031l.03125-79.246093c0-8.996094-4.894531-17.320313-12.777344-21.722657-3.652343-2.039062-7.902343-3.117187-12.285156-3.117187h-58.273437v-31.351563c0-10.21875 1.375-13.917969 2.527343-15.222656zm0 0\"></path></svg><span class=\"svg_span\">Facebook</span></button>\n\t\t\t\t<button class=\"popup_submit popup_submit_lightblue\"><svg class=\"svg-pop\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n<g>\n\t<g>\n\t\t<path d=\"M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016\n\t\t\tc-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992\n\t\t\tc0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056\n\t\t\tc0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152\n\t\t\tc0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792\n\t\t\tc13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44\n\t\t\tC46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568\n\t\t\tC480.224,136.96,497.728,118.496,512,97.248z\"></path>\n\t</g>\n</g>\n</svg><span class=\"svg_span\">Twitter</span></button>\n\t\t\t<button class=\"popup_submit popup_submit_red\"><?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n\t\t\t<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n\t\t\t<svg class=\"svg-pop\" version=\"1.1\" id=\"qwq\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t\t\t\t width=\"510px\" height=\"510px\" viewBox=\"0 0 510 510\" style=\"enable-background:new 0 0 510 510;\" xml:space=\"preserve\">\n\t\t\t<g>\n\t\t\t\t<g id=\"glass\">\n\t\t\t\t\t<path d=\"M286.875,229.5v63.75h150.45c-15.3,89.25-86.7,153-175.95,153c-104.55,0-191.25-86.7-191.25-191.25\n\t\t\t\t\t\ts86.7-191.25,191.25-191.25c53.55,0,99.45,22.95,132.6,58.65l45.9-45.9c-45.9-45.9-107.1-76.5-178.5-76.5\n\t\t\t\t\t\tc-140.25,0-255,114.75-255,255s114.75,255,255,255s242.25-114.75,242.25-255v-25.5H286.875z\"/>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t\t</svg>\n\t\t\t<span class=\"svg_span\">Google</span></button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n  ";
});

callbackButton.addEventListener("click", function () {
		var formCallbackWrapper = document.createElement("div");
		formCallbackWrapper.classList.add("callback-wrapper");
		documentHtml.prepend(formCallbackWrapper);
		formCallbackWrapper.setAttribute("id", "callbackWrapper");
		formCallbackWrapper.innerHTML = "\n\t<form class=\"callback\" id=\"callbackForm\" action=\"#\">\n\t<div class=\"callback__cancel\" id=\"callback__cancel\"></div>\n\t\t<div class=\"callback__title\">\u041F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u0438\u0442\u0435 \u043C\u043D\u0435</div>\n\t\t<div class=\"callback__text\">\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430</div>\n\t\t<input data-rule=\"number\" placeholder=\"+38(0__) ___ - __ - __\" type=\"text\" class=\"callback__input\" id=\"callback__input\"/>\n\t\t<button type=\"submit\" class=\"callback__button\" id=\"callback__button\">\u041F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u0438\u0442\u0435 \u043C\u043D\u0435</button>\n\t</form>\n\t";
		var inputCallBack = document.querySelector("#callback__input");
		var callbackButton = document.querySelector("#callback__button");
		VMasker(inputCallBack).maskPattern("+99(999) 999-99-99");

		inputCallBack.addEventListener("keydown", function (e) {
				if (e.keyCode == 13) {
						callbackButton.click();
				}
		});
});

document.addEventListener("click", function (e) {
		var formEnter = document.getElementById("popup-wrapper");
		var closeCross = document.getElementById("popup_close");
		var formCallbak = document.getElementById("callbackWrapper");
		var cancel = document.getElementById("callback__cancel");
		if (e.target === formEnter || e.target === closeCross) {
				documentHtml.removeChild(formEnter);
				return;
		}
		if (e.target === formCallbak || e.target === cancel) {
				documentHtml.removeChild(formCallbak);
				return;
		}
});
function removeErrorPopup(child) {
		child.remove();
}
function errorPopup(popupWraperElement, popupWraperClass, parentId, popupText) {
		var subscribePopupElem = document.createElement(popupWraperElement);
		subscribePopupElem.classList.add(popupWraperClass);

		var footerForm = document.getElementById(parentId);
		footerForm.append(subscribePopupElem);
		subscribePopupElem.innerHTML = popupText;
		var subscribePopups = document.getElementsByClassName(popupWraperClass);
		console.log(subscribePopups);
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
				var _loop = function _loop() {
						var popup = _step.value;

						console.log(popup);
						if (footerForm.contains(popup)) {
								window.setTimeout(function () {
										popup.remove();
								}, 2000);
						}
				};

				for (var _iterator = subscribePopups[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						_loop();
				}
		} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
		} finally {
				try {
						if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
						}
				} finally {
						if (_didIteratorError) {
								throw _iteratorError;
						}
				}
		}
}