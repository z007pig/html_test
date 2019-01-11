function newGuid(){
    var guid = "";
    for (var i=1; i<=32; i++){
        var n = Math.floor(Math.random()*16.0).toString(16);
        guid +=   n;
        if((i==8)||(i==12)||(i==16)||(i==20))
            guid += "-";
    }
    return guid+"";
}
function upgradeDB(request,tablenName)
{
		var db = request.result;//3
		var store = db.createObjectStore(tablenName, {keyPath: "id", autoIncrement:true});
		var titleIndex = store.createIndex("uuid", "uuid", {unique: true});
}
var indexedDBOperator=
{
	"dbName":"personlistnew1",
	"tableName":"person",
	//createDb(this.dbName,this.tableName);//1
	"save":function(data,success,table_name){//2
		var  arguments_length = arguments.length;
		if(arguments_length<=2)
		{
			this.table=this.tableName;
		}
		else{
			this.table=arguments[2];
		}
		if(data.uuid==null ||data.uuid=="")
		{
			data.uuid=newGuid();
		}
		var request = indexedDB.open(this.dbName);
		var table_name = this.table;
		request.onupgradeneeded = function() {
			upgradeDB(request,table_name);
		};
		request.onsuccess = function(e)
		{
			var db = e.target.result;
			db.onerror = function(event) 
			{
			  // Generic error handler for all errors targeted at this database's
			  alert("Database error: " + event.target.errorCode);
			  console.dir(event.target);
			};
			if(db.objectStoreNames.contains(table_name)) 
			{
				var transaction = db.transaction(table_name,"readwrite");  
				transaction.oncomplete = function(event) 
				{
				  //  console.log("All done!");
				};
				transaction.onerror = function(event) 
				{
					// Don't forget to handle errors!
					console.dir(event);
				};
				var objectStore = transaction.objectStore(table_name);
				var requestStore = objectStore.add(data);
				requestStore.onsuccess =function(e)
				{
					if(arguments_length>=2)
					{
						success();
					}
				}
			}
		}
	},
	"deletedb":function(success)
	{
		var deleteDbRequest = indexedDB.deleteDatabase(this.dbName);
		var arguments_length = arguments.length;
		deleteDbRequest.onsuccess = function (event) {
		  // database deleted successfully
			if(arguments_length>0)
			{
				success();
			}
		};
		deleteDbRequest.onerror = function (e) {
		  console.log("Database error: " + e.target.errorCode);
		};
	},
	"list":function(success,table_name){
		var  arguments_length = arguments.length;
		if(arguments_length<=1)
		{
			this.table=this.tableName;
		}
		else{
			this.table=arguments[1];
		}
		if(arguments_length>=1)
		{
			var request = indexedDB.open(this.dbName);
			var table_name = this.table;
			request.onsuccess = function(e)
			{
				var db = e.target.result;
				db.onerror = function(event) 
				{
				  // Generic error handler for all errors targeted at this database's
				  alert("Database error: " + event.target.errorCode);
				  console.dir(event.target);
				};
				if(db.objectStoreNames.contains(table_name)) 
				{
					var transaction = db.transaction(table_name,"readwrite");  
					transaction.oncomplete = function(event) 
					{
					  //  console.log("All done!");
					};
					transaction.onerror = function(event) 
					{
						// Don't forget to handle errors!
						console.dir(event);
					};
					var objectStore = transaction.objectStore(table_name);
					objectStore.openCursor().onsuccess = function(event) 
					{  
						var cursor = event.target.result;  
						if (cursor) 
						{
							var person = cursor.value;
							success(person);
							cursor.continue();
						}
					}
				}
			}
		}
	},
	"delete":function(uuid,success,table_name)
	{
		var  arguments_length = arguments.length;
		if(arguments_length==0)
		{
			return ;
		}
		if(arguments_length<=2)
		{
			this.table=this.tableName;
		}
		else{
			this.table=arguments[2];
		}
		var request = indexedDB.open(this.dbName);
		var table_name=this.tableName;
		request.onsuccess = function(e)
		{
			var db = e.target.result;
			db.onerror = function(event) 
			{
			  // Generic error handler for all errors targeted at this database's
			  alert("Database error: " + event.target.errorCode);
			  console.dir(event.target);
			};
			if(db.objectStoreNames.contains(table_name)) 
			{
				var transaction = db.transaction(table_name,"readwrite");  
				transaction.oncomplete = function(event) 
				{
				  //  console.log("All done!");
				};
				transaction.onerror = function(event) 
				{
					// Don't forget to handle errors!
					console.dir(event);
				};
				var objectStore = transaction.objectStore(table_name);
				objectStore.openCursor().onsuccess = function(event) 
				{  
					var cursor = event.target.result;  
					if (cursor) 
					{
						var person = cursor.value;
						if(person.uuid==uuid)
						{
							var key= cursor.key;
							objectStore.delete(key);
							if(arguments_length>=2)
							{
								success();
							}
						}
						else
						{
							cursor.continue();
						}
					}
				}
			}
		}
	}
}

function createDb(dbName,tablenName)//1
{
	var request = indexedDB.open(dbName);
	request.onupgradeneeded = function() {
	// The database did not previously exist, so create object stores and indexes.
		upgradeDB(request,tablenName);
	};
	request.onsuccess = function(e)
	{
		console.dir(e);
	}
};
$(document).ready(function(){

	$(".createdb").click(function(){
		indexedDBOperator.save({"uuid":"12345","name":"xiaoming","age":"15"});//2	
	});
	
	$(".deletedb").click(function(){
		indexedDBOperator.deletedb();//2	
	});
	if($(".personinfolist").size()>0)
	{
		
		indexedDBOperator.list(function(data){
			var new_tr="<tr><td>"+data.uuid+"</td><td>"+data.name+"</td><td>"+data.age+"</td><td><div class='deletedata'>É¾³ý</div></td></tr>";
			$(".personinfolist").append(new_tr);
			$(".deletedata").click(function(){
				var tr=$(this).parent().parent();
				var uuid=tr.find("td").eq(0).text();
				indexedDBOperator.delete(uuid,function(){
					tr.remove();
				});
			});
		});
		
	}
	
	$("form .submit").click(function(){
		var name = $("form input[name='name']").val();
		var age = $("form input[name='age']").val();
		var data={"name":name,"age":age}
		indexedDBOperator.save(data,function(){
			window.location.href="index.html";
		});
	});
});
