var flow = {};

flow["deepCopy"] = function(objName){
  var str = JSON.stringify(flow[objName]);
  var newObj = JSON.parse(str);
  return newObj;
};
flow["getObjWithName"] = function(objName, DisplayName, ID){
  var str = JSON.stringify(flow[objName]);

  if(isNaN(ID))
  {
      str = str.replace(/TBD_1/g, DisplayName).replace("i=TBD_2", "s=TBD_2").replace(/TBD_2/g, ID);
  }
  else
  {
      str = str.replace(/TBD_1/g, DisplayName).replace("s=TBD_2", "i=TBD_2").replace(/TBD_2/g, ID);
  }

  var newObj = JSON.parse(str);
  return newObj;
};
flow["getVarWithName"] = function(objName, DisplayName, ID, FolderID){
  if(flow[objName] === undefined)
  {
    throw new Error('data type "' + objName.slice(11)/* remove word"varTemplate" */ + '" is not defined!');
  }

  var str = JSON.stringify(flow[objName]);

  if(FolderID === "") //不帶資料夾，必須改文本內容(第二個reference為i=85；extension的ParentNodeId的text為Objects)
  {
    str = str.replace("ns=1;s=TBD_3","i=85").replace("TBD_3","Objects");
  }

  if(isNaN(ID))
  {
      str = str.replace(/TBD_1/g, DisplayName).replace(/TBD_2/g, ID).replace(/TBD_3/g, FolderID);
  }
  else
  {
      str = str.replace(/TBD_1/g, DisplayName).replace(/s=TBD_2/g, "i=TBD_2").replace(/TBD_2/g, ID).replace(/TBD_3/g, FolderID);
  }
  var newObj = JSON.parse(str);
  return newObj;
};

flow["xmlTemplate"]={"UANodeSet":{"$":{"xmlns:xsi":"http://www.w3.org/2001/XMLSchema-instance","xmlns:uax":"http://opcfoundation.org/UA/2008/02/Types.xsd","xmlns":"http://opcfoundation.org/UA/2011/03/UANodeSet.xsd","xmlns:s1":"http://myNamespace.com/Types.xsd","xmlns:ua":"http://unifiedautomation.com/Configuration/NodeSet.xsd","xmlns:xsd":"http://www.w3.org/2001/XMLSchema"},"NamespaceUris":[{"Uri":["http://www.nexcom.com.tw/NexUA/"]}],"Aliases":[{"Alias":[{"_":"i=35","$":{"Alias":"Organizes"}},{"_":"i=40","$":{"Alias":"HasTypeDefinition"}},{"_":"i=1","$":{"Alias":"Boolean"}},{"_":"i=46","$":{"Alias":"HasProperty"}},{"_":"i=3","$":{"Alias":"Byte"}},{"_":"i=13","$":{"Alias":"DateTime"}},{"_":"i=11","$":{"Alias":"Double"}},{"_":"i=10","$":{"Alias":"Float"}},{"_":"i=4","$":{"Alias":"Int16"}},{"_":"i=6","$":{"Alias":"Int32"}},{"_":"i=8","$":{"Alias":"Int64"}},{"_":"i=2","$":{"Alias":"SByte"}},{"_":"i=5","$":{"Alias":"UInt16"}},{"_":"i=7","$":{"Alias":"UInt32"}},{"_":"i=9","$":{"Alias":"UInt64"}},{"_":"i=12","$":{"Alias":"String"}}]}],"UAObject":[],"UAVariable":[]}};
flow["folderTemplate"]={"$":{"EventNotifier":"0","NodeId":"ns=1;s=TBD_2","BrowseName":"1:TBD_1"},"DisplayName":[{"_":"TBD_1","$":{"Locale":""}}],"Description":[{"$":{"Locale":""}}],"References":[{"Reference":[{"_":"i=61","$":{"ReferenceType":"HasTypeDefinition"}},{"_":"i=85","$":{"ReferenceType":"Organizes","IsForward":"false"}}]}],"Extensions":[{"Extension":[{"ua:Description":[{"$":{"Configuration":"image=2;add=1;del=1;copy=0;modelling=0","ParentNodeId":"text=Objects;ns=1;i=TBD_2","Types":"text=FolderType","Alias":"text=Organizes;i=35"}}]}]}]};
flow["refFolderTemplate"]={"_":"ns=1;s=TBD_2", "$":{"ReferenceType":"Organizes"}};
flow["refObjectTemplate"]={"_":"ns=1;s=TBD_2", "$":{"ReferenceType":"HasProperty"}};
flow["varTemplateBoolean"]={"$":{"DataType":"Boolean","Historizing":"false","NodeId":"ns=1;s=TBD_2","BrowseName":"1:TBD_1","ValueRank":"-1","MinimumSamplingInterval":"0.00","UserAccessLevel":"0","AccessLevel":"3"},"DisplayName":[{"_":"TBD_1","$":{"Locale":""}}],"Description":[{"$":{"Locale":""}}],"References":[{"Reference":[{"_":"i=62","$":{"ReferenceType":"HasTypeDefinition"}},{"_":"ns=1;s=TBD_3","$":{"ReferenceType":"HasProperty","IsForward":"false"}}]}],"Extensions":[{"Extension":[{"ua:Description":[{"$":{"Configuration":"image=4;add=1;del=1;copy=0;modelling=0","ParentNodeId":"text=TBD_3;ns=1;s=TBD_2","Types":"text=BaseVariableType;i=1","Alias":"text=HasProperty;i=46","Value":"arraykey=;key=Boolean;valueCount=1;mapValue=Boolean,false;interfaceType=1;arrayDimensions=0","Alarm":"active=0;HH=;H=;L=;LL="}}]}]}],"Value":[{"uax:Boolean":["false"]}]};
flow["varTemplateByte"]={"$":{"DataType":"Byte","Historizing":"false","NodeId":"ns=1;s=TBD_2","BrowseName":"1:TBD_1","ValueRank":"-1","MinimumSamplingInterval":"0.00","UserAccessLevel":"0","AccessLevel":"3"},"DisplayName":[{"_":"TBD_1","$":{"Locale":""}}],"Description":[{"$":{"Locale":""}}],"References":[{"Reference":[{"_":"i=62","$":{"ReferenceType":"HasTypeDefinition"}},{"_":"ns=1;s=TBD_3","$":{"ReferenceType":"HasProperty","IsForward":"false"}}]}],"Extensions":[{"Extension":[{"ua:Description":[{"$":{"Configuration":"image=4;add=1;del=1;copy=0;modelling=0","ParentNodeId":"text=TBD_3;ns=1;s=TBD_2","Types":"text=BaseVariableType;i=3","Alias":"text=HasProperty;i=46","Value":"arraykey=;key=Byte;valueCount=1;mapValue=Byte,0;interfaceType=1;arrayDimensions=0","Alarm":"active=0;HH=;H=;L=;LL="}}]}]}],"Value":[{"uax:Byte":["0"]}]};
flow["varTemplateDateTime"]={"$":{"DataType":"DateTime","Historizing":"false","NodeId":"ns=1;s=TBD_2","BrowseName":"1:TBD_1","ValueRank":"-1","MinimumSamplingInterval":"0.00","UserAccessLevel":"0","AccessLevel":"3"},"DisplayName":[{"_":"TBD_1","$":{"Locale":""}}],"Description":[{"$":{"Locale":""}}],"References":[{"Reference":[{"_":"i=62","$":{"ReferenceType":"HasTypeDefinition"}},{"_":"ns=1;s=TBD_3","$":{"ReferenceType":"HasProperty","IsForward":"false"}}]}],"Extensions":[{"Extension":[{"ua:Description":[{"$":{"Configuration":"image=4;add=1;del=1;copy=0;modelling=0","ParentNodeId":"text=TBD_3;ns=1;s=TBD_2","Types":"text=BaseVariableType;i=13","Alias":"text=HasProperty;i=46","Value":"arraykey=;key=DateTime;valueCount=1;mapValue=DateTime,2022-07-13 09:05:52.000Z;interfaceType=6;arrayDimensions=0","Alarm":"active=0;HH=;H=;L=;LL="}}]}]}],"Value":[{"uax:DateTime":["2022-07-13 09:05:52.000Z"]}]};
flow["varTemplateDouble"]={"$":{"DataType":"Double","Historizing":"false","NodeId":"ns=1;s=TBD_2","BrowseName":"1:TBD_1","ValueRank":"-1","MinimumSamplingInterval":"0.00","UserAccessLevel":"0","AccessLevel":"3"},"DisplayName":[{"_":"TBD_1","$":{"Locale":""}}],"Description":[{"$":{"Locale":""}}],"References":[{"Reference":[{"_":"i=62","$":{"ReferenceType":"HasTypeDefinition"}},{"_":"ns=1;s=TBD_3","$":{"ReferenceType":"HasProperty","IsForward":"false"}}]}],"Extensions":[{"Extension":[{"ua:Description":[{"$":{"Configuration":"image=4;add=1;del=1;copy=0;modelling=0","ParentNodeId":"text=TBD_3;ns=1;s=TBD_2","Types":"text=BaseVariableType;i=11","Alias":"text=HasProperty;i=46","Value":"arraykey=;key=Double;valueCount=1;mapValue=Double,0.000000;interfaceType=1;arrayDimensions=0","Alarm":"active=0;HH=;H=;L=;LL="}}]}]}],"Value":[{"uax:Double":["0.000000"]}]};
flow["varTemplateFloat"]={"$":{"DataType":"Float","Historizing":"false","NodeId":"ns=1;s=TBD_2","BrowseName":"1:TBD_1","ValueRank":"-1","MinimumSamplingInterval":"0.00","UserAccessLevel":"0","AccessLevel":"3"},"DisplayName":[{"_":"TBD_1","$":{"Locale":""}}],"Description":[{"$":{"Locale":""}}],"References":[{"Reference":[{"_":"i=62","$":{"ReferenceType":"HasTypeDefinition"}},{"_":"ns=1;s=TBD_3","$":{"ReferenceType":"HasProperty","IsForward":"false"}}]}],"Extensions":[{"Extension":[{"ua:Description":[{"$":{"Configuration":"image=4;add=1;del=1;copy=0;modelling=0","ParentNodeId":"text=TBD_3;ns=1;s=TBD_2","Types":"text=BaseVariableType;i=10","Alias":"text=HasProperty;i=46","Value":"arraykey=;key=Float;valueCount=1;mapValue=Float,0.000000;interfaceType=1;arrayDimensions=0","Alarm":"active=0;HH=;H=;L=;LL="}}]}]}],"Value":[{"uax:Float":["0.000000"]}]};
flow["varTemplateInt16"]={"$":{"DataType":"Int16","Historizing":"false","NodeId":"ns=1;s=TBD_2","BrowseName":"1:TBD_1","ValueRank":"-1","MinimumSamplingInterval":"0.00","UserAccessLevel":"0","AccessLevel":"3"},"DisplayName":[{"_":"TBD_1","$":{"Locale":""}}],"Description":[{"$":{"Locale":""}}],"References":[{"Reference":[{"_":"i=62","$":{"ReferenceType":"HasTypeDefinition"}},{"_":"ns=1;s=TBD_3","$":{"ReferenceType":"HasProperty","IsForward":"false"}}]}],"Extensions":[{"Extension":[{"ua:Description":[{"$":{"Configuration":"image=4;add=1;del=1;copy=0;modelling=0","ParentNodeId":"text=TBD_3;ns=1;s=TBD_2","Types":"text=BaseVariableType;i=4","Alias":"text=HasProperty;i=46","Value":"arraykey=;key=Int16;valueCount=1;mapValue=Int16,0;interfaceType=1;arrayDimensions=0","Alarm":"active=0;HH=;H=;L=;LL="}}]}]}],"Value":[{"uax:Int16":["0"]}]};
flow["varTemplateInt32"]={"$":{"DataType":"Int32","Historizing":"false","NodeId":"ns=1;s=TBD_2","BrowseName":"1:TBD_1","ValueRank":"-1","MinimumSamplingInterval":"0.00","UserAccessLevel":"0","AccessLevel":"3"},"DisplayName":[{"_":"TBD_1","$":{"Locale":""}}],"Description":[{"$":{"Locale":""}}],"References":[{"Reference":[{"_":"i=62","$":{"ReferenceType":"HasTypeDefinition"}},{"_":"ns=1;s=TBD_3","$":{"ReferenceType":"HasProperty","IsForward":"false"}}]}],"Extensions":[{"Extension":[{"ua:Description":[{"$":{"Configuration":"image=4;add=1;del=1;copy=0;modelling=0","ParentNodeId":"text=TBD_3;ns=1;s=TBD_2","Types":"text=BaseVariableType;i=6","Alias":"text=HasProperty;i=46","Value":"arraykey=;key=Int32;valueCount=1;mapValue=Int32,0;interfaceType=1;arrayDimensions=0","Alarm":"active=0;HH=;H=;L=;LL="}}]}]}],"Value":[{"uax:Int32":["0"]}]};
flow["varTemplateInt64"]={"$":{"DataType":"Int64","Historizing":"false","NodeId":"ns=1;s=TBD_2","BrowseName":"1:TBD_1","ValueRank":"-1","MinimumSamplingInterval":"0.00","UserAccessLevel":"0","AccessLevel":"3"},"DisplayName":[{"_":"TBD_1","$":{"Locale":""}}],"Description":[{"$":{"Locale":""}}],"References":[{"Reference":[{"_":"i=62","$":{"ReferenceType":"HasTypeDefinition"}},{"_":"ns=1;s=TBD_3","$":{"ReferenceType":"HasProperty","IsForward":"false"}}]}],"Extensions":[{"Extension":[{"ua:Description":[{"$":{"Configuration":"image=4;add=1;del=1;copy=0;modelling=0","ParentNodeId":"text=TBD_3;ns=1;s=TBD_2","Types":"text=BaseVariableType;i=8","Alias":"text=HasProperty;i=46","Value":"arraykey=;key=Int64;valueCount=1;mapValue=Int64,0;interfaceType=1;arrayDimensions=0","Alarm":"active=0;HH=;H=;L=;LL="}}]}]}],"Value":[{"uax:Int64":["0"]}]};
flow["varTemplateSByte"]={"$":{"DataType":"SByte","Historizing":"false","NodeId":"ns=1;s=TBD_2","BrowseName":"1:TBD_1","ValueRank":"-1","MinimumSamplingInterval":"0.00","UserAccessLevel":"0","AccessLevel":"3"},"DisplayName":[{"_":"TBD_1","$":{"Locale":""}}],"Description":[{"$":{"Locale":""}}],"References":[{"Reference":[{"_":"i=62","$":{"ReferenceType":"HasTypeDefinition"}},{"_":"ns=1;s=TBD_3","$":{"ReferenceType":"HasProperty","IsForward":"false"}}]}],"Extensions":[{"Extension":[{"ua:Description":[{"$":{"Configuration":"image=4;add=1;del=1;copy=0;modelling=0","ParentNodeId":"text=TBD_3;ns=1;s=TBD_2","Types":"text=BaseVariableType;i=2","Alias":"text=HasProperty;i=46","Value":"arraykey=;key=SByte;valueCount=1;mapValue=SByte,0;interfaceType=1;arrayDimensions=0","Alarm":"active=0;HH=;H=;L=;LL="}}]}]}],"Value":[{"uax:SByte":["0"]}]};
flow["varTemplateUInt16"]={"$":{"DataType":"UInt16","Historizing":"false","NodeId":"ns=1;s=TBD_2","BrowseName":"1:TBD_1","ValueRank":"-1","MinimumSamplingInterval":"0.00","UserAccessLevel":"0","AccessLevel":"3"},"DisplayName":[{"_":"TBD_1","$":{"Locale":""}}],"Description":[{"$":{"Locale":""}}],"References":[{"Reference":[{"_":"i=62","$":{"ReferenceType":"HasTypeDefinition"}},{"_":"ns=1;s=TBD_3","$":{"ReferenceType":"HasProperty","IsForward":"false"}}]}],"Extensions":[{"Extension":[{"ua:Description":[{"$":{"Configuration":"image=4;add=1;del=1;copy=0;modelling=0","ParentNodeId":"text=TBD_3;ns=1;s=TBD_2","Types":"text=BaseVariableType;i=5","Alias":"text=HasProperty;i=46","Value":"arraykey=;key=UInt16;valueCount=1;mapValue=UInt16,0;interfaceType=1;arrayDimensions=0","Alarm":"active=0;HH=;H=;L=;LL="}}]}]}],"Value":[{"uax:UInt16":["0"]}]};
flow["varTemplateUInt32"]={"$":{"DataType":"UInt32","Historizing":"false","NodeId":"ns=1;s=TBD_2","BrowseName":"1:TBD_1","ValueRank":"-1","MinimumSamplingInterval":"0.00","UserAccessLevel":"0","AccessLevel":"3"},"DisplayName":[{"_":"TBD_1","$":{"Locale":""}}],"Description":[{"$":{"Locale":""}}],"References":[{"Reference":[{"_":"i=62","$":{"ReferenceType":"HasTypeDefinition"}},{"_":"ns=1;s=TBD_3","$":{"ReferenceType":"HasProperty","IsForward":"false"}}]}],"Extensions":[{"Extension":[{"ua:Description":[{"$":{"Configuration":"image=4;add=1;del=1;copy=0;modelling=0","ParentNodeId":"text=TBD_3;ns=1;s=TBD_2","Types":"text=BaseVariableType;i=7","Alias":"text=HasProperty;i=46","Value":"arraykey=;key=UInt32;valueCount=1;mapValue=UInt32,0;interfaceType=1;arrayDimensions=0","Alarm":"active=0;HH=;H=;L=;LL="}}]}]}],"Value":[{"uax:UInt32":["0"]}]};
flow["varTemplateUInt64"]={"$":{"DataType":"UInt64","Historizing":"false","NodeId":"ns=1;s=TBD_2","BrowseName":"1:TBD_1","ValueRank":"-1","MinimumSamplingInterval":"0.00","UserAccessLevel":"0","AccessLevel":"3"},"DisplayName":[{"_":"TBD_1","$":{"Locale":""}}],"Description":[{"$":{"Locale":""}}],"References":[{"Reference":[{"_":"i=62","$":{"ReferenceType":"HasTypeDefinition"}},{"_":"ns=1;s=TBD_3","$":{"ReferenceType":"HasProperty","IsForward":"false"}}]}],"Extensions":[{"Extension":[{"ua:Description":[{"$":{"Configuration":"image=4;add=1;del=1;copy=0;modelling=0","ParentNodeId":"text=TBD_3;ns=1;s=TBD_2","Types":"text=BaseVariableType;i=9","Alias":"text=HasProperty;i=46","Value":"arraykey=;key=UInt64;valueCount=1;mapValue=UInt64,0;interfaceType=1;arrayDimensions=0","Alarm":"active=0;HH=;H=;L=;LL="}}]}]}],"Value":[{"uax:UInt64":["0"]}]};
flow["varTemplateString"]={"$":{"DataType":"String","Historizing":"false","NodeId":"ns=1;s=TBD_2","BrowseName":"1:TBD_1","ValueRank":"-1","MinimumSamplingInterval":"0.00","UserAccessLevel":"0","AccessLevel":"3"},"DisplayName":[{"_":"TBD_1","$":{"Locale":""}}],"Description":[{"$":{"Locale":""}}],"References":[{"Reference":[{"_":"i=62","$":{"ReferenceType":"HasTypeDefinition"}},{"_":"ns=1;s=TBD_3","$":{"ReferenceType":"HasProperty","IsForward":"false"}}]}],"Extensions":[{"Extension":[{"ua:Description":[{"$":{"Configuration":"image=4;add=1;del=1;copy=0;modelling=0","ParentNodeId":"text=TBD_3;ns=1;s=TBD_2","Types":"text=BaseVariableType;i=12","Alias":"text=HasProperty;i=46","Value":"arraykey=;key=String;valueCount=1;mapValue=String,;interfaceType=1;arrayDimensions=0","Alarm":"active=0;HH=;H=;L=;LL="}}]}]}],"Value":[{"uax:String":[""]}]};

flow["newXML"] = function(){
  var obj = flow["deepCopy"]("xmlTemplate");
  return obj;
};

flow["insertFolderWithName"] = function(xml, parentFolder, name){
  var aID = name;
  //若有parent folder，就調整ID
  if(parentFolder !== null && parentFolder !== undefined)
  {
      aID = parentFolder["$"].NodeId.slice(7)/*去掉"ns=1;s="的部分*/ + "." + name;
  }
  var folder = flow["getObjWithName"]("folderTemplate", name, aID);
  //若有parent folder，改變References[0].Reference[1]["_"] (本來是i=85，要改成parent folder的id)，並在parent folder加ref
  if(parentFolder !== null && parentFolder !== undefined)
  {
      folder.References[0].Reference[1]["_"] = parentFolder["$"].NodeId;
      flow["insertRefWithName"](parentFolder, aID, true);
  }
  xml.UANodeSet.UAObject.push(folder);
  return folder;
};

flow["insertRefWithName"] = function(folder, name, isFolder){
  if(folder === null)
  {
    return;
  }
  var ref;
  if(isFolder)
  {
      ref = flow["getObjWithName"]("refFolderTemplate", name, name);
  }
  else
  {
      ref = flow["getObjWithName"]("refObjectTemplate", name, name);
  }
  folder.References[0].Reference.push(ref);
  return ref;
};

flow["insertVariableWithName"] = function(xml, folder, type, name, numericID = -1){
  var aID, folderID;
  if(folder !== null)
  {
    aID = folder["$"].NodeId.slice(7)/*去掉"ns=1;s="的部分*/ + "." + name;
    folderID = folder["$"].NodeId.slice(7)/*去掉"ns=1;s="的部分*/;//folder.DisplayName[0]["_"];
  }
  else
  {
    aID = name;
    folderID = "";
  }
  if(numericID !== -1)
  {
    aID = numericID;
  }
  var aVar = flow["getVarWithName"]("varTemplate" + uniType(type), name, aID, folderID);
  flow["insertRefWithName"](folder, aID, false);
  xml.UANodeSet.UAVariable.push(aVar);
  return aVar
};

flow["newUAObjWithName"] = function(name){
  var obj = flow["getObjWithName"]("folderTemplate", name);
  return obj;
};

function uniType(type)
{
  type = type.toLowerCase();
  if(type === "bool" || type === "boolean" || type === "bit")
  {
    return "Boolean";
  }
  else if(type === "byte" || type === "char")
  {
    return "Byte";
  }
  else if(type === "datetime")
  {
    return "DateTime";
  }
  else if(type === "double")
  {
    return "Double";
  }
  else if(type === "float")
  {
    return "Float";
  }
  else if(type === "int16" || type === "short")
  {
    return "Int16";
  }
  else if(type === "uint16" || type === "unsignedshort" || type === "unsigned short")
  {
    return "UInt16";
  }
  else if(type === "int32" || type === "int" || type === "integer" || type === "number")
  {
    return "Int32";
  }
  else if(type === "uint32" || type === "unsignedint"  || type === "unsigned int")
  {
    return "UInt32";
  }
  else if(type === "int64" || type === "long" || type === "long integer")
  {
    return "Int64";
  }
  else if(type === "uint64" || type === "unsignedlong" || type === "unsigned long")
  {
    return "UInt64";
  }
  else if(type === "sbyte" || type === "signed char")
  {
    return "Sbyte";
  }
  else if(type === "string" || type === "str")
  {
    return "String";
  }

  return "";
}

var csvPath, xmlPath;

const fs = require('fs');
const { toLower } = require('lodash');
var argv = require('minimist')(process.argv.slice(2));
if(argv.s === undefined)
{
  console.log('Please enter the CSV path like: \r\n -s "C:/csvexample.csv"\r\nThe default path is "./in.csv"');
  csvPath = "in.csv";
}
else
{
  csvPath = argv.s;
}
if(argv.d === undefined)
{
  console.log('Please enter the CSV path like: \r\n -d "C:/xmlexample.xml"\r\nThe default path is "./out.xml"');
  xmlPath = "out.xml";
}
else
{
  xmlPath = argv.d
}

fs.readFile(csvPath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  //以下把data轉成jsonObject
  data = data.replace(/\t/g, ",");
  var jsonObj = {};
  data.split('\r\n').forEach((aRow, index)=>{
      if(aRow.indexOf(',') !== -1)
      {
        var cols = aRow.split(',');
        //如果單純2格，第二格通過「資料型別測驗」，表示格式為  變數名稱,資料型別
        if(cols.length === 2 && uniType(cols[1]) !== "")
        {
          var name = cols[0];
          var type = cols[1];

          var folders = name.split(".");
          var folderObj = jsonObj;
          for(var i = 0; i < folders.length-1; i++)
          {
            if(folderObj[folders[i]] === undefined)
            {
              folderObj[folders[i]] = {};
            }
            folderObj = folderObj[folders[i]];
          }
          folderObj[folders[i]] = type;
        }
        
      }
  });
  //以下是把jsonObj轉成xmlObj
  function browseFolder(xmlObj, folder, name, value, varID = -1)
  {
      if(typeof value === 'string')  //這是一個變數
      {
          flow["insertVariableWithName"](xmlObj, folder, value, name, varID);
          if(varID !== -1)
          {
            varID++;
          }
      }
      else if(typeof value === 'object')  //這是一個資料夾
      {
          var aFolder = flow["insertFolderWithName"](xmlObj, folder, name);
          for (const [subName, subValue] of Object.entries(value)) {
              varID = browseFolder(xmlObj, aFolder, subName, subValue, varID);
          }
      }
      return varID;
  }

  var xmlObj_s = flow["newXML"]();
  var xmlObj_i = flow["newXML"]();

  for (const [name, value] of Object.entries(jsonObj)) {
      browseFolder(xmlObj_s, null, name, value);
  }
  var varID = 60001;
  for (const [name, value] of Object.entries(jsonObj)) {
    varID = browseFolder(xmlObj_i, null, name, value, varID);
  }

  //以下把xml物件轉成真的xml
  var xml2js = require('xml2js');
  var builder = new xml2js.Builder();
  var xml = builder.buildObject(xmlObj_s);
  var xml_i = builder.buildObject(xmlObj_i);

  console.log("\r\n\r\nParsing done.\r\n\r\n");

  fs.writeFile(xmlPath, xml, err => {
    if (err) {
      console.error(err);
    }
    console.log("Xml file is created at path '" + xmlPath + "'.");
  });
  var xmlPath_i = xmlPath.replace(".xml", "_i.xml");
  fs.writeFile(xmlPath_i, xml_i, err => {
    if (err) {
      console.error(err);
    }
    console.log("Xml file (numeric id type) is created at path '" + xmlPath_i + "'.");
  });
});