/**
 * Created by pakss3 on 2016-08-31.
 */
var init = {
    defaultMsg : "defaultMsg",
    bgcolor : "#000000",
    bgopacity : 0.5,
    layercolor : "#fff",
    layertop : 100,
    layerleft : 100,
    layerwidth: "200px",
    layerheight : "300px",
    layerbtnName : "확인",
    bgId : sharp('emptyCanvas'),
    layerId : sharp('emptyLayer'),
    monitorTag : 'body',
};

function sharp(str){
    return vaildName(str,"#") ;
}

function comma(str){
    return vaildName(str,".") ;
}

function vaildName(str, icon){
    var hasShape = (str.slice(0,1) == icon);
    return (hasShape ? str : (icon + str)) ;
}

function unSharp(str){
    return str.slice(1);
}


function backgroundCreate(){
    var bgCanvas = "<div id='"+unSharp(init.bgId)+"' ></div>",
        bgColor = hexToRGBA(init.bgcolor, init.bgopacity),
        bgCanvasSetting = {
            'background-color' : bgColor,
            'width' : '100%',
            'height' : '100%',
            'z-index' : 99999,
            'position' : 'fixed',
            'display' : 'block',
            'margin' : 0,
            'padding' : 0,
            'top': 0,
            'left' : 0
        };

    $(init.monitorTag).append(bgCanvas);
    $(init.bgId).css(bgCanvasSetting);
}


function layerCreate(){
    var layerCanvas = "<div id='"+unSharp(init.layerId)+"' >"+init.defaultMsg+"</div>",

        bgCanvasSetting = {
            'background-color' : init.layercolor,
            'width' : init.layerwidth,
            'height' : init.layerheight,
            'position' : 'relative',
            'display' : 'block',
            'margin' : 0,
            'padding' : 0,
            'top': 0,
            'left' : 0,
            'text-align' : 'center',
            'virtical-align':'middle',
        };

    $(init.monitorTag).find().append(bgCanvas);
    $(init.bgId).css(bgCanvasSetting);
}

backgroundCreate();


function hexToRGBA(code, opacity){
    /*
        ex> hexToRGBA('#00a1b2',0.5) => rgba(12,23,42,0.5);
     */
    var hexTo = function(str){
        return parseInt(str,16);
    };

    var codeToHex = code.replace(/[#]?([\w]{2})([\w]{2})([\w]{2})/g,
        function(){
            return Array.prototype.slice.call(arguments,1,4).map(hexTo);
        });

    var rgbaStringResult = "rgba(" + codeToHex + ", "+ opacity +" )";

    return rgbaStringResult;

}
