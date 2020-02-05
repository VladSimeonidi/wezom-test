"use strict";
const enterButton = document.getElementById("enter");
const documentHtml = document.getElementsByTagName("html")[0];
const callbackButton = document.getElementById("callback");
const header = document.getElementsByTagName("head")[0];
enterButton.addEventListener("click", () => {
  let formEnter = document.createElement("div");
  formEnter.classList.add("popup-wrapper");
  formEnter.setAttribute("id", "popup-wrapper");
  documentHtml.insertBefore(formEnter, header);
  formEnter.innerHTML = `
  <form class="popup__form-enter" id="popup__form-enter" action="#">
  <div class="popup__reg">
  <div class="popup_close" id="popup_close"></div>
		<div class="popup__reg__block_1">
			<h2 class="popup__h2">Вход в личный кабинет</h2>
			<h5 class="popup__h5">Ваш email</h5>
			<input class="popup__email" type="email" placeholder="mikel_ivanov98@gmail.com">
			<h5 class="popup__h5 popup__h5__mrg">Пароль</h5>
			<input class="popup__email" minlength="4" data-from="4" type="password" placeholder="*************"><br>
			<label class="popup__checkbox"><input type="checkbox">Запомнить меня</label>
			<div class="popup_links">
				<a class="popup_link_1" href="">Забыли пароль?</a><a class="popup_link_2" href="">Регистрация</a>
			</div>
			<button class="popup_button" id="personalCabinetBtn">Войти в личный кабинет</button>
		</div>
		<div class="popup__reg__block_2">
			<h2 class="popup__h2help">Войти с помощью</h2>
			<div class="popup__help">
				<button class="popup_submit popup_submit_blue"><svg class="svg-pop" viewBox="-110 1 511 511.99896" xmlns="http://www.w3.org/2000/svg"><path d="m207.363281 126.734375c.699219-.789063 3.96875-3.367187 16.808594-3.367187l42.097656-.015626c13.695313 0 24.832031-11.140624 24.832031-24.835937v-73.578125c0-13.671875-11.121093-24.8125-24.792968-24.835938l-62.53125-.101562c-38.59375 0-71.402344 12.730469-94.878906 36.820312-23.371094 23.980469-35.726563 57.457032-35.726563 96.804688v39.683594h-47.835937c-13.695313 0-24.835938 11.140625-24.835938 24.835937v79.242188c0 13.695312 11.140625 24.835937 24.835938 24.835937h47.835937v184.941406c0 13.695313 11.140625 24.835938 24.835937 24.835938h81.992188c13.695312 0 24.835938-11.140625 24.835938-24.835938v-184.9375h58.472656c13.695312 0 24.832031-11.144531 24.832031-24.832031l.03125-79.246093c0-8.996094-4.894531-17.320313-12.777344-21.722657-3.652343-2.039062-7.902343-3.117187-12.285156-3.117187h-58.273437v-31.351563c0-10.21875 1.375-13.917969 2.527343-15.222656zm0 0"></path></svg><span class="svg_span">Facebook</span></button>
				<button class="popup_submit popup_submit_lightblue"><svg class="svg-pop" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
		<g>
			<g>
		<path d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016
			c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992
			c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056
			c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152
			c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792
			c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44
			C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568
			C480.224,136.96,497.728,118.496,512,97.248z"></path>
			</g>
		</g>
		</svg>
			<span class="svg_span">Twitter</span></button>
			<button class="popup_submit popup_submit_red"><?xml version="1.0" encoding="iso-8859-1"?>
			<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
			<svg class="svg-pop" version="1.1" id="qwq" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				 width="510px" height="510px" viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve">
			<g>
				<g id="glass">
					<path d="M286.875,229.5v63.75h150.45c-15.3,89.25-86.7,153-175.95,153c-104.55,0-191.25-86.7-191.25-191.25
						s86.7-191.25,191.25-191.25c53.55,0,99.45,22.95,132.6,58.65l45.9-45.9c-45.9-45.9-107.1-76.5-178.5-76.5
						c-140.25,0-255,114.75-255,255s114.75,255,255,255s242.25-114.75,242.25-255v-25.5H286.875z"/>
				</g>
			</g>
			</svg>
			<span class="svg_span">Google</span></button>
			</div>
		</div>
	</div>
  `;
});

callbackButton.addEventListener("click", () => {
  let formCallbackWrapper = document.createElement("div");
  formCallbackWrapper.classList.add("callback-wrapper");
  documentHtml.insertBefore(formCallbackWrapper, header);
  formCallbackWrapper.setAttribute("id", "callbackWrapper");
  formCallbackWrapper.innerHTML = `
	<form class="callback" id="callbackForm" action="#">
	<div class="callback__cancel" id="callback__cancel"></div>
		<div class="callback__title">Перезвоните мне</div>
		<div class="callback__text">Номер телефона</div>
		<input data-rule="number" placeholder="+38(0__) ___ - __ - __" type="text" class="callback__input" id="callback__input"/>
		<button type="submit" class="callback__button" id="callback__button">Перезвоните мне</button>
	</form>
	`;
  let inputCallBack = document.querySelector("#callback__input");
  let callbackButton = document.querySelector("#callback__button");
  VMasker(inputCallBack).maskPattern("+99(999) 999-99-99");

  inputCallBack.addEventListener("keydown", e => {
    if (e.keyCode == 13) {
      callbackButton.click();
    }
  });
});

document.addEventListener("click", e => {
  let formEnter = document.getElementById("popup-wrapper");
  let closeCross = document.getElementById("popup_close");
  let formCallbak = document.getElementById("callbackWrapper");
  let cancel = document.getElementById("callback__cancel");
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
  let subscribePopupElem = document.createElement(popupWraperElement);
  subscribePopupElem.classList.add(popupWraperClass);

  let footerForm = document.getElementById(parentId);
  footerForm.append(subscribePopupElem);
  subscribePopupElem.innerHTML = popupText;
  let subscribePopups = document.getElementsByClassName(popupWraperClass);
  for (let popup of subscribePopups) {
    if (footerForm.contains(popup)) {
      window.setTimeout(function() {
        popup.remove();
      }, 2000);
    }
  }
}
