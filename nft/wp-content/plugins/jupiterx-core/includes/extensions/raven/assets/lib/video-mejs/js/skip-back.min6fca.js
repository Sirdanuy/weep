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
!function s(o,a,c){function p(e,t){if(!a[e]){if(!o[e]){var i="function"==typeof require&&require;if(!t&&i)return i(e,!0);if(u)return u(e,!0);var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}var r=a[e]={exports:{}};o[e][0].call(r.exports,function(t){return p(o[e][1][t]||t)},r,r.exports,s,o,a,c)}return a[e].exports}for(var u="function"==typeof require&&require,t=0;t<c.length;t++)p(c[t]);return p}({1:[function(t,e,i){"use strict";mejs.i18n.en["mejs.time-skip-back"]="Skip back 10 second",Object.assign(mejs.MepDefaults,{skipBackInterval:30,skipBackText:null}),Object.assign(MediaElementPlayer.prototype,{buildskipback:function(t,e,i,n){var r=this,s=mejs.i18n.t("mejs.time-skip-back",r.options.skipBackInterval),o=mejs.Utils.isString(r.options.skipBackText)?r.options.skipBackText.replace("%1",r.options.skipBackInterval):s,a=document.createElement("div");a.className=r.options.classPrefix+"button "+r.options.classPrefix+"skip-back-button",a.innerHTML='<button type="button" aria-controls="'+r.id+'" title="'+o+'" aria-label="'+o+'" tabindex="0">'+r.options.skipBackInterval+"</button>",r.addControlElement(a,"skipback"),a.addEventListener("click",function(){if(isNaN(n.duration)?r.options.skipBackInterval:n.duration){var t=n.currentTime===1/0?0:n.currentTime;n.setCurrentTime(Math.max(t-r.options.skipBackInterval,0)),this.querySelector("button").blur()}})}})},{}]},{},[1]);
