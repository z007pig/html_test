<?php
	$filename=$_FILES["img"]["name"];
	if ($_FILES["img"]["error"] > 0)
	{
		echo "ио╢╚╢МнС";
	}else if(!empty($filename)){
		move_uploaded_file($_FILES["img"]["tmp_name"],"images/{$filename}");
		echo "images/{$filename}";
	}
?>