goog.provide('scrambler.routes');
goog.require('cljs.core');
goog.require('secretary.core');
var action__27262__auto___27327 = (function (params__27263__auto__){
if(cljs.core.map_QMARK_(params__27263__auto__)){
var map__27322 = params__27263__auto__;
var map__27322__$1 = (((((!((map__27322 == null))))?(((((map__27322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27322):map__27322);
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27322__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
return console.log(query_params);
} else {
if(cljs.core.vector_QMARK_(params__27263__auto__)){
var vec__27324 = params__27263__auto__;
var query_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27324,(0),null);
return console.log(query_params);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/scramble",action__27262__auto___27327);

secretary.core.dispatch_BANG_("/scramble?s1=foo&s2=bar");

//# sourceMappingURL=scrambler.routes.js.map
