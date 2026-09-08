gdjs.IntroCode = {};
gdjs.IntroCode.localVariables = [];
gdjs.IntroCode.idToCallbackMap = new Map();
gdjs.IntroCode.GDNewSpriteObjects1= [];
gdjs.IntroCode.GDNewSpriteObjects2= [];
gdjs.IntroCode.GDNewSpriteObjects3= [];
gdjs.IntroCode.GDPurpleButtonWithStoneFrameObjects1= [];
gdjs.IntroCode.GDPurpleButtonWithStoneFrameObjects2= [];
gdjs.IntroCode.GDPurpleButtonWithStoneFrameObjects3= [];
gdjs.IntroCode.GDPurpleButtonWithStoneFrame2Objects1= [];
gdjs.IntroCode.GDPurpleButtonWithStoneFrame2Objects2= [];
gdjs.IntroCode.GDPurpleButtonWithStoneFrame2Objects3= [];
gdjs.IntroCode.GDPurpleButtonWithStoneFrame3Objects1= [];
gdjs.IntroCode.GDPurpleButtonWithStoneFrame3Objects2= [];
gdjs.IntroCode.GDPurpleButtonWithStoneFrame3Objects3= [];
gdjs.IntroCode.GDPurpleButtonWithStoneFrame4Objects1= [];
gdjs.IntroCode.GDPurpleButtonWithStoneFrame4Objects2= [];
gdjs.IntroCode.GDPurpleButtonWithStoneFrame4Objects3= [];
gdjs.IntroCode.GDPurpleButtonWithStoneFrame5Objects1= [];
gdjs.IntroCode.GDPurpleButtonWithStoneFrame5Objects2= [];
gdjs.IntroCode.GDPurpleButtonWithStoneFrame5Objects3= [];
gdjs.IntroCode.GDPurpleButtonWithStoneFrame6Objects1= [];
gdjs.IntroCode.GDPurpleButtonWithStoneFrame6Objects2= [];
gdjs.IntroCode.GDPurpleButtonWithStoneFrame6Objects3= [];
gdjs.IntroCode.GDNewSprite2Objects1= [];
gdjs.IntroCode.GDNewSprite2Objects2= [];
gdjs.IntroCode.GDNewSprite2Objects3= [];
gdjs.IntroCode.GDNewSprite3Objects1= [];
gdjs.IntroCode.GDNewSprite3Objects2= [];
gdjs.IntroCode.GDNewSprite3Objects3= [];


gdjs.IntroCode.eventsList0 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.getGlobalVolume(runtimeScene) == 100;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.IntroCode.GDPurpleButtonWithStoneFrame6Objects1, gdjs.IntroCode.GDPurpleButtonWithStoneFrame6Objects2);

{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}
{for(var i = 0, len = gdjs.IntroCode.GDPurpleButtonWithStoneFrame6Objects2.length ;i < len;++i) {
    gdjs.IntroCode.GDPurpleButtonWithStoneFrame6Objects2[i].SetLabelTextOp("Nyalakan", null);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.getGlobalVolume(runtimeScene) == 0;
if (!elseEventsChainSatisfied && isConditionTrue_0) {
/* Reuse gdjs.IntroCode.GDPurpleButtonWithStoneFrame6Objects1 */
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}
{for(var i = 0, len = gdjs.IntroCode.GDPurpleButtonWithStoneFrame6Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDPurpleButtonWithStoneFrame6Objects1[i].SetLabelTextOp("Matikan", null);
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.IntroCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "how to play");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Setting");
}
{gdjs.evtTools.sound.playMusic(runtimeScene, "Zambolino - Machine (freetouse.com).mp3", true, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithStoneFrame4"), gdjs.IntroCode.GDPurpleButtonWithStoneFrame4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDPurpleButtonWithStoneFrame4Objects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDPurpleButtonWithStoneFrame4Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDPurpleButtonWithStoneFrame4Objects1[k] = gdjs.IntroCode.GDPurpleButtonWithStoneFrame4Objects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDPurpleButtonWithStoneFrame4Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithStoneFrame"), gdjs.IntroCode.GDPurpleButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDPurpleButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDPurpleButtonWithStoneFrameObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDPurpleButtonWithStoneFrameObjects1[k] = gdjs.IntroCode.GDPurpleButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDPurpleButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithStoneFrame2"), gdjs.IntroCode.GDPurpleButtonWithStoneFrame2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDPurpleButtonWithStoneFrame2Objects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDPurpleButtonWithStoneFrame2Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDPurpleButtonWithStoneFrame2Objects1[k] = gdjs.IntroCode.GDPurpleButtonWithStoneFrame2Objects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDPurpleButtonWithStoneFrame2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "how to play");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithStoneFrame3"), gdjs.IntroCode.GDPurpleButtonWithStoneFrame3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDPurpleButtonWithStoneFrame3Objects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDPurpleButtonWithStoneFrame3Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDPurpleButtonWithStoneFrame3Objects1[k] = gdjs.IntroCode.GDPurpleButtonWithStoneFrame3Objects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDPurpleButtonWithStoneFrame3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Setting");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithStoneFrame5"), gdjs.IntroCode.GDPurpleButtonWithStoneFrame5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDPurpleButtonWithStoneFrame5Objects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDPurpleButtonWithStoneFrame5Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDPurpleButtonWithStoneFrame5Objects1[k] = gdjs.IntroCode.GDPurpleButtonWithStoneFrame5Objects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDPurpleButtonWithStoneFrame5Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "how to play");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Setting");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithStoneFrame6"), gdjs.IntroCode.GDPurpleButtonWithStoneFrame6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDPurpleButtonWithStoneFrame6Objects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDPurpleButtonWithStoneFrame6Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDPurpleButtonWithStoneFrame6Objects1[k] = gdjs.IntroCode.GDPurpleButtonWithStoneFrame6Objects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDPurpleButtonWithStoneFrame6Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.IntroCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDNewSpriteObjects1.length = 0;
gdjs.IntroCode.GDNewSpriteObjects2.length = 0;
gdjs.IntroCode.GDNewSpriteObjects3.length = 0;
gdjs.IntroCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.IntroCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.IntroCode.GDPurpleButtonWithStoneFrameObjects3.length = 0;
gdjs.IntroCode.GDPurpleButtonWithStoneFrame2Objects1.length = 0;
gdjs.IntroCode.GDPurpleButtonWithStoneFrame2Objects2.length = 0;
gdjs.IntroCode.GDPurpleButtonWithStoneFrame2Objects3.length = 0;
gdjs.IntroCode.GDPurpleButtonWithStoneFrame3Objects1.length = 0;
gdjs.IntroCode.GDPurpleButtonWithStoneFrame3Objects2.length = 0;
gdjs.IntroCode.GDPurpleButtonWithStoneFrame3Objects3.length = 0;
gdjs.IntroCode.GDPurpleButtonWithStoneFrame4Objects1.length = 0;
gdjs.IntroCode.GDPurpleButtonWithStoneFrame4Objects2.length = 0;
gdjs.IntroCode.GDPurpleButtonWithStoneFrame4Objects3.length = 0;
gdjs.IntroCode.GDPurpleButtonWithStoneFrame5Objects1.length = 0;
gdjs.IntroCode.GDPurpleButtonWithStoneFrame5Objects2.length = 0;
gdjs.IntroCode.GDPurpleButtonWithStoneFrame5Objects3.length = 0;
gdjs.IntroCode.GDPurpleButtonWithStoneFrame6Objects1.length = 0;
gdjs.IntroCode.GDPurpleButtonWithStoneFrame6Objects2.length = 0;
gdjs.IntroCode.GDPurpleButtonWithStoneFrame6Objects3.length = 0;
gdjs.IntroCode.GDNewSprite2Objects1.length = 0;
gdjs.IntroCode.GDNewSprite2Objects2.length = 0;
gdjs.IntroCode.GDNewSprite2Objects3.length = 0;
gdjs.IntroCode.GDNewSprite3Objects1.length = 0;
gdjs.IntroCode.GDNewSprite3Objects2.length = 0;
gdjs.IntroCode.GDNewSprite3Objects3.length = 0;

gdjs.IntroCode.eventsList1(runtimeScene);
gdjs.IntroCode.GDNewSpriteObjects1.length = 0;
gdjs.IntroCode.GDNewSpriteObjects2.length = 0;
gdjs.IntroCode.GDNewSpriteObjects3.length = 0;
gdjs.IntroCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.IntroCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.IntroCode.GDPurpleButtonWithStoneFrameObjects3.length = 0;
gdjs.IntroCode.GDPurpleButtonWithStoneFrame2Objects1.length = 0;
gdjs.IntroCode.GDPurpleButtonWithStoneFrame2Objects2.length = 0;
gdjs.IntroCode.GDPurpleButtonWithStoneFrame2Objects3.length = 0;
gdjs.IntroCode.GDPurpleButtonWithStoneFrame3Objects1.length = 0;
gdjs.IntroCode.GDPurpleButtonWithStoneFrame3Objects2.length = 0;
gdjs.IntroCode.GDPurpleButtonWithStoneFrame3Objects3.length = 0;
gdjs.IntroCode.GDPurpleButtonWithStoneFrame4Objects1.length = 0;
gdjs.IntroCode.GDPurpleButtonWithStoneFrame4Objects2.length = 0;
gdjs.IntroCode.GDPurpleButtonWithStoneFrame4Objects3.length = 0;
gdjs.IntroCode.GDPurpleButtonWithStoneFrame5Objects1.length = 0;
gdjs.IntroCode.GDPurpleButtonWithStoneFrame5Objects2.length = 0;
gdjs.IntroCode.GDPurpleButtonWithStoneFrame5Objects3.length = 0;
gdjs.IntroCode.GDPurpleButtonWithStoneFrame6Objects1.length = 0;
gdjs.IntroCode.GDPurpleButtonWithStoneFrame6Objects2.length = 0;
gdjs.IntroCode.GDPurpleButtonWithStoneFrame6Objects3.length = 0;
gdjs.IntroCode.GDNewSprite2Objects1.length = 0;
gdjs.IntroCode.GDNewSprite2Objects2.length = 0;
gdjs.IntroCode.GDNewSprite2Objects3.length = 0;
gdjs.IntroCode.GDNewSprite3Objects1.length = 0;
gdjs.IntroCode.GDNewSprite3Objects2.length = 0;
gdjs.IntroCode.GDNewSprite3Objects3.length = 0;


return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
