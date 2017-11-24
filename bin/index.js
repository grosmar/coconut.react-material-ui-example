// Generated by Haxe 3.4.4
(function () { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.remove = function(a,obj) {
	var i = a.indexOf(obj);
	if(i == -1) {
		return false;
	}
	a.splice(i,1);
	return true;
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var List = function() {
	this.length = 0;
};
List.__name__ = true;
List.prototype = {
	push: function(item) {
		var x = new _$List_ListNode(item,this.h);
		this.h = x;
		if(this.q == null) {
			this.q = x;
		}
		this.length++;
	}
	,first: function() {
		if(this.h == null) {
			return null;
		} else {
			return this.h.item;
		}
	}
	,pop: function() {
		if(this.h == null) {
			return null;
		}
		var x = this.h.item;
		this.h = this.h.next;
		if(this.h == null) {
			this.q = null;
		}
		this.length--;
		return x;
	}
};
var _$List_ListNode = function(item,next) {
	this.item = item;
	this.next = next;
};
_$List_ListNode.__name__ = true;
var Main = function() {
	var model = new MyModel({ });
	new MyView(tink_state__$Observable_Observable_$Impl_$["const"]({ model : model})).mountInto(window.document.getElementById("app"));
};
Main.__name__ = true;
Main.main = function() {
	new Main();
};
Math.__name__ = true;
var coconut_data_Model = function() { };
coconut_data_Model.__name__ = true;
var MyModel = function(initial) {
	if(initial == null) {
		initial = { };
	}
	var _g = initial.label;
	var tmp;
	if(_g == null) {
		tmp = tink_state__$State_State_$Impl_$.ofConstant("cat");
	} else {
		var v = _g;
		tmp = tink_state__$State_State_$Impl_$.ofConstant(v);
	}
	this.__coco_label = tmp;
	var this1 = new tink_state__$State_StateObject(0);
	this.__coco_transitionCount = this1;
	this.errorTrigger = tink_core__$Signal_Signal_$Impl_$.trigger();
	this.transitionErrors = this.errorTrigger;
	this.observables = { label : this.__coco_label, isInTransition : tink_state__$Observable_Observable_$Impl_$.map(this.__coco_transitionCount,tink_state__$Observable_Transform_$Impl_$.plain(function(c) {
		return c > 0;
	}))};
};
MyModel.__name__ = true;
MyModel.__interfaces__ = [coconut_data_Model];
MyModel.prototype = {
	get_label: function() {
		return tink_state__$State_State_$Impl_$.get_value(this.__coco_label);
	}
	,set_label: function(param) {
		this.__coco_label.set(param);
		return param;
	}
};
var coconut_react_Renderable = function(rendered,key) {
	this.__rendered = rendered;
	this.init();
};
coconut_react_Renderable.__name__ = true;
coconut_react_Renderable.prototype = {
	init: function() {
	}
	,reactify: function() {
		if(this.__wrapper == null) {
			this.__wrapper = React.createElement(coconut_react__$Renderable_Wrapper,{ key : this.id, rendered : this.__rendered, componentDidMount : $bind(this,this.componentDidMount), componentWillMount : $bind(this,this.componentWillMount), componentWillUnmount : $bind(this,this.componentWillUnmount)});
		}
		return this.__wrapper;
	}
	,componentDidMount: function() {
	}
	,componentWillMount: function() {
	}
	,componentWillUnmount: function() {
	}
	,div: function(attr,children) {
		return React.createElement("div",attr,children);
	}
	,mountInto: function(container) {
		ReactDOM.render(this.reactify(),container);
		return { unmount : function() {
			return ReactDOM.unmountComponentAtNode(container);
		}};
	}
};
var coconut_ui_BaseView = function(data,render) {
	this.__coco__cache = new coconut_ui_tools_ViewCache();
	var _gthis = this;
	coconut_react_Renderable.call(this,tink_state__$Observable_Observable_$Impl_$.auto(tink_state__$Observable_Computation_$Impl_$.plain(function() {
		var f = render;
		var a1 = data;
		var tmp = function() {
			return f(a1);
		};
		return _gthis.__coco__cache.cached(tmp);
	})));
};
coconut_ui_BaseView.__name__ = true;
coconut_ui_BaseView.__super__ = coconut_react_Renderable;
coconut_ui_BaseView.prototype = $extend(coconut_react_Renderable.prototype,{
});
var coconut_ui_View = function(data,render) {
	coconut_ui_BaseView.call(this,data,render);
};
coconut_ui_View.__name__ = true;
coconut_ui_View.__super__ = coconut_ui_BaseView;
coconut_ui_View.prototype = $extend(coconut_ui_BaseView.prototype,{
});
var MyView = function(data) {
	var _gthis = this;
	coconut_ui_View.call(this,data,function(data1) {
		var tmp = tink_state__$Observable_Observable_$Impl_$.get_value(data1);
		return _gthis.render(tmp);
	});
};
MyView.__name__ = true;
MyView.__super__ = coconut_ui_View;
MyView.prototype = $extend(coconut_ui_View.prototype,{
	render: function(__data__) {
		var model = __data__.model;
		var tmp = React.createElement(materialui_Button,{ raised : true, color : "primary", children : "Hello World"});
		var tmp1 = this.__coco__cache.getFactory("BottomMainNavigation",function(data) {
			return new BottomMainNavigation(data);
		}).make(tink_state__$Observable_Observable_$Impl_$.auto(tink_state__$Observable_Computation_$Impl_$.plain(function() {
			return { model : model};
		})));
		return this.div({ },[tmp,coconut_react__$ReactChild_ReactChild_$Impl_$.ofView(tmp1)]);
	}
});
var BottomMainNavigation = function(data) {
	var _gthis = this;
	coconut_ui_View.call(this,data,function(data1) {
		var tmp = tink_state__$Observable_Observable_$Impl_$.get_value(data1);
		return _gthis.render(tmp);
	});
	var this1 = new tink_state__$State_StateObject({ value : 0});
	this.__coco_state__ = this1;
};
BottomMainNavigation.__name__ = true;
BottomMainNavigation.__super__ = coconut_ui_View;
BottomMainNavigation.prototype = $extend(coconut_ui_View.prototype,{
	handleChange: function(event,value,model) {
		var param = { value : value};
		this.__coco_state__.set(param);
		model.set_label("DOG");
	}
	,render: function(__data__) {
		var _gthis = this;
		var model = __data__.model;
		return React.createElement(materialui_BottomNavigation,{ value : tink_state__$State_State_$Impl_$.get_value(this.__coco_state__), onChange : function(e,v) {
			_gthis.handleChange(e,v,model);
		}, showLabels : true, children : [React.createElement(materialui_BottomNavigationButton,{ label : model.get_label()}),model.get_label() != "DOG" ? [React.createElement(materialui_BottomNavigationButton,{ label : "Favorites"})] : [],React.createElement(materialui_BottomNavigationButton,{ label : "Nearby"})]});
	}
});
var coconut_react__$ReactChild_ReactChild_$Impl_$ = {};
coconut_react__$ReactChild_ReactChild_$Impl_$.__name__ = true;
coconut_react__$ReactChild_ReactChild_$Impl_$.ofView = function(view) {
	return view.reactify();
};
var React_Component = require("react").Component;
var coconut_react__$Renderable_Wrapper = function(props) {
	React_Component.call(this,props);
	this.state = { view : tink_state__$Observable_Observable_$Impl_$.get_value(props.rendered)};
};
coconut_react__$Renderable_Wrapper.__name__ = true;
coconut_react__$Renderable_Wrapper.__super__ = React_Component;
coconut_react__$Renderable_Wrapper.prototype = $extend(React_Component.prototype,{
	componentDidMount: function() {
		this.props.componentDidMount();
	}
	,componentWillMount: function() {
		var _gthis = this;
		this.link = tink_state__$Observable_Observable_$Impl_$.bind(this.props.rendered,null,function(r) {
			_gthis.setState(function(_,_1) {
				return { view : r};
			});
		});
		this.props.componentWillMount();
	}
	,componentWillUnmount: function() {
		if(this.link != null) {
			var this1 = this.link;
			if(this1 != null) {
				this1.dissolve();
			}
			this.link = null;
		}
		this.props.componentWillUnmount();
	}
	,render: function() {
		return this.state.view;
	}
});
var coconut_ui_tools__$ViewCache_Stack = function(create) {
	this.stored = [];
	this.counter = 0;
	this.create = create;
};
coconut_ui_tools__$ViewCache_Stack.__name__ = true;
coconut_ui_tools__$ViewCache_Stack.prototype = {
	purge: function() {
		this.stored.splice(this.counter,this.stored.length);
		this.counter = 0;
	}
	,poll: function() {
		var _g = this.stored[this.counter++];
		if(_g == null) {
			var ret = this.create();
			this.stored.push(ret);
			return ret;
		} else {
			var v = _g;
			return v;
		}
	}
};
var coconut_ui_tools__$ViewCache_Factory = function(render) {
	this.stackByData = new haxe_ds_ObjectMap();
	this.render = render;
};
coconut_ui_tools__$ViewCache_Factory.__name__ = true;
coconut_ui_tools__$ViewCache_Factory.prototype = {
	purge: function() {
		var s = this.stackByData.iterator();
		while(s.hasNext()) {
			var s1 = s.next();
			s1.purge();
		}
	}
	,make: function(data) {
		var stack;
		var _g = this.stackByData.get(data);
		if(_g == null) {
			var this1 = this.stackByData;
			var f = this.render;
			var a1 = data;
			var v = new coconut_ui_tools__$ViewCache_Stack(function() {
				return f(a1);
			});
			this1.set(data,v);
			stack = v;
		} else {
			var v1 = _g;
			stack = v1;
		}
		return stack.poll();
	}
};
var coconut_ui_tools_ViewCache = function() {
	this.__cache = new haxe_ds_StringMap();
};
coconut_ui_tools_ViewCache.__name__ = true;
coconut_ui_tools_ViewCache.prototype = {
	cached: function(f) {
		var o = { cache : this};
		coconut_ui_tools_ViewCache.stack.push(o);
		var ret = f();
		HxOverrides.remove(coconut_ui_tools_ViewCache.stack,o);
		this.purge();
		return ret;
	}
	,purge: function() {
		var _this = this.__cache;
		var f = new haxe_ds__$StringMap_StringMapIterator(_this,_this.arrayKeys());
		while(f.hasNext()) {
			var f1 = f.next();
			f1.purge();
		}
	}
	,getFactory: function(cls,make) {
		var _g = this.__cache.get(cls);
		var tmp;
		if(_g == null) {
			var this1 = this.__cache;
			var v = new coconut_ui_tools__$ViewCache_Factory(make);
			this1.set(cls,v);
			tmp = v;
		} else {
			var v1 = _g;
			tmp = v1;
		}
		return tmp;
	}
};
var haxe_StackItem = { __ename__ : true, __constructs__ : ["CFunction","Module","FilePos","Method","LocalFunction"] };
haxe_StackItem.CFunction = ["CFunction",0];
haxe_StackItem.CFunction.toString = $estr;
haxe_StackItem.CFunction.__enum__ = haxe_StackItem;
haxe_StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe_StackItem; $x.toString = $estr; return $x; };
haxe_StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe_StackItem; $x.toString = $estr; return $x; };
haxe_StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe_StackItem; $x.toString = $estr; return $x; };
haxe_StackItem.LocalFunction = function(v) { var $x = ["LocalFunction",4,v]; $x.__enum__ = haxe_StackItem; $x.toString = $estr; return $x; };
var haxe_IMap = function() { };
haxe_IMap.__name__ = true;
var haxe_Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
haxe_Timer.__name__ = true;
haxe_Timer.delay = function(f,time_ms) {
	var t = new haxe_Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
};
haxe_Timer.prototype = {
	stop: function() {
		if(this.id == null) {
			return;
		}
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
};
var haxe_ds_ObjectMap = function() {
	this.h = { __keys__ : { }};
};
haxe_ds_ObjectMap.__name__ = true;
haxe_ds_ObjectMap.__interfaces__ = [haxe_IMap];
haxe_ds_ObjectMap.prototype = {
	set: function(key,value) {
		var id = key.__id__ || (key.__id__ = ++haxe_ds_ObjectMap.count);
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,get: function(key) {
		return this.h[key.__id__];
	}
	,keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) {
			a.push(this.h.__keys__[key]);
		}
		}
		return HxOverrides.iter(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i.__id__];
		}};
	}
};
var haxe_ds__$StringMap_StringMapIterator = function(map,keys) {
	this.map = map;
	this.keys = keys;
	this.index = 0;
	this.count = keys.length;
};
haxe_ds__$StringMap_StringMapIterator.__name__ = true;
haxe_ds__$StringMap_StringMapIterator.prototype = {
	hasNext: function() {
		return this.index < this.count;
	}
	,next: function() {
		var _this = this.map;
		var key = this.keys[this.index++];
		if(__map_reserved[key] != null) {
			return _this.getReserved(key);
		} else {
			return _this.h[key];
		}
	}
};
var haxe_ds_StringMap = function() {
	this.h = { };
};
haxe_ds_StringMap.__name__ = true;
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	set: function(key,value) {
		if(__map_reserved[key] != null) {
			this.setReserved(key,value);
		} else {
			this.h[key] = value;
		}
	}
	,get: function(key) {
		if(__map_reserved[key] != null) {
			return this.getReserved(key);
		}
		return this.h[key];
	}
	,setReserved: function(key,value) {
		if(this.rh == null) {
			this.rh = { };
		}
		this.rh["$" + key] = value;
	}
	,getReserved: function(key) {
		if(this.rh == null) {
			return null;
		} else {
			return this.rh["$" + key];
		}
	}
	,arrayKeys: function() {
		var out = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) {
			out.push(key);
		}
		}
		if(this.rh != null) {
			for( var key in this.rh ) {
			if(key.charCodeAt(0) == 36) {
				out.push(key.substr(1));
			}
			}
		}
		return out;
	}
};
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	this.message = String(val);
	if(Error.captureStackTrace) {
		Error.captureStackTrace(this,js__$Boot_HaxeError);
	}
};
js__$Boot_HaxeError.__name__ = true;
js__$Boot_HaxeError.wrap = function(val) {
	if((val instanceof Error)) {
		return val;
	} else {
		return new js__$Boot_HaxeError(val);
	}
};
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
});
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) {
					return o[0];
				}
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) {
						str += "," + js_Boot.__string_rec(o[i],s);
					} else {
						str += js_Boot.__string_rec(o[i],s);
					}
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g11 = 0;
			var _g2 = l;
			while(_g11 < _g2) {
				var i2 = _g11++;
				str1 += (i2 > 0 ? "," : "") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) {
			str2 += ", \n";
		}
		str2 += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "string":
		return o;
	default:
		return String(o);
	}
};
var materialui_BottomNavigation = require("material-ui/BottomNavigation").default;
var materialui_BottomNavigationButton = require("material-ui/BottomNavigation").BottomNavigationButton;
var materialui_Button = require("material-ui/Button").default;
var ReactDOM = require("react-dom");
var tink_core__$Callback_Callback_$Impl_$ = {};
tink_core__$Callback_Callback_$Impl_$.__name__ = true;
tink_core__$Callback_Callback_$Impl_$.invoke = function(this1,data) {
	if(tink_core__$Callback_Callback_$Impl_$.depth < 1000) {
		tink_core__$Callback_Callback_$Impl_$.depth++;
		this1(data);
		tink_core__$Callback_Callback_$Impl_$.depth--;
	} else {
		var _e = this1;
		var f = function(data1) {
			tink_core__$Callback_Callback_$Impl_$.invoke(_e,data1);
		};
		var a1 = data;
		tink_core__$Callback_Callback_$Impl_$.defer(function() {
			f(a1);
		});
	}
};
tink_core__$Callback_Callback_$Impl_$.fromNiladic = function(f) {
	var this1 = function(r) {
		f();
	};
	return this1;
};
tink_core__$Callback_Callback_$Impl_$.defer = function(f) {
	haxe_Timer.delay(f,0);
};
var tink_core__$Callback_LinkObject = function() { };
tink_core__$Callback_LinkObject.__name__ = true;
var tink_core__$Callback_SimpleLink = function(f) {
	this.f = f;
};
tink_core__$Callback_SimpleLink.__name__ = true;
tink_core__$Callback_SimpleLink.__interfaces__ = [tink_core__$Callback_LinkObject];
tink_core__$Callback_SimpleLink.prototype = {
	dissolve: function() {
		if(this.f != null) {
			this.f();
		}
	}
};
var tink_core__$Callback_ListCell = function(cb,list) {
	if(cb == null) {
		throw new js__$Boot_HaxeError("callback expected but null received");
	}
	this.cb = cb;
	this.list = list;
};
tink_core__$Callback_ListCell.__name__ = true;
tink_core__$Callback_ListCell.__interfaces__ = [tink_core__$Callback_LinkObject];
tink_core__$Callback_ListCell.prototype = {
	clear: function() {
		this.list = null;
		this.cb = null;
	}
	,dissolve: function() {
		var _g = this.list;
		if(_g != null) {
			var v = _g;
			this.clear();
			HxOverrides.remove(v,this);
		}
	}
};
var tink_core__$Callback_CallbackList_$Impl_$ = {};
tink_core__$Callback_CallbackList_$Impl_$.__name__ = true;
tink_core__$Callback_CallbackList_$Impl_$.add = function(this1,cb) {
	var node = new tink_core__$Callback_ListCell(cb,this1);
	this1.push(node);
	return node;
};
tink_core__$Callback_CallbackList_$Impl_$.invoke = function(this1,data) {
	var _g = 0;
	var _g1 = this1.slice();
	while(_g < _g1.length) {
		var cell = _g1[_g];
		++_g;
		if(cell.cb != null) {
			tink_core__$Callback_Callback_$Impl_$.invoke(cell.cb,data);
		}
	}
};
tink_core__$Callback_CallbackList_$Impl_$.clear = function(this1) {
	var _g = 0;
	var _g1 = this1.splice(0,this1.length);
	while(_g < _g1.length) {
		var cell = _g1[_g];
		++_g;
		cell.clear();
	}
};
var tink_core_TypedError = function(code,message,pos) {
	if(code == null) {
		code = 500;
	}
	this.code = code;
	this.message = message;
	this.pos = pos;
	this.exceptionStack = [];
	this.callStack = [];
};
tink_core_TypedError.__name__ = true;
tink_core_TypedError.withData = function(code,message,data,pos) {
	return tink_core_TypedError.typed(code,message,data,pos);
};
tink_core_TypedError.typed = function(code,message,data,pos) {
	var ret = new tink_core_TypedError(code,message,pos);
	ret.data = data;
	return ret;
};
tink_core_TypedError.ofJsError = function(e,pos) {
	return tink_core_TypedError.withData(500,e.message,e,pos);
};
tink_core_TypedError.catchExceptions = function(f,report,pos) {
	try {
		return tink_core_Outcome.Success(f());
	} catch( e ) {
		if (e instanceof js__$Boot_HaxeError) e = e.val;
		return tink_core_Outcome.Failure(e.isTinkError ? e : report == null ? tink_core_TypedError.withData(null,"Unexpected Error",e,pos) : report(e));
	}
};
tink_core_TypedError.reporter = function(code,message,pos) {
	return function(e) {
		return tink_core_TypedError.withData(code,message,e,pos);
	};
};
tink_core_TypedError.rethrow = function(any) {
	throw js__$Boot_HaxeError.wrap(any);
};
tink_core_TypedError.prototype = {
	printPos: function() {
		return this.pos.className + "." + this.pos.methodName + ":" + this.pos.lineNumber;
	}
	,toString: function() {
		var ret = "Error#" + this.code + ": " + this.message;
		if(this.pos != null) {
			ret += " @ " + this.printPos();
		}
		return ret;
	}
	,throwSelf: function() {
		throw new js__$Boot_HaxeError(this);
	}
};
var tink_core__$Future_FutureObject = function() { };
tink_core__$Future_FutureObject.__name__ = true;
var tink_core_Noise = { __ename__ : true, __constructs__ : ["Noise"] };
tink_core_Noise.Noise = ["Noise",0];
tink_core_Noise.Noise.toString = $estr;
tink_core_Noise.Noise.__enum__ = tink_core_Noise;
var tink_core__$Future_SimpleFuture = function(f) {
	this.f = f;
};
tink_core__$Future_SimpleFuture.__name__ = true;
tink_core__$Future_SimpleFuture.__interfaces__ = [tink_core__$Future_FutureObject];
tink_core__$Future_SimpleFuture.prototype = {
	handle: function(callback) {
		return this.f(callback);
	}
};
var tink_core_FutureTrigger = function() {
	var this1 = [];
	this.list = this1;
};
tink_core_FutureTrigger.__name__ = true;
tink_core_FutureTrigger.__interfaces__ = [tink_core__$Future_FutureObject];
tink_core_FutureTrigger.prototype = {
	handle: function(callback) {
		var _g = this.list;
		if(_g == null) {
			tink_core__$Callback_Callback_$Impl_$.invoke(callback,this.result);
			return null;
		} else {
			var v = _g;
			return tink_core__$Callback_CallbackList_$Impl_$.add(v,callback);
		}
	}
	,trigger: function(result) {
		if(this.list == null) {
			return false;
		} else {
			var list = this.list;
			this.list = null;
			this.result = result;
			if(tink_core_FutureTrigger.depth >= 1000) {
				tink_core__$Callback_Callback_$Impl_$.defer(function() {
					tink_core_FutureTrigger.depth++;
					tink_core__$Callback_CallbackList_$Impl_$.invoke(list,result);
					tink_core__$Callback_CallbackList_$Impl_$.clear(list);
					tink_core_FutureTrigger.depth--;
				});
			} else {
				tink_core_FutureTrigger.depth++;
				tink_core__$Callback_CallbackList_$Impl_$.invoke(list,result);
				tink_core__$Callback_CallbackList_$Impl_$.clear(list);
				tink_core_FutureTrigger.depth--;
			}
			return true;
		}
	}
};
var tink_core_Outcome = { __ename__ : true, __constructs__ : ["Success","Failure"] };
tink_core_Outcome.Success = function(data) { var $x = ["Success",0,data]; $x.__enum__ = tink_core_Outcome; $x.toString = $estr; return $x; };
tink_core_Outcome.Failure = function(failure) { var $x = ["Failure",1,failure]; $x.__enum__ = tink_core_Outcome; $x.toString = $estr; return $x; };
var tink_core_MPair = function(a,b) {
	this.a = a;
	this.b = b;
};
tink_core_MPair.__name__ = true;
var tink_core__$Signal_Signal_$Impl_$ = {};
tink_core__$Signal_Signal_$Impl_$.__name__ = true;
tink_core__$Signal_Signal_$Impl_$.trigger = function() {
	return new tink_core_SignalTrigger();
};
var tink_core_SignalObject = function() { };
tink_core_SignalObject.__name__ = true;
var tink_core_SignalTrigger = function() {
};
tink_core_SignalTrigger.__name__ = true;
tink_core_SignalTrigger.__interfaces__ = [tink_core_SignalObject];
var tink_state__$Observable_Observable_$Impl_$ = {};
tink_state__$Observable_Observable_$Impl_$.__name__ = true;
tink_state__$Observable_Observable_$Impl_$.get_value = function(this1) {
	return tink_state__$Observable_Observable_$Impl_$.measure(this1).a;
};
tink_state__$Observable_Observable_$Impl_$.map = function(this1,f) {
	return tink_state__$Observable_Observable_$Impl_$.create(function() {
		var m = tink_state__$Observable_Observable_$Impl_$.measure(this1);
		var this2;
		var this3 = new tink_core_MPair(f(m.a),m.b);
		this2 = this3;
		return this2;
	},{ fileName : "Observable.hx", lineNumber : 56, className : "tink.state._Observable.Observable_Impl_", methodName : "map"});
};
tink_state__$Observable_Observable_$Impl_$.measure = function(this1) {
	var before = tink_state__$Observable_Observable_$Impl_$.stack.first();
	tink_state__$Observable_Observable_$Impl_$.stack.push(this1);
	var p = this1.poll();
	var _g = (before instanceof tink_state__$Observable_AutoObservable) ? before : null;
	if(_g != null) {
		var v = _g;
		p.b.handle(tink_core__$Callback_Callback_$Impl_$.fromNiladic($bind(v,v.invalidate)));
	}
	tink_state__$Observable_Observable_$Impl_$.stack.pop();
	return p;
};
tink_state__$Observable_Observable_$Impl_$.bind = function(this1,options,cb) {
	if(options == null) {
		var scheduled = false;
		var active = true;
		var updated = null;
		var link = null;
		var update = function() {
			if(active) {
				var next = tink_state__$Observable_Observable_$Impl_$.measure(this1);
				tink_core__$Callback_Callback_$Impl_$.invoke(cb,next.a);
				scheduled = false;
				link = next.b.handle(updated);
			}
		};
		var doSchedule = function() {
			if(scheduled) {
				return;
			}
			scheduled = true;
			tink_state__$Observable_Observable_$Impl_$.schedule(update);
		};
		updated = tink_core__$Callback_Callback_$Impl_$.fromNiladic(doSchedule);
		doSchedule();
		var this2 = new tink_core__$Callback_SimpleLink(function() {
			if(active) {
				active = false;
				if(link != null) {
					link.dissolve();
				}
			}
		});
		return this2;
	} else if(options.direct == null) {
		var scheduled1 = false;
		var active1 = true;
		var updated1 = null;
		var link1 = null;
		var update1 = function() {
			if(active1) {
				var next1 = tink_state__$Observable_Observable_$Impl_$.measure(this1);
				tink_core__$Callback_Callback_$Impl_$.invoke(cb,next1.a);
				scheduled1 = false;
				link1 = next1.b.handle(updated1);
			}
		};
		var doSchedule1 = function() {
			if(scheduled1) {
				return;
			}
			scheduled1 = true;
			tink_state__$Observable_Observable_$Impl_$.schedule(update1);
		};
		updated1 = tink_core__$Callback_Callback_$Impl_$.fromNiladic(doSchedule1);
		doSchedule1();
		var this3 = new tink_core__$Callback_SimpleLink(function() {
			if(active1) {
				active1 = false;
				if(link1 != null) {
					link1.dissolve();
				}
			}
		});
		return this3;
	} else if(options.direct == false) {
		var scheduled2 = false;
		var active2 = true;
		var updated2 = null;
		var link2 = null;
		var update2 = function() {
			if(active2) {
				var next2 = tink_state__$Observable_Observable_$Impl_$.measure(this1);
				tink_core__$Callback_Callback_$Impl_$.invoke(cb,next2.a);
				scheduled2 = false;
				link2 = next2.b.handle(updated2);
			}
		};
		var doSchedule2 = function() {
			if(scheduled2) {
				return;
			}
			scheduled2 = true;
			tink_state__$Observable_Observable_$Impl_$.schedule(update2);
		};
		updated2 = tink_core__$Callback_Callback_$Impl_$.fromNiladic(doSchedule2);
		doSchedule2();
		var this4 = new tink_core__$Callback_SimpleLink(function() {
			if(active2) {
				active2 = false;
				if(link2 != null) {
					link2.dissolve();
				}
			}
		});
		return this4;
	} else {
		var link3 = null;
		var update3 = null;
		update3 = function(_) {
			var next3 = tink_state__$Observable_Observable_$Impl_$.measure(this1);
			tink_core__$Callback_Callback_$Impl_$.invoke(cb,next3.a);
			link3 = next3.b.handle(update3);
		};
		var update4 = update3;
		update4(tink_core_Noise.Noise);
		var this5 = new tink_core__$Callback_SimpleLink(function() {
			if(link3 != null) {
				link3.dissolve();
			}
		});
		return this5;
	}
};
tink_state__$Observable_Observable_$Impl_$.schedule = function(f) {
	var _g = tink_state__$Observable_Observable_$Impl_$.scheduled;
	if(_g == null) {
		f();
	} else if(_g.length == 0) {
		tink_state__$Observable_Observable_$Impl_$.scheduled.push(f);
		if(tink_state__$Observable_Observable_$Impl_$.hasRAF) {
			window.requestAnimationFrame(function(_) {
				tink_state__$Observable_Observable_$Impl_$.updateAll();
			});
		} else {
			tink_core__$Callback_Callback_$Impl_$.defer(tink_state__$Observable_Observable_$Impl_$.updateAll);
		}
	} else {
		var v = _g;
		v.push(f);
	}
};
tink_state__$Observable_Observable_$Impl_$.updateAll = function() {
	if(tink_state__$Observable_Observable_$Impl_$.scheduled == null) {
		return;
	}
	var old = tink_state__$Observable_Observable_$Impl_$.scheduled;
	tink_state__$Observable_Observable_$Impl_$.scheduled = null;
	var _g = 0;
	while(_g < old.length) {
		var o = old[_g];
		++_g;
		o();
	}
	tink_state__$Observable_Observable_$Impl_$.scheduled = [];
};
tink_state__$Observable_Observable_$Impl_$.create = function(f,pos) {
	return new tink_state__$Observable_SimpleObservable(f,pos);
};
tink_state__$Observable_Observable_$Impl_$.auto = function(f) {
	return new tink_state__$Observable_AutoObservable(f);
};
tink_state__$Observable_Observable_$Impl_$["const"] = function(value) {
	return new tink_state_ConstObservable(value);
};
var tink_state__$Observable_Computation_$Impl_$ = {};
tink_state__$Observable_Computation_$Impl_$.__name__ = true;
tink_state__$Observable_Computation_$Impl_$.plain = function(f) {
	var this1 = { f : f};
	return this1;
};
var tink_state_ObservableObject = function() { };
tink_state_ObservableObject.__name__ = true;
var tink_state__$Observable_SimpleObservable = function(f,pos) {
	this._poll = f;
	this.pos = pos;
};
tink_state__$Observable_SimpleObservable.__name__ = true;
tink_state__$Observable_SimpleObservable.__interfaces__ = [tink_state_ObservableObject];
tink_state__$Observable_SimpleObservable.prototype = {
	resetCache: function(_) {
		this.cache = null;
	}
	,poll: function() {
		var count = 0;
		var last = null;
		while(this.cache == null) {
			var cache = this.cache = this._poll();
			if(last == cache) {
				throw new js__$Boot_HaxeError("Polling loops on the same value");
			}
			last = cache;
			cache.b.handle($bind(this,this.resetCache));
			if(count++ >= 100) {
				throw new js__$Boot_HaxeError("Polling not concluded after 100 iterations");
			}
		}
		return this.cache;
	}
};
var tink_state__$Observable_Transform_$Impl_$ = {};
tink_state__$Observable_Transform_$Impl_$.__name__ = true;
tink_state__$Observable_Transform_$Impl_$.plain = function(f) {
	var this1 = f;
	return this1;
};
var tink_state_ConstObservable = function(value) {
	var this1;
	var this2 = new tink_core_MPair(value,tink_state_ConstObservable.NEVER);
	this1 = this2;
	this.m = this1;
};
tink_state_ConstObservable.__name__ = true;
tink_state_ConstObservable.__interfaces__ = [tink_state_ObservableObject];
tink_state_ConstObservable.prototype = {
	poll: function() {
		return this.m;
	}
};
var tink_state__$Observable_AutoObservable = function(comp) {
	var _gthis = this;
	tink_state__$Observable_SimpleObservable.call(this,function() {
		_gthis.trigger = new tink_core_FutureTrigger();
		var this1;
		var this2 = new tink_core_MPair(comp.f(),_gthis.trigger);
		this1 = this2;
		return this1;
	},{ fileName : "Observable.hx", lineNumber : 334, className : "tink.state._Observable.AutoObservable", methodName : "new"});
};
tink_state__$Observable_AutoObservable.__name__ = true;
tink_state__$Observable_AutoObservable.__super__ = tink_state__$Observable_SimpleObservable;
tink_state__$Observable_AutoObservable.prototype = $extend(tink_state__$Observable_SimpleObservable.prototype,{
	invalidate: function() {
		this.trigger.trigger(tink_core_Noise.Noise);
	}
});
var tink_state__$State_State_$Impl_$ = {};
tink_state__$State_State_$Impl_$.__name__ = true;
tink_state__$State_State_$Impl_$.get_value = function(this1) {
	return tink_state__$Observable_Observable_$Impl_$.get_value(this1);
};
tink_state__$State_State_$Impl_$.ofConstant = function(value) {
	var this1 = new tink_state__$State_StateObject(value);
	return this1;
};
var tink_state__$State_StateObject = function(value,isEqual) {
	this.value = value;
	var tmp;
	if(isEqual == null) {
		tmp = function(a,b) {
			return a == b;
		};
	} else {
		var v = isEqual;
		tmp = v;
	}
	this.isEqual = tmp;
	this.arm();
};
tink_state__$State_StateObject.__name__ = true;
tink_state__$State_StateObject.__interfaces__ = [tink_state_ObservableObject];
tink_state__$State_StateObject.prototype = {
	poll: function() {
		return this.next;
	}
	,arm: function() {
		this.trigger = new tink_core_FutureTrigger();
		var this1;
		var this2 = new tink_core_MPair(this.value,this.trigger);
		this1 = this2;
		this.next = this1;
	}
	,set: function(value) {
		if(!this.isEqual(value,this.value)) {
			this.value = value;
			var last = this.trigger;
			this.arm();
			last.trigger(tink_core_Noise.Noise);
		}
	}
};
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
String.__name__ = true;
Array.__name__ = true;
var $$tre = (typeof Symbol === "function" && Symbol.for && Symbol.for("react.element")) || 0xeac7;
var __map_reserved = {};
coconut_react__$Renderable_Wrapper.displayName = "Wrapper";
coconut_ui_tools_ViewCache.stack = [];
haxe_ds_ObjectMap.count = 0;
tink_core__$Callback_Callback_$Impl_$.depth = 0;
tink_core_FutureTrigger.depth = 0;
tink_state__$Observable_Observable_$Impl_$.stack = new List();
tink_state__$Observable_Observable_$Impl_$.scheduled = [];
tink_state__$Observable_Observable_$Impl_$.hasRAF = typeof window != 'undefined' && 'requestAnimationFrame' in window;
tink_state_ConstObservable.NEVER = (function($this) {
	var $r;
	var this1 = new tink_core__$Future_SimpleFuture(function(_) {
		return null;
	});
	$r = this1;
	return $r;
}(this));
Main.main();
})();