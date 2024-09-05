var SCORM_API_adapter = {

	apiInitialized: false,

	lmsInitialize: function(){
		//this.apiInitialized = LMSIsInitialized();
		//if(!this.apiInitialized){
			var success = doLMSInitialize();
			console.log("initialize success?: " + success);
			if(success == "true" || success == true){
				this.apiInitialized = true;
			}else{
				this.apiInitialized = false;
			}
			if(this.apiInitialized){
				this.initializeStatus();
			}
		//}
		return this.apiInitialized;
	},

	markComplete: function(){
		if(this.apiInitialized){
			doLMSSetValue("cmi.core.lesson_status", "completed");
			doLMSCommit();
		}
	},

	initializeStatus: function(){
		var status = doLMSGetValue("cmi.core.lesson_status");
		if(status == "not attempted" || status == ""){
			doLMSSetValue("cmi.core.lesson_status", "incomplete");
			doLMSCommit();
		}
	},

	getObjectiveCount: function(){
		var count = 0;
		if(this.apiInitialized){
			count = Number(doLMSGetValue("cmi.objectives._count"));
		}
		return count;
	},

	createObjective: function(index, id, status){
		if(this.apiInitialized){
			doLMSSetValue("cmi.objectives." + index + ".id", id);
			doLMSSetValue("cmi.objectives." + index + ".status", status);
			doLMSCommit();
		}
	},

	setObjectiveStatus: function(index, status){
		if(this.apiInitialized){
			doLMSSetValue("cmi.objectives." + index + ".status", status);
			doLMSCommit();
		}
	},

	getObjectiveStatus: function(index){
		var status = "not attempted";
		if(this.apiInitialized){
			status = doLMSGetValue("cmi.objectives." + index + ".status");
		}
		return status;
	},

	setObjectiveScore: function(index, score){
		if(this.apiInitialized){
			doLMSSetValue("cmi.objectives." + index + ".score.raw", score);
			doLMSCommit();
		}
	},

	getObjectiveScore: function(index){
		var score = "0";
		if(this.apiInitialized){
			score = doLMSGetValue("cmi.objectives." + index + ".score.raw");
		}
		return score;
	},

	getSuspendData: function(){
		var data = "";
		if(this.apiInitialized){
			data = doLMSGetValue("cmi.suspend_data");
		}
		console.log(data + " <- sd");
		return data;
	},

	setSuspendData: function(data){
		if(this.apiInitialized){
			console.log("sd -> " + data);
			doLMSSetValue("cmi.suspend_data", data);
			doLMSCommit();
		}
	}

}



