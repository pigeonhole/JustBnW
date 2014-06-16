"use strict";function $(a){return"."==a.substring(0,1)?document.getElementsByClassName(a.substring(1)):"#"==a.substring(0,1)?document.getElementById(a.substring(1)):document.querySelectorAll(a)}function init(a){return parentCanvas=$("#source"),parentCanvas.width=a.naturalWidth,parentCanvas.height=a.naturalHeight,parentCanvas.getContext?(parentContext=parentCanvas.getContext("2d"),len=4*parentCanvas.width*parentCanvas.height,parentContext.drawImage(a,0,0,parentCanvas.width,parentCanvas.height),secondCanvas=$("#target"),secondCanvas.width=parentCanvas.width,secondCanvas.height=parentCanvas.height,secondContext=secondCanvas.getContext("2d"),void 0):(alert("Canvas not supported. Please install a HTML5 compatible browser."),void 0)}function imageProcess(a,b){for(var c=(new Date).getTime(),d=a.width>1280?3:4,e=0,f=len/d,g=a.height/d-3,h=function(a){var b=a.data.result,f=a.data.index;if(secondContext.putImageData(b,0,g*f),e++,e==d){j.terminate();var h=(new Date).getTime()-c;log.innerHTML=h+" ms"}},i=0;d>i;i+=1){var j=new Worker("pictureProcessor.js");j.onmessage=h;var k=b.getImageData(0,g*i,a.width,g);j.postMessage({data:k,index:i,length:f,process:processor})}}function saveAsBlob(a){var c,e,d=navigator.getDeviceStorage("pictures"),f=function(){var a=Math.floor(100001*Math.random());c=fileName+"-"+a+".png"};f(),e=d.addNamed(a,c),alert(c),e.onsuccess=function(){alert("saved to gallery!")},e.onerror=function(){saveAsBlob(a)}}function saveImage(){var a,b,c,d=window.navigator.userAgent;if(a=secondCanvas,b=a.toDataURL("image/png"),d.indexOf("Chrome")>=0){var e=document.createElement("a");e.download="test.png",e.href=b.replace("image/png","image/octet-stream"),e.click()}else d.indexOf("Mozilla")>=0&&(d.indexOf("Mobile")>=0||d.indexOf("Tablet")>=0)?(c=new Blob([b],{type:"image/png"}),a.toBlob(function(a){saveAsBlob(a)},"image/png")):window.location.href=b}function handleSelect(a){imageObj=new Image,imageObj.addEventListener("load",function(){init(imageObj);var a=document.getElementById("save");a.onclick=saveImage},!1),imageObj.addEventListener("change",function(){init(imageObj);var a=document.getElementById("save");a.onclick=saveImage},!1),imageObj.crossOrigin="Anonymous";var b=a.target.files[0];fileName=b.name,fileName=fileName.substring(0,fileName.lastIndexOf(".")),imageObj.src=URL.createObjectURL(b)}function hide_seek(a,b,c){var d;document.getElementById(a).onclick=function(){d=document.getElementById(c),d.removeAttribute("class"),d.setAttribute("class","inactive")},document.getElementById(b).onclick=function(){d=document.getElementById(c),d.removeAttribute("class"),d.setAttribute("class","active")}}var imageObj,processor,parentCanvas,parentContext,secondCanvas,secondContext,len,log,fileName;$("#red").onclick=function(){parentCanvas?(processor="red",imageProcess(parentCanvas,parentContext)):alert("Choose an Image!!")},$("#green").onclick=function(){parentCanvas?(processor="green",imageProcess(parentCanvas,parentContext)):alert("Choose an Image!!")},$("#blue").onclick=function(){parentCanvas?(processor="blue",imageProcess(parentCanvas,parentContext)):alert("Choose an Image!!")},$("#normal").onclick=function(){parentCanvas?(processor="normal",imageProcess(parentCanvas,parentContext)):alert("Choose an Image!!")},$("#orange").onclick=function(){parentCanvas?(processor="orange",imageProcess(parentCanvas,parentContext)):alert("Choose an Image!!")},$("#yellow").onclick=function(){parentCanvas?(processor="yellow",imageProcess(parentCanvas,parentContext)):alert("Choose an Image!!")},$("#purple").onclick=function(){parentCanvas?(processor="purple",imageProcess(parentCanvas,parentContext)):alert("Choose an Image!!")},$("#sepia").onclick=function(){parentCanvas?(processor="sepia",imageProcess(parentCanvas,parentContext)):alert("Choose an Image!!")},$("#9").onclick=function(){parentCanvas?(processor="subbright",imageProcess(secondCanvas,secondContext)):alert("Choose an Image!!")},$("#10").onclick=function(){parentCanvas?(processor="addbright",imageProcess(secondCanvas,secondContext)):alert("Choose an Image!!")},$("#11").onclick=function(){parentCanvas?(processor="subcontrast",imageProcess(secondCanvas,secondContext)):alert("Choose an Image!!")},$("#12").onclick=function(){parentCanvas?(processor="addcontrast",imageProcess(secondCanvas,secondContext)):alert("Choose an Image!!")},$("body")[0].onload=function(){if(window.File){var a=document.getElementById("files1");a.addEventListener("change",handleSelect,!1)}else alert("File Upload not Supported");document.getElementById("upbutton").onclick=function(){document.getElementById("files1").click()},hide_seek("close","open","collapse"),log=$("#log")};