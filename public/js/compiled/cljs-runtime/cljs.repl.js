goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38313){
var map__38314 = p__38313;
var map__38314__$1 = (((((!((map__38314 == null))))?(((((map__38314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38314):map__38314);
var m = map__38314__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38314__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38314__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38317_38526 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38318_38527 = null;
var count__38319_38528 = (0);
var i__38320_38529 = (0);
while(true){
if((i__38320_38529 < count__38319_38528)){
var f_38531 = chunk__38318_38527.cljs$core$IIndexed$_nth$arity$2(null,i__38320_38529);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38531], 0));


var G__38532 = seq__38317_38526;
var G__38533 = chunk__38318_38527;
var G__38534 = count__38319_38528;
var G__38535 = (i__38320_38529 + (1));
seq__38317_38526 = G__38532;
chunk__38318_38527 = G__38533;
count__38319_38528 = G__38534;
i__38320_38529 = G__38535;
continue;
} else {
var temp__5735__auto___38536 = cljs.core.seq(seq__38317_38526);
if(temp__5735__auto___38536){
var seq__38317_38537__$1 = temp__5735__auto___38536;
if(cljs.core.chunked_seq_QMARK_(seq__38317_38537__$1)){
var c__4556__auto___38538 = cljs.core.chunk_first(seq__38317_38537__$1);
var G__38539 = cljs.core.chunk_rest(seq__38317_38537__$1);
var G__38540 = c__4556__auto___38538;
var G__38541 = cljs.core.count(c__4556__auto___38538);
var G__38542 = (0);
seq__38317_38526 = G__38539;
chunk__38318_38527 = G__38540;
count__38319_38528 = G__38541;
i__38320_38529 = G__38542;
continue;
} else {
var f_38543 = cljs.core.first(seq__38317_38537__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38543], 0));


var G__38544 = cljs.core.next(seq__38317_38537__$1);
var G__38545 = null;
var G__38546 = (0);
var G__38547 = (0);
seq__38317_38526 = G__38544;
chunk__38318_38527 = G__38545;
count__38319_38528 = G__38546;
i__38320_38529 = G__38547;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38548 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_38548], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_38548)))?cljs.core.second(arglists_38548):arglists_38548)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38324_38549 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38325_38550 = null;
var count__38326_38551 = (0);
var i__38327_38552 = (0);
while(true){
if((i__38327_38552 < count__38326_38551)){
var vec__38338_38553 = chunk__38325_38550.cljs$core$IIndexed$_nth$arity$2(null,i__38327_38552);
var name_38554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38338_38553,(0),null);
var map__38341_38555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38338_38553,(1),null);
var map__38341_38556__$1 = (((((!((map__38341_38555 == null))))?(((((map__38341_38555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38341_38555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38341_38555):map__38341_38555);
var doc_38557 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38341_38556__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38558 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38341_38556__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38554], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38558], 0));

if(cljs.core.truth_(doc_38557)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38557], 0));
} else {
}


var G__38559 = seq__38324_38549;
var G__38560 = chunk__38325_38550;
var G__38561 = count__38326_38551;
var G__38562 = (i__38327_38552 + (1));
seq__38324_38549 = G__38559;
chunk__38325_38550 = G__38560;
count__38326_38551 = G__38561;
i__38327_38552 = G__38562;
continue;
} else {
var temp__5735__auto___38563 = cljs.core.seq(seq__38324_38549);
if(temp__5735__auto___38563){
var seq__38324_38564__$1 = temp__5735__auto___38563;
if(cljs.core.chunked_seq_QMARK_(seq__38324_38564__$1)){
var c__4556__auto___38565 = cljs.core.chunk_first(seq__38324_38564__$1);
var G__38566 = cljs.core.chunk_rest(seq__38324_38564__$1);
var G__38567 = c__4556__auto___38565;
var G__38568 = cljs.core.count(c__4556__auto___38565);
var G__38569 = (0);
seq__38324_38549 = G__38566;
chunk__38325_38550 = G__38567;
count__38326_38551 = G__38568;
i__38327_38552 = G__38569;
continue;
} else {
var vec__38345_38570 = cljs.core.first(seq__38324_38564__$1);
var name_38571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38345_38570,(0),null);
var map__38348_38572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38345_38570,(1),null);
var map__38348_38573__$1 = (((((!((map__38348_38572 == null))))?(((((map__38348_38572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38348_38572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38348_38572):map__38348_38572);
var doc_38574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38348_38573__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38575 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38348_38573__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38571], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38575], 0));

if(cljs.core.truth_(doc_38574)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38574], 0));
} else {
}


var G__38576 = cljs.core.next(seq__38324_38564__$1);
var G__38577 = null;
var G__38578 = (0);
var G__38579 = (0);
seq__38324_38549 = G__38576;
chunk__38325_38550 = G__38577;
count__38326_38551 = G__38578;
i__38327_38552 = G__38579;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__38351 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38352 = null;
var count__38353 = (0);
var i__38354 = (0);
while(true){
if((i__38354 < count__38353)){
var role = chunk__38352.cljs$core$IIndexed$_nth$arity$2(null,i__38354);
var temp__5735__auto___38580__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___38580__$1)){
var spec_38581 = temp__5735__auto___38580__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38581)], 0));
} else {
}


var G__38582 = seq__38351;
var G__38583 = chunk__38352;
var G__38584 = count__38353;
var G__38585 = (i__38354 + (1));
seq__38351 = G__38582;
chunk__38352 = G__38583;
count__38353 = G__38584;
i__38354 = G__38585;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__38351);
if(temp__5735__auto____$1){
var seq__38351__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__38351__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38351__$1);
var G__38590 = cljs.core.chunk_rest(seq__38351__$1);
var G__38591 = c__4556__auto__;
var G__38592 = cljs.core.count(c__4556__auto__);
var G__38593 = (0);
seq__38351 = G__38590;
chunk__38352 = G__38591;
count__38353 = G__38592;
i__38354 = G__38593;
continue;
} else {
var role = cljs.core.first(seq__38351__$1);
var temp__5735__auto___38594__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___38594__$2)){
var spec_38595 = temp__5735__auto___38594__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38595)], 0));
} else {
}


var G__38596 = cljs.core.next(seq__38351__$1);
var G__38597 = null;
var G__38598 = (0);
var G__38599 = (0);
seq__38351 = G__38596;
chunk__38352 = G__38597;
count__38353 = G__38598;
i__38354 = G__38599;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__38604 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__38605 = cljs.core.ex_cause(t);
via = G__38604;
t = G__38605;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__38380 = datafied_throwable;
var map__38380__$1 = (((((!((map__38380 == null))))?(((((map__38380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38380):map__38380);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38380__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38380__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38380__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__38382 = cljs.core.last(via);
var map__38382__$1 = (((((!((map__38382 == null))))?(((((map__38382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38382):map__38382);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38382__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38382__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38382__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__38385 = data;
var map__38385__$1 = (((((!((map__38385 == null))))?(((((map__38385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38385):map__38385);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38385__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38385__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38385__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__38386 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__38386__$1 = (((((!((map__38386 == null))))?(((((map__38386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38386):map__38386);
var top_data = map__38386__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38386__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__38405 = phase;
var G__38405__$1 = (((G__38405 instanceof cljs.core.Keyword))?G__38405.fqn:null);
switch (G__38405__$1) {
case "read-source":
var map__38414 = data;
var map__38414__$1 = (((((!((map__38414 == null))))?(((((map__38414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38414):map__38414);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38414__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38414__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__38432 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__38432__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38432,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38432);
var G__38432__$2 = (cljs.core.truth_((function (){var fexpr__38433 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38433.cljs$core$IFn$_invoke$arity$1 ? fexpr__38433.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38433.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38432__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38432__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38432__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38432__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__38434 = top_data;
var G__38434__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38434,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38434);
var G__38434__$2 = (cljs.core.truth_((function (){var fexpr__38435 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38435.cljs$core$IFn$_invoke$arity$1 ? fexpr__38435.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38435.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38434__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38434__$1);
var G__38434__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38434__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38434__$2);
var G__38434__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38434__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38434__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38434__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38434__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__38440 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38440,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38440,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38440,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38440,(3),null);
var G__38446 = top_data;
var G__38446__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38446,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__38446);
var G__38446__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38446__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__38446__$1);
var G__38446__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38446__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__38446__$2);
var G__38446__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38446__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38446__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38446__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38446__$4;
}

break;
case "execution":
var vec__38458 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38458,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38458,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38458,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38458,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38375_SHARP_){
var or__4126__auto__ = (p1__38375_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__38465 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38465.cljs$core$IFn$_invoke$arity$1 ? fexpr__38465.cljs$core$IFn$_invoke$arity$1(p1__38375_SHARP_) : fexpr__38465.call(null,p1__38375_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__38470 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__38470__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38470,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__38470);
var G__38470__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38470__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38470__$1);
var G__38470__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38470__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__38470__$2);
var G__38470__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38470__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__38470__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38470__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38470__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38405__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__38481){
var map__38482 = p__38481;
var map__38482__$1 = (((((!((map__38482 == null))))?(((((map__38482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38482):map__38482);
var triage_data = map__38482__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38482__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38482__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38482__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38482__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38482__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38482__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38482__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38482__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__38486 = phase;
var G__38486__$1 = (((G__38486 instanceof cljs.core.Keyword))?G__38486.fqn:null);
switch (G__38486__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__38487 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__38488 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38489 = loc;
var G__38490 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38491_38609 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38492_38610 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38493_38611 = true;
var _STAR_print_fn_STAR__temp_val__38494_38612 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38493_38611);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38494_38612);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38479_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38479_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38492_38610);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38491_38609);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38487,G__38488,G__38489,G__38490) : format.call(null,G__38487,G__38488,G__38489,G__38490));

break;
case "macroexpansion":
var G__38495 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__38496 = cause_type;
var G__38497 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38498 = loc;
var G__38499 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38495,G__38496,G__38497,G__38498,G__38499) : format.call(null,G__38495,G__38496,G__38497,G__38498,G__38499));

break;
case "compile-syntax-check":
var G__38501 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__38502 = cause_type;
var G__38503 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38504 = loc;
var G__38505 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38501,G__38502,G__38503,G__38504,G__38505) : format.call(null,G__38501,G__38502,G__38503,G__38504,G__38505));

break;
case "compilation":
var G__38506 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__38507 = cause_type;
var G__38508 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38509 = loc;
var G__38510 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38506,G__38507,G__38508,G__38509,G__38510) : format.call(null,G__38506,G__38507,G__38508,G__38509,G__38510));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__38511 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__38512 = symbol;
var G__38513 = loc;
var G__38514 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38515_38614 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38516_38615 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38517_38616 = true;
var _STAR_print_fn_STAR__temp_val__38518_38617 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38517_38616);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38518_38617);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38480_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38480_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38516_38615);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38515_38614);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38511,G__38512,G__38513,G__38514) : format.call(null,G__38511,G__38512,G__38513,G__38514));
} else {
var G__38520 = "Execution error%s at %s(%s).\n%s\n";
var G__38521 = cause_type;
var G__38522 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38523 = loc;
var G__38524 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38520,G__38521,G__38522,G__38523,G__38524) : format.call(null,G__38520,G__38521,G__38522,G__38523,G__38524));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38486__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
