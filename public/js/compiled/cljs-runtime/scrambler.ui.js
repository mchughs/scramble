goog.provide('scrambler.ui');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('reagent.core');
scrambler.ui.port = (4000);
scrambler.ui.on_submit = (function scrambler$ui$on_submit(error,result,e){
e.preventDefault();

var s1 = document.getElementById("scrabble-hand").value;
var s2 = document.getElementById("target").value;
var c__27006__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27007__auto__ = (function (){var switch__26961__auto__ = (function (state_28823){
var state_val_28824 = (state_28823[(1)]);
if((state_val_28824 === (7))){
var state_28823__$1 = state_28823;
var statearr_28825_28850 = state_28823__$1;
(statearr_28825_28850[(2)] = false);

(statearr_28825_28850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28824 === (1))){
var inst_28782 = ["http://localhost:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scrambler.ui.port),"/scramble"].join('');
var inst_28783 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_28784 = [new cljs.core.Keyword(null,"s1","s1",-1301860037),new cljs.core.Keyword(null,"s2","s2",-1025927265)];
var inst_28785 = [s1,s2];
var inst_28786 = cljs.core.PersistentHashMap.fromArrays(inst_28784,inst_28785);
var inst_28787 = [false,inst_28786];
var inst_28788 = cljs.core.PersistentHashMap.fromArrays(inst_28783,inst_28787);
var inst_28789 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_28782,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_28788], 0));
var state_28823__$1 = state_28823;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28823__$1,(2),inst_28789);
} else {
if((state_val_28824 === (4))){
var state_28823__$1 = state_28823;
var statearr_28826_28853 = state_28823__$1;
(statearr_28826_28853[(2)] = false);

(statearr_28826_28853[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28824 === (13))){
var inst_28813 = (state_28823[(7)]);
var inst_28819 = cljs.core.reset_BANG_(error,inst_28813);
var state_28823__$1 = state_28823;
var statearr_28827_28854 = state_28823__$1;
(statearr_28827_28854[(2)] = inst_28819);

(statearr_28827_28854[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28824 === (6))){
var state_28823__$1 = state_28823;
var statearr_28828_28855 = state_28823__$1;
(statearr_28828_28855[(2)] = true);

(statearr_28828_28855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28824 === (3))){
var inst_28791 = (state_28823[(8)]);
var inst_28796 = inst_28791.cljs$lang$protocol_mask$partition0$;
var inst_28797 = (inst_28796 & (64));
var inst_28798 = inst_28791.cljs$core$ISeq$;
var inst_28799 = (cljs.core.PROTOCOL_SENTINEL === inst_28798);
var inst_28800 = ((inst_28797) || (inst_28799));
var state_28823__$1 = state_28823;
if(cljs.core.truth_(inst_28800)){
var statearr_28829_28856 = state_28823__$1;
(statearr_28829_28856[(1)] = (6));

} else {
var statearr_28830_28857 = state_28823__$1;
(statearr_28830_28857[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28824 === (12))){
var inst_28813 = (state_28823[(7)]);
var inst_28817 = cljs.core.reset_BANG_(result,inst_28813);
var state_28823__$1 = state_28823;
var statearr_28831_28858 = state_28823__$1;
(statearr_28831_28858[(2)] = inst_28817);

(statearr_28831_28858[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28824 === (2))){
var inst_28791 = (state_28823[(8)]);
var inst_28791__$1 = (state_28823[(2)]);
var inst_28793 = (inst_28791__$1 == null);
var inst_28794 = cljs.core.not(inst_28793);
var state_28823__$1 = (function (){var statearr_28832 = state_28823;
(statearr_28832[(8)] = inst_28791__$1);

return statearr_28832;
})();
if(inst_28794){
var statearr_28833_28859 = state_28823__$1;
(statearr_28833_28859[(1)] = (3));

} else {
var statearr_28834_28860 = state_28823__$1;
(statearr_28834_28860[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28824 === (11))){
var inst_28812 = (state_28823[(2)]);
var inst_28813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28812,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_28814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28812,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst_28815 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((200),inst_28814);
var state_28823__$1 = (function (){var statearr_28835 = state_28823;
(statearr_28835[(7)] = inst_28813);

return statearr_28835;
})();
if(inst_28815){
var statearr_28836_28861 = state_28823__$1;
(statearr_28836_28861[(1)] = (12));

} else {
var statearr_28837_28862 = state_28823__$1;
(statearr_28837_28862[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28824 === (9))){
var inst_28791 = (state_28823[(8)]);
var inst_28809 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_28791);
var state_28823__$1 = state_28823;
var statearr_28838_28863 = state_28823__$1;
(statearr_28838_28863[(2)] = inst_28809);

(statearr_28838_28863[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28824 === (5))){
var inst_28807 = (state_28823[(2)]);
var state_28823__$1 = state_28823;
if(cljs.core.truth_(inst_28807)){
var statearr_28839_28864 = state_28823__$1;
(statearr_28839_28864[(1)] = (9));

} else {
var statearr_28840_28865 = state_28823__$1;
(statearr_28840_28865[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28824 === (14))){
var inst_28821 = (state_28823[(2)]);
var state_28823__$1 = state_28823;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28823__$1,inst_28821);
} else {
if((state_val_28824 === (10))){
var inst_28791 = (state_28823[(8)]);
var state_28823__$1 = state_28823;
var statearr_28841_28866 = state_28823__$1;
(statearr_28841_28866[(2)] = inst_28791);

(statearr_28841_28866[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28824 === (8))){
var inst_28804 = (state_28823[(2)]);
var state_28823__$1 = state_28823;
var statearr_28842_28867 = state_28823__$1;
(statearr_28842_28867[(2)] = inst_28804);

(statearr_28842_28867[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var scrambler$ui$on_submit_$_state_machine__26962__auto__ = null;
var scrambler$ui$on_submit_$_state_machine__26962__auto____0 = (function (){
var statearr_28843 = [null,null,null,null,null,null,null,null,null];
(statearr_28843[(0)] = scrambler$ui$on_submit_$_state_machine__26962__auto__);

(statearr_28843[(1)] = (1));

return statearr_28843;
});
var scrambler$ui$on_submit_$_state_machine__26962__auto____1 = (function (state_28823){
while(true){
var ret_value__26963__auto__ = (function (){try{while(true){
var result__26964__auto__ = switch__26961__auto__(state_28823);
if(cljs.core.keyword_identical_QMARK_(result__26964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26964__auto__;
}
break;
}
}catch (e28844){var ex__26965__auto__ = e28844;
var statearr_28845_28868 = state_28823;
(statearr_28845_28868[(2)] = ex__26965__auto__);


if(cljs.core.seq((state_28823[(4)]))){
var statearr_28846_28869 = state_28823;
(statearr_28846_28869[(1)] = cljs.core.first((state_28823[(4)])));

} else {
throw ex__26965__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26963__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28870 = state_28823;
state_28823 = G__28870;
continue;
} else {
return ret_value__26963__auto__;
}
break;
}
});
scrambler$ui$on_submit_$_state_machine__26962__auto__ = function(state_28823){
switch(arguments.length){
case 0:
return scrambler$ui$on_submit_$_state_machine__26962__auto____0.call(this);
case 1:
return scrambler$ui$on_submit_$_state_machine__26962__auto____1.call(this,state_28823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
scrambler$ui$on_submit_$_state_machine__26962__auto__.cljs$core$IFn$_invoke$arity$0 = scrambler$ui$on_submit_$_state_machine__26962__auto____0;
scrambler$ui$on_submit_$_state_machine__26962__auto__.cljs$core$IFn$_invoke$arity$1 = scrambler$ui$on_submit_$_state_machine__26962__auto____1;
return scrambler$ui$on_submit_$_state_machine__26962__auto__;
})()
})();
var state__27008__auto__ = (function (){var statearr_28847 = f__27007__auto__();
(statearr_28847[(6)] = c__27006__auto__);

return statearr_28847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27008__auto__);
}));

return c__27006__auto__;
});
scrambler.ui.component = (function scrambler$ui$component(){
var with_let28848 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let28848","with-let28848",47069214));
var temp__5739__auto___28871 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___28871 == null)){
} else {
var c__27273__auto___28872 = temp__5739__auto___28871;
if((with_let28848.generation === c__27273__auto___28872.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let28848.generation = c__27273__auto___28872.ratomGeneration);
}


var init28849 = (with_let28848.length === (0));
var result = ((init28849)?(with_let28848[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let28848[(0)]));
var error = ((init28849)?(with_let28848[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let28848[(1)]));
var res__27274__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Will it scramble?"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"You may only use characters from a-z, lowercase."], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"accept-charset","accept-charset",-1667839372),"ISO-8859-1",new cljs.core.Keyword(null,"onSubmit","onSubmit",761425194),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(scrambler.ui.on_submit,error,result),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (){
cljs.core.reset_BANG_(result,null);

return cljs.core.reset_BANG_(error,null);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"scrabble-hand"], null),"Your Scrabble Tiles:"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"pattern","pattern",242135423),"[a-z]*",new cljs.core.Keyword(null,"id","id",-1388402092),"scrabble-hand",new cljs.core.Keyword(null,"name","name",1843675177),"scrabble-hand",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),"rekqodlw"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"target"], null),"Target Word:"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"pattern","pattern",242135423),"[a-z]*",new cljs.core.Keyword(null,"id","id",-1388402092),"target",new cljs.core.Keyword(null,"name","name",1843675177),"target",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),"world"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"Submit"], null)], null),(cljs.core.truth_(cljs.core.deref(error))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Oops, the following problem occured with our server: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(error)], 0)),"."," Check that the server is running!"], null):null),(cljs.core.truth_(cljs.core.deref(result))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"The answer is... ",cljs.core.deref(result),"!"], null):null)], null)], null);

return res__27274__auto__;
});

//# sourceMappingURL=scrambler.ui.js.map
