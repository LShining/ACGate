chrome.storage.local.get("pixiv", function(value){
        if (value.pixiv == undefined) {
            chrome.storage.local.set({pixiv: "true", bilibili: "true", magnet: "true", baidu: "true"}, function(){});
        }
});
function replacer(){
    //Process pixiv patterns
    chrome.storage.local.get("pixiv", function(value){
        if (value.pixiv == "true") {
            //Regex definitions
            var pixivPattern = /(?=.{6,20}\b)(?=(\b[Pp])|\b(id|Id|ID))[^0-9]{0,12}(\d{6,10})/g;
            //Replacer functions
            function pixivReplacer(match, p1, p2, p3){
                //p3 the number ID
                return "<a href='https://www.pixiv.net/member_illust.php?mode=medium&illust_id="+p3+"' target='_blank'>"+match+"</a>";
            }
            //Main
            $(function(){$("*").replaceText(pixivPattern, pixivReplacer);});
        }
    });
    
    //Process bilibili patterns
    chrome.storage.local.get("bilibili", function(value){
        if (value.bilibili == "true") {
            //Regex definitions
            var bilibiliPattern = /(av|Av|AV)(\u53f7)?([0-9]{5,10})/g;
            //Replacer functions
            function bilibiliReplacer(match, p1, p2, p3){
                //p10 the number ID
                return "<a href='https://www.bilibili.com/video/av"+p3+"/' target='_blank'>"+match+"</a>";
            }
            //Main
            $(function(){$("*").replaceText(bilibiliPattern, bilibiliReplacer);});
        }
    });
    //Process magnet links patterns
    chrome.storage.local.get("magnet", function(value){
        if (value.magnet == "true") {
            //Regex definitions
            var magnetPattern = /(?=.{0,31}[0-9])(?=.{0,31}[a-z])([0-9A-Z]{32,40})/gi;
            //Replacer functions
            function magnetReplacer(match, p1){
                //p10 the number ID
                return "<a href='magnet:?xt=urn:btih:"+p1+"' target='_blank'>"+match+"</a>";
            }
            //Main
            $(function(){$("*").replaceText(magnetPattern, magnetReplacer);});
        }
    });
    
    //Process magnet links patterns
    chrome.storage.local.get("baidu", function(value){
        if (value.baidu == "true") {
            //Regex definitions
            var baiduPattern = /[\s\/^:\uff1a](?=.{0,7}[a-z])(?=.{0,7}[0-9])(1[0-9a-z]{7})(?=$|[^0-9a-z.='"])\s*(\u5bc6\u7801:?)?\s{0,2}([0-9a-z]{4})?/gi;
            //Replacer functions
            function baiduReplacer(match, p1){
                //p10 the number ID
                return "<a href='http://pan.baidu.com/s/"+p1+"' target='_blank'>"+match+"</a>";
            }
            //Main
            $(function(){$("*").replaceText(baiduPattern, baiduReplacer);});
        }
    });
}
document.addEventListener("DOMContentLoaded", replacer);
