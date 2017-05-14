function restoreOptions() {
    browser.storage.local.get("pixiv", function(value){
        if (value.pixiv == "false") {
            document.getElementById("onoffswitchPixiv").checked = false;
        }
        else {
            document.getElementById("onoffswitchPixiv").checked = true;
        };
    });
    
    browser.storage.local.get("bilibili", function(value){
        if (value.bilibili == "false") {
            document.getElementById("onoffswitchBilibili").checked = false;
        }
        else {
            document.getElementById("onoffswitchBilibili").checked = true;
        };
    });
    
    browser.storage.local.get("magnet", function(value){
        if (value.magnet == "false") {
            document.getElementById("onoffswitchMagnet").checked = false;
        }
        else {
            document.getElementById("onoffswitchMagnet").checked = true;
        };
    });
    
    browser.storage.local.get("baidu", function(value){
        if (value.baidu == "false") {
            document.getElementById("onoffswitchBaidu").checked = false;
        }
        else {
            document.getElementById("onoffswitchBaidu").checked = true;
        };
    });
}
function cancelToQuit() {
    document.getElementById("cancel").innerHTML = browser.i18n.getMessage("Quit")
}

function closeCurrentTab() {
    window.close();
}

function saveOptions() {
    console.log("poi");
    if (document.getElementById("onoffswitchPixiv").checked == true) {
        browser.storage.local.set({pixiv: "true"}, function(){})
    }
    else {
        browser.storage.local.set({pixiv: "false"}, function(){})
    };
    
    if (document.getElementById("onoffswitchBilibili").checked == true) {
        browser.storage.local.set({bilibili: "true"}, function(){})
    }
    else {
        browser.storage.local.set({bilibili: "false"}, function(){})
    };
    
    if (document.getElementById("onoffswitchMagnet").checked == true) {
        browser.storage.local.set({magnet: "true"}, function(){})
    }
    else {
        browser.storage.local.set({magnet: "false"}, function(){})
    };
    
    if (document.getElementById("onoffswitchBaidu").checked == true) {
        browser.storage.local.set({baidu: "true"}, function(){})
    }
    else {
        browser.storage.local.set({baidu: "false"}, function(){})
    };
    document.getElementById("tips").innerHTML = browser.i18n.getMessage("SaveMSG");
    cancelToQuit();
}
function restoreOptionsToDefaut(){
    browser.storage.local.set({pixiv: "true", bilibili: "true", magnet: "true", baidu: "true"}, function(){});
    //Update the option status
    restoreOptions();
    document.getElementById("tips").innerHTML = browser.i18n.getMessage("ResetMSG");
    cancelToQuit();
}
function initialization() {
    restoreOptions();
    document.getElementById("cancel").addEventListener("click", closeCurrentTab);
    document.getElementById("save").addEventListener("click", saveOptions);
    document.getElementById("reset").addEventListener("click", restoreOptionsToDefaut);
    
    //Initialization of option page UI
    document.getElementById("pixiv").innerHTML = browser.i18n.getMessage("Pixiv");
    document.getElementById("Bilibili").innerHTML = browser.i18n.getMessage("Bilibili");
    document.getElementById("Magnet").innerHTML = browser.i18n.getMessage("Magnet");
    document.getElementById("Baidu").innerHTML = browser.i18n.getMessage("Baidu");
    document.getElementById("save").innerHTML = browser.i18n.getMessage("Save");
    document.getElementById("cancel").innerHTML = browser.i18n.getMessage("Cancel");
    document.getElementById("reset").innerHTML = browser.i18n.getMessage("Reset");
    document.getElementById("tips").innerHTML = browser.i18n.getMessage("DefaultMSG");
    
}

document.addEventListener("DOMContentLoaded", initialization);



