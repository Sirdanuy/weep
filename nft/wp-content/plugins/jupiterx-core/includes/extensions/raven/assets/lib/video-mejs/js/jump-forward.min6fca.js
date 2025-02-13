/*!
 * MediaElement.js
 * http://www.mediaelementjs.com/
 *
 * Wrapper that mimics native HTML5 MediaElement (audio and video)
 * using a variety of technologies (pure JavaScript, Flash, iframe)
 *
 * Copyright 2010-2017, John Dyer (http://j.hn/)
 * License: MIT
 *
 */
!function i(a,u,s){function p(t,r){if(!u[t]){if(!a[t]){var e="function"==typeof require&&require;if(!r&&e)return e(t,!0);if(m)return m(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var o=u[t]={exports:{}};a[t][0].call(o.exports,function(r){return p(a[t][1][r]||r)},o,o.exports,i,a,u,s)}return u[t].exports}for(var m="function"==typeof require&&require,r=0;r<s.length;r++)p(s[r]);return p}({1:[function(r,t,e){"use strict";mejs.i18n.en["mejs.time-jump-forward"]="Jump forward 10 second",Object.assign(mejs.MepDefaults,{jumpForwardInterval:30,jumpForwardText:null}),Object.assign(MediaElementPlayer.prototype,{buildjumpforward:function(r,t,e,n){var o=this,i=mejs.i18n.t("mejs.time-jump-forward",o.options.jumpForwardInterval),a=mejs.Utils.isString(o.options.jumpForwardText)?o.options.jumpForwardText.replace("%1",o.options.jumpForwardInterval):i,u=document.createElement("div");u.className=o.options.classPrefix+"button "+o.options.classPrefix+"jump-forward-button",u.innerHTML='<button type="button" aria-controls="'+o.id+'" title="'+a+'" aria-label="'+a+'" tabindex="0">'+o.options.jumpForwardInterval+"</button>",o.addControlElement(u,"jumpforward"),u.addEventListener("click",function(){var r=isNaN(n.duration)?o.options.jumpForwardInterval:n.duration;if(r){var t=n.currentTime===1/0?0:n.currentTime;n.setCurrentTime(Math.min(t+o.options.jumpForwardInterval,r)),this.querySelector("button").blur()}})}})},{}]},{},[1]);
