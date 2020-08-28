goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35437 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_35437(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35440 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_35440(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34686 = coll;
var G__34687 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34686,G__34687) : shadow.dom.lazy_native_coll_seq.call(null,G__34686,G__34687));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34715 = arguments.length;
switch (G__34715) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34726 = arguments.length;
switch (G__34726) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34733 = arguments.length;
switch (G__34733) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__34741 = arguments.length;
switch (G__34741) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__34747 = arguments.length;
switch (G__34747) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34752 = arguments.length;
switch (G__34752) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e34755){if((e34755 instanceof Object)){
var e = e34755;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34755;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34762 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34763 = null;
var count__34764 = (0);
var i__34765 = (0);
while(true){
if((i__34765 < count__34764)){
var el = chunk__34763.cljs$core$IIndexed$_nth$arity$2(null,i__34765);
var handler_35470__$1 = ((function (seq__34762,chunk__34763,count__34764,i__34765,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34762,chunk__34763,count__34764,i__34765,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35470__$1);


var G__35471 = seq__34762;
var G__35472 = chunk__34763;
var G__35473 = count__34764;
var G__35474 = (i__34765 + (1));
seq__34762 = G__35471;
chunk__34763 = G__35472;
count__34764 = G__35473;
i__34765 = G__35474;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34762);
if(temp__5735__auto__){
var seq__34762__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34762__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34762__$1);
var G__35477 = cljs.core.chunk_rest(seq__34762__$1);
var G__35478 = c__4556__auto__;
var G__35479 = cljs.core.count(c__4556__auto__);
var G__35480 = (0);
seq__34762 = G__35477;
chunk__34763 = G__35478;
count__34764 = G__35479;
i__34765 = G__35480;
continue;
} else {
var el = cljs.core.first(seq__34762__$1);
var handler_35482__$1 = ((function (seq__34762,chunk__34763,count__34764,i__34765,el,seq__34762__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34762,chunk__34763,count__34764,i__34765,el,seq__34762__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35482__$1);


var G__35484 = cljs.core.next(seq__34762__$1);
var G__35485 = null;
var G__35486 = (0);
var G__35487 = (0);
seq__34762 = G__35484;
chunk__34763 = G__35485;
count__34764 = G__35486;
i__34765 = G__35487;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__34777 = arguments.length;
switch (G__34777) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34787 = cljs.core.seq(events);
var chunk__34788 = null;
var count__34789 = (0);
var i__34790 = (0);
while(true){
if((i__34790 < count__34789)){
var vec__34800 = chunk__34788.cljs$core$IIndexed$_nth$arity$2(null,i__34790);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34800,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34800,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35492 = seq__34787;
var G__35493 = chunk__34788;
var G__35494 = count__34789;
var G__35495 = (i__34790 + (1));
seq__34787 = G__35492;
chunk__34788 = G__35493;
count__34789 = G__35494;
i__34790 = G__35495;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34787);
if(temp__5735__auto__){
var seq__34787__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34787__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34787__$1);
var G__35497 = cljs.core.chunk_rest(seq__34787__$1);
var G__35498 = c__4556__auto__;
var G__35499 = cljs.core.count(c__4556__auto__);
var G__35500 = (0);
seq__34787 = G__35497;
chunk__34788 = G__35498;
count__34789 = G__35499;
i__34790 = G__35500;
continue;
} else {
var vec__34803 = cljs.core.first(seq__34787__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34803,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34803,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35501 = cljs.core.next(seq__34787__$1);
var G__35502 = null;
var G__35503 = (0);
var G__35504 = (0);
seq__34787 = G__35501;
chunk__34788 = G__35502;
count__34789 = G__35503;
i__34790 = G__35504;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__34807 = cljs.core.seq(styles);
var chunk__34808 = null;
var count__34809 = (0);
var i__34810 = (0);
while(true){
if((i__34810 < count__34809)){
var vec__34820 = chunk__34808.cljs$core$IIndexed$_nth$arity$2(null,i__34810);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34820,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34820,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35507 = seq__34807;
var G__35508 = chunk__34808;
var G__35509 = count__34809;
var G__35510 = (i__34810 + (1));
seq__34807 = G__35507;
chunk__34808 = G__35508;
count__34809 = G__35509;
i__34810 = G__35510;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34807);
if(temp__5735__auto__){
var seq__34807__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34807__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34807__$1);
var G__35511 = cljs.core.chunk_rest(seq__34807__$1);
var G__35513 = c__4556__auto__;
var G__35514 = cljs.core.count(c__4556__auto__);
var G__35515 = (0);
seq__34807 = G__35511;
chunk__34808 = G__35513;
count__34809 = G__35514;
i__34810 = G__35515;
continue;
} else {
var vec__34823 = cljs.core.first(seq__34807__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34823,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34823,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35516 = cljs.core.next(seq__34807__$1);
var G__35517 = null;
var G__35518 = (0);
var G__35519 = (0);
seq__34807 = G__35516;
chunk__34808 = G__35517;
count__34809 = G__35518;
i__34810 = G__35519;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__34828_35521 = key;
var G__34828_35522__$1 = (((G__34828_35521 instanceof cljs.core.Keyword))?G__34828_35521.fqn:null);
switch (G__34828_35522__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35527 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_35527,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_35527,"aria-");
}
})())){
el.setAttribute(ks_35527,value);
} else {
(el[ks_35527] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34846){
var map__34847 = p__34846;
var map__34847__$1 = (((((!((map__34847 == null))))?(((((map__34847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34847):map__34847);
var props = map__34847__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34847__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34852 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34852,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34852,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34852,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34858 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34858,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34858;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34862 = arguments.length;
switch (G__34862) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34877){
var vec__34879 = p__34877;
var seq__34880 = cljs.core.seq(vec__34879);
var first__34881 = cljs.core.first(seq__34880);
var seq__34880__$1 = cljs.core.next(seq__34880);
var nn = first__34881;
var first__34881__$1 = cljs.core.first(seq__34880__$1);
var seq__34880__$2 = cljs.core.next(seq__34880__$1);
var np = first__34881__$1;
var nc = seq__34880__$2;
var node = vec__34879;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34884 = nn;
var G__34885 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34884,G__34885) : create_fn.call(null,G__34884,G__34885));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34889 = nn;
var G__34890 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34889,G__34890) : create_fn.call(null,G__34889,G__34890));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34899 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34899,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34899,(1),null);
var seq__34904_35545 = cljs.core.seq(node_children);
var chunk__34905_35546 = null;
var count__34906_35547 = (0);
var i__34907_35548 = (0);
while(true){
if((i__34907_35548 < count__34906_35547)){
var child_struct_35549 = chunk__34905_35546.cljs$core$IIndexed$_nth$arity$2(null,i__34907_35548);
var children_35550 = shadow.dom.dom_node(child_struct_35549);
if(cljs.core.seq_QMARK_(children_35550)){
var seq__34970_35551 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35550));
var chunk__34972_35552 = null;
var count__34973_35553 = (0);
var i__34974_35554 = (0);
while(true){
if((i__34974_35554 < count__34973_35553)){
var child_35555 = chunk__34972_35552.cljs$core$IIndexed$_nth$arity$2(null,i__34974_35554);
if(cljs.core.truth_(child_35555)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35555);


var G__35556 = seq__34970_35551;
var G__35557 = chunk__34972_35552;
var G__35558 = count__34973_35553;
var G__35559 = (i__34974_35554 + (1));
seq__34970_35551 = G__35556;
chunk__34972_35552 = G__35557;
count__34973_35553 = G__35558;
i__34974_35554 = G__35559;
continue;
} else {
var G__35560 = seq__34970_35551;
var G__35561 = chunk__34972_35552;
var G__35562 = count__34973_35553;
var G__35563 = (i__34974_35554 + (1));
seq__34970_35551 = G__35560;
chunk__34972_35552 = G__35561;
count__34973_35553 = G__35562;
i__34974_35554 = G__35563;
continue;
}
} else {
var temp__5735__auto___35564 = cljs.core.seq(seq__34970_35551);
if(temp__5735__auto___35564){
var seq__34970_35565__$1 = temp__5735__auto___35564;
if(cljs.core.chunked_seq_QMARK_(seq__34970_35565__$1)){
var c__4556__auto___35566 = cljs.core.chunk_first(seq__34970_35565__$1);
var G__35567 = cljs.core.chunk_rest(seq__34970_35565__$1);
var G__35568 = c__4556__auto___35566;
var G__35569 = cljs.core.count(c__4556__auto___35566);
var G__35570 = (0);
seq__34970_35551 = G__35567;
chunk__34972_35552 = G__35568;
count__34973_35553 = G__35569;
i__34974_35554 = G__35570;
continue;
} else {
var child_35571 = cljs.core.first(seq__34970_35565__$1);
if(cljs.core.truth_(child_35571)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35571);


var G__35572 = cljs.core.next(seq__34970_35565__$1);
var G__35573 = null;
var G__35574 = (0);
var G__35575 = (0);
seq__34970_35551 = G__35572;
chunk__34972_35552 = G__35573;
count__34973_35553 = G__35574;
i__34974_35554 = G__35575;
continue;
} else {
var G__35576 = cljs.core.next(seq__34970_35565__$1);
var G__35577 = null;
var G__35578 = (0);
var G__35579 = (0);
seq__34970_35551 = G__35576;
chunk__34972_35552 = G__35577;
count__34973_35553 = G__35578;
i__34974_35554 = G__35579;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35550);
}


var G__35580 = seq__34904_35545;
var G__35581 = chunk__34905_35546;
var G__35582 = count__34906_35547;
var G__35583 = (i__34907_35548 + (1));
seq__34904_35545 = G__35580;
chunk__34905_35546 = G__35581;
count__34906_35547 = G__35582;
i__34907_35548 = G__35583;
continue;
} else {
var temp__5735__auto___35584 = cljs.core.seq(seq__34904_35545);
if(temp__5735__auto___35584){
var seq__34904_35585__$1 = temp__5735__auto___35584;
if(cljs.core.chunked_seq_QMARK_(seq__34904_35585__$1)){
var c__4556__auto___35586 = cljs.core.chunk_first(seq__34904_35585__$1);
var G__35587 = cljs.core.chunk_rest(seq__34904_35585__$1);
var G__35588 = c__4556__auto___35586;
var G__35589 = cljs.core.count(c__4556__auto___35586);
var G__35590 = (0);
seq__34904_35545 = G__35587;
chunk__34905_35546 = G__35588;
count__34906_35547 = G__35589;
i__34907_35548 = G__35590;
continue;
} else {
var child_struct_35591 = cljs.core.first(seq__34904_35585__$1);
var children_35592 = shadow.dom.dom_node(child_struct_35591);
if(cljs.core.seq_QMARK_(children_35592)){
var seq__34994_35593 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35592));
var chunk__34996_35594 = null;
var count__34997_35595 = (0);
var i__34998_35596 = (0);
while(true){
if((i__34998_35596 < count__34997_35595)){
var child_35598 = chunk__34996_35594.cljs$core$IIndexed$_nth$arity$2(null,i__34998_35596);
if(cljs.core.truth_(child_35598)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35598);


var G__35599 = seq__34994_35593;
var G__35600 = chunk__34996_35594;
var G__35601 = count__34997_35595;
var G__35602 = (i__34998_35596 + (1));
seq__34994_35593 = G__35599;
chunk__34996_35594 = G__35600;
count__34997_35595 = G__35601;
i__34998_35596 = G__35602;
continue;
} else {
var G__35603 = seq__34994_35593;
var G__35604 = chunk__34996_35594;
var G__35605 = count__34997_35595;
var G__35606 = (i__34998_35596 + (1));
seq__34994_35593 = G__35603;
chunk__34996_35594 = G__35604;
count__34997_35595 = G__35605;
i__34998_35596 = G__35606;
continue;
}
} else {
var temp__5735__auto___35607__$1 = cljs.core.seq(seq__34994_35593);
if(temp__5735__auto___35607__$1){
var seq__34994_35608__$1 = temp__5735__auto___35607__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34994_35608__$1)){
var c__4556__auto___35609 = cljs.core.chunk_first(seq__34994_35608__$1);
var G__35611 = cljs.core.chunk_rest(seq__34994_35608__$1);
var G__35612 = c__4556__auto___35609;
var G__35613 = cljs.core.count(c__4556__auto___35609);
var G__35614 = (0);
seq__34994_35593 = G__35611;
chunk__34996_35594 = G__35612;
count__34997_35595 = G__35613;
i__34998_35596 = G__35614;
continue;
} else {
var child_35615 = cljs.core.first(seq__34994_35608__$1);
if(cljs.core.truth_(child_35615)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35615);


var G__35616 = cljs.core.next(seq__34994_35608__$1);
var G__35617 = null;
var G__35618 = (0);
var G__35619 = (0);
seq__34994_35593 = G__35616;
chunk__34996_35594 = G__35617;
count__34997_35595 = G__35618;
i__34998_35596 = G__35619;
continue;
} else {
var G__35620 = cljs.core.next(seq__34994_35608__$1);
var G__35621 = null;
var G__35622 = (0);
var G__35623 = (0);
seq__34994_35593 = G__35620;
chunk__34996_35594 = G__35621;
count__34997_35595 = G__35622;
i__34998_35596 = G__35623;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35592);
}


var G__35624 = cljs.core.next(seq__34904_35585__$1);
var G__35625 = null;
var G__35626 = (0);
var G__35627 = (0);
seq__34904_35545 = G__35624;
chunk__34905_35546 = G__35625;
count__34906_35547 = G__35626;
i__34907_35548 = G__35627;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35039 = cljs.core.seq(node);
var chunk__35040 = null;
var count__35041 = (0);
var i__35042 = (0);
while(true){
if((i__35042 < count__35041)){
var n = chunk__35040.cljs$core$IIndexed$_nth$arity$2(null,i__35042);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35630 = seq__35039;
var G__35631 = chunk__35040;
var G__35632 = count__35041;
var G__35633 = (i__35042 + (1));
seq__35039 = G__35630;
chunk__35040 = G__35631;
count__35041 = G__35632;
i__35042 = G__35633;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35039);
if(temp__5735__auto__){
var seq__35039__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35039__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35039__$1);
var G__35634 = cljs.core.chunk_rest(seq__35039__$1);
var G__35635 = c__4556__auto__;
var G__35636 = cljs.core.count(c__4556__auto__);
var G__35637 = (0);
seq__35039 = G__35634;
chunk__35040 = G__35635;
count__35041 = G__35636;
i__35042 = G__35637;
continue;
} else {
var n = cljs.core.first(seq__35039__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35638 = cljs.core.next(seq__35039__$1);
var G__35639 = null;
var G__35640 = (0);
var G__35641 = (0);
seq__35039 = G__35638;
chunk__35040 = G__35639;
count__35041 = G__35640;
i__35042 = G__35641;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35054 = arguments.length;
switch (G__35054) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35057 = arguments.length;
switch (G__35057) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35065 = arguments.length;
switch (G__35065) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35648 = arguments.length;
var i__4737__auto___35649 = (0);
while(true){
if((i__4737__auto___35649 < len__4736__auto___35648)){
args__4742__auto__.push((arguments[i__4737__auto___35649]));

var G__35650 = (i__4737__auto___35649 + (1));
i__4737__auto___35649 = G__35650;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35071_35652 = cljs.core.seq(nodes);
var chunk__35072_35653 = null;
var count__35073_35654 = (0);
var i__35074_35655 = (0);
while(true){
if((i__35074_35655 < count__35073_35654)){
var node_35657 = chunk__35072_35653.cljs$core$IIndexed$_nth$arity$2(null,i__35074_35655);
fragment.appendChild(shadow.dom._to_dom(node_35657));


var G__35659 = seq__35071_35652;
var G__35660 = chunk__35072_35653;
var G__35661 = count__35073_35654;
var G__35662 = (i__35074_35655 + (1));
seq__35071_35652 = G__35659;
chunk__35072_35653 = G__35660;
count__35073_35654 = G__35661;
i__35074_35655 = G__35662;
continue;
} else {
var temp__5735__auto___35664 = cljs.core.seq(seq__35071_35652);
if(temp__5735__auto___35664){
var seq__35071_35665__$1 = temp__5735__auto___35664;
if(cljs.core.chunked_seq_QMARK_(seq__35071_35665__$1)){
var c__4556__auto___35666 = cljs.core.chunk_first(seq__35071_35665__$1);
var G__35667 = cljs.core.chunk_rest(seq__35071_35665__$1);
var G__35668 = c__4556__auto___35666;
var G__35669 = cljs.core.count(c__4556__auto___35666);
var G__35670 = (0);
seq__35071_35652 = G__35667;
chunk__35072_35653 = G__35668;
count__35073_35654 = G__35669;
i__35074_35655 = G__35670;
continue;
} else {
var node_35671 = cljs.core.first(seq__35071_35665__$1);
fragment.appendChild(shadow.dom._to_dom(node_35671));


var G__35672 = cljs.core.next(seq__35071_35665__$1);
var G__35673 = null;
var G__35674 = (0);
var G__35675 = (0);
seq__35071_35652 = G__35672;
chunk__35072_35653 = G__35673;
count__35073_35654 = G__35674;
i__35074_35655 = G__35675;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35067){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35067));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35091_35678 = cljs.core.seq(scripts);
var chunk__35092_35679 = null;
var count__35093_35680 = (0);
var i__35094_35681 = (0);
while(true){
if((i__35094_35681 < count__35093_35680)){
var vec__35110_35682 = chunk__35092_35679.cljs$core$IIndexed$_nth$arity$2(null,i__35094_35681);
var script_tag_35683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35110_35682,(0),null);
var script_body_35684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35110_35682,(1),null);
eval(script_body_35684);


var G__35685 = seq__35091_35678;
var G__35686 = chunk__35092_35679;
var G__35687 = count__35093_35680;
var G__35688 = (i__35094_35681 + (1));
seq__35091_35678 = G__35685;
chunk__35092_35679 = G__35686;
count__35093_35680 = G__35687;
i__35094_35681 = G__35688;
continue;
} else {
var temp__5735__auto___35690 = cljs.core.seq(seq__35091_35678);
if(temp__5735__auto___35690){
var seq__35091_35691__$1 = temp__5735__auto___35690;
if(cljs.core.chunked_seq_QMARK_(seq__35091_35691__$1)){
var c__4556__auto___35692 = cljs.core.chunk_first(seq__35091_35691__$1);
var G__35693 = cljs.core.chunk_rest(seq__35091_35691__$1);
var G__35694 = c__4556__auto___35692;
var G__35695 = cljs.core.count(c__4556__auto___35692);
var G__35696 = (0);
seq__35091_35678 = G__35693;
chunk__35092_35679 = G__35694;
count__35093_35680 = G__35695;
i__35094_35681 = G__35696;
continue;
} else {
var vec__35116_35697 = cljs.core.first(seq__35091_35691__$1);
var script_tag_35698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35116_35697,(0),null);
var script_body_35699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35116_35697,(1),null);
eval(script_body_35699);


var G__35700 = cljs.core.next(seq__35091_35691__$1);
var G__35701 = null;
var G__35702 = (0);
var G__35703 = (0);
seq__35091_35678 = G__35700;
chunk__35092_35679 = G__35701;
count__35093_35680 = G__35702;
i__35094_35681 = G__35703;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35121){
var vec__35122 = p__35121;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35122,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35122,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35146 = arguments.length;
switch (G__35146) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35171 = cljs.core.seq(style_keys);
var chunk__35172 = null;
var count__35173 = (0);
var i__35174 = (0);
while(true){
if((i__35174 < count__35173)){
var it = chunk__35172.cljs$core$IIndexed$_nth$arity$2(null,i__35174);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35710 = seq__35171;
var G__35711 = chunk__35172;
var G__35712 = count__35173;
var G__35713 = (i__35174 + (1));
seq__35171 = G__35710;
chunk__35172 = G__35711;
count__35173 = G__35712;
i__35174 = G__35713;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35171);
if(temp__5735__auto__){
var seq__35171__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35171__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35171__$1);
var G__35715 = cljs.core.chunk_rest(seq__35171__$1);
var G__35716 = c__4556__auto__;
var G__35717 = cljs.core.count(c__4556__auto__);
var G__35718 = (0);
seq__35171 = G__35715;
chunk__35172 = G__35716;
count__35173 = G__35717;
i__35174 = G__35718;
continue;
} else {
var it = cljs.core.first(seq__35171__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35719 = cljs.core.next(seq__35171__$1);
var G__35720 = null;
var G__35721 = (0);
var G__35722 = (0);
seq__35171 = G__35719;
chunk__35172 = G__35720;
count__35173 = G__35721;
i__35174 = G__35722;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35179,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35185 = k35179;
var G__35185__$1 = (((G__35185 instanceof cljs.core.Keyword))?G__35185.fqn:null);
switch (G__35185__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35179,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__35188){
var vec__35189 = p__35188;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35189,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35189,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35178){
var self__ = this;
var G__35178__$1 = this;
return (new cljs.core.RecordIter((0),G__35178__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35180,other35181){
var self__ = this;
var this35180__$1 = this;
return (((!((other35181 == null)))) && ((this35180__$1.constructor === other35181.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35180__$1.x,other35181.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35180__$1.y,other35181.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35180__$1.__extmap,other35181.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35178){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35194 = cljs.core.keyword_identical_QMARK_;
var expr__35195 = k__4388__auto__;
if(cljs.core.truth_((pred__35194.cljs$core$IFn$_invoke$arity$2 ? pred__35194.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35195) : pred__35194.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35195)))){
return (new shadow.dom.Coordinate(G__35178,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35194.cljs$core$IFn$_invoke$arity$2 ? pred__35194.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35195) : pred__35194.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35195)))){
return (new shadow.dom.Coordinate(self__.x,G__35178,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__35178),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35178){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35178,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35183){
var extmap__4419__auto__ = (function (){var G__35209 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35183,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35183)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35209);
} else {
return G__35209;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35183),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35183),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35223,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35233 = k35223;
var G__35233__$1 = (((G__35233 instanceof cljs.core.Keyword))?G__35233.fqn:null);
switch (G__35233__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35223,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__35237){
var vec__35238 = p__35237;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35238,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35238,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35222){
var self__ = this;
var G__35222__$1 = this;
return (new cljs.core.RecordIter((0),G__35222__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35224,other35225){
var self__ = this;
var this35224__$1 = this;
return (((!((other35225 == null)))) && ((this35224__$1.constructor === other35225.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35224__$1.w,other35225.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35224__$1.h,other35225.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35224__$1.__extmap,other35225.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35222){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35252 = cljs.core.keyword_identical_QMARK_;
var expr__35253 = k__4388__auto__;
if(cljs.core.truth_((pred__35252.cljs$core$IFn$_invoke$arity$2 ? pred__35252.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35253) : pred__35252.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35253)))){
return (new shadow.dom.Size(G__35222,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35252.cljs$core$IFn$_invoke$arity$2 ? pred__35252.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35253) : pred__35252.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35253)))){
return (new shadow.dom.Size(self__.w,G__35222,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__35222),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35222){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35222,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35228){
var extmap__4419__auto__ = (function (){var G__35262 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35228,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35228)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35262);
} else {
return G__35262;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35228),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35228),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__35742 = (i + (1));
var G__35743 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35742;
ret = G__35743;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35280){
var vec__35281 = p__35280;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35281,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35281,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35288 = arguments.length;
switch (G__35288) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35745 = ps;
var G__35746 = (i + (1));
el__$1 = G__35745;
i = G__35746;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35308 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35308,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35308,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35308,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35313_35750 = cljs.core.seq(props);
var chunk__35314_35751 = null;
var count__35315_35752 = (0);
var i__35316_35753 = (0);
while(true){
if((i__35316_35753 < count__35315_35752)){
var vec__35331_35754 = chunk__35314_35751.cljs$core$IIndexed$_nth$arity$2(null,i__35316_35753);
var k_35755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35331_35754,(0),null);
var v_35756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35331_35754,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_35755);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35755),v_35756);


var G__35757 = seq__35313_35750;
var G__35758 = chunk__35314_35751;
var G__35759 = count__35315_35752;
var G__35760 = (i__35316_35753 + (1));
seq__35313_35750 = G__35757;
chunk__35314_35751 = G__35758;
count__35315_35752 = G__35759;
i__35316_35753 = G__35760;
continue;
} else {
var temp__5735__auto___35763 = cljs.core.seq(seq__35313_35750);
if(temp__5735__auto___35763){
var seq__35313_35764__$1 = temp__5735__auto___35763;
if(cljs.core.chunked_seq_QMARK_(seq__35313_35764__$1)){
var c__4556__auto___35765 = cljs.core.chunk_first(seq__35313_35764__$1);
var G__35766 = cljs.core.chunk_rest(seq__35313_35764__$1);
var G__35767 = c__4556__auto___35765;
var G__35768 = cljs.core.count(c__4556__auto___35765);
var G__35769 = (0);
seq__35313_35750 = G__35766;
chunk__35314_35751 = G__35767;
count__35315_35752 = G__35768;
i__35316_35753 = G__35769;
continue;
} else {
var vec__35337_35770 = cljs.core.first(seq__35313_35764__$1);
var k_35771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35337_35770,(0),null);
var v_35772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35337_35770,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_35771);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35771),v_35772);


var G__35775 = cljs.core.next(seq__35313_35764__$1);
var G__35776 = null;
var G__35777 = (0);
var G__35778 = (0);
seq__35313_35750 = G__35775;
chunk__35314_35751 = G__35776;
count__35315_35752 = G__35777;
i__35316_35753 = G__35778;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35342 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35342,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35342,(1),null);
var seq__35345_35781 = cljs.core.seq(node_children);
var chunk__35347_35782 = null;
var count__35348_35783 = (0);
var i__35349_35784 = (0);
while(true){
if((i__35349_35784 < count__35348_35783)){
var child_struct_35785 = chunk__35347_35782.cljs$core$IIndexed$_nth$arity$2(null,i__35349_35784);
if((!((child_struct_35785 == null)))){
if(typeof child_struct_35785 === 'string'){
var text_35786 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35786),child_struct_35785].join(''));
} else {
var children_35787 = shadow.dom.svg_node(child_struct_35785);
if(cljs.core.seq_QMARK_(children_35787)){
var seq__35363_35788 = cljs.core.seq(children_35787);
var chunk__35365_35789 = null;
var count__35366_35790 = (0);
var i__35367_35791 = (0);
while(true){
if((i__35367_35791 < count__35366_35790)){
var child_35792 = chunk__35365_35789.cljs$core$IIndexed$_nth$arity$2(null,i__35367_35791);
if(cljs.core.truth_(child_35792)){
node.appendChild(child_35792);


var G__35793 = seq__35363_35788;
var G__35794 = chunk__35365_35789;
var G__35795 = count__35366_35790;
var G__35796 = (i__35367_35791 + (1));
seq__35363_35788 = G__35793;
chunk__35365_35789 = G__35794;
count__35366_35790 = G__35795;
i__35367_35791 = G__35796;
continue;
} else {
var G__35797 = seq__35363_35788;
var G__35798 = chunk__35365_35789;
var G__35799 = count__35366_35790;
var G__35800 = (i__35367_35791 + (1));
seq__35363_35788 = G__35797;
chunk__35365_35789 = G__35798;
count__35366_35790 = G__35799;
i__35367_35791 = G__35800;
continue;
}
} else {
var temp__5735__auto___35802 = cljs.core.seq(seq__35363_35788);
if(temp__5735__auto___35802){
var seq__35363_35803__$1 = temp__5735__auto___35802;
if(cljs.core.chunked_seq_QMARK_(seq__35363_35803__$1)){
var c__4556__auto___35805 = cljs.core.chunk_first(seq__35363_35803__$1);
var G__35807 = cljs.core.chunk_rest(seq__35363_35803__$1);
var G__35808 = c__4556__auto___35805;
var G__35809 = cljs.core.count(c__4556__auto___35805);
var G__35810 = (0);
seq__35363_35788 = G__35807;
chunk__35365_35789 = G__35808;
count__35366_35790 = G__35809;
i__35367_35791 = G__35810;
continue;
} else {
var child_35811 = cljs.core.first(seq__35363_35803__$1);
if(cljs.core.truth_(child_35811)){
node.appendChild(child_35811);


var G__35813 = cljs.core.next(seq__35363_35803__$1);
var G__35814 = null;
var G__35815 = (0);
var G__35816 = (0);
seq__35363_35788 = G__35813;
chunk__35365_35789 = G__35814;
count__35366_35790 = G__35815;
i__35367_35791 = G__35816;
continue;
} else {
var G__35817 = cljs.core.next(seq__35363_35803__$1);
var G__35818 = null;
var G__35819 = (0);
var G__35820 = (0);
seq__35363_35788 = G__35817;
chunk__35365_35789 = G__35818;
count__35366_35790 = G__35819;
i__35367_35791 = G__35820;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35787);
}
}


var G__35821 = seq__35345_35781;
var G__35822 = chunk__35347_35782;
var G__35823 = count__35348_35783;
var G__35824 = (i__35349_35784 + (1));
seq__35345_35781 = G__35821;
chunk__35347_35782 = G__35822;
count__35348_35783 = G__35823;
i__35349_35784 = G__35824;
continue;
} else {
var G__35825 = seq__35345_35781;
var G__35826 = chunk__35347_35782;
var G__35827 = count__35348_35783;
var G__35828 = (i__35349_35784 + (1));
seq__35345_35781 = G__35825;
chunk__35347_35782 = G__35826;
count__35348_35783 = G__35827;
i__35349_35784 = G__35828;
continue;
}
} else {
var temp__5735__auto___35829 = cljs.core.seq(seq__35345_35781);
if(temp__5735__auto___35829){
var seq__35345_35830__$1 = temp__5735__auto___35829;
if(cljs.core.chunked_seq_QMARK_(seq__35345_35830__$1)){
var c__4556__auto___35831 = cljs.core.chunk_first(seq__35345_35830__$1);
var G__35832 = cljs.core.chunk_rest(seq__35345_35830__$1);
var G__35833 = c__4556__auto___35831;
var G__35834 = cljs.core.count(c__4556__auto___35831);
var G__35835 = (0);
seq__35345_35781 = G__35832;
chunk__35347_35782 = G__35833;
count__35348_35783 = G__35834;
i__35349_35784 = G__35835;
continue;
} else {
var child_struct_35836 = cljs.core.first(seq__35345_35830__$1);
if((!((child_struct_35836 == null)))){
if(typeof child_struct_35836 === 'string'){
var text_35837 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35837),child_struct_35836].join(''));
} else {
var children_35839 = shadow.dom.svg_node(child_struct_35836);
if(cljs.core.seq_QMARK_(children_35839)){
var seq__35379_35840 = cljs.core.seq(children_35839);
var chunk__35381_35841 = null;
var count__35382_35842 = (0);
var i__35383_35843 = (0);
while(true){
if((i__35383_35843 < count__35382_35842)){
var child_35844 = chunk__35381_35841.cljs$core$IIndexed$_nth$arity$2(null,i__35383_35843);
if(cljs.core.truth_(child_35844)){
node.appendChild(child_35844);


var G__35847 = seq__35379_35840;
var G__35848 = chunk__35381_35841;
var G__35849 = count__35382_35842;
var G__35850 = (i__35383_35843 + (1));
seq__35379_35840 = G__35847;
chunk__35381_35841 = G__35848;
count__35382_35842 = G__35849;
i__35383_35843 = G__35850;
continue;
} else {
var G__35853 = seq__35379_35840;
var G__35854 = chunk__35381_35841;
var G__35855 = count__35382_35842;
var G__35856 = (i__35383_35843 + (1));
seq__35379_35840 = G__35853;
chunk__35381_35841 = G__35854;
count__35382_35842 = G__35855;
i__35383_35843 = G__35856;
continue;
}
} else {
var temp__5735__auto___35857__$1 = cljs.core.seq(seq__35379_35840);
if(temp__5735__auto___35857__$1){
var seq__35379_35858__$1 = temp__5735__auto___35857__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35379_35858__$1)){
var c__4556__auto___35861 = cljs.core.chunk_first(seq__35379_35858__$1);
var G__35862 = cljs.core.chunk_rest(seq__35379_35858__$1);
var G__35863 = c__4556__auto___35861;
var G__35864 = cljs.core.count(c__4556__auto___35861);
var G__35865 = (0);
seq__35379_35840 = G__35862;
chunk__35381_35841 = G__35863;
count__35382_35842 = G__35864;
i__35383_35843 = G__35865;
continue;
} else {
var child_35866 = cljs.core.first(seq__35379_35858__$1);
if(cljs.core.truth_(child_35866)){
node.appendChild(child_35866);


var G__35869 = cljs.core.next(seq__35379_35858__$1);
var G__35870 = null;
var G__35871 = (0);
var G__35872 = (0);
seq__35379_35840 = G__35869;
chunk__35381_35841 = G__35870;
count__35382_35842 = G__35871;
i__35383_35843 = G__35872;
continue;
} else {
var G__35873 = cljs.core.next(seq__35379_35858__$1);
var G__35874 = null;
var G__35875 = (0);
var G__35876 = (0);
seq__35379_35840 = G__35873;
chunk__35381_35841 = G__35874;
count__35382_35842 = G__35875;
i__35383_35843 = G__35876;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35839);
}
}


var G__35878 = cljs.core.next(seq__35345_35830__$1);
var G__35879 = null;
var G__35880 = (0);
var G__35881 = (0);
seq__35345_35781 = G__35878;
chunk__35347_35782 = G__35879;
count__35348_35783 = G__35880;
i__35349_35784 = G__35881;
continue;
} else {
var G__35882 = cljs.core.next(seq__35345_35830__$1);
var G__35883 = null;
var G__35884 = (0);
var G__35885 = (0);
seq__35345_35781 = G__35882;
chunk__35347_35782 = G__35883;
count__35348_35783 = G__35884;
i__35349_35784 = G__35885;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35891 = arguments.length;
var i__4737__auto___35892 = (0);
while(true){
if((i__4737__auto___35892 < len__4736__auto___35891)){
args__4742__auto__.push((arguments[i__4737__auto___35892]));

var G__35893 = (i__4737__auto___35892 + (1));
i__4737__auto___35892 = G__35893;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35394){
var G__35395 = cljs.core.first(seq35394);
var seq35394__$1 = cljs.core.next(seq35394);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35395,seq35394__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35404 = arguments.length;
switch (G__35404) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__32778__auto___35910 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32779__auto__ = (function (){var switch__32640__auto__ = (function (state_35415){
var state_val_35416 = (state_35415[(1)]);
if((state_val_35416 === (1))){
var state_35415__$1 = state_35415;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35415__$1,(2),once_or_cleanup);
} else {
if((state_val_35416 === (2))){
var inst_35411 = (state_35415[(2)]);
var inst_35413 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35415__$1 = (function (){var statearr_35420 = state_35415;
(statearr_35420[(7)] = inst_35411);

return statearr_35420;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35415__$1,inst_35413);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32641__auto__ = null;
var shadow$dom$state_machine__32641__auto____0 = (function (){
var statearr_35424 = [null,null,null,null,null,null,null,null];
(statearr_35424[(0)] = shadow$dom$state_machine__32641__auto__);

(statearr_35424[(1)] = (1));

return statearr_35424;
});
var shadow$dom$state_machine__32641__auto____1 = (function (state_35415){
while(true){
var ret_value__32642__auto__ = (function (){try{while(true){
var result__32643__auto__ = switch__32640__auto__(state_35415);
if(cljs.core.keyword_identical_QMARK_(result__32643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32643__auto__;
}
break;
}
}catch (e35425){var ex__32644__auto__ = e35425;
var statearr_35426_35913 = state_35415;
(statearr_35426_35913[(2)] = ex__32644__auto__);


if(cljs.core.seq((state_35415[(4)]))){
var statearr_35427_35914 = state_35415;
(statearr_35427_35914[(1)] = cljs.core.first((state_35415[(4)])));

} else {
throw ex__32644__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35915 = state_35415;
state_35415 = G__35915;
continue;
} else {
return ret_value__32642__auto__;
}
break;
}
});
shadow$dom$state_machine__32641__auto__ = function(state_35415){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32641__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32641__auto____1.call(this,state_35415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32641__auto____0;
shadow$dom$state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32641__auto____1;
return shadow$dom$state_machine__32641__auto__;
})()
})();
var state__32780__auto__ = (function (){var statearr_35430 = f__32779__auto__();
(statearr_35430[(6)] = c__32778__auto___35910);

return statearr_35430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32780__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
