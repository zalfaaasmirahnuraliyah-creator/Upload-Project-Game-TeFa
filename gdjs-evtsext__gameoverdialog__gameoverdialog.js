
gdjs.evtsExt__GameOverDialog__GameOverDialog = gdjs.evtsExt__GameOverDialog__GameOverDialog || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog = class GameOverDialog extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData, instanceData) {
    super(parentInstanceContainer, objectData, instanceData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._objectData = {};
    
    this._objectData.MaxScore = objectData.content.MaxScore !== undefined ? objectData.content.MaxScore : Number("950") || 0;
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.MaxScore !== newObjectData.content.MaxScore)
      this._objectData.MaxScore = newObjectData.content.MaxScore;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getMaxScore() {
    return this._objectData.MaxScore !== undefined ? this._objectData.MaxScore : Number("950") || 0;
  }
  _setMaxScore(newValue) {
    this._objectData.MaxScore = newValue;
  }

  

  
}

// Methods:
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext = {};
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.idToCallbackMap = new Map();
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDObjectObjects1= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDObjectObjects2= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenBackgroundObjects1= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenBackgroundObjects2= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDRetryButtonObjects1= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDRetryButtonObjects2= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenSubHeadertextObjects1= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenSubHeadertextObjects2= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenHeadeObjects1= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenHeadeObjects2= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDkalahObjects1= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDkalahObjects2= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDkalah2Objects1= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDkalah2Objects2= [];


gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("EndScreenSubHeadertext"), gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenSubHeadertextObjects1);
{for(var i = 0, len = gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenSubHeadertextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenSubHeadertextObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText("You got " + ("" + eventsFunctionContext.getArgument("Score")) + " points!");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((Number(eventsFunctionContext.getArgument("Score")) || 0) < eventsFunctionContext.getObjects("Object")[0]._getMaxScore());
}
if (isConditionTrue_0) {
{/* Unknown object - skipped. */}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((Number(eventsFunctionContext.getArgument("Score")) || 0) >= eventsFunctionContext.getObjects("Object")[0]._getMaxScore());
}
if (isConditionTrue_0) {
{/* Unknown object - skipped. */}
}

}


};

gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScore = function(Score, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDEndScreenBackgroundObjectsList = [...runtimeScene.getObjects("EndScreenBackground")];
var GDEndScreenBackgroundObjects = Hashtable.newFrom({"EndScreenBackground": thisGDEndScreenBackgroundObjectsList});
var thisGDRetryButtonObjectsList = [...runtimeScene.getObjects("RetryButton")];
var GDRetryButtonObjects = Hashtable.newFrom({"RetryButton": thisGDRetryButtonObjectsList});
var thisGDEndScreenSubHeadertextObjectsList = [...runtimeScene.getObjects("EndScreenSubHeadertext")];
var GDEndScreenSubHeadertextObjects = Hashtable.newFrom({"EndScreenSubHeadertext": thisGDEndScreenSubHeadertextObjectsList});
var thisGDEndScreenHeadeObjectsList = [...runtimeScene.getObjects("EndScreenHeade")];
var GDEndScreenHeadeObjects = Hashtable.newFrom({"EndScreenHeade": thisGDEndScreenHeadeObjectsList});
var thisGDkalahObjectsList = [...runtimeScene.getObjects("kalah")];
var GDkalahObjects = Hashtable.newFrom({"kalah": thisGDkalahObjectsList});
var thisGDkalah2ObjectsList = [...runtimeScene.getObjects("kalah2")];
var GDkalah2Objects = Hashtable.newFrom({"kalah2": thisGDkalah2ObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "EndScreenBackground": GDEndScreenBackgroundObjects
, "RetryButton": GDRetryButtonObjects
, "EndScreenSubHeadertext": GDEndScreenSubHeadertextObjects
, "EndScreenHeade": GDEndScreenHeadeObjects
, "kalah": GDkalahObjects
, "kalah2": GDkalah2Objects
},
  _objectArraysMap: {
"Object": thisObjectList
, "EndScreenBackground": thisGDEndScreenBackgroundObjectsList
, "RetryButton": thisGDRetryButtonObjectsList
, "EndScreenSubHeadertext": thisGDEndScreenSubHeadertextObjectsList
, "EndScreenHeade": thisGDEndScreenHeadeObjectsList
, "kalah": thisGDkalahObjectsList
, "kalah2": thisGDkalah2ObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("GameOverDialog"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("GameOverDialog"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Score") return Score;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenBackgroundObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenBackgroundObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDRetryButtonObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDRetryButtonObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenSubHeadertextObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenSubHeadertextObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenHeadeObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenHeadeObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDkalahObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDkalahObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDkalah2Objects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDkalah2Objects2.length = 0;

gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenBackgroundObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenBackgroundObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDRetryButtonObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDRetryButtonObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenSubHeadertextObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenSubHeadertextObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenHeadeObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenHeadeObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDkalahObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDkalahObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDkalah2Objects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDkalah2Objects2.length = 0;


return;
}
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext = {};
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.idToCallbackMap = new Map();
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDObjectObjects1= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDObjectObjects2= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenBackgroundObjects1= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenBackgroundObjects2= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDRetryButtonObjects1= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDRetryButtonObjects2= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenSubHeadertextObjects1= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenSubHeadertextObjects2= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenHeadeObjects1= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenHeadeObjects2= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDkalahObjects1= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDkalahObjects2= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDkalah2Objects1= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDkalah2Objects2= [];


gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("RetryButton"), gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDRetryButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDRetryButtonObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDRetryButtonObjects1[i].IsClicked(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDRetryButtonObjects1[k] = gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDRetryButtonObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDRetryButtonObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClicked = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDEndScreenBackgroundObjectsList = [...runtimeScene.getObjects("EndScreenBackground")];
var GDEndScreenBackgroundObjects = Hashtable.newFrom({"EndScreenBackground": thisGDEndScreenBackgroundObjectsList});
var thisGDRetryButtonObjectsList = [...runtimeScene.getObjects("RetryButton")];
var GDRetryButtonObjects = Hashtable.newFrom({"RetryButton": thisGDRetryButtonObjectsList});
var thisGDEndScreenSubHeadertextObjectsList = [...runtimeScene.getObjects("EndScreenSubHeadertext")];
var GDEndScreenSubHeadertextObjects = Hashtable.newFrom({"EndScreenSubHeadertext": thisGDEndScreenSubHeadertextObjectsList});
var thisGDEndScreenHeadeObjectsList = [...runtimeScene.getObjects("EndScreenHeade")];
var GDEndScreenHeadeObjects = Hashtable.newFrom({"EndScreenHeade": thisGDEndScreenHeadeObjectsList});
var thisGDkalahObjectsList = [...runtimeScene.getObjects("kalah")];
var GDkalahObjects = Hashtable.newFrom({"kalah": thisGDkalahObjectsList});
var thisGDkalah2ObjectsList = [...runtimeScene.getObjects("kalah2")];
var GDkalah2Objects = Hashtable.newFrom({"kalah2": thisGDkalah2ObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "EndScreenBackground": GDEndScreenBackgroundObjects
, "RetryButton": GDRetryButtonObjects
, "EndScreenSubHeadertext": GDEndScreenSubHeadertextObjects
, "EndScreenHeade": GDEndScreenHeadeObjects
, "kalah": GDkalahObjects
, "kalah2": GDkalah2Objects
},
  _objectArraysMap: {
"Object": thisObjectList
, "EndScreenBackground": thisGDEndScreenBackgroundObjectsList
, "RetryButton": thisGDRetryButtonObjectsList
, "EndScreenSubHeadertext": thisGDEndScreenSubHeadertextObjectsList
, "EndScreenHeade": thisGDEndScreenHeadeObjectsList
, "kalah": thisGDkalahObjectsList
, "kalah2": thisGDkalah2ObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("GameOverDialog"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("GameOverDialog"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenBackgroundObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenBackgroundObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDRetryButtonObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDRetryButtonObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenSubHeadertextObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenSubHeadertextObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenHeadeObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenHeadeObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDkalahObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDkalahObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDkalah2Objects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDkalah2Objects2.length = 0;

gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenBackgroundObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenBackgroundObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDRetryButtonObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDRetryButtonObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenSubHeadertextObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenSubHeadertextObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenHeadeObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenHeadeObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDkalahObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDkalahObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDkalah2Objects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDkalah2Objects2.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.doStepPreEvents = function() {
  this._instanceContainer.getOnceTriggers().startNewFrame();
};


gdjs.registerObject("GameOverDialog::GameOverDialog", gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog);
