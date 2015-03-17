function onSubmit(){
				var name = document.getElementById("txtName");
				var address = document.getElementById("txtAddress");
				var email = document.getElementById("txtEmail");

				if(name.value == ""){
					alert("Name is required.")
					name.focus();
					return false;
				}

				if(address.value == ""){
					alert("Address is required.")
					address.focus();
					return false;
				}
				if(email.value == ""){
					alert("Email is required.")
					email.focus();
					return false;
				}

				var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    			if(!re.test(email.value)){
    				alert("Email is not in correct format.");
    				email.focus();
    				return false;
    			}
				addRecord(name.value, address.value, email.value);
				return true;
			}

			var arrayRecord = [];
			function addRecord(name, address, email){
				if(document.getElementById("btnSubmit").value == "Submit"){
					var obj = {};
					obj.recordId = Math.random();
					obj.uname = name;
					obj.address = address;
					obj.email = email;

					arrayRecord.push(obj);
				}
				else{
					updateRecord.uname = name;
					updateRecord.address = address;
					updateRecord.email = email;
					document.getElementById("btnSubmit").value = "Submit";
				}
				displayRecord();

				onClear();
			}

			function displayRecord(){
				var str = "<tr style='font-weight:bold'><td>Name</td><td>Address</td><td>Email</td><td>Action</td></td>";
				for(var i=0; i<arrayRecord.length; i++){
					str += "<tr><td>"+ arrayRecord[i].uname +"</td><td>"+ arrayRecord[i].address +"</td><td>"+ arrayRecord[i].email +"</td><td><button onclick='onSelect("+ arrayRecord[i].recordId +")'>Update</button>&nbsp;&nbsp;&nbsp;<button onclick='onDelete("+ arrayRecord[i].recordId +")'>Delete</button></td></tr>";
				}

				document.getElementById("tplRecord").innerHTML = str;
			}

			var updateRecord;
			function onSelect(recordId){
				for(var i=0; i<arrayRecord.length; i++){
					if(arrayRecord[i].recordId == recordId){
						updateRecord = arrayRecord[i];
						document.getElementById("txtName").value = updateRecord.uname;
						document.getElementById("txtAddress").value = updateRecord.address;
						document.getElementById("txtEmail").value = updateRecord.email;
						document.getElementById("btnSubmit").value = "Update";
						break;
					}
				}
			}

			function onDelete(recordId){
				if(confirm("Are you sure you want to delete this record?")){
					for(var i=0; i<arrayRecord.length; i++){
						if(arrayRecord[i].recordId == recordId){
							arrayRecord.splice(i, 1);
							break;
						}
					}
				}

				displayRecord();
			}

			function onClear(){
				document.getElementById("txtName").value = "";
				document.getElementById("txtAddress").value = "";
				document.getElementById("txtEmail").value = "";
			}