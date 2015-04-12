// ==UserScript==
// @name           NicoAntiFocus
// @namespace      https://github.com/tmsanrinsha
// @description    ニコニコ動画などの動画サイトで、Flashプレイヤーにフォーカスしないようにする。
// @grant          none
// @include        http://www.nicovideo.jp/watch/*
// @include        http://de.nicovideo.jp/watch/*
// @include        http://es.nicovideo.jp/watch/*
// @include        http://tw.nicovideo.jp/watch/*
// @downloadURL    https://raw.githubusercontent.com/tmsanrinsha/nicoantifocus.user.js/master/nicoantifocus.user.js
// @updateURL      https://raw.githubusercontent.com/tmsanrinsha/nicoantifocus.user.js/master/nicoantifocus.user.js
// @version        1.0
// ==/UserScript==
//
// License:
//    Creative Commons 2.1 (Attribution + Share Alike)
//
// Neko:
//    nicontroller.js 用？スクリプト。
//    うっかりプレイヤーのボタンを押すとVimperator のキーが効かなくなるので、無理矢理フォーカスしないようにする。
//
// Original Author:
//    anekos
//    http://d.hatena.ne.jp/nokturnalmortum/20080802/1217633913
// Auhtor:
//    tmsanrinsha
//
// Link:
//    Vimperator 用の(ニコニコ動画|YouTube)プラグイン
//    http://vimperator.kurinton.net/plugins/stella.html

(function (es) {
    var elemEmb = document.getElementsByTagName('embed');
    var elemObj = document.getElementsByTagName('object');
    var elems = [].concat(Array.prototype.slice.call(elemEmb), Array.prototype.slice.call(elemObj));

    elems.forEach(function (elem) {
        var doubleClick = false;
        elem.addEventListener(
            'focus',
            function () {
                if (doubleClick) {
                    doubleClick = false;
                } else {
                    doubleClick = true;
                    setTimeout(function () { doubleClick = false; }, 500);
                    setTimeout(function () { elem.blur(); }, 0);
                }
            },
            true
        );
    });
})();
