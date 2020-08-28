goog.provide('scrambler.utils');
goog.require('cljs.core');
/**
 * Takes a string of usable chars and a target string.
 * If for any char in the target string,
 * it appears more in the target string
 * than in the set of usable chars,
 * then scamble? returns false.
 */
scrambler.utils.scramble_QMARK_ = (function scrambler$utils$scramble_QMARK_(scrabble_hand,target){
var target_freq = cljs.core.frequencies(target);
var scrabble_freq = cljs.core.frequencies(scrabble_hand);
return cljs.core.not_any_QMARK_((function (p__27325){
var vec__27326 = p__27325;
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27326,(0),null);
var count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27326,(1),null);
return (cljs.core.get.cljs$core$IFn$_invoke$arity$3(scrabble_freq,char$,(0)) < count);
}),target_freq);
});

//# sourceMappingURL=scrambler.utils.js.map
