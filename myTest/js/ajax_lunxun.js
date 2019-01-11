var timedd = false;
var p=0;
$(document).ready(function(){

var aaaa= {
"infos": [
{
"completion": 0,
"vppsId": "2f6def0b-5f64-419d-b978-1b210d4d5702",
"testitemNum": 0,
"vppsNo": "80.04",
"ProjectName": "C1UL MY20",
"advpStatus": "Y",
"pid": "",
"sveRoleName": "内饰灯系统SVE",
"title": "[\"sve_vpp4",
"advpstatus3660": "1",
"userid": "999999999",
"advpstatus1411": "1",
"orgid": "999999999",
"isAllot": 0,
"classid": "54ff2fba-f89d-4dc6-b6ab-a850a1068a66",
"newstime": "1525771182221",
"isCheck": 0,
"lastdotime": 1525771182221,
"vppsName": "Charging & Energy Storage",
"istop": 0,
"sveId": "85805c34-a484-4f0f-a7c0-5888bec87066",
"id": "3aa6a0e3-4efb-421a-8fd2-69a7f2171aeb",
"projectId": "5500b9fd-363d-49ad-9076-88e341d8fe8a",
"advpReportAtatus": "R"
},
{
"completion": 0,
"vppsId": "4d05d78d-595f-4cb3-aef6-2459ae0812c1",
"testitemNum": 8,
"vppsNo": "30.05",
"ProjectName": "E2SB MY19.5",
"advpStatus": "W",
"pid": "",
"sveRoleName": "内饰sve",
"title": "[\"sve_vpp3\",\"\"]",
"advpstatus3660": "0",
"userid": "999999999",
"advpstatus1411": "0",
"orgid": "999999999",
"isAllot": 0,
"classid": "54ff2fba-f89d-4dc6-b6ab-a850a1068a66",
"newstime": "1525770915467",
"isCheck": 1,
"lastdotime": 1525770915467,
"vppsName": "Supplemental and Rapid HVAC",
"istop": 0,
"sveId": "85805c34-a484-4f0f-a7c0-5888bec87066",
"id": "a3464df6-77bf-4dcc-9787-26feee4e3e25",
"projectId": "672d6478-1328-4d95-bbe8-4f81297d5a00",
"advpReportAtatus": "R"
},
{
"vppsId": "336aa629-a0e4-42fa-91b8-dabf47e097e0",
"ProjectName": "C1UC Microbas",
"pid": "",
"title": "[\"sve_vpp10\",\"\"]",
"advpstatus3660": "1",
"userid": "85805c34-a484-4f0f-a7c0-5888bec87066",
"advpstatus1411": "",
"isAllot": 0,
"newstime": "1525772369925",
"istop": 0,
"sveId": "85805c34-a484-4f0f-a7c0-5888bec87066",
"id": "3e2c8310-e025-4d84-bb7f-08d5562f0d4e",
"advpReportAtatus": "G",
"completion": 0,
"testitemNum": 0,
"vppsNo": "40.07",
"advpStatus": "R",
"sveRoleName": "内饰灯系统SVE",
"orgid": "9946c6b6-eac3-47d8-bb17-6eac7aa54639",
"classid": "54ff2fba-f89d-4dc6-b6ab-a850a1068a66",
"isCheck": 0,
"lastdotime": 1526804091165,
"vppsName": "Air Bags",
"pids": "3e2c8310-e025-4d84-bb7f-08d5562f0d4e",
"projectId": "5dc57053-a91e-4190-9860-810f7744f67a"
},
{
"vppsId": "534f98a5-3c8a-4ff2-bc29-955a8d1f2c6d",
"ProjectName": "K221",
"vppsstatus1411": "R",
"pid": "",
"title": "[\"sve_vpp7\",\"\"]",
"advpstatus3660": "1",
"userid": "a73dd7eb-5dd1-4531-b7f7-e812d2599294",
"advpstatus1411": "1",
"isAllot": 0,
"newstime": "1525771793816",
"istop": 0,
"sveId": "85805c34-a484-4f0f-a7c0-5888bec87066",
"vppsReportAtatus": "Y",
"id": "e1a237de-9d2d-495d-88d6-f4475b81afac",
"advpReportAtatus": "Y",
"advpcompletion": 1,
"phase": "DV",
"completion": 0,
"vppsStatus": "R",
"testitemNum": 0,
"vppsNo": "60.08",
"advpStatus": "R",
"sveRoleName": "内饰sve",
"orgid": "9946c6b6-eac3-47d8-bb17-6eac7aa54639",
"classid": "54ff2fba-f89d-4dc6-b6ab-a850a1068a66",
"isCheck": 1,
"lastdotime": 1526977109492,
"vppsName": "Wiper & Washer",
"vppsstatus3660": "1",
"pids": "e1a237de-9d2d-495d-88d6-f4475b81afac",
"projectId": "6cfe1336-233b-4e1f-9a15-2bb33f4592e0"
},
{
"vppsId": "36fa9aed-4ba9-4284-9559-ce6eba140584",
"ProjectName": "K216 Export Mexico",
"pid": "",
"title": "[\"sve_vpps1\",\"\"]",
"advpstatus3660": "0",
"userid": "85805c34-a484-4f0f-a7c0-5888bec87066",
"advpstatus1411": "",
"isAllot": 0,
"newstime": "1525764290513",
"istop": 0,
"sveId": "85805c34-a484-4f0f-a7c0-5888bec87066",
"id": "465bdbdf-93a0-49fe-ab3e-22b9a891242d",
"advpReportAtatus": "G",
"completion": 0,
"testitemNum": 0,
"vppsNo": "50",
"advpStatus": "G",
"sveRoleName": "内饰灯系统SVE",
"orgid": "9946c6b6-eac3-47d8-bb17-6eac7aa54639",
"classid": "54ff2fba-f89d-4dc6-b6ab-a850a1068a66",
"isCheck": 1,
"lastdotime": 1526806556964,
"vppsName": "Body",
"pids": "465bdbdf-93a0-49fe-ab3e-22b9a891242d",
"projectId": "5e9cf2bf-3d0a-4408-aa64-dbd5e882b0b1"
},
{
"completion": 0,
"vppsId": "421c1282-6711-4ab1-ae9a-35e29bbbf790",
"testitemNum": 0,
"vppsNo": "80.06",
"ProjectName": "E2LB MY18",
"advpStatus": "Y",
"pid": "",
"sveRoleName": "门槛板SVE",
"title": "[\"sve_vpp3\",\"\"]",
"advpstatus3660": "",
"userid": "999999999",
"advpstatus1411": "",
"orgid": "999999999",
"isAllot": 0,
"classid": "54ff2fba-f89d-4dc6-b6ab-a850a1068a66",
"newstime": "1525770724903",
"isCheck": 1,
"lastdotime": 1525770724903,
"vppsName": "Power & Signal Distributio",
"istop": 0,
"sveId": "85805c34-a484-4f0f-a7c0-5888bec87066",
"id": "5d58eaff-d262-40a8-97d4-6179e8cddcf7",
"projectId": "5f80a7df-6732-41a7-9b03-f208007d0a26",
"advpReportAtatus": "W"
},
{
"completion": 0,
"vppsId": "42f604f6-8115-424d-bb37-35461a0be32b",
"testitemNum": 0,
"vppsNo": "15.01",
"ProjectName": "B121(BEV2 Modified);",
"advpStatus": "G",
"pid": "",
"sveRoleName": "门槛板SVE",
"title": "[\"sve_vpp9\",\"\"]",
"advpstatus3660": "",
"userid": "999999999",
"advpstatus1411": "",
"orgid": "999999999",
"isAllot": 0,
"classid": "54ff2fba-f89d-4dc6-b6ab-a850a1068a66",
"newstime": "1525772243830",
"isCheck": 1,
"lastdotime": 1525772243830,
"vppsName": "Air Inductio",
"istop": 0,
"sveId": "85805c34-a484-4f0f-a7c0-5888bec87066",
"id": "67f6b13c-2657-4611-88cc-3e83f2ff9589",
"projectId": "60747add-40f9-43fb-9f11-2fa8634b7a9b",
"advpReportAtatus": "R"
},
{
"completion": 0,
"vppsId": "469890e2-1b5e-4fc0-b213-c4a500a2803b",
"testitemNum": 0,
"vppsNo": "20.04",
"ProjectName": "G1UX 19MY local program",
"advpStatus": "W",
"pid": "",
"sveRoleName": "门槛板SVE",
"title": "[\"sve_vpp2\",\"\"]",
"advpstatus3660": "",
"userid": "999999999",
"advpstatus1411": "",
"orgid": "999999999",
"isAllot": 0,
"classid": "54ff2fba-f89d-4dc6-b6ab-a850a1068a66",
"newstime": "1525770233964",
"isCheck": 1,
"lastdotime": 1525771234518,
"vppsName": "Brakes",
"istop": 0,
"sveId": "85805c34-a484-4f0f-a7c0-5888bec87066",
"id": "79ceedc2-a60b-48a1-a651-2c6604f068d9",
"projectId": "61b02f3c-2665-48b9-b2ce-9ab4de34fc86",
"advpReportAtatus": "Y"
},
{
"completion": 0,
"vppsId": "4cfdcd70-0058-4e96-9848-b74596757649",
"testitemNum": 0,
"vppsNo": "80",
"ProjectName": "U358 MY19",
"advpStatus": "R",
"pid": "",
"sveRoleName": "门槛板SVE",
"title": "[\"sve_vpp6\",\"\"]",
"advpstatus3660": "",
"userid": "999999999",
"advpstatus1411": "1",
"orgid": "999999999",
"isAllot": 0,
"classid": "54ff2fba-f89d-4dc6-b6ab-a850a1068a66",
"newstime": "1525771625730",
"isCheck": 1,
"lastdotime": 1525771625730,
"vppsName": "Active safety & ELEC Architecture& ELEC Module",
"istop": 0,
"sveId": "85805c34-a484-4f0f-a7c0-5888bec87066",
"id": "928233fd-7609-41cd-964f-088ea3f34d60",
"projectId": "6647afb1-727e-4af2-8b2b-3d142b2a7b2e",
"advpReportAtatus": "G"
},
{
"vppsId": "534f98a5-3c8a-4ff2-bc29-955a8d1f2c6d",
"ProjectName": "K221",
"vppsstatus1411": "R",
"pid": "",
"title": "[\"sve_vpp7\",\"\"]",
"advpstatus3660": "1",
"userid": "a73dd7eb-5dd1-4531-b7f7-e812d2599294",
"advpstatus1411": "1",
"isAllot": 0,
"newstime": "1525771793816",
"istop": 0,
"sveId": "85805c34-a484-4f0f-a7c0-5888bec87066",
"vppsReportAtatus": "Y",
"id": "e1a237de-9d2d-495d-88d6-f4475b81afac",
"advpReportAtatus": "Y",
"phase": "DV",
"completion": 0,
"vppsStatus": "R",
"testitemNum": 0,
"vppsNo": "60.08",
"advpStatus": "R",
"sveRoleName": "内饰sve",
"orgid": "9946c6b6-eac3-47d8-bb17-6eac7aa54639",
"classid": "54ff2fba-f89d-4dc6-b6ab-a850a1068a66",
"isCheck": 0,
"lastdotime": 1526977109492,
"vppsName": "Wiper & Washer",
"vppsstatus3660": "1",
"pids": "e1a237de-9d2d-495d-88d6-f4475b81afac",
"projectId": "6cfe1336-233b-4e1f-9a15-2bb33f4592e0"
},
{
"completion": 0,
"vppsId": "55853b05-3cee-4f80-bf1f-e288bab4f34f",
"testitemNum": 0,
"vppsNo": "40.03",
"ProjectName": "C1UL MY22",
"pid": "",
"sveRoleName": "内饰sve",
"title": "[\"sve_vpp5\",\"\"]",
"userid": "999999999",
"orgid": "999999999",
"isAllot": 0,
"classid": "54ff2fba-f89d-4dc6-b6ab-a850a1068a66",
"newstime": "1525771380688",
"lastdotime": 1525771380688,
"vppsName": "Interior Trim",
"istop": 0,
"sveId": "85805c34-a484-4f0f-a7c0-5888bec87066",
"id": "e5f0a77c-6c19-48ac-b0eb-9a32ed6c8135",
"projectId": "6d423f49-5cb8-489d-bf0e-70c7a3e22020"
}
],
"page": {
"lines": 11,
"page": 1,
"pageSize": 50,
"pageStart": null,
"pages": 1
},
"result": {
"flag": 1,
"id": "",
"msg": "查询成功",
"orgid": "",
"path": "",
"rid": "",
"token": "",
"ttime": "",
"userId": ""
},
"total": null
};

for(var i=0;i<aaaa.infos.length;i++){
	var bbb = aaaa.infos[1].id
	ccc= i;
	console.log(bbb+"&&&&"+ccc);
}













	$("#fgd").click(function(){
		//做一个判断，防止连续多次点击，时钟累加，速度加快。多次连续点击，时钟只运行一次。
		//  if(timedd){}  
		// else{timedd = setInterval("huan()",1000)}
		// 	if($("#bbn").prop("checked")==true){alert("3")}

		$.ajax({
					url: 'http://116.196.117.74:8080/vmm/pub/admin/system/enclosure/Downloadfile.do?fileid=c0f005c9-968a-4dcd-a6f2-7fc784b36a4c',
					type: 'get',
					
					success: function (result) {
						//alert(result.msg);
						
					},
					error: function () { alert("ajax_error！"); }
				});
	});
	// $("#ggd").click(function(){
	// 	for(var i=0;i<json.length;i++){
	// 	var inforjson = '{"id":"","classid":"735d9ac6-2141-4de9-b593-023324885102","pid":"","orgid":"999999999","MileId": "'+json[i].MileId+'", "MileName":"'+json[i].MileName+'","MileSJWeek":"'+json[i].MileSJWeek+'","MileSJDate": "'+json[i].MileSJDate+'", "MilePQRR": "'+json[i].MilePQRR+'","MileState": "'+json[i].MileState+'", "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9","istop":"0"}';
	// 	$.ajax({
	// 				url: 'http://116.196.117.74:8080/vmm/pub/admin/information/Infohtml/updateInfo.do',
	// 				type: 'POST',
	// 				dataType: 'json',
	// 				data: { 'infoJson': inforjson, 'userid': "999999999", 'orgid':"999999999", "classid": "735d9ac6-2141-4de9-b593-023324885102" },
	// 				success: function (result) {
	// 					//alert(result.msg);
						
	// 				},
	// 				error: function () { alert("ajax_error！"); }
	// 			});
	// }

			// clearInterval(timedd);
			// timedd=false;
			// $("#bbn").attr("checked",false);
	//});
});
function huan(){
	$.ajax({
		url:"ajax/ajax_test.php",
		data:{"url":"hmxx.xuexicheng.cn/1ei1q.html","interface":"json"},
		async:true,
		ajaxStart: function() {}, //ajax开始时的function。(例如:开始时，数据加载中图表显示)
		complete: function() {},  //ajax完成后的function。(例如:完成后，数据加载中图表隐藏)
		success : function (data) {
			var reg=new RegExp("[\\s\\S]*<!--[\\s\\S]*?-->[^\\{]*([\\s\\S]*)","gmi");
			var data1 = data.replace(reg,"$1");
			var d1=JSON.parse(data1);
			if(d1.data.length>0){p++}
				$("#newpic").html(p);
		}
	});
}
var json = [
            {
                "MileId": "577",
                "MileName": "AFI",
                "MileSJWeek": "-249",
                "MileSJDate": "2015-07-30",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "578",
                "MileName": "PQRR AFI",
                "MileSJWeek": "-249",
                "MileSJDate": "2015-07-30",
                "MilePQRR": "1",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "579",
                "MileName": "AFWS",
                "MileSJWeek": "-247",
                "MileSJDate": "2015-08-13",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "580",
                "MileName": "ROS",
                "MileSJWeek": "-241",
                "MileSJDate": "2015-09-24",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "581",
                "MileName": "AEFW",
                "MileSJWeek": "-239",
                "MileSJDate": "2015-10-08",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "582",
                "MileName": "ACC",
                "MileSJWeek": "-236",
                "MileSJDate": "2015-10-29",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "583",
                "MileName": "ASSI Check-In",
                "MileSJWeek": "-227",
                "MileSJDate": "2015-12-31",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "584",
                "MileName": "PQRR ASSI",
                "MileSJWeek": "-223",
                "MileSJDate": "2016-01-28",
                "MilePQRR": "1",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "585",
                "MileName": "VVA ASSI",
                "MileSJWeek": "-219",
                "MileSJDate": "2016-02-25",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "586",
                "MileName": "PQRR PFI",
                "MileSJWeek": "-218",
                "MileSJDate": "2016-03-03",
                "MilePQRR": "1",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "587",
                "MileName": "PFI",
                "MileSJWeek": "-217",
                "MileSJDate": "2016-03-10",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "588",
                "MileName": "ASSI Review",
                "MileSJWeek": "-217",
                "MileSJDate": "2016-03-10",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "589",
                "MileName": "COS",
                "MileSJWeek": "-213",
                "MileSJDate": "2016-04-07",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "590",
                "MileName": "ADC",
                "MileSJWeek": "-208",
                "MileSJDate": "2016-05-12",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "591",
                "MileName": "Initial VDS",
                "MileSJWeek": "-205",
                "MileSJDate": "2016-06-02",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "592",
                "MileName": "MSR/TVR",
                "MileSJWeek": "-205",
                "MileSJDate": "2016-06-02",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "593",
                "MileName": "PFC",
                "MileSJWeek": "-205",
                "MileSJDate": "2016-06-02",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "594",
                "MileName": "Pre-DSI CCCS",
                "MileSJWeek": "-203",
                "MileSJDate": "2016-06-16",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "595",
                "MileName": "SP VVA AA/DSI",
                "MileSJWeek": "-202",
                "MileSJDate": "2016-06-23",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "596",
                "MileName": "Initial MPL",
                "MileSJWeek": "-199",
                "MileSJDate": "2016-07-14",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "597",
                "MileName": "TEC",
                "MileSJWeek": "-198",
                "MileSJDate": "2016-07-21",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "598",
                "MileName": "PDC",
                "MileSJWeek": "-197",
                "MileSJDate": "2016-07-28",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "599",
                "MileName": "DSI Check-In",
                "MileSJWeek": "-197",
                "MileSJDate": "2016-07-28",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "600",
                "MileName": "VVA AA/DSI",
                "MileSJWeek": "-195",
                "MileSJDate": "2016-08-11",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "601",
                "MileName": "PQRR DSI",
                "MileSJWeek": "-155",
                "MileSJDate": "2017-05-18",
                "MilePQRR": "1",
                "MileState": "3",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "602",
                "MileName": "PQRR AA",
                "MileSJWeek": "-194",
                "MileSJDate": "2016-08-18",
                "MilePQRR": "1",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "603",
                "MileName": "AA",
                "MileSJWeek": "-193",
                "MileSJDate": "2016-08-25",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "604",
                "MileName": "DSI",
                "MileSJWeek": "-193",
                "MileSJDate": "2016-08-25",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "605",
                "MileName": "DTA",
                "MileSJWeek": "-184",
                "MileSJDate": "2016-10-27",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "606",
                "MileName": "TMD-P",
                "MileSJWeek": "-180",
                "MileSJDate": "2016-11-24",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "607",
                "MileName": "AD",
                "MileSJWeek": "-173",
                "MileSJDate": "2017-01-12",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "608",
                "MileName": "TC",
                "MileSJWeek": "-171",
                "MileSJDate": "2017-01-26",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "609",
                "MileName": "SP VVA VPI",
                "MileSJWeek": "-170",
                "MileSJDate": "2017-02-02",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "610",
                "MileName": "DMPBR",
                "MileSJWeek": "-170",
                "MileSJDate": "2017-02-02",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "611",
                "MileName": "ARC",
                "MileSJWeek": "-169",
                "MileSJDate": "2017-02-09",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "612",
                "MileName": "Exec PPC Rev",
                "MileSJWeek": "-168",
                "MileSJDate": "2017-02-16",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "613",
                "MileName": "STD",
                "MileSJWeek": "-166",
                "MileSJDate": "2017-03-02",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "614",
                "MileName": "VPI PPDR",
                "MileSJWeek": "-164",
                "MileSJDate": "2017-03-16",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "615",
                "MileName": "VVA VPI",
                "MileSJWeek": "-163",
                "MileSJDate": "2017-03-23",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "616",
                "MileName": "PQRR VPI",
                "MileSJWeek": "-163",
                "MileSJDate": "2017-03-23",
                "MilePQRR": "1",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "617",
                "MileName": "VPI",
                "MileSJWeek": "-162",
                "MileSJDate": "2017-03-30",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "618",
                "MileName": "Mule BOM",
                "MileSJWeek": "-160",
                "MileSJDate": "2017-04-13",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "619",
                "MileName": "VDS",
                "MileSJWeek": "-158",
                "MileSJDate": "2017-04-27",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "620",
                "MileName": "STMD",
                "MileSJWeek": "-158",
                "MileSJDate": "2017-04-27",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "621",
                "MileName": "1st SW",
                "MileSJWeek": "-157",
                "MileSJDate": "2017-05-04",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "622",
                "MileName": "MPL",
                "MileSJWeek": "-154",
                "MileSJDate": "2017-05-25",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "623",
                "MileName": "Intial Elec Bench Bld",
                "MileSJWeek": "-150",
                "MileSJDate": "2017-06-22",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "624",
                "MileName": "Re-Config Thermal Bench",
                "MileSJWeek": "-150",
                "MileSJDate": "2017-06-22",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "625",
                "MileName": "SP VVA DSO",
                "MileSJWeek": "-148",
                "MileSJDate": "2017-07-06",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "626",
                "MileName": "ABIW DATA",
                "MileSJWeek": "-148",
                "MileSJDate": "2017-07-06",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "627",
                "MileName": "L1 CVER",
                "MileSJWeek": "-148",
                "MileSJDate": "2017-07-06",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "628",
                "MileName": "Mule-BIW MRD",
                "MileSJWeek": "-147",
                "MileSJDate": "2017-07-13",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "629",
                "MileName": "Mule-BIW",
                "MileSJWeek": "-146",
                "MileSJDate": "2017-07-20",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "630",
                "MileName": "ESO",
                "MileSJWeek": "-145",
                "MileSJDate": "2017-07-27",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "631",
                "MileName": "Mule-Powertrain Dyno Kit MRD",
                "MileSJWeek": "-143",
                "MileSJDate": "2017-08-10",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "632",
                "MileName": "Mule-GA MRD",
                "MileSJWeek": "-143",
                "MileSJDate": "2017-08-10",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "633",
                "MileName": "VCC",
                "MileSJWeek": "-142",
                "MileSJDate": "2017-08-17",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "634",
                "MileName": "Mule-GA",
                "MileSJWeek": "-142",
                "MileSJDate": "2017-08-17",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "635",
                "MileName": "VVA DSO",
                "MileSJWeek": "-140",
                "MileSJDate": "2017-08-31",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "636",
                "MileName": "CV MMR",
                "MileSJWeek": "-140",
                "MileSJDate": "2017-08-31",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "637",
                "MileName": "L1 SVER",
                "MileSJWeek": "-140",
                "MileSJDate": "2017-08-31",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "638",
                "MileName": "Ped Pro MRD",
                "MileSJWeek": "-139",
                "MileSJDate": "2017-09-07",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "639",
                "MileName": "FMC",
                "MileSJWeek": "-139",
                "MileSJDate": "2017-09-07",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "640",
                "MileName": "PQRR DSO",
                "MileSJWeek": "-151",
                "MileSJDate": "2017-06-13",
                "MilePQRR": "1",
                "MileState": "2",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "641",
                "MileName": "DSO",
                "MileSJWeek": "-138",
                "MileSJDate": "2017-09-14",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "642",
                "MileName": "Build Ped Pro",
                "MileSJWeek": "-138",
                "MileSJDate": "2017-09-14",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "643",
                "MileName": "1st Ped Pro",
                "MileSJWeek": "-134",
                "MileSJDate": "2017-10-12",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "644",
                "MileName": "50% SW",
                "MileSJWeek": "-134",
                "MileSJDate": "2017-10-12",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "645",
                "MileName": "SF",
                "MileSJWeek": "-134",
                "MileSJDate": "2017-10-12",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "646",
                "MileName": "1Whl VDR",
                "MileSJWeek": "-132",
                "MileSJDate": "2017-10-26",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "647",
                "MileName": "CVER",
                "MileSJWeek": "-128",
                "MileSJDate": "2017-11-23",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "648",
                "MileName": "SP VSVA",
                "MileSJWeek": "-128",
                "MileSJDate": "2017-11-23",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "649",
                "MileName": "SV MMR",
                "MileSJWeek": "-128",
                "MileSJDate": "2017-11-23",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "650",
                "MileName": "L1 IVER",
                "MileSJWeek": "-128",
                "MileSJDate": "2017-11-23",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "651",
                "MileName": "PQRR CSO",
                "MileSJWeek": "-151",
                "MileSJDate": "2017-06-13",
                "MilePQRR": "1",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "652",
                "MileName": "CSO",
                "MileSJWeek": "-126",
                "MileSJDate": "2017-12-07",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "653",
                "MileName": "DIVPBR",
                "MileSJWeek": "-125",
                "MileSJDate": "2017-12-14",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "654",
                "MileName": "IDR",
                "MileSJWeek": "-124",
                "MileSJDate": "2017-12-21",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "655",
                "MileName": "ATSR",
                "MileSJWeek": "-123",
                "MileSJDate": "2017-12-28",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "656",
                "MileName": "IDR GTO",
                "MileSJWeek": "-122",
                "MileSJDate": "2018-01-04",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "657",
                "MileName": "VSVA",
                "MileSJWeek": "-120",
                "MileSJDate": "2018-01-18",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "658",
                "MileName": "50% Cal",
                "MileSJWeek": "-119",
                "MileSJDate": "2018-01-25",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "659",
                "MileName": "IV PPDR",
                "MileSJWeek": "-118",
                "MileSJDate": "2018-02-01",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "660",
                "MileName": "VDR sm",
                "MileSJWeek": "-118",
                "MileSJDate": "2018-02-01",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "661",
                "MileName": "VDR Ext",
                "MileSJWeek": "-116",
                "MileSJDate": "2018-02-15",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "662",
                "MileName": "SVER/IVBR",
                "MileSJWeek": "-116",
                "MileSJDate": "2018-02-15",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "663",
                "MileName": "IV MMR",
                "MileSJWeek": "-116",
                "MileSJDate": "2018-02-15",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "664",
                "MileName": "SP VIVA",
                "MileSJWeek": "-116",
                "MileSJDate": "2018-02-15",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "665",
                "MileName": "GTO IVBR",
                "MileSJWeek": "-115",
                "MileSJDate": "2018-02-22",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "666",
                "MileName": "IVB SW",
                "MileSJWeek": "-115",
                "MileSJDate": "2018-02-22",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "667",
                "MileName": "IV Bench Bld",
                "MileSJWeek": "-113",
                "MileSJDate": "2018-03-08",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "668",
                "MileName": "Pgm Spec Thermal Bench",
                "MileSJWeek": "-113",
                "MileSJDate": "2018-03-08",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "669",
                "MileName": "IV BOM",
                "MileSJWeek": "-112",
                "MileSJDate": "2018-03-15",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "670",
                "MileName": "VDR  GTO",
                "MileSJWeek": "-112",
                "MileSJDate": "2018-03-15",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "671",
                "MileName": "VDR  Int",
                "MileSJWeek": "-112",
                "MileSJDate": "2018-03-15",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "672",
                "MileName": "PQRR VDR",
                "MileSJWeek": "-151",
                "MileSJDate": "2017-06-13",
                "MilePQRR": "1",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "673",
                "MileName": "VIVA",
                "MileSJWeek": "-108",
                "MileSJDate": "2018-04-12",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "674",
                "MileName": "MRD Elec HVF Build",
                "MileSJWeek": "-101",
                "MileSJDate": "2018-05-31",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "675",
                "MileName": "Elec HVF Build",
                "MileSJWeek": "-101",
                "MileSJDate": "2018-05-31",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "676",
                "MileName": "IVVB",
                "MileSJWeek": "-107",
                "MileSJDate": "2018-04-19",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "677",
                "MileName": "IV Powertrain Dyno Kit MRD",
                "MileSJWeek": "-106",
                "MileSJDate": "2018-04-26",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "678",
                "MileName": "LL IVER",
                "MileSJWeek": "-104",
                "MileSJDate": "2018-05-10",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "679",
                "MileName": "IVER",
                "MileSJWeek": "-101",
                "MileSJDate": "2018-05-31",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "680",
                "MileName": "SP VA",
                "MileSJWeek": "-99",
                "MileSJDate": "2018-06-14",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "681",
                "MileName": "IV-Body MRD",
                "MileSJWeek": "-98",
                "MileSJDate": "2018-06-21",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "682",
                "MileName": "IV-Body",
                "MileSJWeek": "-97",
                "MileSJDate": "2018-06-28",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "683",
                "MileName": "PQRR IVS",
                "MileSJWeek": "-96",
                "MileSJDate": "2018-07-05",
                "MilePQRR": "1",
                "MileState": "3",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "684",
                "MileName": "65% SW",
                "MileSJWeek": "-96",
                "MileSJDate": "2018-07-05",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "685",
                "MileName": "IV-GA MRD",
                "MileSJWeek": "-95",
                "MileSJDate": "2018-07-12",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "686",
                "MileName": "IV-GA",
                "MileSJWeek": "-94",
                "MileSJDate": "2018-07-19",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "687",
                "MileName": "FIVC",
                "MileSJWeek": "-91",
                "MileSJDate": "2018-08-09",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "688",
                "MileName": "GTO P",
                "MileSJWeek": "-88",
                "MileSJDate": "2018-08-30",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "689",
                "MileName": "65% Cal",
                "MileSJWeek": "-75",
                "MileSJDate": "2018-11-29",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "690",
                "MileName": "65% BOR",
                "MileSJWeek": "-73",
                "MileSJDate": "2018-12-13",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "691",
                "MileName": "Body NPN",
                "MileSJWeek": "-63",
                "MileSJDate": "2019-02-21",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "692",
                "MileName": "PQRR IVE",
                "MileSJWeek": "-69",
                "MileSJDate": "2019-01-10",
                "MilePQRR": "1",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "693",
                "MileName": "80% SW",
                "MileSJWeek": "-66",
                "MileSJDate": "2019-01-31",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "694",
                "MileName": "ED Parts MRD",
                "MileSJWeek": "-64",
                "MileSJDate": "2019-02-14",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "695",
                "MileName": "100% Acces P Release",
                "MileSJWeek": "-62",
                "MileSJDate": "2019-02-28",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "696",
                "MileName": "BIW CVER MRD",
                "MileSJWeek": "-58",
                "MileSJDate": "2019-03-28",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "697",
                "MileName": "Matching BIW",
                "MileSJWeek": "-57",
                "MileSJDate": "2019-04-04",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "698",
                "MileName": "GA NPN",
                "MileSJWeek": "-56",
                "MileSJDate": "2019-04-11",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "699",
                "MileName": "80% Cal",
                "MileSJWeek": "-55",
                "MileSJDate": "2019-04-18",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "700",
                "MileName": "ED Cal",
                "MileSJWeek": "-53",
                "MileSJDate": "2019-05-02",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "701",
                "MileName": "80% BOR",
                "MileSJWeek": "-52",
                "MileSJDate": "2019-05-09",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "702",
                "MileName": "BIW SVER MRD",
                "MileSJWeek": "-52",
                "MileSJDate": "2019-05-09",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "703",
                "MileName": "PPAP M",
                "MileSJWeek": "-52",
                "MileSJDate": "2019-05-09",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "704",
                "MileName": "Export WI",
                "MileSJWeek": "-52",
                "MileSJDate": "2019-05-09",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "705",
                "MileName": "MVR",
                "MileSJWeek": "-52",
                "MileSJDate": "2019-05-09",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "706",
                "MileName": "PPVVB",
                "MileSJWeek": "-50",
                "MileSJDate": "2019-05-23",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "707",
                "MileName": "NCT BIW MRD",
                "MileSJWeek": "-50",
                "MileSJDate": "2019-05-23",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "708",
                "MileName": "PPV PPDR",
                "MileSJWeek": "-49",
                "MileSJDate": "2019-05-30",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "709",
                "MileName": "BIW IVER MRD",
                "MileSJWeek": "-49",
                "MileSJDate": "2019-05-30",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "710",
                "MileName": "M1 GA MRD",
                "MileSJWeek": "-49",
                "MileSJDate": "2019-05-30",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "711",
                "MileName": "NCT BIW Bld",
                "MileSJWeek": "-49",
                "MileSJDate": "2019-05-30",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "712",
                "MileName": "M1",
                "MileSJWeek": "-48",
                "MileSJDate": "2019-06-06",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "713",
                "MileName": "Final  Elec. Bench Bld",
                "MileSJWeek": "-48",
                "MileSJDate": "2019-06-06",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "714",
                "MileName": "Red Zone",
                "MileSJWeek": "-48",
                "MileSJDate": "2019-06-06",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "715",
                "MileName": "99% SW",
                "MileSJWeek": "-47",
                "MileSJDate": "2019-06-13",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "716",
                "MileName": "MCB",
                "MileSJWeek": "-47",
                "MileSJDate": "2019-06-13",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "717",
                "MileName": "PPAP NS BIW",
                "MileSJWeek": "-46",
                "MileSJDate": "2019-06-20",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "718",
                "MileName": "NCT GA MRD",
                "MileSJWeek": "-44",
                "MileSJDate": "2019-07-04",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "719",
                "MileName": "NCT GA Bld",
                "MileSJWeek": "-43",
                "MileSJDate": "2019-07-11",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "720",
                "MileName": "PPV-BIW MRD",
                "MileSJWeek": "-43",
                "MileSJDate": "2019-07-11",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "721",
                "MileName": "FNCTVA",
                "MileSJWeek": "-40",
                "MileSJDate": "2019-08-01",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "722",
                "MileName": "PPAP NS GA",
                "MileSJWeek": "-39",
                "MileSJDate": "2019-08-08",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "723",
                "MileName": "99% Cal",
                "MileSJWeek": "-37",
                "MileSJDate": "2019-08-22",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "724",
                "MileName": "Matching 2 GA MRD",
                "MileSJWeek": "-36",
                "MileSJDate": "2019-08-29",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "725",
                "MileName": "PQRR PPV",
                "MileSJWeek": "-36",
                "MileSJDate": "2019-08-29",
                "MilePQRR": "1",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "726",
                "MileName": "PPV-GA MRD",
                "MileSJWeek": "-36",
                "MileSJDate": "2019-08-29",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "727",
                "MileName": "100% S Release",
                "MileSJWeek": "-35",
                "MileSJDate": "2019-09-05",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "728",
                "MileName": "SW NPN",
                "MileSJWeek": "-36",
                "MileSJDate": "2019-08-29",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "729",
                "MileName": "FPPV BIW",
                "MileSJWeek": "-36",
                "MileSJDate": "2019-08-29",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "730",
                "MileName": "PPV-GA",
                "MileSJWeek": "-35",
                "MileSJDate": "2019-09-05",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "731",
                "MileName": "M2",
                "MileSJWeek": "-35",
                "MileSJDate": "2019-09-05",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "732",
                "MileName": "FPPVA",
                "MileSJWeek": "-32",
                "MileSJDate": "2019-09-26",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "733",
                "MileName": "MVBns -Body MRD",
                "MileSJWeek": "-29",
                "MileSJDate": "2019-10-17",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "734",
                "MileName": "100% SW",
                "MileSJWeek": "-29",
                "MileSJDate": "2019-10-17",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "735",
                "MileName": "FATG",
                "MileSJWeek": "-28",
                "MileSJDate": "2019-10-24",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "736",
                "MileName": "100% BOR",
                "MileSJWeek": "-25",
                "MileSJDate": "2019-11-14",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "737",
                "MileName": "100% Cal",
                "MileSJWeek": "-24",
                "MileSJDate": "2019-11-21",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "738",
                "MileName": "MVBns -GA MRD",
                "MileSJWeek": "-24",
                "MileSJDate": "2019-11-21",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "739",
                "MileName": "PQRR MVBNS",
                "MileSJWeek": "-24",
                "MileSJDate": "2019-11-21",
                "MilePQRR": "1",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "740",
                "MileName": "VTC",
                "MileSJWeek": "-24",
                "MileSJDate": "2019-11-21",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "741",
                "MileName": "CCC Application",
                "MileSJWeek": "-24",
                "MileSJDate": "2019-11-21",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "742",
                "MileName": "MVBns",
                "MileSJWeek": "-23",
                "MileSJDate": "2019-11-28",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "743",
                "MileName": "AAR Complete",
                "MileSJWeek": "-20",
                "MileSJDate": "2019-12-19",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "744",
                "MileName": "MVBns CTF",
                "MileSJWeek": "-20",
                "MileSJDate": "2019-12-19",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "745",
                "MileName": "VDC",
                "MileSJWeek": "-18",
                "MileSJDate": "2020-01-02",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "746",
                "MileName": "PPAP Gate",
                "MileSJWeek": "-16",
                "MileSJDate": "2020-01-16",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "747",
                "MileName": "MRD MVBs-Body",
                "MileSJWeek": "-15",
                "MileSJDate": "2020-01-23",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "748",
                "MileName": "PQRR MVBS",
                "MileSJWeek": "-14",
                "MileSJDate": "2020-01-30",
                "MilePQRR": "1",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "749",
                "MileName": "MVBs-GA MRD",
                "MileSJWeek": "-14",
                "MileSJDate": "2020-01-30",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "750",
                "MileName": "Product Application",
                "MileSJWeek": "-14",
                "MileSJDate": "2020-01-30",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "751",
                "MileName": "RPR Cal",
                "MileSJWeek": "-13",
                "MileSJDate": "2020-02-06",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "752",
                "MileName": "MVBs",
                "MileSJWeek": "-13",
                "MileSJDate": "2020-02-06",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "753",
                "MileName": "ADE MVBs",
                "MileSJWeek": "-11",
                "MileSJDate": "2020-02-20",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "754",
                "MileName": "MVBs CTF",
                "MileSJWeek": "-10",
                "MileSJDate": "2020-02-27",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "755",
                "MileName": "SORP",
                "MileSJWeek": "0",
                "MileSJDate": "2020-05-07",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "756",
                "MileName": "PQRR SORP",
                "MileSJWeek": "0",
                "MileSJDate": "2020-05-07",
                "MilePQRR": "1",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "757",
                "MileName": "PQRR STC",
                "MileSJWeek": "1",
                "MileSJDate": "2020-05-14",
                "MilePQRR": "1",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "758",
                "MileName": "SOS",
                "MileSJWeek": "3",
                "MileSJDate": "2020-05-28",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "759",
                "MileName": "PQRR LTR",
                "MileSJWeek": "12",
                "MileSJDate": "2020-07-30",
                "MilePQRR": "1",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            },
            {
                "MileId": "760",
                "MileName": "PR",
                "MileSJWeek": "52",
                "MileSJDate": "2021-05-06",
                "MilePQRR": "0",
                "MileState": "0",
                "ProjectGuid": "1424f66c-0e01-4767-a694-c9f06ee00cb9"
            }
        ];