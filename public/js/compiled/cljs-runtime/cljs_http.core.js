goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = (function (){var fexpr__27433 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__27433.cljs$core$IFn$_invoke$arity$1 ? fexpr__27433.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__27433.call(null,channel));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var req = temp__5735__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27436){
var vec__27437 = p__27436;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27437,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27437,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__27440 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__27440)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__27440)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__27440)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__27440)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__27440)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__27440)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27440)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__27441){
var map__27446 = p__27441;
var map__27446__$1 = (((((!((map__27446 == null))))?(((((map__27446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27446):map__27446);
var request = map__27446__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27446__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27446__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27446__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__27456 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__27456,default_headers);

cljs_http.core.apply_response_type_BANG_(G__27456,response_type);

G__27456.setTimeoutInterval(timeout);

G__27456.setWithCredentials(send_credentials);

return G__27456;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__27467){
var map__27468 = p__27467;
var map__27468__$1 = (((((!((map__27468 == null))))?(((((map__27468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27468):map__27468);
var request = map__27468__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27468__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27468__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27468__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27468__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27468__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27468__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4126__auto__ = request_method;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__27480 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__27480) : cljs_http.core.error_kw.call(null,G__27480));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_27581 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__27500_27583 = xhr;
G__27500_27583.setProgressEventsEnabled(true);

G__27500_27583.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_27581,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__27500_27583.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_27581,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__27006__auto___27584 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27007__auto__ = (function (){var switch__26961__auto__ = (function (state_27532){
var state_val_27533 = (state_27532[(1)]);
if((state_val_27533 === (1))){
var state_27532__$1 = state_27532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27532__$1,(2),cancel);
} else {
if((state_val_27533 === (2))){
var inst_27523 = (state_27532[(2)]);
var inst_27524 = xhr.isComplete();
var inst_27525 = cljs.core.not(inst_27524);
var state_27532__$1 = (function (){var statearr_27534 = state_27532;
(statearr_27534[(7)] = inst_27523);

return statearr_27534;
})();
if(inst_27525){
var statearr_27535_27585 = state_27532__$1;
(statearr_27535_27585[(1)] = (3));

} else {
var statearr_27536_27587 = state_27532__$1;
(statearr_27536_27587[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27533 === (3))){
var inst_27527 = xhr.abort();
var state_27532__$1 = state_27532;
var statearr_27538_27591 = state_27532__$1;
(statearr_27538_27591[(2)] = inst_27527);

(statearr_27538_27591[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27533 === (4))){
var state_27532__$1 = state_27532;
var statearr_27539_27592 = state_27532__$1;
(statearr_27539_27592[(2)] = null);

(statearr_27539_27592[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27533 === (5))){
var inst_27530 = (state_27532[(2)]);
var state_27532__$1 = state_27532;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27532__$1,inst_27530);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__26962__auto__ = null;
var cljs_http$core$xhr_$_state_machine__26962__auto____0 = (function (){
var statearr_27540 = [null,null,null,null,null,null,null,null];
(statearr_27540[(0)] = cljs_http$core$xhr_$_state_machine__26962__auto__);

(statearr_27540[(1)] = (1));

return statearr_27540;
});
var cljs_http$core$xhr_$_state_machine__26962__auto____1 = (function (state_27532){
while(true){
var ret_value__26963__auto__ = (function (){try{while(true){
var result__26964__auto__ = switch__26961__auto__(state_27532);
if(cljs.core.keyword_identical_QMARK_(result__26964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26964__auto__;
}
break;
}
}catch (e27541){var ex__26965__auto__ = e27541;
var statearr_27542_27594 = state_27532;
(statearr_27542_27594[(2)] = ex__26965__auto__);


if(cljs.core.seq((state_27532[(4)]))){
var statearr_27543_27595 = state_27532;
(statearr_27543_27595[(1)] = cljs.core.first((state_27532[(4)])));

} else {
throw ex__26965__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27596 = state_27532;
state_27532 = G__27596;
continue;
} else {
return ret_value__26963__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__26962__auto__ = function(state_27532){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__26962__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__26962__auto____1.call(this,state_27532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__26962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__26962__auto____0;
cljs_http$core$xhr_$_state_machine__26962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__26962__auto____1;
return cljs_http$core$xhr_$_state_machine__26962__auto__;
})()
})();
var state__27008__auto__ = (function (){var statearr_27544 = f__27007__auto__();
(statearr_27544[(6)] = c__27006__auto___27584);

return statearr_27544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27008__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__27545){
var map__27550 = p__27545;
var map__27550__$1 = (((((!((map__27550 == null))))?(((((map__27550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27550):map__27550);
var request = map__27550__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27550__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27550__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27550__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27550__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_27598 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_27598], null));

if(cljs.core.truth_(cancel)){
var c__27006__auto___27602 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27007__auto__ = (function (){var switch__26961__auto__ = (function (state_27565){
var state_val_27566 = (state_27565[(1)]);
if((state_val_27566 === (1))){
var state_27565__$1 = state_27565;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27565__$1,(2),cancel);
} else {
if((state_val_27566 === (2))){
var inst_27562 = (state_27565[(2)]);
var inst_27563 = jsonp.cancel(req_27598);
var state_27565__$1 = (function (){var statearr_27567 = state_27565;
(statearr_27567[(7)] = inst_27562);

return statearr_27567;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27565__$1,inst_27563);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__26962__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__26962__auto____0 = (function (){
var statearr_27568 = [null,null,null,null,null,null,null,null];
(statearr_27568[(0)] = cljs_http$core$jsonp_$_state_machine__26962__auto__);

(statearr_27568[(1)] = (1));

return statearr_27568;
});
var cljs_http$core$jsonp_$_state_machine__26962__auto____1 = (function (state_27565){
while(true){
var ret_value__26963__auto__ = (function (){try{while(true){
var result__26964__auto__ = switch__26961__auto__(state_27565);
if(cljs.core.keyword_identical_QMARK_(result__26964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26964__auto__;
}
break;
}
}catch (e27569){var ex__26965__auto__ = e27569;
var statearr_27570_27607 = state_27565;
(statearr_27570_27607[(2)] = ex__26965__auto__);


if(cljs.core.seq((state_27565[(4)]))){
var statearr_27571_27608 = state_27565;
(statearr_27571_27608[(1)] = cljs.core.first((state_27565[(4)])));

} else {
throw ex__26965__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27609 = state_27565;
state_27565 = G__27609;
continue;
} else {
return ret_value__26963__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__26962__auto__ = function(state_27565){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__26962__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__26962__auto____1.call(this,state_27565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__26962__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__26962__auto____0;
cljs_http$core$jsonp_$_state_machine__26962__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__26962__auto____1;
return cljs_http$core$jsonp_$_state_machine__26962__auto__;
})()
})();
var state__27008__auto__ = (function (){var statearr_27572 = f__27007__auto__();
(statearr_27572[(6)] = c__27006__auto___27602);

return statearr_27572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27008__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__27573){
var map__27574 = p__27573;
var map__27574__$1 = (((((!((map__27574 == null))))?(((((map__27574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27574):map__27574);
var request = map__27574__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27574__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
