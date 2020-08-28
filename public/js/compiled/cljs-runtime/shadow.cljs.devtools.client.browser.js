goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37368 = arguments.length;
var i__4737__auto___37369 = (0);
while(true){
if((i__4737__auto___37369 < len__4736__auto___37368)){
args__4742__auto__.push((arguments[i__4737__auto___37369]));

var G__37370 = (i__4737__auto___37369 + (1));
i__4737__auto___37369 = G__37370;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37240){
var G__37241 = cljs.core.first(seq37240);
var seq37240__$1 = cljs.core.next(seq37240);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37241,seq37240__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37242 = cljs.core.seq(sources);
var chunk__37243 = null;
var count__37244 = (0);
var i__37245 = (0);
while(true){
if((i__37245 < count__37244)){
var map__37254 = chunk__37243.cljs$core$IIndexed$_nth$arity$2(null,i__37245);
var map__37254__$1 = (((((!((map__37254 == null))))?(((((map__37254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37254):map__37254);
var src = map__37254__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37254__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37254__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37254__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37254__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e37256){var e_37371 = e37256;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37371);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37371.message)].join('')));
}

var G__37372 = seq__37242;
var G__37373 = chunk__37243;
var G__37374 = count__37244;
var G__37375 = (i__37245 + (1));
seq__37242 = G__37372;
chunk__37243 = G__37373;
count__37244 = G__37374;
i__37245 = G__37375;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37242);
if(temp__5735__auto__){
var seq__37242__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37242__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37242__$1);
var G__37376 = cljs.core.chunk_rest(seq__37242__$1);
var G__37377 = c__4556__auto__;
var G__37378 = cljs.core.count(c__4556__auto__);
var G__37379 = (0);
seq__37242 = G__37376;
chunk__37243 = G__37377;
count__37244 = G__37378;
i__37245 = G__37379;
continue;
} else {
var map__37257 = cljs.core.first(seq__37242__$1);
var map__37257__$1 = (((((!((map__37257 == null))))?(((((map__37257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37257):map__37257);
var src = map__37257__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37257__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37257__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37257__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37257__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e37259){var e_37380 = e37259;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37380);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37380.message)].join('')));
}

var G__37381 = cljs.core.next(seq__37242__$1);
var G__37382 = null;
var G__37383 = (0);
var G__37384 = (0);
seq__37242 = G__37381;
chunk__37243 = G__37382;
count__37244 = G__37383;
i__37245 = G__37384;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37260 = cljs.core.seq(js_requires);
var chunk__37261 = null;
var count__37262 = (0);
var i__37263 = (0);
while(true){
if((i__37263 < count__37262)){
var js_ns = chunk__37261.cljs$core$IIndexed$_nth$arity$2(null,i__37263);
var require_str_37385 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37385);


var G__37386 = seq__37260;
var G__37387 = chunk__37261;
var G__37388 = count__37262;
var G__37389 = (i__37263 + (1));
seq__37260 = G__37386;
chunk__37261 = G__37387;
count__37262 = G__37388;
i__37263 = G__37389;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37260);
if(temp__5735__auto__){
var seq__37260__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37260__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37260__$1);
var G__37390 = cljs.core.chunk_rest(seq__37260__$1);
var G__37391 = c__4556__auto__;
var G__37392 = cljs.core.count(c__4556__auto__);
var G__37393 = (0);
seq__37260 = G__37390;
chunk__37261 = G__37391;
count__37262 = G__37392;
i__37263 = G__37393;
continue;
} else {
var js_ns = cljs.core.first(seq__37260__$1);
var require_str_37394 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37394);


var G__37395 = cljs.core.next(seq__37260__$1);
var G__37396 = null;
var G__37397 = (0);
var G__37398 = (0);
seq__37260 = G__37395;
chunk__37261 = G__37396;
count__37262 = G__37397;
i__37263 = G__37398;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__37264 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__37264) : callback.call(null,G__37264));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__37266){
var map__37267 = p__37266;
var map__37267__$1 = (((((!((map__37267 == null))))?(((((map__37267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37267):map__37267);
var msg = map__37267__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37267__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37267__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37269(s__37270){
return (new cljs.core.LazySeq(null,(function (){
var s__37270__$1 = s__37270;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37270__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__37275 = cljs.core.first(xs__6292__auto__);
var map__37275__$1 = (((((!((map__37275 == null))))?(((((map__37275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37275):map__37275);
var src = map__37275__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37275__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37275__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__37270__$1,map__37275,map__37275__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37267,map__37267__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37269_$_iter__37271(s__37272){
return (new cljs.core.LazySeq(null,((function (s__37270__$1,map__37275,map__37275__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37267,map__37267__$1,msg,info,reload_info){
return (function (){
var s__37272__$1 = s__37272;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37272__$1);
if(temp__5735__auto____$1){
var s__37272__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37272__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__37272__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__37274 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__37273 = (0);
while(true){
if((i__37273 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__37273);
cljs.core.chunk_append(b__37274,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37399 = (i__37273 + (1));
i__37273 = G__37399;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37274),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37269_$_iter__37271(cljs.core.chunk_rest(s__37272__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37274),null);
}
} else {
var warning = cljs.core.first(s__37272__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37269_$_iter__37271(cljs.core.rest(s__37272__$2)));
}
} else {
return null;
}
break;
}
});})(s__37270__$1,map__37275,map__37275__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37267,map__37267__$1,msg,info,reload_info))
,null,null));
});})(s__37270__$1,map__37275,map__37275__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37267,map__37267__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37269(cljs.core.rest(s__37270__$1)));
} else {
var G__37400 = cljs.core.rest(s__37270__$1);
s__37270__$1 = G__37400;
continue;
}
} else {
var G__37401 = cljs.core.rest(s__37270__$1);
s__37270__$1 = G__37401;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__37277_37402 = cljs.core.seq(warnings);
var chunk__37278_37403 = null;
var count__37279_37404 = (0);
var i__37280_37405 = (0);
while(true){
if((i__37280_37405 < count__37279_37404)){
var map__37285_37406 = chunk__37278_37403.cljs$core$IIndexed$_nth$arity$2(null,i__37280_37405);
var map__37285_37407__$1 = (((((!((map__37285_37406 == null))))?(((((map__37285_37406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37285_37406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37285_37406):map__37285_37406);
var w_37408 = map__37285_37407__$1;
var msg_37409__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37285_37407__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37285_37407__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37285_37407__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37412 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37285_37407__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37412)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37410),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37411),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37409__$1)].join(''));


var G__37413 = seq__37277_37402;
var G__37414 = chunk__37278_37403;
var G__37415 = count__37279_37404;
var G__37416 = (i__37280_37405 + (1));
seq__37277_37402 = G__37413;
chunk__37278_37403 = G__37414;
count__37279_37404 = G__37415;
i__37280_37405 = G__37416;
continue;
} else {
var temp__5735__auto___37417 = cljs.core.seq(seq__37277_37402);
if(temp__5735__auto___37417){
var seq__37277_37418__$1 = temp__5735__auto___37417;
if(cljs.core.chunked_seq_QMARK_(seq__37277_37418__$1)){
var c__4556__auto___37419 = cljs.core.chunk_first(seq__37277_37418__$1);
var G__37420 = cljs.core.chunk_rest(seq__37277_37418__$1);
var G__37421 = c__4556__auto___37419;
var G__37422 = cljs.core.count(c__4556__auto___37419);
var G__37423 = (0);
seq__37277_37402 = G__37420;
chunk__37278_37403 = G__37421;
count__37279_37404 = G__37422;
i__37280_37405 = G__37423;
continue;
} else {
var map__37287_37424 = cljs.core.first(seq__37277_37418__$1);
var map__37287_37425__$1 = (((((!((map__37287_37424 == null))))?(((((map__37287_37424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37287_37424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37287_37424):map__37287_37424);
var w_37426 = map__37287_37425__$1;
var msg_37427__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37287_37425__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37287_37425__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37429 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37287_37425__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37287_37425__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37430)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37428),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37429),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37427__$1)].join(''));


var G__37431 = cljs.core.next(seq__37277_37418__$1);
var G__37432 = null;
var G__37433 = (0);
var G__37434 = (0);
seq__37277_37402 = G__37431;
chunk__37278_37403 = G__37432;
count__37279_37404 = G__37433;
i__37280_37405 = G__37434;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__37265_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37265_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__37289){
var map__37290 = p__37289;
var map__37290__$1 = (((((!((map__37290 == null))))?(((((map__37290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37290):map__37290);
var msg = map__37290__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37290__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37292 = cljs.core.seq(updates);
var chunk__37294 = null;
var count__37295 = (0);
var i__37296 = (0);
while(true){
if((i__37296 < count__37295)){
var path = chunk__37294.cljs$core$IIndexed$_nth$arity$2(null,i__37296);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37322_37435 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37325_37436 = null;
var count__37326_37437 = (0);
var i__37327_37438 = (0);
while(true){
if((i__37327_37438 < count__37326_37437)){
var node_37439 = chunk__37325_37436.cljs$core$IIndexed$_nth$arity$2(null,i__37327_37438);
var path_match_37440 = shadow.cljs.devtools.client.browser.match_paths(node_37439.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37440)){
var new_link_37441 = (function (){var G__37332 = node_37439.cloneNode(true);
G__37332.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37440),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37332;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37440], 0));

goog.dom.insertSiblingAfter(new_link_37441,node_37439);

goog.dom.removeNode(node_37439);


var G__37442 = seq__37322_37435;
var G__37443 = chunk__37325_37436;
var G__37444 = count__37326_37437;
var G__37445 = (i__37327_37438 + (1));
seq__37322_37435 = G__37442;
chunk__37325_37436 = G__37443;
count__37326_37437 = G__37444;
i__37327_37438 = G__37445;
continue;
} else {
var G__37446 = seq__37322_37435;
var G__37447 = chunk__37325_37436;
var G__37448 = count__37326_37437;
var G__37449 = (i__37327_37438 + (1));
seq__37322_37435 = G__37446;
chunk__37325_37436 = G__37447;
count__37326_37437 = G__37448;
i__37327_37438 = G__37449;
continue;
}
} else {
var temp__5735__auto___37450 = cljs.core.seq(seq__37322_37435);
if(temp__5735__auto___37450){
var seq__37322_37451__$1 = temp__5735__auto___37450;
if(cljs.core.chunked_seq_QMARK_(seq__37322_37451__$1)){
var c__4556__auto___37452 = cljs.core.chunk_first(seq__37322_37451__$1);
var G__37453 = cljs.core.chunk_rest(seq__37322_37451__$1);
var G__37454 = c__4556__auto___37452;
var G__37455 = cljs.core.count(c__4556__auto___37452);
var G__37456 = (0);
seq__37322_37435 = G__37453;
chunk__37325_37436 = G__37454;
count__37326_37437 = G__37455;
i__37327_37438 = G__37456;
continue;
} else {
var node_37457 = cljs.core.first(seq__37322_37451__$1);
var path_match_37458 = shadow.cljs.devtools.client.browser.match_paths(node_37457.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37458)){
var new_link_37459 = (function (){var G__37333 = node_37457.cloneNode(true);
G__37333.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37458),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37333;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37458], 0));

goog.dom.insertSiblingAfter(new_link_37459,node_37457);

goog.dom.removeNode(node_37457);


var G__37460 = cljs.core.next(seq__37322_37451__$1);
var G__37461 = null;
var G__37462 = (0);
var G__37463 = (0);
seq__37322_37435 = G__37460;
chunk__37325_37436 = G__37461;
count__37326_37437 = G__37462;
i__37327_37438 = G__37463;
continue;
} else {
var G__37464 = cljs.core.next(seq__37322_37451__$1);
var G__37465 = null;
var G__37466 = (0);
var G__37467 = (0);
seq__37322_37435 = G__37464;
chunk__37325_37436 = G__37465;
count__37326_37437 = G__37466;
i__37327_37438 = G__37467;
continue;
}
}
} else {
}
}
break;
}


var G__37468 = seq__37292;
var G__37469 = chunk__37294;
var G__37470 = count__37295;
var G__37471 = (i__37296 + (1));
seq__37292 = G__37468;
chunk__37294 = G__37469;
count__37295 = G__37470;
i__37296 = G__37471;
continue;
} else {
var G__37472 = seq__37292;
var G__37473 = chunk__37294;
var G__37474 = count__37295;
var G__37475 = (i__37296 + (1));
seq__37292 = G__37472;
chunk__37294 = G__37473;
count__37295 = G__37474;
i__37296 = G__37475;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37292);
if(temp__5735__auto__){
var seq__37292__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37292__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37292__$1);
var G__37476 = cljs.core.chunk_rest(seq__37292__$1);
var G__37477 = c__4556__auto__;
var G__37478 = cljs.core.count(c__4556__auto__);
var G__37479 = (0);
seq__37292 = G__37476;
chunk__37294 = G__37477;
count__37295 = G__37478;
i__37296 = G__37479;
continue;
} else {
var path = cljs.core.first(seq__37292__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37334_37480 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37337_37481 = null;
var count__37338_37482 = (0);
var i__37339_37483 = (0);
while(true){
if((i__37339_37483 < count__37338_37482)){
var node_37484 = chunk__37337_37481.cljs$core$IIndexed$_nth$arity$2(null,i__37339_37483);
var path_match_37485 = shadow.cljs.devtools.client.browser.match_paths(node_37484.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37485)){
var new_link_37486 = (function (){var G__37344 = node_37484.cloneNode(true);
G__37344.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37485),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37344;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37485], 0));

goog.dom.insertSiblingAfter(new_link_37486,node_37484);

goog.dom.removeNode(node_37484);


var G__37487 = seq__37334_37480;
var G__37488 = chunk__37337_37481;
var G__37489 = count__37338_37482;
var G__37490 = (i__37339_37483 + (1));
seq__37334_37480 = G__37487;
chunk__37337_37481 = G__37488;
count__37338_37482 = G__37489;
i__37339_37483 = G__37490;
continue;
} else {
var G__37491 = seq__37334_37480;
var G__37492 = chunk__37337_37481;
var G__37493 = count__37338_37482;
var G__37494 = (i__37339_37483 + (1));
seq__37334_37480 = G__37491;
chunk__37337_37481 = G__37492;
count__37338_37482 = G__37493;
i__37339_37483 = G__37494;
continue;
}
} else {
var temp__5735__auto___37495__$1 = cljs.core.seq(seq__37334_37480);
if(temp__5735__auto___37495__$1){
var seq__37334_37496__$1 = temp__5735__auto___37495__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37334_37496__$1)){
var c__4556__auto___37497 = cljs.core.chunk_first(seq__37334_37496__$1);
var G__37498 = cljs.core.chunk_rest(seq__37334_37496__$1);
var G__37499 = c__4556__auto___37497;
var G__37500 = cljs.core.count(c__4556__auto___37497);
var G__37501 = (0);
seq__37334_37480 = G__37498;
chunk__37337_37481 = G__37499;
count__37338_37482 = G__37500;
i__37339_37483 = G__37501;
continue;
} else {
var node_37502 = cljs.core.first(seq__37334_37496__$1);
var path_match_37503 = shadow.cljs.devtools.client.browser.match_paths(node_37502.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37503)){
var new_link_37504 = (function (){var G__37345 = node_37502.cloneNode(true);
G__37345.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37503),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37345;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37503], 0));

goog.dom.insertSiblingAfter(new_link_37504,node_37502);

goog.dom.removeNode(node_37502);


var G__37505 = cljs.core.next(seq__37334_37496__$1);
var G__37506 = null;
var G__37507 = (0);
var G__37508 = (0);
seq__37334_37480 = G__37505;
chunk__37337_37481 = G__37506;
count__37338_37482 = G__37507;
i__37339_37483 = G__37508;
continue;
} else {
var G__37509 = cljs.core.next(seq__37334_37496__$1);
var G__37510 = null;
var G__37511 = (0);
var G__37512 = (0);
seq__37334_37480 = G__37509;
chunk__37337_37481 = G__37510;
count__37338_37482 = G__37511;
i__37339_37483 = G__37512;
continue;
}
}
} else {
}
}
break;
}


var G__37513 = cljs.core.next(seq__37292__$1);
var G__37514 = null;
var G__37515 = (0);
var G__37516 = (0);
seq__37292 = G__37513;
chunk__37294 = G__37514;
count__37295 = G__37515;
i__37296 = G__37516;
continue;
} else {
var G__37517 = cljs.core.next(seq__37292__$1);
var G__37518 = null;
var G__37519 = (0);
var G__37520 = (0);
seq__37292 = G__37517;
chunk__37294 = G__37518;
count__37295 = G__37519;
i__37296 = G__37520;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__37346){
var map__37347 = p__37346;
var map__37347__$1 = (((((!((map__37347 == null))))?(((((map__37347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37347):map__37347);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37347__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37347__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__37349,done){
var map__37350 = p__37349;
var map__37350__$1 = (((((!((map__37350 == null))))?(((((map__37350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37350):map__37350);
var msg = map__37350__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37350__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37350__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37350__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37350__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37352){
var map__37353 = p__37352;
var map__37353__$1 = (((((!((map__37353 == null))))?(((((map__37353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37353):map__37353);
var src = map__37353__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37353__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e37355){var e = e37355;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__37356,done){
var map__37357 = p__37356;
var map__37357__$1 = (((((!((map__37357 == null))))?(((((map__37357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37357):map__37357);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37357__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37357__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__37359){
var map__37360 = p__37359;
var map__37360__$1 = (((((!((map__37360 == null))))?(((((map__37360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37360):map__37360);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37360__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37360__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__37362,done){
var map__37363 = p__37362;
var map__37363__$1 = (((((!((map__37363 == null))))?(((((map__37363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37363):map__37363);
var msg = map__37363__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37363__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__37365_37521 = type;
var G__37365_37522__$1 = (((G__37365_37521 instanceof cljs.core.Keyword))?G__37365_37521.fqn:null);
switch (G__37365_37522__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__37366 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__37366.cljs$core$IFn$_invoke$arity$1 ? fexpr__37366.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__37366.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4126__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e37367){var e = e37367;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___37524 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___37524)){
var s_37525 = temp__5735__auto___37524;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_37525.onclose = (function (e){
return null;
}));

s_37525.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

if(cljs.core.truth_(goog.global.window)){
window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = goog.global.document;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",goog.global.document.readyState);
} else {
return and__4115__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
