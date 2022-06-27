function typeMaxCount() {
	maxMain = 5;
	maxSub = 10;
	
	return maxMain, maxSub;
}

function createLogTypeName(arg1, arg2) {

var Type_e_e = 'undefined|undefined|undefined|undefined|undefined|undefined|undefined|undefined|undefined|undefined';

var Type_0_0 = 'Type0|Type0_Log0|Param0|Param1|Param2|Param3|Param4|Param5|Param6|Param7';
var Type_0_1 = 'Type0|Type0_Log1|Param0|Param1|Param2|Param3|Param4|Param5|Param6|Param7';
var Type_0_2 = 'Type0|Type0_Log2|Param0|Param1|Param2|Param3|Param4|Param5|Param6|Param7';
var Type_0_3 = 'Type0|Type0_Log3|Param0|Param1|Param2|Param3|Param4|Param5|Param6|Param7';
var Type_0_4 = 'Type0|Type0_Log4|Param0|Param1|Param2|Param3|Param4|Param5|Param6|Param7';
var Type_0_5 = 'Type0|Type0_Log5|Param0|Param1|Param2|Param3|Param4|Param5|Param6|Param7';
var Type_1_0 = 'Type1|Type1_Log0|Param0|Param1|Param2|Param3|Param4|Param5|Param6|Param7';
var Type_1_1 = 'Type1|Type1_Log1|Param0|Param1|Param2|Param3|Param4|Param5|Param6|Param7';
var Type_1_2 = 'Type1|Type1_Log2|Param0|Param1|Param2|Param3|Param4|Param5|Param6|Param7';
var Type_1_3 = 'Type1|Type1_Log3|Param0|Param1|Param2|Param3|Param4|Param5|Param6|Param7';
var Type_1_4 = 'Type1|Type1_Log4|Param0|Param1|Param2|Param3|Param4|Param5|Param6|Param7';
var Type_1_5 = 'Type1|Type1_Log5|Param0|Param1|Param2|Param3|Param4|Param5|Param6|Param7';
var Type_1_6 = 'Type1|Type1_Log6|Param0|Param1|Param2|Param3|Param4|Param5|Param6|Param7';
var Type_1_7 = 'Type1|Type1_Log7|Param0|Param1|Param2|Param3|Param4|Param5|Param6|Param7';
var Type_1_8 = 'Type1|Type1_Log8|Param0|Param1|Param2|Param3|Param4|Param5|Param6|Param7';
var Type_1_9 = 'Type1|Type1_Log9|Param0|Param1|Param2|Param3|Param4|Param5|Param6|Param7';
var Type_2_0 = 'Type2|Type2_Log0|Param0|Param1|Param2|Param3|Param4|Param5|Param6|Param7';
var Type_2_1 = 'Type2|Type2_Log1|Param0|Param1|Param2|Param3|Param4|Param5|Param6|Param7';
var Type_2_2 = 'Type2|Type2_Log2|Param0|Param1|Param2|Param3|Param4|Param5|Param6|Param7';
var Type_3_0 = 'Type3|Type3_Log0|Param0|Param1|Param2|Param3|Param4|Param5|Param6|Param7';
var Type_4_0 = 'Type4|Type4_Log0|Param0|Param1|Param2|Param3|Param4|Param5|Param6|Param7';
var Type_4_1 = 'Type4|Type4_Log1|Param0|Param1|Param2|Param3|Param4|Param5|Param6|Param7';
var Type_4_2 = 'Type4|Type4_Log2|Param0|Param1|Param2|Param3|Param4|Param5|Param6|Param7';
var Type_4_3 = 'Type4|Type4_Log3|Param0|Param1|Param2|Param3|Param4|Param5|Param6|Param7';
var Type_4_4 = 'Type4|Type4_Log4|Param0|Param1|Param2|Param3|Param4|Param5|Param6|Param7';
var Type_4_5 = 'Type4|Type4_Log5|Param0|Param1|Param2|Param3|Param4|Param5|Param6|Param7';
var Type_4_6 = 'Type4|Type4_Log6|Param0|Param1|Param2|Param3|Param4|Param5|Param6|Param7';
var Type_4_7 = 'Type4|Type4_Log7|Param0|Param1|Param2|Param3|Param4|Param5|Param6|Param7';

	var mainType = arg1;
	var subType = arg2;
	
	var typeString = "Type_" + mainType + "_" + subType;
	typeSplit = eval(typeString).split("|");
	return typeSplit;
}