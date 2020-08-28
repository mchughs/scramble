goog.provide('scrambler.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('scrambler.ui');
scrambler.core.start = (function scrambler$core$start(){
var G__28851 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scrambler.ui.component], null);
var G__28852 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__28851,G__28852) : reagent.core.render_component.call(null,G__28851,G__28852));
});
scrambler.core.init = (function scrambler$core$init(){
return scrambler.core.start();
});
goog.exportSymbol('scrambler.core.init', scrambler.core.init);
scrambler.core.stop = (function scrambler$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=scrambler.core.js.map
