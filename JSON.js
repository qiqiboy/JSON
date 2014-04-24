window.JSON=window.JSON || {
	/**
	 * 将变量转为json字串
	 */
	stringify: function(obj){
		try{
			if('toJSON' in obj){
				return '"'+obj.toJSON()+'"';
			}
		}catch(e){}
		
		var isArr=false;
		switch(type(obj)){
			case 'number':
			case 'boolean':
				return isNaN(obj)?'null':''+obj;
			case 'string':obj=obj.replace(/(["\\])/g,"\\$1");
			case 'date':
				return '"'+obj+'"';
			case 'regexp':
				return '{}';
			case 'array':isArr=true;
			case 'object':
				var carr=[],
					str=isArr?'[':'{',
					n;
				if(isArr){
					for(n=0;n<obj.length;n++){
						carr.push(arguments.callee(obj[n]));
					}
				}else{
					for(n in obj){
						carr.push('"'+n+'":'+arguments.callee(obj[n]));
					}
				}
				return str+=carr.join(',')+(isArr?']':'}');
			default:return 'null';
		}

		function type(obj){
			var mt=obj==null?[0,String(obj)]:/\[object (\w+)\]/i.exec(Object.prototype.toString.call(obj));
			return mt[1]?mt[1].toLowerCase():'object';
		}
	},
	/**
	 * 解析json字串
	 */
	parse:function(str){
		return eval("("+str+")");
	}
}
