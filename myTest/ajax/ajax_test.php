<?php
error_reporting(E_ALL || ~E_NOTICE);

if(count($_GET)!=0){
	$add=$_GET;
	$result.="method:GET";
	$method="GET";
}
if(count($_POST)!=0){
	$add=$_POST;
	$result.="method:POST";
	$method="POST";
}

$o="";
if(!empty($add)){
	foreach ($add as $key => $value){
		$result.=",$key:$value";
		$o.= "$key=".urlencode($value)."&";  
		$urladd.="&{$key}={$value}";
	}
	$post_data=substr($o,0,-1);  
	$urladd="?".substr($urladd,1);  
	if(!empty($add[sleep])){
		sleep($add[sleep]);
	}
}

$url=$add[url];

if(empty($url)){
	echo $result;
}else{  
	// echo $url.$urladd;
	// echo $post_data;
	$ch = curl_init();  
	//设置
	if($method=="POST"){//post数据
		curl_setopt($ch, CURLOPT_POST, 1); 
		curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);  
		curl_setopt($ch, CURLOPT_HEADER, 0);  
		curl_setopt($ch, CURLOPT_URL,$url);  
	}else{//get数据
		curl_setopt($ch, CURLOPT_HEADER, 0);  
		curl_setopt($ch, CURLOPT_URL,$url.$urladd);  		
	}
	//为了支持cookie  
	curl_setopt($ch, CURLOPT_COOKIEJAR, 'cookie.txt');  
	$result = curl_exec($ch);  
}
?>