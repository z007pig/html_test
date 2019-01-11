var databasename="persontest";

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

function spandeleteperson(e){
	var spanobject = e;
	var uuid = spanobject.id;
	var request = indexedDB.open(databasename);
	request.onsuccess = function(e)
	{
		var db = e.target.result;
		db.onerror = function(event) 
		{
		  // Generic error handler for all errors targeted at this database's
		  alert("Database error: " + event.target.errorCode);
		  console.dir(event.target);
		};
		if(db.objectStoreNames.contains("person")) 
		{
			var transaction = db.transaction("person","readwrite");  
			transaction.oncomplete = function(event) 
			{
			  //  console.log("All done!");
			};
			transaction.onerror = function(event) 
			{
				// Don't forget to handle errors!
				console.dir(event);
			};
			var objectStore = transaction.objectStore("person");
			/*var uuidindex = objectStore.index("uuid");
			var uuidrange = IDBKeyRange.only(uuid);
			uuidindex.get(uuidrange).onsuccess = function(evt){
				var person = evt.target.result;
				var i=0;
			};
			*/
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
						$(spanobject).parent().parent().remove();
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
function spanupdateperson(e){
	var spanobject = e;
	var uuid = spanobject.id;
	var request = indexedDB.open(databasename);
	request.onsuccess = function(e)
	{
		var db = e.target.result;
		db.onerror = function(event) 
		{
		  // Generic error handler for all errors targeted at this database's
		  alert("Database error: " + event.target.errorCode);
		  console.dir(event.target);
		};
		if(db.objectStoreNames.contains("person")) 
		{
			var transaction = db.transaction("person","readwrite");  
			transaction.oncomplete = function(event) 
			{
			  //  console.log("All done!");
			};
			transaction.onerror = function(event) 
			{
				// Don't forget to handle errors!
				console.dir(event);
			};
			var objectStore = transaction.objectStore("person");
			/*var uuidindex = objectStore.index("uuid");
			var uuidrange = IDBKeyRange.only(uuid);
			uuidindex.get(uuidrange).onsuccess = function(evt){
				var person = evt.target.result;
				var i=0;
			};
			*/
			objectStore.openCursor().onsuccess = function(event) 
			{  
				var cursor = event.target.result;  
				if (cursor) 
				{
					var person = cursor.value;
					if(person.uuid==uuid)
					{
						$("#addperson>#uuid").val(uuid);
						$("#addperson>#name").val(person.name);
						$("#addperson>#telephone").val(person.telephone);
						$("#addperson>#email").val(person.email);
						$("#updatebutton").css("display","inline");
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
$(document).ready(function(){
	$("#deletedatabase").click(function(){
		var deleteDbRequest = indexedDB.deleteDatabase(databasename);
		deleteDbRequest.onsuccess = function (event) {
		  // database deleted successfully
		};
		deleteDbRequest.onerror = function (e) {
		  console.log("Database error: " + e.target.errorCode);
		};
	});
   
	var request = indexedDB.open(databasename);
	request.onupgradeneeded = function() {
	  // The database did not previously exist, so create object stores and indexes.
	  var db = request.result;
	  var store = db.createObjectStore("person", {keyPath: "id", autoIncrement:true});
	  var titleIndex = store.createIndex("uuid", "uuid", {unique: true});
	  var titleIndex = store.createIndex("name", "name", {unique: false});
	};

	request.onsuccess = function(e) {
		var db = e.target.result;
		db.onerror = function(event) 
            {
			  // Generic error handler for all errors targeted at this database's
			  alert("Database error: " + event.target.errorCode);
			  console.dir(event.target);
			};
		if(db.objectStoreNames.contains("person")) 
        {
			var transaction = db.transaction("person","readwrite");  
			transaction.oncomplete = function(event) 
			{
			  //  console.log("All done!");
			};
			transaction.onerror = function(event) 
			{
				// Don't forget to handle errors!
				console.dir(event);
			};
			var objectStore = transaction.objectStore("person");
			objectStore.openCursor().onsuccess = function(event) 
            {  
				var cursor = event.target.result;  
			   	if (cursor) 
				{
					var person = cursor.value;
					var uuid = person["uuid"];
					var name = person["name"];
					var telephone = person["telephone"];
					var email = person["email"];
					var tr="<tr><td>"+name+"</td><td>"+telephone+"</td><td>"+email+"</td><td><span id='"+uuid+"' onclick='spandeleteperson(this)'>É¾³ý</span><span  id='"+uuid+"' onclick='spanupdateperson(this)'>ÐÞ¸Ä</span></td></tr>";
					$("#showdiv>table").append(tr);
					cursor.continue();
				}
			}
		}
	};
	
	$("#addperson>#addbutton").click(function(){
		var request = indexedDB.open(databasename);
		request.onsuccess = function(e)
		{
			var db = e.target.result;
			db.onerror = function(event) 
			{
			  // Generic error handler for all errors targeted at this database's
			  alert("Database error: " + event.target.errorCode);
			  console.dir(event.target);
			};
			if(db.objectStoreNames.contains("person")) 
			{
				var transaction = db.transaction("person","readwrite");  
				transaction.oncomplete = function(event) 
				{
				  //  console.log("All done!");
				};
				transaction.onerror = function(event) 
				{
					// Don't forget to handle errors!
					console.dir(event);
				};
				var objectStore = transaction.objectStore("person");
				var uuid = newGuid();
				var name = $("#addperson>#name").val();
				var telephone = $("#addperson>#telephone").val();
				var email = $("#addperson>#email").val();
				var person={"uuid":uuid,"name":name,"telephone":telephone,"email":email}
				var request = objectStore.add(person);
				request.onsuccess =function(e)
				{
					var tr="<tr><td>"+name+"</td><td>"+telephone+"</td><td>"+email+"</td><td><span id='"+uuid+"' onclick='spandeleteperson(this)'>É¾³ý</span><span  id='"+uuid+"' onclick='spanupdateperson(this)'>ÐÞ¸Ä</span></td></tr>";
					$("#showdiv>table").append(tr);
				}
			}
		}
	});
	

	$("#addperson>#updatebutton").click(function(){
		var request = indexedDB.open(databasename);
		request.onsuccess = function(e)
		{
			var db = e.target.result;
			db.onerror = function(event) 
			{
			  // Generic error handler for all errors targeted at this database's
			  alert("Database error: " + event.target.errorCode);
			  console.dir(event.target);
			};
			if(db.objectStoreNames.contains("person")) 
			{
				var transaction = db.transaction("person","readwrite");  
				transaction.oncomplete = function(event) 
				{
				  //  console.log("All done!");
				};
				transaction.onerror = function(event) 
				{
					// Don't forget to handle errors!
					console.dir(event);
				};
				var objectStore = transaction.objectStore("person");
				var uuid = $("#addperson>#uuid").val();
				var name = $("#addperson>#name").val();
				var telephone = $("#addperson>#telephone").val();
				var email = $("#addperson>#email").val();
				var person={"uuid":uuid,"name":name,"telephone":telephone,"email":email}
				objectStore.put(person);
				$("span[id='"+uuid+"']").parent().parent().remove();
				var tr="<tr><td>"+name+"</td><td>"+telephone+"</td><td>"+email+"</td><td><span id='"+uuid+"' onclick='spandeleteperson(this)'>É¾³ý</span><span  id='"+uuid+"' onclick='spanupdateperson(this)'>ÐÞ¸Ä</span></td></tr>";
				$("#showdiv>table").append(tr);
				$("#addperson>#updatebutton").css("display","none");
			}
		}
	});
});

