var flow = {};

flow.set("deepCopy", function(objName){
    var str = JSON.stringify(flow.get(objName));
    var newObj = JSON.parse(str);
    return newObj;
});
flow.set("getObjWithName", function(objName, DisplayName, ID){
    var str = JSON.stringify(flow.get(objName));
    str = str.replace(/TBD_1/g, DisplayName).replace(/TBD_2/g, ID);
    var newObj = JSON.parse(str);
    return newObj;
});
flow.set("getVarWithName", function(objName, DisplayName, ID, FolderID){
    var str = JSON.stringify(flow.get(objName));
    str = str.replace(/TBD_1/g, DisplayName).replace(/TBD_2/g, ID).replace(/TBD_3/g, FolderID);
    var newObj = JSON.parse(str);
    return newObj;
});

flow.set("xmlTemplate",{"UANodeSet":{"$":{"xmlns:xsi":"http://www.w3.org/2001/XMLSchema-instance","xmlns:uax":"http://opcfoundation.org/UA/2008/02/Types.xsd","xmlns":"http://opcfoundation.org/UA/2011/03/UANodeSet.xsd","xmlns:s1":"http://myNamespace.com/Types.xsd","xmlns:ua":"http://unifiedautomation.com/Configuration/NodeSet.xsd","xmlns:xsd":"http://www.w3.org/2001/XMLSchema"},"NamespaceUris":[{"Uri":["http://www.nexcom.com.tw/NexUA/"]}],"Aliases":[{"Alias":[{"_":"i=35","$":{"Alias":"Organizes"}},{"_":"i=40","$":{"Alias":"HasTypeDefinition"}},{"_":"i=1","$":{"Alias":"Boolean"}},{"_":"i=46","$":{"Alias":"HasProperty"}},{"_":"i=3","$":{"Alias":"Byte"}},{"_":"i=13","$":{"Alias":"DateTime"}},{"_":"i=11","$":{"Alias":"Double"}},{"_":"i=10","$":{"Alias":"Float"}},{"_":"i=4","$":{"Alias":"Int16"}},{"_":"i=6","$":{"Alias":"Int32"}},{"_":"i=8","$":{"Alias":"Int64"}},{"_":"i=2","$":{"Alias":"SByte"}},{"_":"i=5","$":{"Alias":"UInt16"}},{"_":"i=7","$":{"Alias":"UInt32"}},{"_":"i=9","$":{"Alias":"UInt64"}},{"_":"i=12","$":{"Alias":"String"}}]}],"UAObject":[],"UAVariable":[]}});
flow.set("folderTemplate",{"$":{"EventNotifier":"0","NodeId":"ns=1;s=TBD_2","BrowseName":"1:TBD_1"},"DisplayName":[{"_":"TBD_1","$":{"Locale":""}}],"Description":[{"$":{"Locale":""}}],"References":[{"Reference":[{"_":"i=61","$":{"ReferenceType":"HasTypeDefinition"}},{"_":"i=85","$":{"ReferenceType":"Organizes","IsForward":"false"}}]}],"Extensions":[{"Extension":[{"ua:Description":[{"$":{"Configuration":"image=2;add=1;del=1;copy=0;modelling=0","ParentNodeId":"text=Objects;ns=1;i=TBD_2","Types":"text=FolderType","Alias":"text=Organizes;i=35"}}]}]}]});
flow.set("refFolderTemplate", {"_":"ns=1;s=TBD_2", "$":{"ReferenceType":"Organizes"}});
flow.set("refObjectTemplate", {"_":"ns=1;s=TBD_2", "$":{"ReferenceType":"HasProperty"}});
flow.set("varTemplateBoolean", {"$":{"DataType":"Boolean","Historizing":"false","NodeId":"ns=1;s=TBD_2","BrowseName":"1:TBD_1","ValueRank":"-1","MinimumSamplingInterval":"0.00","UserAccessLevel":"0","AccessLevel":"3"},"DisplayName":[{"_":"TBD_1","$":{"Locale":""}}],"Description":[{"$":{"Locale":""}}],"References":[{"Reference":[{"_":"i=62","$":{"ReferenceType":"HasTypeDefinition"}},{"_":"ns=1;s=TBD_3","$":{"ReferenceType":"HasProperty","IsForward":"false"}}]}],"Extensions":[{"Extension":[{"ua:Description":[{"$":{"Configuration":"image=4;add=1;del=1;copy=0;modelling=0","ParentNodeId":"text=TBD_3;ns=1;s=TBD_2","Types":"text=BaseVariableType;i=1","Alias":"text=HasProperty;i=46","Value":"arraykey=;key=Boolean;valueCount=1;mapValue=Boolean,false;interfaceType=1;arrayDimensions=0","Alarm":"active=0;HH=;H=;L=;LL="}}]}]}],"Value":[{"uax:Boolean":["false"]}]});
flow.set("varTemplateByte",     {"$":{"DataType":"Byte","Historizing":"false","NodeId":"ns=1;s=TBD_2","BrowseName":"1:TBD_1","ValueRank":"-1","MinimumSamplingInterval":"0.00","UserAccessLevel":"0","AccessLevel":"3"},"DisplayName":[{"_":"TBD_1","$":{"Locale":""}}],"Description":[{"$":{"Locale":""}}],"References":[{"Reference":[{"_":"i=62","$":{"ReferenceType":"HasTypeDefinition"}},{"_":"ns=1;s=TBD_3","$":{"ReferenceType":"HasProperty","IsForward":"false"}}]}],"Extensions":[{"Extension":[{"ua:Description":[{"$":{"Configuration":"image=4;add=1;del=1;copy=0;modelling=0","ParentNodeId":"text=TBD_3;ns=1;s=TBD_2","Types":"text=BaseVariableType;i=3","Alias":"text=HasProperty;i=46","Value":"arraykey=;key=Byte;valueCount=1;mapValue=Byte,0;interfaceType=1;arrayDimensions=0","Alarm":"active=0;HH=;H=;L=;LL="}}]}]}],"Value":[{"uax:Byte":["0"]}]});
flow.set("varTemplateDateTime", {"$":{"DataType":"DateTime","Historizing":"false","NodeId":"ns=1;s=TBD_2","BrowseName":"1:TBD_1","ValueRank":"-1","MinimumSamplingInterval":"0.00","UserAccessLevel":"0","AccessLevel":"3"},"DisplayName":[{"_":"TBD_1","$":{"Locale":""}}],"Description":[{"$":{"Locale":""}}],"References":[{"Reference":[{"_":"i=62","$":{"ReferenceType":"HasTypeDefinition"}},{"_":"ns=1;s=TBD_3","$":{"ReferenceType":"HasProperty","IsForward":"false"}}]}],"Extensions":[{"Extension":[{"ua:Description":[{"$":{"Configuration":"image=4;add=1;del=1;copy=0;modelling=0","ParentNodeId":"text=TBD_3;ns=1;s=TBD_2","Types":"text=BaseVariableType;i=13","Alias":"text=HasProperty;i=46","Value":"arraykey=;key=DateTime;valueCount=1;mapValue=DateTime,2022-07-13 09:05:52.000Z;interfaceType=6;arrayDimensions=0","Alarm":"active=0;HH=;H=;L=;LL="}}]}]}],"Value":[{"uax:DateTime":["2022-07-13 09:05:52.000Z"]}]});
flow.set("varTemplateDouble",   {"$":{"DataType":"Double","Historizing":"false","NodeId":"ns=1;s=TBD_2","BrowseName":"1:TBD_1","ValueRank":"-1","MinimumSamplingInterval":"0.00","UserAccessLevel":"0","AccessLevel":"3"},"DisplayName":[{"_":"TBD_1","$":{"Locale":""}}],"Description":[{"$":{"Locale":""}}],"References":[{"Reference":[{"_":"i=62","$":{"ReferenceType":"HasTypeDefinition"}},{"_":"ns=1;s=TBD_3","$":{"ReferenceType":"HasProperty","IsForward":"false"}}]}],"Extensions":[{"Extension":[{"ua:Description":[{"$":{"Configuration":"image=4;add=1;del=1;copy=0;modelling=0","ParentNodeId":"text=TBD_3;ns=1;s=TBD_2","Types":"text=BaseVariableType;i=11","Alias":"text=HasProperty;i=46","Value":"arraykey=;key=Double;valueCount=1;mapValue=Double,0.000000;interfaceType=1;arrayDimensions=0","Alarm":"active=0;HH=;H=;L=;LL="}}]}]}],"Value":[{"uax:Double":["0.000000"]}]});
flow.set("varTemplateFloat",    {"$":{"DataType":"Float","Historizing":"false","NodeId":"ns=1;s=TBD_2","BrowseName":"1:TBD_1","ValueRank":"-1","MinimumSamplingInterval":"0.00","UserAccessLevel":"0","AccessLevel":"3"},"DisplayName":[{"_":"TBD_1","$":{"Locale":""}}],"Description":[{"$":{"Locale":""}}],"References":[{"Reference":[{"_":"i=62","$":{"ReferenceType":"HasTypeDefinition"}},{"_":"ns=1;s=TBD_3","$":{"ReferenceType":"HasProperty","IsForward":"false"}}]}],"Extensions":[{"Extension":[{"ua:Description":[{"$":{"Configuration":"image=4;add=1;del=1;copy=0;modelling=0","ParentNodeId":"text=TBD_3;ns=1;s=TBD_2","Types":"text=BaseVariableType;i=10","Alias":"text=HasProperty;i=46","Value":"arraykey=;key=Float;valueCount=1;mapValue=Float,0.000000;interfaceType=1;arrayDimensions=0","Alarm":"active=0;HH=;H=;L=;LL="}}]}]}],"Value":[{"uax:Float":["0.000000"]}]});
flow.set("varTemplateInt16",    {"$":{"DataType":"Int16","Historizing":"false","NodeId":"ns=1;s=TBD_2","BrowseName":"1:TBD_1","ValueRank":"-1","MinimumSamplingInterval":"0.00","UserAccessLevel":"0","AccessLevel":"3"},"DisplayName":[{"_":"TBD_1","$":{"Locale":""}}],"Description":[{"$":{"Locale":""}}],"References":[{"Reference":[{"_":"i=62","$":{"ReferenceType":"HasTypeDefinition"}},{"_":"ns=1;s=TBD_3","$":{"ReferenceType":"HasProperty","IsForward":"false"}}]}],"Extensions":[{"Extension":[{"ua:Description":[{"$":{"Configuration":"image=4;add=1;del=1;copy=0;modelling=0","ParentNodeId":"text=TBD_3;ns=1;s=TBD_2","Types":"text=BaseVariableType;i=4","Alias":"text=HasProperty;i=46","Value":"arraykey=;key=Int16;valueCount=1;mapValue=Int16,0;interfaceType=1;arrayDimensions=0","Alarm":"active=0;HH=;H=;L=;LL="}}]}]}],"Value":[{"uax:Int16":["0"]}]});
flow.set("varTemplateInt32",    {"$":{"DataType":"Int32","Historizing":"false","NodeId":"ns=1;s=TBD_2","BrowseName":"1:TBD_1","ValueRank":"-1","MinimumSamplingInterval":"0.00","UserAccessLevel":"0","AccessLevel":"3"},"DisplayName":[{"_":"TBD_1","$":{"Locale":""}}],"Description":[{"$":{"Locale":""}}],"References":[{"Reference":[{"_":"i=62","$":{"ReferenceType":"HasTypeDefinition"}},{"_":"ns=1;s=TBD_3","$":{"ReferenceType":"HasProperty","IsForward":"false"}}]}],"Extensions":[{"Extension":[{"ua:Description":[{"$":{"Configuration":"image=4;add=1;del=1;copy=0;modelling=0","ParentNodeId":"text=TBD_3;ns=1;s=TBD_2","Types":"text=BaseVariableType;i=6","Alias":"text=HasProperty;i=46","Value":"arraykey=;key=Int32;valueCount=1;mapValue=Int32,0;interfaceType=1;arrayDimensions=0","Alarm":"active=0;HH=;H=;L=;LL="}}]}]}],"Value":[{"uax:Int32":["0"]}]});
flow.set("varTemplateInt64",    {"$":{"DataType":"Int64","Historizing":"false","NodeId":"ns=1;s=TBD_2","BrowseName":"1:TBD_1","ValueRank":"-1","MinimumSamplingInterval":"0.00","UserAccessLevel":"0","AccessLevel":"3"},"DisplayName":[{"_":"TBD_1","$":{"Locale":""}}],"Description":[{"$":{"Locale":""}}],"References":[{"Reference":[{"_":"i=62","$":{"ReferenceType":"HasTypeDefinition"}},{"_":"ns=1;s=TBD_3","$":{"ReferenceType":"HasProperty","IsForward":"false"}}]}],"Extensions":[{"Extension":[{"ua:Description":[{"$":{"Configuration":"image=4;add=1;del=1;copy=0;modelling=0","ParentNodeId":"text=TBD_3;ns=1;s=TBD_2","Types":"text=BaseVariableType;i=8","Alias":"text=HasProperty;i=46","Value":"arraykey=;key=Int64;valueCount=1;mapValue=Int64,0;interfaceType=1;arrayDimensions=0","Alarm":"active=0;HH=;H=;L=;LL="}}]}]}],"Value":[{"uax:Int64":["0"]}]});
flow.set("varTemplateSbyte",    {"$":{"DataType":"SByte","Historizing":"false","NodeId":"ns=1;s=TBD_2","BrowseName":"1:TBD_1","ValueRank":"-1","MinimumSamplingInterval":"0.00","UserAccessLevel":"0","AccessLevel":"3"},"DisplayName":[{"_":"TBD_1","$":{"Locale":""}}],"Description":[{"$":{"Locale":""}}],"References":[{"Reference":[{"_":"i=62","$":{"ReferenceType":"HasTypeDefinition"}},{"_":"ns=1;s=TBD_3","$":{"ReferenceType":"HasProperty","IsForward":"false"}}]}],"Extensions":[{"Extension":[{"ua:Description":[{"$":{"Configuration":"image=4;add=1;del=1;copy=0;modelling=0","ParentNodeId":"text=TBD_3;ns=1;s=TBD_2","Types":"text=BaseVariableType;i=2","Alias":"text=HasProperty;i=46","Value":"arraykey=;key=SByte;valueCount=1;mapValue=SByte,0;interfaceType=1;arrayDimensions=0","Alarm":"active=0;HH=;H=;L=;LL="}}]}]}],"Value":[{"uax:SByte":["0"]}]});
flow.set("varTemplateUInt16",   {"$":{"DataType":"UInt16","Historizing":"false","NodeId":"ns=1;s=TBD_2","BrowseName":"1:TBD_1","ValueRank":"-1","MinimumSamplingInterval":"0.00","UserAccessLevel":"0","AccessLevel":"3"},"DisplayName":[{"_":"TBD_1","$":{"Locale":""}}],"Description":[{"$":{"Locale":""}}],"References":[{"Reference":[{"_":"i=62","$":{"ReferenceType":"HasTypeDefinition"}},{"_":"ns=1;s=TBD_3","$":{"ReferenceType":"HasProperty","IsForward":"false"}}]}],"Extensions":[{"Extension":[{"ua:Description":[{"$":{"Configuration":"image=4;add=1;del=1;copy=0;modelling=0","ParentNodeId":"text=TBD_3;ns=1;s=TBD_2","Types":"text=BaseVariableType;i=5","Alias":"text=HasProperty;i=46","Value":"arraykey=;key=UInt16;valueCount=1;mapValue=UInt16,0;interfaceType=1;arrayDimensions=0","Alarm":"active=0;HH=;H=;L=;LL="}}]}]}],"Value":[{"uax:UInt16":["0"]}]});
flow.set("varTemplateUInt32",   {"$":{"DataType":"UInt32","Historizing":"false","NodeId":"ns=1;s=TBD_2","BrowseName":"1:TBD_1","ValueRank":"-1","MinimumSamplingInterval":"0.00","UserAccessLevel":"0","AccessLevel":"3"},"DisplayName":[{"_":"TBD_1","$":{"Locale":""}}],"Description":[{"$":{"Locale":""}}],"References":[{"Reference":[{"_":"i=62","$":{"ReferenceType":"HasTypeDefinition"}},{"_":"ns=1;s=TBD_3","$":{"ReferenceType":"HasProperty","IsForward":"false"}}]}],"Extensions":[{"Extension":[{"ua:Description":[{"$":{"Configuration":"image=4;add=1;del=1;copy=0;modelling=0","ParentNodeId":"text=TBD_3;ns=1;s=TBD_2","Types":"text=BaseVariableType;i=7","Alias":"text=HasProperty;i=46","Value":"arraykey=;key=UInt32;valueCount=1;mapValue=UInt32,0;interfaceType=1;arrayDimensions=0","Alarm":"active=0;HH=;H=;L=;LL="}}]}]}],"Value":[{"uax:UInt32":["0"]}]});
flow.set("varTemplateUInt64",   {"$":{"DataType":"UInt64","Historizing":"false","NodeId":"ns=1;s=TBD_2","BrowseName":"1:TBD_1","ValueRank":"-1","MinimumSamplingInterval":"0.00","UserAccessLevel":"0","AccessLevel":"3"},"DisplayName":[{"_":"TBD_1","$":{"Locale":""}}],"Description":[{"$":{"Locale":""}}],"References":[{"Reference":[{"_":"i=62","$":{"ReferenceType":"HasTypeDefinition"}},{"_":"ns=1;s=TBD_3","$":{"ReferenceType":"HasProperty","IsForward":"false"}}]}],"Extensions":[{"Extension":[{"ua:Description":[{"$":{"Configuration":"image=4;add=1;del=1;copy=0;modelling=0","ParentNodeId":"text=TBD_3;ns=1;s=TBD_2","Types":"text=BaseVariableType;i=9","Alias":"text=HasProperty;i=46","Value":"arraykey=;key=UInt64;valueCount=1;mapValue=UInt64,0;interfaceType=1;arrayDimensions=0","Alarm":"active=0;HH=;H=;L=;LL="}}]}]}],"Value":[{"uax:UInt64":["0"]}]});
flow.set("varTemplateString",   {"$":{"DataType":"String","Historizing":"false","NodeId":"ns=1;s=TBD_2","BrowseName":"1:TBD_1","ValueRank":"-1","MinimumSamplingInterval":"0.00","UserAccessLevel":"0","AccessLevel":"3"},"DisplayName":[{"_":"TBD_1","$":{"Locale":""}}],"Description":[{"$":{"Locale":""}}],"References":[{"Reference":[{"_":"i=62","$":{"ReferenceType":"HasTypeDefinition"}},{"_":"ns=1;s=TBD_3","$":{"ReferenceType":"HasProperty","IsForward":"false"}}]}],"Extensions":[{"Extension":[{"ua:Description":[{"$":{"Configuration":"image=4;add=1;del=1;copy=0;modelling=0","ParentNodeId":"text=TBD_3;ns=1;s=TBD_2","Types":"text=BaseVariableType;i=12","Alias":"text=HasProperty;i=46","Value":"arraykey=;key=String;valueCount=1;mapValue=String,;interfaceType=1;arrayDimensions=0","Alarm":"active=0;HH=;H=;L=;LL="}}]}]}],"Value":[{"uax:String":[""]}]});

flow.set("newXML", function(){
    var obj = flow.get("deepCopy")("xmlTemplate");
    return obj;
});

flow.set("insertFolderWithName", function(xml, parentFolder, name){
    var aID = name;
    //若有parent folder，就調整ID
    if(parentFolder !== null && parentFolder !== undefined)
    {
        aID = parentFolder["$"].NodeId.slice(7)/*去掉"ns=1;s="的部分*/ + "." + name;
    }
    var folder = flow.get("getObjWithName")("folderTemplate", name, aID);
    //若有parent folder，改變References[0].Reference[1]["_"] (本來是i=85，要改成parent folder的id)，並在parent folder加ref
    if(parentFolder !== null && parentFolder !== undefined)
    {
        folder.References[0].Reference[1]["_"] = parentFolder["$"].NodeId;
        flow.get("insertRefWithName")(parentFolder, aID, true);
    }
    xml.UANodeSet.UAObject.push(folder);
    return folder;
});

flow.set("insertRefWithName", function(folder, name, isFolder){
    var ref;
    if(isFolder)
    {
        ref = flow.get("getObjWithName")("refFolderTemplate", name, name);
    }
    else
    {
        ref = flow.get("getObjWithName")("refObjectTemplate", name, name);
    }
    folder.References[0].Reference.push(ref);
    return ref;
});

flow.set("insertVariableWithName", function(xml, folder, type, name){
    var aID = folder["$"].NodeId.slice(7)/*去掉"ns=1;s="的部分*/ + "." + name;
    var aVar = flow.get("getVarWithName")("varTemplate" + type, name, aID, folder.DisplayName[0]["_"]);
    flow.get("insertRefWithName")(folder, aID, false);
    xml.UANodeSet.UAVariable.push(aVar);
    return aVar
});

flow.set("newUAObjWithName", function(name){
    var obj = flow.get("getObjWithName")("folderTemplate", name);
    return obj;
});