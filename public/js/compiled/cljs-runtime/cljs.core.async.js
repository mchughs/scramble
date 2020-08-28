goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32885 = arguments.length;
switch (G__32885) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32888 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32888 = (function (f,blockable,meta32889){
this.f = f;
this.blockable = blockable;
this.meta32889 = meta32889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32890,meta32889__$1){
var self__ = this;
var _32890__$1 = this;
return (new cljs.core.async.t_cljs$core$async32888(self__.f,self__.blockable,meta32889__$1));
}));

(cljs.core.async.t_cljs$core$async32888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32890){
var self__ = this;
var _32890__$1 = this;
return self__.meta32889;
}));

(cljs.core.async.t_cljs$core$async32888.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32888.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32888.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32888.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32888.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32889","meta32889",-722211566,null)], null);
}));

(cljs.core.async.t_cljs$core$async32888.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32888.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32888");

(cljs.core.async.t_cljs$core$async32888.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32888");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32888.
 */
cljs.core.async.__GT_t_cljs$core$async32888 = (function cljs$core$async$__GT_t_cljs$core$async32888(f__$1,blockable__$1,meta32889){
return (new cljs.core.async.t_cljs$core$async32888(f__$1,blockable__$1,meta32889));
});

}

return (new cljs.core.async.t_cljs$core$async32888(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32926 = arguments.length;
switch (G__32926) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32957 = arguments.length;
switch (G__32957) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32967 = arguments.length;
switch (G__32967) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34549 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34549) : fn1.call(null,val_34549));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34549) : fn1.call(null,val_34549));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32971 = arguments.length;
switch (G__32971) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___34556 = n;
var x_34557 = (0);
while(true){
if((x_34557 < n__4613__auto___34556)){
(a[x_34557] = x_34557);

var G__34558 = (x_34557 + (1));
x_34557 = G__34558;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32984 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32984 = (function (flag,meta32985){
this.flag = flag;
this.meta32985 = meta32985;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32986,meta32985__$1){
var self__ = this;
var _32986__$1 = this;
return (new cljs.core.async.t_cljs$core$async32984(self__.flag,meta32985__$1));
}));

(cljs.core.async.t_cljs$core$async32984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32986){
var self__ = this;
var _32986__$1 = this;
return self__.meta32985;
}));

(cljs.core.async.t_cljs$core$async32984.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32984.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32984.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32984.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32984.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32985","meta32985",1016223152,null)], null);
}));

(cljs.core.async.t_cljs$core$async32984.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32984.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32984");

(cljs.core.async.t_cljs$core$async32984.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32984");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32984.
 */
cljs.core.async.__GT_t_cljs$core$async32984 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32984(flag__$1,meta32985){
return (new cljs.core.async.t_cljs$core$async32984(flag__$1,meta32985));
});

}

return (new cljs.core.async.t_cljs$core$async32984(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33004 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33004 = (function (flag,cb,meta33005){
this.flag = flag;
this.cb = cb;
this.meta33005 = meta33005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33006,meta33005__$1){
var self__ = this;
var _33006__$1 = this;
return (new cljs.core.async.t_cljs$core$async33004(self__.flag,self__.cb,meta33005__$1));
}));

(cljs.core.async.t_cljs$core$async33004.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33006){
var self__ = this;
var _33006__$1 = this;
return self__.meta33005;
}));

(cljs.core.async.t_cljs$core$async33004.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33004.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33004.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33004.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33004.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33005","meta33005",1453807078,null)], null);
}));

(cljs.core.async.t_cljs$core$async33004.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33004.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33004");

(cljs.core.async.t_cljs$core$async33004.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33004");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33004.
 */
cljs.core.async.__GT_t_cljs$core$async33004 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33004(flag__$1,cb__$1,meta33005){
return (new cljs.core.async.t_cljs$core$async33004(flag__$1,cb__$1,meta33005));
});

}

return (new cljs.core.async.t_cljs$core$async33004(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33008_SHARP_){
var G__33016 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33008_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33016) : fret.call(null,G__33016));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33009_SHARP_){
var G__33020 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33009_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33020) : fret.call(null,G__33020));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34581 = (i + (1));
i = G__34581;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34583 = arguments.length;
var i__4737__auto___34584 = (0);
while(true){
if((i__4737__auto___34584 < len__4736__auto___34583)){
args__4742__auto__.push((arguments[i__4737__auto___34584]));

var G__34585 = (i__4737__auto___34584 + (1));
i__4737__auto___34584 = G__34585;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33023){
var map__33024 = p__33023;
var map__33024__$1 = (((((!((map__33024 == null))))?(((((map__33024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33024):map__33024);
var opts = map__33024__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33021){
var G__33022 = cljs.core.first(seq33021);
var seq33021__$1 = cljs.core.next(seq33021);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33022,seq33021__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33027 = arguments.length;
switch (G__33027) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32778__auto___34596 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32779__auto__ = (function (){var switch__32640__auto__ = (function (state_33055){
var state_val_33056 = (state_33055[(1)]);
if((state_val_33056 === (7))){
var inst_33051 = (state_33055[(2)]);
var state_33055__$1 = state_33055;
var statearr_33066_34597 = state_33055__$1;
(statearr_33066_34597[(2)] = inst_33051);

(statearr_33066_34597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (1))){
var state_33055__$1 = state_33055;
var statearr_33067_34599 = state_33055__$1;
(statearr_33067_34599[(2)] = null);

(statearr_33067_34599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (4))){
var inst_33034 = (state_33055[(7)]);
var inst_33034__$1 = (state_33055[(2)]);
var inst_33035 = (inst_33034__$1 == null);
var state_33055__$1 = (function (){var statearr_33074 = state_33055;
(statearr_33074[(7)] = inst_33034__$1);

return statearr_33074;
})();
if(cljs.core.truth_(inst_33035)){
var statearr_33075_34600 = state_33055__$1;
(statearr_33075_34600[(1)] = (5));

} else {
var statearr_33076_34601 = state_33055__$1;
(statearr_33076_34601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (13))){
var state_33055__$1 = state_33055;
var statearr_33080_34602 = state_33055__$1;
(statearr_33080_34602[(2)] = null);

(statearr_33080_34602[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (6))){
var inst_33034 = (state_33055[(7)]);
var state_33055__$1 = state_33055;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33055__$1,(11),to,inst_33034);
} else {
if((state_val_33056 === (3))){
var inst_33053 = (state_33055[(2)]);
var state_33055__$1 = state_33055;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33055__$1,inst_33053);
} else {
if((state_val_33056 === (12))){
var state_33055__$1 = state_33055;
var statearr_33081_34607 = state_33055__$1;
(statearr_33081_34607[(2)] = null);

(statearr_33081_34607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (2))){
var state_33055__$1 = state_33055;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33055__$1,(4),from);
} else {
if((state_val_33056 === (11))){
var inst_33044 = (state_33055[(2)]);
var state_33055__$1 = state_33055;
if(cljs.core.truth_(inst_33044)){
var statearr_33082_34611 = state_33055__$1;
(statearr_33082_34611[(1)] = (12));

} else {
var statearr_33083_34612 = state_33055__$1;
(statearr_33083_34612[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (9))){
var state_33055__$1 = state_33055;
var statearr_33084_34613 = state_33055__$1;
(statearr_33084_34613[(2)] = null);

(statearr_33084_34613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (5))){
var state_33055__$1 = state_33055;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33085_34614 = state_33055__$1;
(statearr_33085_34614[(1)] = (8));

} else {
var statearr_33086_34615 = state_33055__$1;
(statearr_33086_34615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (14))){
var inst_33049 = (state_33055[(2)]);
var state_33055__$1 = state_33055;
var statearr_33087_34617 = state_33055__$1;
(statearr_33087_34617[(2)] = inst_33049);

(statearr_33087_34617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (10))){
var inst_33041 = (state_33055[(2)]);
var state_33055__$1 = state_33055;
var statearr_33089_34618 = state_33055__$1;
(statearr_33089_34618[(2)] = inst_33041);

(statearr_33089_34618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33056 === (8))){
var inst_33038 = cljs.core.async.close_BANG_(to);
var state_33055__$1 = state_33055;
var statearr_33091_34619 = state_33055__$1;
(statearr_33091_34619[(2)] = inst_33038);

(statearr_33091_34619[(1)] = (10));


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
var cljs$core$async$state_machine__32641__auto__ = null;
var cljs$core$async$state_machine__32641__auto____0 = (function (){
var statearr_33092 = [null,null,null,null,null,null,null,null];
(statearr_33092[(0)] = cljs$core$async$state_machine__32641__auto__);

(statearr_33092[(1)] = (1));

return statearr_33092;
});
var cljs$core$async$state_machine__32641__auto____1 = (function (state_33055){
while(true){
var ret_value__32642__auto__ = (function (){try{while(true){
var result__32643__auto__ = switch__32640__auto__(state_33055);
if(cljs.core.keyword_identical_QMARK_(result__32643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32643__auto__;
}
break;
}
}catch (e33093){var ex__32644__auto__ = e33093;
var statearr_33094_34623 = state_33055;
(statearr_33094_34623[(2)] = ex__32644__auto__);


if(cljs.core.seq((state_33055[(4)]))){
var statearr_33095_34625 = state_33055;
(statearr_33095_34625[(1)] = cljs.core.first((state_33055[(4)])));

} else {
throw ex__32644__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34626 = state_33055;
state_33055 = G__34626;
continue;
} else {
return ret_value__32642__auto__;
}
break;
}
});
cljs$core$async$state_machine__32641__auto__ = function(state_33055){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32641__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32641__auto____1.call(this,state_33055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32641__auto____0;
cljs$core$async$state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32641__auto____1;
return cljs$core$async$state_machine__32641__auto__;
})()
})();
var state__32780__auto__ = (function (){var statearr_33099 = f__32779__auto__();
(statearr_33099[(6)] = c__32778__auto___34596);

return statearr_33099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32780__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__33100){
var vec__33101 = p__33100;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33101,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33101,(1),null);
var job = vec__33101;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32778__auto___34627 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32779__auto__ = (function (){var switch__32640__auto__ = (function (state_33110){
var state_val_33111 = (state_33110[(1)]);
if((state_val_33111 === (1))){
var state_33110__$1 = state_33110;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33110__$1,(2),res,v);
} else {
if((state_val_33111 === (2))){
var inst_33107 = (state_33110[(2)]);
var inst_33108 = cljs.core.async.close_BANG_(res);
var state_33110__$1 = (function (){var statearr_33112 = state_33110;
(statearr_33112[(7)] = inst_33107);

return statearr_33112;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33110__$1,inst_33108);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32641__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32641__auto____0 = (function (){
var statearr_33113 = [null,null,null,null,null,null,null,null];
(statearr_33113[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32641__auto__);

(statearr_33113[(1)] = (1));

return statearr_33113;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32641__auto____1 = (function (state_33110){
while(true){
var ret_value__32642__auto__ = (function (){try{while(true){
var result__32643__auto__ = switch__32640__auto__(state_33110);
if(cljs.core.keyword_identical_QMARK_(result__32643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32643__auto__;
}
break;
}
}catch (e33114){var ex__32644__auto__ = e33114;
var statearr_33115_34635 = state_33110;
(statearr_33115_34635[(2)] = ex__32644__auto__);


if(cljs.core.seq((state_33110[(4)]))){
var statearr_33116_34636 = state_33110;
(statearr_33116_34636[(1)] = cljs.core.first((state_33110[(4)])));

} else {
throw ex__32644__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34638 = state_33110;
state_33110 = G__34638;
continue;
} else {
return ret_value__32642__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32641__auto__ = function(state_33110){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32641__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32641__auto____1.call(this,state_33110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32641__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32641__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32641__auto__;
})()
})();
var state__32780__auto__ = (function (){var statearr_33117 = f__32779__auto__();
(statearr_33117[(6)] = c__32778__auto___34627);

return statearr_33117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32780__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33118){
var vec__33119 = p__33118;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33119,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33119,(1),null);
var job = vec__33119;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___34643 = n;
var __34644 = (0);
while(true){
if((__34644 < n__4613__auto___34643)){
var G__33122_34645 = type;
var G__33122_34646__$1 = (((G__33122_34645 instanceof cljs.core.Keyword))?G__33122_34645.fqn:null);
switch (G__33122_34646__$1) {
case "compute":
var c__32778__auto___34648 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34644,c__32778__auto___34648,G__33122_34645,G__33122_34646__$1,n__4613__auto___34643,jobs,results,process,async){
return (function (){
var f__32779__auto__ = (function (){var switch__32640__auto__ = ((function (__34644,c__32778__auto___34648,G__33122_34645,G__33122_34646__$1,n__4613__auto___34643,jobs,results,process,async){
return (function (state_33135){
var state_val_33136 = (state_33135[(1)]);
if((state_val_33136 === (1))){
var state_33135__$1 = state_33135;
var statearr_33137_34649 = state_33135__$1;
(statearr_33137_34649[(2)] = null);

(statearr_33137_34649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33136 === (2))){
var state_33135__$1 = state_33135;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33135__$1,(4),jobs);
} else {
if((state_val_33136 === (3))){
var inst_33133 = (state_33135[(2)]);
var state_33135__$1 = state_33135;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33135__$1,inst_33133);
} else {
if((state_val_33136 === (4))){
var inst_33125 = (state_33135[(2)]);
var inst_33126 = process(inst_33125);
var state_33135__$1 = state_33135;
if(cljs.core.truth_(inst_33126)){
var statearr_33138_34652 = state_33135__$1;
(statearr_33138_34652[(1)] = (5));

} else {
var statearr_33139_34654 = state_33135__$1;
(statearr_33139_34654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33136 === (5))){
var state_33135__$1 = state_33135;
var statearr_33140_34655 = state_33135__$1;
(statearr_33140_34655[(2)] = null);

(statearr_33140_34655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33136 === (6))){
var state_33135__$1 = state_33135;
var statearr_33141_34658 = state_33135__$1;
(statearr_33141_34658[(2)] = null);

(statearr_33141_34658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33136 === (7))){
var inst_33131 = (state_33135[(2)]);
var state_33135__$1 = state_33135;
var statearr_33142_34667 = state_33135__$1;
(statearr_33142_34667[(2)] = inst_33131);

(statearr_33142_34667[(1)] = (3));


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
});})(__34644,c__32778__auto___34648,G__33122_34645,G__33122_34646__$1,n__4613__auto___34643,jobs,results,process,async))
;
return ((function (__34644,switch__32640__auto__,c__32778__auto___34648,G__33122_34645,G__33122_34646__$1,n__4613__auto___34643,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32641__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32641__auto____0 = (function (){
var statearr_33143 = [null,null,null,null,null,null,null];
(statearr_33143[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32641__auto__);

(statearr_33143[(1)] = (1));

return statearr_33143;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32641__auto____1 = (function (state_33135){
while(true){
var ret_value__32642__auto__ = (function (){try{while(true){
var result__32643__auto__ = switch__32640__auto__(state_33135);
if(cljs.core.keyword_identical_QMARK_(result__32643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32643__auto__;
}
break;
}
}catch (e33144){var ex__32644__auto__ = e33144;
var statearr_33145_34673 = state_33135;
(statearr_33145_34673[(2)] = ex__32644__auto__);


if(cljs.core.seq((state_33135[(4)]))){
var statearr_33146_34674 = state_33135;
(statearr_33146_34674[(1)] = cljs.core.first((state_33135[(4)])));

} else {
throw ex__32644__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34675 = state_33135;
state_33135 = G__34675;
continue;
} else {
return ret_value__32642__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32641__auto__ = function(state_33135){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32641__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32641__auto____1.call(this,state_33135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32641__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32641__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32641__auto__;
})()
;})(__34644,switch__32640__auto__,c__32778__auto___34648,G__33122_34645,G__33122_34646__$1,n__4613__auto___34643,jobs,results,process,async))
})();
var state__32780__auto__ = (function (){var statearr_33147 = f__32779__auto__();
(statearr_33147[(6)] = c__32778__auto___34648);

return statearr_33147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32780__auto__);
});})(__34644,c__32778__auto___34648,G__33122_34645,G__33122_34646__$1,n__4613__auto___34643,jobs,results,process,async))
);


break;
case "async":
var c__32778__auto___34676 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34644,c__32778__auto___34676,G__33122_34645,G__33122_34646__$1,n__4613__auto___34643,jobs,results,process,async){
return (function (){
var f__32779__auto__ = (function (){var switch__32640__auto__ = ((function (__34644,c__32778__auto___34676,G__33122_34645,G__33122_34646__$1,n__4613__auto___34643,jobs,results,process,async){
return (function (state_33161){
var state_val_33162 = (state_33161[(1)]);
if((state_val_33162 === (1))){
var state_33161__$1 = state_33161;
var statearr_33163_34677 = state_33161__$1;
(statearr_33163_34677[(2)] = null);

(statearr_33163_34677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33162 === (2))){
var state_33161__$1 = state_33161;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33161__$1,(4),jobs);
} else {
if((state_val_33162 === (3))){
var inst_33159 = (state_33161[(2)]);
var state_33161__$1 = state_33161;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33161__$1,inst_33159);
} else {
if((state_val_33162 === (4))){
var inst_33151 = (state_33161[(2)]);
var inst_33152 = async(inst_33151);
var state_33161__$1 = state_33161;
if(cljs.core.truth_(inst_33152)){
var statearr_33164_34678 = state_33161__$1;
(statearr_33164_34678[(1)] = (5));

} else {
var statearr_33165_34679 = state_33161__$1;
(statearr_33165_34679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33162 === (5))){
var state_33161__$1 = state_33161;
var statearr_33166_34680 = state_33161__$1;
(statearr_33166_34680[(2)] = null);

(statearr_33166_34680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33162 === (6))){
var state_33161__$1 = state_33161;
var statearr_33167_34681 = state_33161__$1;
(statearr_33167_34681[(2)] = null);

(statearr_33167_34681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33162 === (7))){
var inst_33157 = (state_33161[(2)]);
var state_33161__$1 = state_33161;
var statearr_33168_34682 = state_33161__$1;
(statearr_33168_34682[(2)] = inst_33157);

(statearr_33168_34682[(1)] = (3));


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
});})(__34644,c__32778__auto___34676,G__33122_34645,G__33122_34646__$1,n__4613__auto___34643,jobs,results,process,async))
;
return ((function (__34644,switch__32640__auto__,c__32778__auto___34676,G__33122_34645,G__33122_34646__$1,n__4613__auto___34643,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32641__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32641__auto____0 = (function (){
var statearr_33169 = [null,null,null,null,null,null,null];
(statearr_33169[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32641__auto__);

(statearr_33169[(1)] = (1));

return statearr_33169;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32641__auto____1 = (function (state_33161){
while(true){
var ret_value__32642__auto__ = (function (){try{while(true){
var result__32643__auto__ = switch__32640__auto__(state_33161);
if(cljs.core.keyword_identical_QMARK_(result__32643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32643__auto__;
}
break;
}
}catch (e33170){var ex__32644__auto__ = e33170;
var statearr_33171_34683 = state_33161;
(statearr_33171_34683[(2)] = ex__32644__auto__);


if(cljs.core.seq((state_33161[(4)]))){
var statearr_33172_34684 = state_33161;
(statearr_33172_34684[(1)] = cljs.core.first((state_33161[(4)])));

} else {
throw ex__32644__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34685 = state_33161;
state_33161 = G__34685;
continue;
} else {
return ret_value__32642__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32641__auto__ = function(state_33161){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32641__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32641__auto____1.call(this,state_33161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32641__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32641__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32641__auto__;
})()
;})(__34644,switch__32640__auto__,c__32778__auto___34676,G__33122_34645,G__33122_34646__$1,n__4613__auto___34643,jobs,results,process,async))
})();
var state__32780__auto__ = (function (){var statearr_33173 = f__32779__auto__();
(statearr_33173[(6)] = c__32778__auto___34676);

return statearr_33173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32780__auto__);
});})(__34644,c__32778__auto___34676,G__33122_34645,G__33122_34646__$1,n__4613__auto___34643,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33122_34646__$1)].join('')));

}

var G__34688 = (__34644 + (1));
__34644 = G__34688;
continue;
} else {
}
break;
}

var c__32778__auto___34689 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32779__auto__ = (function (){var switch__32640__auto__ = (function (state_33204){
var state_val_33205 = (state_33204[(1)]);
if((state_val_33205 === (7))){
var inst_33195 = (state_33204[(2)]);
var state_33204__$1 = state_33204;
var statearr_33225_34690 = state_33204__$1;
(statearr_33225_34690[(2)] = inst_33195);

(statearr_33225_34690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (1))){
var state_33204__$1 = state_33204;
var statearr_33232_34691 = state_33204__$1;
(statearr_33232_34691[(2)] = null);

(statearr_33232_34691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (4))){
var inst_33176 = (state_33204[(7)]);
var inst_33176__$1 = (state_33204[(2)]);
var inst_33177 = (inst_33176__$1 == null);
var state_33204__$1 = (function (){var statearr_33241 = state_33204;
(statearr_33241[(7)] = inst_33176__$1);

return statearr_33241;
})();
if(cljs.core.truth_(inst_33177)){
var statearr_33242_34693 = state_33204__$1;
(statearr_33242_34693[(1)] = (5));

} else {
var statearr_33247_34697 = state_33204__$1;
(statearr_33247_34697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (6))){
var inst_33176 = (state_33204[(7)]);
var inst_33181 = (state_33204[(8)]);
var inst_33181__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33182 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33183 = [inst_33176,inst_33181__$1];
var inst_33184 = (new cljs.core.PersistentVector(null,2,(5),inst_33182,inst_33183,null));
var state_33204__$1 = (function (){var statearr_33248 = state_33204;
(statearr_33248[(8)] = inst_33181__$1);

return statearr_33248;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33204__$1,(8),jobs,inst_33184);
} else {
if((state_val_33205 === (3))){
var inst_33197 = (state_33204[(2)]);
var state_33204__$1 = state_33204;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33204__$1,inst_33197);
} else {
if((state_val_33205 === (2))){
var state_33204__$1 = state_33204;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33204__$1,(4),from);
} else {
if((state_val_33205 === (9))){
var inst_33192 = (state_33204[(2)]);
var state_33204__$1 = (function (){var statearr_33250 = state_33204;
(statearr_33250[(9)] = inst_33192);

return statearr_33250;
})();
var statearr_33251_34699 = state_33204__$1;
(statearr_33251_34699[(2)] = null);

(statearr_33251_34699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (5))){
var inst_33179 = cljs.core.async.close_BANG_(jobs);
var state_33204__$1 = state_33204;
var statearr_33252_34701 = state_33204__$1;
(statearr_33252_34701[(2)] = inst_33179);

(statearr_33252_34701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33205 === (8))){
var inst_33181 = (state_33204[(8)]);
var inst_33190 = (state_33204[(2)]);
var state_33204__$1 = (function (){var statearr_33253 = state_33204;
(statearr_33253[(10)] = inst_33190);

return statearr_33253;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33204__$1,(9),results,inst_33181);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32641__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32641__auto____0 = (function (){
var statearr_33254 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33254[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32641__auto__);

(statearr_33254[(1)] = (1));

return statearr_33254;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32641__auto____1 = (function (state_33204){
while(true){
var ret_value__32642__auto__ = (function (){try{while(true){
var result__32643__auto__ = switch__32640__auto__(state_33204);
if(cljs.core.keyword_identical_QMARK_(result__32643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32643__auto__;
}
break;
}
}catch (e33255){var ex__32644__auto__ = e33255;
var statearr_33256_34703 = state_33204;
(statearr_33256_34703[(2)] = ex__32644__auto__);


if(cljs.core.seq((state_33204[(4)]))){
var statearr_33257_34704 = state_33204;
(statearr_33257_34704[(1)] = cljs.core.first((state_33204[(4)])));

} else {
throw ex__32644__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34705 = state_33204;
state_33204 = G__34705;
continue;
} else {
return ret_value__32642__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32641__auto__ = function(state_33204){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32641__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32641__auto____1.call(this,state_33204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32641__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32641__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32641__auto__;
})()
})();
var state__32780__auto__ = (function (){var statearr_33259 = f__32779__auto__();
(statearr_33259[(6)] = c__32778__auto___34689);

return statearr_33259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32780__auto__);
}));


var c__32778__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32779__auto__ = (function (){var switch__32640__auto__ = (function (state_33297){
var state_val_33298 = (state_33297[(1)]);
if((state_val_33298 === (7))){
var inst_33293 = (state_33297[(2)]);
var state_33297__$1 = state_33297;
var statearr_33299_34707 = state_33297__$1;
(statearr_33299_34707[(2)] = inst_33293);

(statearr_33299_34707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33298 === (20))){
var state_33297__$1 = state_33297;
var statearr_33300_34708 = state_33297__$1;
(statearr_33300_34708[(2)] = null);

(statearr_33300_34708[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33298 === (1))){
var state_33297__$1 = state_33297;
var statearr_33301_34711 = state_33297__$1;
(statearr_33301_34711[(2)] = null);

(statearr_33301_34711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33298 === (4))){
var inst_33262 = (state_33297[(7)]);
var inst_33262__$1 = (state_33297[(2)]);
var inst_33263 = (inst_33262__$1 == null);
var state_33297__$1 = (function (){var statearr_33302 = state_33297;
(statearr_33302[(7)] = inst_33262__$1);

return statearr_33302;
})();
if(cljs.core.truth_(inst_33263)){
var statearr_33303_34714 = state_33297__$1;
(statearr_33303_34714[(1)] = (5));

} else {
var statearr_33304_34716 = state_33297__$1;
(statearr_33304_34716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33298 === (15))){
var inst_33275 = (state_33297[(8)]);
var state_33297__$1 = state_33297;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33297__$1,(18),to,inst_33275);
} else {
if((state_val_33298 === (21))){
var inst_33288 = (state_33297[(2)]);
var state_33297__$1 = state_33297;
var statearr_33305_34718 = state_33297__$1;
(statearr_33305_34718[(2)] = inst_33288);

(statearr_33305_34718[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33298 === (13))){
var inst_33290 = (state_33297[(2)]);
var state_33297__$1 = (function (){var statearr_33306 = state_33297;
(statearr_33306[(9)] = inst_33290);

return statearr_33306;
})();
var statearr_33307_34719 = state_33297__$1;
(statearr_33307_34719[(2)] = null);

(statearr_33307_34719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33298 === (6))){
var inst_33262 = (state_33297[(7)]);
var state_33297__$1 = state_33297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33297__$1,(11),inst_33262);
} else {
if((state_val_33298 === (17))){
var inst_33283 = (state_33297[(2)]);
var state_33297__$1 = state_33297;
if(cljs.core.truth_(inst_33283)){
var statearr_33308_34724 = state_33297__$1;
(statearr_33308_34724[(1)] = (19));

} else {
var statearr_33309_34725 = state_33297__$1;
(statearr_33309_34725[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33298 === (3))){
var inst_33295 = (state_33297[(2)]);
var state_33297__$1 = state_33297;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33297__$1,inst_33295);
} else {
if((state_val_33298 === (12))){
var inst_33272 = (state_33297[(10)]);
var state_33297__$1 = state_33297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33297__$1,(14),inst_33272);
} else {
if((state_val_33298 === (2))){
var state_33297__$1 = state_33297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33297__$1,(4),results);
} else {
if((state_val_33298 === (19))){
var state_33297__$1 = state_33297;
var statearr_33310_34727 = state_33297__$1;
(statearr_33310_34727[(2)] = null);

(statearr_33310_34727[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33298 === (11))){
var inst_33272 = (state_33297[(2)]);
var state_33297__$1 = (function (){var statearr_33311 = state_33297;
(statearr_33311[(10)] = inst_33272);

return statearr_33311;
})();
var statearr_33312_34728 = state_33297__$1;
(statearr_33312_34728[(2)] = null);

(statearr_33312_34728[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33298 === (9))){
var state_33297__$1 = state_33297;
var statearr_33313_34729 = state_33297__$1;
(statearr_33313_34729[(2)] = null);

(statearr_33313_34729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33298 === (5))){
var state_33297__$1 = state_33297;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33314_34731 = state_33297__$1;
(statearr_33314_34731[(1)] = (8));

} else {
var statearr_33315_34732 = state_33297__$1;
(statearr_33315_34732[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33298 === (14))){
var inst_33275 = (state_33297[(8)]);
var inst_33275__$1 = (state_33297[(2)]);
var inst_33276 = (inst_33275__$1 == null);
var inst_33277 = cljs.core.not(inst_33276);
var state_33297__$1 = (function (){var statearr_33316 = state_33297;
(statearr_33316[(8)] = inst_33275__$1);

return statearr_33316;
})();
if(inst_33277){
var statearr_33317_34734 = state_33297__$1;
(statearr_33317_34734[(1)] = (15));

} else {
var statearr_33318_34735 = state_33297__$1;
(statearr_33318_34735[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33298 === (16))){
var state_33297__$1 = state_33297;
var statearr_33319_34736 = state_33297__$1;
(statearr_33319_34736[(2)] = false);

(statearr_33319_34736[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33298 === (10))){
var inst_33269 = (state_33297[(2)]);
var state_33297__$1 = state_33297;
var statearr_33320_34737 = state_33297__$1;
(statearr_33320_34737[(2)] = inst_33269);

(statearr_33320_34737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33298 === (18))){
var inst_33280 = (state_33297[(2)]);
var state_33297__$1 = state_33297;
var statearr_33321_34738 = state_33297__$1;
(statearr_33321_34738[(2)] = inst_33280);

(statearr_33321_34738[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33298 === (8))){
var inst_33266 = cljs.core.async.close_BANG_(to);
var state_33297__$1 = state_33297;
var statearr_33322_34739 = state_33297__$1;
(statearr_33322_34739[(2)] = inst_33266);

(statearr_33322_34739[(1)] = (10));


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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32641__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32641__auto____0 = (function (){
var statearr_33323 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33323[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32641__auto__);

(statearr_33323[(1)] = (1));

return statearr_33323;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32641__auto____1 = (function (state_33297){
while(true){
var ret_value__32642__auto__ = (function (){try{while(true){
var result__32643__auto__ = switch__32640__auto__(state_33297);
if(cljs.core.keyword_identical_QMARK_(result__32643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32643__auto__;
}
break;
}
}catch (e33324){var ex__32644__auto__ = e33324;
var statearr_33325_34742 = state_33297;
(statearr_33325_34742[(2)] = ex__32644__auto__);


if(cljs.core.seq((state_33297[(4)]))){
var statearr_33326_34743 = state_33297;
(statearr_33326_34743[(1)] = cljs.core.first((state_33297[(4)])));

} else {
throw ex__32644__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34744 = state_33297;
state_33297 = G__34744;
continue;
} else {
return ret_value__32642__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32641__auto__ = function(state_33297){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32641__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32641__auto____1.call(this,state_33297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32641__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32641__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32641__auto__;
})()
})();
var state__32780__auto__ = (function (){var statearr_33327 = f__32779__auto__();
(statearr_33327[(6)] = c__32778__auto__);

return statearr_33327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32780__auto__);
}));

return c__32778__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33329 = arguments.length;
switch (G__33329) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33331 = arguments.length;
switch (G__33331) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33333 = arguments.length;
switch (G__33333) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32778__auto___34750 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32779__auto__ = (function (){var switch__32640__auto__ = (function (state_33359){
var state_val_33360 = (state_33359[(1)]);
if((state_val_33360 === (7))){
var inst_33355 = (state_33359[(2)]);
var state_33359__$1 = state_33359;
var statearr_33361_34753 = state_33359__$1;
(statearr_33361_34753[(2)] = inst_33355);

(statearr_33361_34753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (1))){
var state_33359__$1 = state_33359;
var statearr_33362_34754 = state_33359__$1;
(statearr_33362_34754[(2)] = null);

(statearr_33362_34754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (4))){
var inst_33336 = (state_33359[(7)]);
var inst_33336__$1 = (state_33359[(2)]);
var inst_33337 = (inst_33336__$1 == null);
var state_33359__$1 = (function (){var statearr_33363 = state_33359;
(statearr_33363[(7)] = inst_33336__$1);

return statearr_33363;
})();
if(cljs.core.truth_(inst_33337)){
var statearr_33364_34756 = state_33359__$1;
(statearr_33364_34756[(1)] = (5));

} else {
var statearr_33365_34757 = state_33359__$1;
(statearr_33365_34757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (13))){
var state_33359__$1 = state_33359;
var statearr_33366_34758 = state_33359__$1;
(statearr_33366_34758[(2)] = null);

(statearr_33366_34758[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (6))){
var inst_33336 = (state_33359[(7)]);
var inst_33342 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33336) : p.call(null,inst_33336));
var state_33359__$1 = state_33359;
if(cljs.core.truth_(inst_33342)){
var statearr_33367_34759 = state_33359__$1;
(statearr_33367_34759[(1)] = (9));

} else {
var statearr_33368_34760 = state_33359__$1;
(statearr_33368_34760[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (3))){
var inst_33357 = (state_33359[(2)]);
var state_33359__$1 = state_33359;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33359__$1,inst_33357);
} else {
if((state_val_33360 === (12))){
var state_33359__$1 = state_33359;
var statearr_33369_34761 = state_33359__$1;
(statearr_33369_34761[(2)] = null);

(statearr_33369_34761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (2))){
var state_33359__$1 = state_33359;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33359__$1,(4),ch);
} else {
if((state_val_33360 === (11))){
var inst_33336 = (state_33359[(7)]);
var inst_33346 = (state_33359[(2)]);
var state_33359__$1 = state_33359;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33359__$1,(8),inst_33346,inst_33336);
} else {
if((state_val_33360 === (9))){
var state_33359__$1 = state_33359;
var statearr_33370_34766 = state_33359__$1;
(statearr_33370_34766[(2)] = tc);

(statearr_33370_34766[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (5))){
var inst_33339 = cljs.core.async.close_BANG_(tc);
var inst_33340 = cljs.core.async.close_BANG_(fc);
var state_33359__$1 = (function (){var statearr_33371 = state_33359;
(statearr_33371[(8)] = inst_33339);

return statearr_33371;
})();
var statearr_33372_34767 = state_33359__$1;
(statearr_33372_34767[(2)] = inst_33340);

(statearr_33372_34767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (14))){
var inst_33353 = (state_33359[(2)]);
var state_33359__$1 = state_33359;
var statearr_33373_34768 = state_33359__$1;
(statearr_33373_34768[(2)] = inst_33353);

(statearr_33373_34768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (10))){
var state_33359__$1 = state_33359;
var statearr_33374_34769 = state_33359__$1;
(statearr_33374_34769[(2)] = fc);

(statearr_33374_34769[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (8))){
var inst_33348 = (state_33359[(2)]);
var state_33359__$1 = state_33359;
if(cljs.core.truth_(inst_33348)){
var statearr_33375_34770 = state_33359__$1;
(statearr_33375_34770[(1)] = (12));

} else {
var statearr_33376_34771 = state_33359__$1;
(statearr_33376_34771[(1)] = (13));

}

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
var cljs$core$async$state_machine__32641__auto__ = null;
var cljs$core$async$state_machine__32641__auto____0 = (function (){
var statearr_33377 = [null,null,null,null,null,null,null,null,null];
(statearr_33377[(0)] = cljs$core$async$state_machine__32641__auto__);

(statearr_33377[(1)] = (1));

return statearr_33377;
});
var cljs$core$async$state_machine__32641__auto____1 = (function (state_33359){
while(true){
var ret_value__32642__auto__ = (function (){try{while(true){
var result__32643__auto__ = switch__32640__auto__(state_33359);
if(cljs.core.keyword_identical_QMARK_(result__32643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32643__auto__;
}
break;
}
}catch (e33378){var ex__32644__auto__ = e33378;
var statearr_33379_34772 = state_33359;
(statearr_33379_34772[(2)] = ex__32644__auto__);


if(cljs.core.seq((state_33359[(4)]))){
var statearr_33380_34773 = state_33359;
(statearr_33380_34773[(1)] = cljs.core.first((state_33359[(4)])));

} else {
throw ex__32644__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34774 = state_33359;
state_33359 = G__34774;
continue;
} else {
return ret_value__32642__auto__;
}
break;
}
});
cljs$core$async$state_machine__32641__auto__ = function(state_33359){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32641__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32641__auto____1.call(this,state_33359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32641__auto____0;
cljs$core$async$state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32641__auto____1;
return cljs$core$async$state_machine__32641__auto__;
})()
})();
var state__32780__auto__ = (function (){var statearr_33381 = f__32779__auto__();
(statearr_33381[(6)] = c__32778__auto___34750);

return statearr_33381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32780__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32778__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32779__auto__ = (function (){var switch__32640__auto__ = (function (state_33403){
var state_val_33404 = (state_33403[(1)]);
if((state_val_33404 === (7))){
var inst_33399 = (state_33403[(2)]);
var state_33403__$1 = state_33403;
var statearr_33405_34775 = state_33403__$1;
(statearr_33405_34775[(2)] = inst_33399);

(statearr_33405_34775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33404 === (1))){
var inst_33382 = init;
var inst_33383 = inst_33382;
var state_33403__$1 = (function (){var statearr_33406 = state_33403;
(statearr_33406[(7)] = inst_33383);

return statearr_33406;
})();
var statearr_33407_34778 = state_33403__$1;
(statearr_33407_34778[(2)] = null);

(statearr_33407_34778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33404 === (4))){
var inst_33386 = (state_33403[(8)]);
var inst_33386__$1 = (state_33403[(2)]);
var inst_33387 = (inst_33386__$1 == null);
var state_33403__$1 = (function (){var statearr_33408 = state_33403;
(statearr_33408[(8)] = inst_33386__$1);

return statearr_33408;
})();
if(cljs.core.truth_(inst_33387)){
var statearr_33409_34779 = state_33403__$1;
(statearr_33409_34779[(1)] = (5));

} else {
var statearr_33410_34780 = state_33403__$1;
(statearr_33410_34780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33404 === (6))){
var inst_33386 = (state_33403[(8)]);
var inst_33383 = (state_33403[(7)]);
var inst_33390 = (state_33403[(9)]);
var inst_33390__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33383,inst_33386) : f.call(null,inst_33383,inst_33386));
var inst_33391 = cljs.core.reduced_QMARK_(inst_33390__$1);
var state_33403__$1 = (function (){var statearr_33411 = state_33403;
(statearr_33411[(9)] = inst_33390__$1);

return statearr_33411;
})();
if(inst_33391){
var statearr_33412_34781 = state_33403__$1;
(statearr_33412_34781[(1)] = (8));

} else {
var statearr_33413_34782 = state_33403__$1;
(statearr_33413_34782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33404 === (3))){
var inst_33401 = (state_33403[(2)]);
var state_33403__$1 = state_33403;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33403__$1,inst_33401);
} else {
if((state_val_33404 === (2))){
var state_33403__$1 = state_33403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33403__$1,(4),ch);
} else {
if((state_val_33404 === (9))){
var inst_33390 = (state_33403[(9)]);
var inst_33383 = inst_33390;
var state_33403__$1 = (function (){var statearr_33414 = state_33403;
(statearr_33414[(7)] = inst_33383);

return statearr_33414;
})();
var statearr_33415_34783 = state_33403__$1;
(statearr_33415_34783[(2)] = null);

(statearr_33415_34783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33404 === (5))){
var inst_33383 = (state_33403[(7)]);
var state_33403__$1 = state_33403;
var statearr_33416_34784 = state_33403__$1;
(statearr_33416_34784[(2)] = inst_33383);

(statearr_33416_34784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33404 === (10))){
var inst_33397 = (state_33403[(2)]);
var state_33403__$1 = state_33403;
var statearr_33417_34785 = state_33403__$1;
(statearr_33417_34785[(2)] = inst_33397);

(statearr_33417_34785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33404 === (8))){
var inst_33390 = (state_33403[(9)]);
var inst_33393 = cljs.core.deref(inst_33390);
var state_33403__$1 = state_33403;
var statearr_33418_34786 = state_33403__$1;
(statearr_33418_34786[(2)] = inst_33393);

(statearr_33418_34786[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32641__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32641__auto____0 = (function (){
var statearr_33419 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33419[(0)] = cljs$core$async$reduce_$_state_machine__32641__auto__);

(statearr_33419[(1)] = (1));

return statearr_33419;
});
var cljs$core$async$reduce_$_state_machine__32641__auto____1 = (function (state_33403){
while(true){
var ret_value__32642__auto__ = (function (){try{while(true){
var result__32643__auto__ = switch__32640__auto__(state_33403);
if(cljs.core.keyword_identical_QMARK_(result__32643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32643__auto__;
}
break;
}
}catch (e33420){var ex__32644__auto__ = e33420;
var statearr_33421_34794 = state_33403;
(statearr_33421_34794[(2)] = ex__32644__auto__);


if(cljs.core.seq((state_33403[(4)]))){
var statearr_33422_34795 = state_33403;
(statearr_33422_34795[(1)] = cljs.core.first((state_33403[(4)])));

} else {
throw ex__32644__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34796 = state_33403;
state_33403 = G__34796;
continue;
} else {
return ret_value__32642__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32641__auto__ = function(state_33403){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32641__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32641__auto____1.call(this,state_33403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32641__auto____0;
cljs$core$async$reduce_$_state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32641__auto____1;
return cljs$core$async$reduce_$_state_machine__32641__auto__;
})()
})();
var state__32780__auto__ = (function (){var statearr_33423 = f__32779__auto__();
(statearr_33423[(6)] = c__32778__auto__);

return statearr_33423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32780__auto__);
}));

return c__32778__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32778__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32779__auto__ = (function (){var switch__32640__auto__ = (function (state_33429){
var state_val_33430 = (state_33429[(1)]);
if((state_val_33430 === (1))){
var inst_33424 = cljs.core.async.reduce(f__$1,init,ch);
var state_33429__$1 = state_33429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33429__$1,(2),inst_33424);
} else {
if((state_val_33430 === (2))){
var inst_33426 = (state_33429[(2)]);
var inst_33427 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33426) : f__$1.call(null,inst_33426));
var state_33429__$1 = state_33429;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33429__$1,inst_33427);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32641__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32641__auto____0 = (function (){
var statearr_33431 = [null,null,null,null,null,null,null];
(statearr_33431[(0)] = cljs$core$async$transduce_$_state_machine__32641__auto__);

(statearr_33431[(1)] = (1));

return statearr_33431;
});
var cljs$core$async$transduce_$_state_machine__32641__auto____1 = (function (state_33429){
while(true){
var ret_value__32642__auto__ = (function (){try{while(true){
var result__32643__auto__ = switch__32640__auto__(state_33429);
if(cljs.core.keyword_identical_QMARK_(result__32643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32643__auto__;
}
break;
}
}catch (e33432){var ex__32644__auto__ = e33432;
var statearr_33433_34806 = state_33429;
(statearr_33433_34806[(2)] = ex__32644__auto__);


if(cljs.core.seq((state_33429[(4)]))){
var statearr_33434_34811 = state_33429;
(statearr_33434_34811[(1)] = cljs.core.first((state_33429[(4)])));

} else {
throw ex__32644__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34815 = state_33429;
state_33429 = G__34815;
continue;
} else {
return ret_value__32642__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32641__auto__ = function(state_33429){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32641__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32641__auto____1.call(this,state_33429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32641__auto____0;
cljs$core$async$transduce_$_state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32641__auto____1;
return cljs$core$async$transduce_$_state_machine__32641__auto__;
})()
})();
var state__32780__auto__ = (function (){var statearr_33435 = f__32779__auto__();
(statearr_33435[(6)] = c__32778__auto__);

return statearr_33435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32780__auto__);
}));

return c__32778__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33437 = arguments.length;
switch (G__33437) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32778__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32779__auto__ = (function (){var switch__32640__auto__ = (function (state_33462){
var state_val_33463 = (state_33462[(1)]);
if((state_val_33463 === (7))){
var inst_33444 = (state_33462[(2)]);
var state_33462__$1 = state_33462;
var statearr_33464_34826 = state_33462__$1;
(statearr_33464_34826[(2)] = inst_33444);

(statearr_33464_34826[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33463 === (1))){
var inst_33438 = cljs.core.seq(coll);
var inst_33439 = inst_33438;
var state_33462__$1 = (function (){var statearr_33465 = state_33462;
(statearr_33465[(7)] = inst_33439);

return statearr_33465;
})();
var statearr_33466_34827 = state_33462__$1;
(statearr_33466_34827[(2)] = null);

(statearr_33466_34827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33463 === (4))){
var inst_33439 = (state_33462[(7)]);
var inst_33442 = cljs.core.first(inst_33439);
var state_33462__$1 = state_33462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33462__$1,(7),ch,inst_33442);
} else {
if((state_val_33463 === (13))){
var inst_33456 = (state_33462[(2)]);
var state_33462__$1 = state_33462;
var statearr_33467_34829 = state_33462__$1;
(statearr_33467_34829[(2)] = inst_33456);

(statearr_33467_34829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33463 === (6))){
var inst_33447 = (state_33462[(2)]);
var state_33462__$1 = state_33462;
if(cljs.core.truth_(inst_33447)){
var statearr_33468_34830 = state_33462__$1;
(statearr_33468_34830[(1)] = (8));

} else {
var statearr_33469_34831 = state_33462__$1;
(statearr_33469_34831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33463 === (3))){
var inst_33460 = (state_33462[(2)]);
var state_33462__$1 = state_33462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33462__$1,inst_33460);
} else {
if((state_val_33463 === (12))){
var state_33462__$1 = state_33462;
var statearr_33470_34832 = state_33462__$1;
(statearr_33470_34832[(2)] = null);

(statearr_33470_34832[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33463 === (2))){
var inst_33439 = (state_33462[(7)]);
var state_33462__$1 = state_33462;
if(cljs.core.truth_(inst_33439)){
var statearr_33471_34833 = state_33462__$1;
(statearr_33471_34833[(1)] = (4));

} else {
var statearr_33472_34834 = state_33462__$1;
(statearr_33472_34834[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33463 === (11))){
var inst_33453 = cljs.core.async.close_BANG_(ch);
var state_33462__$1 = state_33462;
var statearr_33473_34835 = state_33462__$1;
(statearr_33473_34835[(2)] = inst_33453);

(statearr_33473_34835[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33463 === (9))){
var state_33462__$1 = state_33462;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33474_34836 = state_33462__$1;
(statearr_33474_34836[(1)] = (11));

} else {
var statearr_33475_34837 = state_33462__$1;
(statearr_33475_34837[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33463 === (5))){
var inst_33439 = (state_33462[(7)]);
var state_33462__$1 = state_33462;
var statearr_33476_34838 = state_33462__$1;
(statearr_33476_34838[(2)] = inst_33439);

(statearr_33476_34838[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33463 === (10))){
var inst_33458 = (state_33462[(2)]);
var state_33462__$1 = state_33462;
var statearr_33477_34839 = state_33462__$1;
(statearr_33477_34839[(2)] = inst_33458);

(statearr_33477_34839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33463 === (8))){
var inst_33439 = (state_33462[(7)]);
var inst_33449 = cljs.core.next(inst_33439);
var inst_33439__$1 = inst_33449;
var state_33462__$1 = (function (){var statearr_33478 = state_33462;
(statearr_33478[(7)] = inst_33439__$1);

return statearr_33478;
})();
var statearr_33479_34840 = state_33462__$1;
(statearr_33479_34840[(2)] = null);

(statearr_33479_34840[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__32641__auto__ = null;
var cljs$core$async$state_machine__32641__auto____0 = (function (){
var statearr_33480 = [null,null,null,null,null,null,null,null];
(statearr_33480[(0)] = cljs$core$async$state_machine__32641__auto__);

(statearr_33480[(1)] = (1));

return statearr_33480;
});
var cljs$core$async$state_machine__32641__auto____1 = (function (state_33462){
while(true){
var ret_value__32642__auto__ = (function (){try{while(true){
var result__32643__auto__ = switch__32640__auto__(state_33462);
if(cljs.core.keyword_identical_QMARK_(result__32643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32643__auto__;
}
break;
}
}catch (e33481){var ex__32644__auto__ = e33481;
var statearr_33482_34841 = state_33462;
(statearr_33482_34841[(2)] = ex__32644__auto__);


if(cljs.core.seq((state_33462[(4)]))){
var statearr_33483_34842 = state_33462;
(statearr_33483_34842[(1)] = cljs.core.first((state_33462[(4)])));

} else {
throw ex__32644__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34843 = state_33462;
state_33462 = G__34843;
continue;
} else {
return ret_value__32642__auto__;
}
break;
}
});
cljs$core$async$state_machine__32641__auto__ = function(state_33462){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32641__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32641__auto____1.call(this,state_33462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32641__auto____0;
cljs$core$async$state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32641__auto____1;
return cljs$core$async$state_machine__32641__auto__;
})()
})();
var state__32780__auto__ = (function (){var statearr_33484 = f__32779__auto__();
(statearr_33484[(6)] = c__32778__auto__);

return statearr_33484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32780__auto__);
}));

return c__32778__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_34844 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34844(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34845 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_34845(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34851 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_34851(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34859 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_34859(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33485 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33485 = (function (ch,cs,meta33486){
this.ch = ch;
this.cs = cs;
this.meta33486 = meta33486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33487,meta33486__$1){
var self__ = this;
var _33487__$1 = this;
return (new cljs.core.async.t_cljs$core$async33485(self__.ch,self__.cs,meta33486__$1));
}));

(cljs.core.async.t_cljs$core$async33485.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33487){
var self__ = this;
var _33487__$1 = this;
return self__.meta33486;
}));

(cljs.core.async.t_cljs$core$async33485.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33485.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33485.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33485.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33485.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33485.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33485.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33486","meta33486",-480996812,null)], null);
}));

(cljs.core.async.t_cljs$core$async33485.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33485.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33485");

(cljs.core.async.t_cljs$core$async33485.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33485");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33485.
 */
cljs.core.async.__GT_t_cljs$core$async33485 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33485(ch__$1,cs__$1,meta33486){
return (new cljs.core.async.t_cljs$core$async33485(ch__$1,cs__$1,meta33486));
});

}

return (new cljs.core.async.t_cljs$core$async33485(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32778__auto___34867 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32779__auto__ = (function (){var switch__32640__auto__ = (function (state_33620){
var state_val_33621 = (state_33620[(1)]);
if((state_val_33621 === (7))){
var inst_33616 = (state_33620[(2)]);
var state_33620__$1 = state_33620;
var statearr_33622_34869 = state_33620__$1;
(statearr_33622_34869[(2)] = inst_33616);

(statearr_33622_34869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (20))){
var inst_33521 = (state_33620[(7)]);
var inst_33533 = cljs.core.first(inst_33521);
var inst_33534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33533,(0),null);
var inst_33535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33533,(1),null);
var state_33620__$1 = (function (){var statearr_33623 = state_33620;
(statearr_33623[(8)] = inst_33534);

return statearr_33623;
})();
if(cljs.core.truth_(inst_33535)){
var statearr_33624_34871 = state_33620__$1;
(statearr_33624_34871[(1)] = (22));

} else {
var statearr_33625_34873 = state_33620__$1;
(statearr_33625_34873[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (27))){
var inst_33570 = (state_33620[(9)]);
var inst_33563 = (state_33620[(10)]);
var inst_33565 = (state_33620[(11)]);
var inst_33490 = (state_33620[(12)]);
var inst_33570__$1 = cljs.core._nth(inst_33563,inst_33565);
var inst_33571 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33570__$1,inst_33490,done);
var state_33620__$1 = (function (){var statearr_33626 = state_33620;
(statearr_33626[(9)] = inst_33570__$1);

return statearr_33626;
})();
if(cljs.core.truth_(inst_33571)){
var statearr_33627_34876 = state_33620__$1;
(statearr_33627_34876[(1)] = (30));

} else {
var statearr_33628_34878 = state_33620__$1;
(statearr_33628_34878[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (1))){
var state_33620__$1 = state_33620;
var statearr_33629_34882 = state_33620__$1;
(statearr_33629_34882[(2)] = null);

(statearr_33629_34882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (24))){
var inst_33521 = (state_33620[(7)]);
var inst_33540 = (state_33620[(2)]);
var inst_33541 = cljs.core.next(inst_33521);
var inst_33499 = inst_33541;
var inst_33500 = null;
var inst_33501 = (0);
var inst_33502 = (0);
var state_33620__$1 = (function (){var statearr_33630 = state_33620;
(statearr_33630[(13)] = inst_33502);

(statearr_33630[(14)] = inst_33540);

(statearr_33630[(15)] = inst_33500);

(statearr_33630[(16)] = inst_33499);

(statearr_33630[(17)] = inst_33501);

return statearr_33630;
})();
var statearr_33631_34887 = state_33620__$1;
(statearr_33631_34887[(2)] = null);

(statearr_33631_34887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (39))){
var state_33620__$1 = state_33620;
var statearr_33635_34892 = state_33620__$1;
(statearr_33635_34892[(2)] = null);

(statearr_33635_34892[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (4))){
var inst_33490 = (state_33620[(12)]);
var inst_33490__$1 = (state_33620[(2)]);
var inst_33491 = (inst_33490__$1 == null);
var state_33620__$1 = (function (){var statearr_33636 = state_33620;
(statearr_33636[(12)] = inst_33490__$1);

return statearr_33636;
})();
if(cljs.core.truth_(inst_33491)){
var statearr_33637_34894 = state_33620__$1;
(statearr_33637_34894[(1)] = (5));

} else {
var statearr_33638_34895 = state_33620__$1;
(statearr_33638_34895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (15))){
var inst_33502 = (state_33620[(13)]);
var inst_33500 = (state_33620[(15)]);
var inst_33499 = (state_33620[(16)]);
var inst_33501 = (state_33620[(17)]);
var inst_33517 = (state_33620[(2)]);
var inst_33518 = (inst_33502 + (1));
var tmp33632 = inst_33500;
var tmp33633 = inst_33499;
var tmp33634 = inst_33501;
var inst_33499__$1 = tmp33633;
var inst_33500__$1 = tmp33632;
var inst_33501__$1 = tmp33634;
var inst_33502__$1 = inst_33518;
var state_33620__$1 = (function (){var statearr_33639 = state_33620;
(statearr_33639[(13)] = inst_33502__$1);

(statearr_33639[(15)] = inst_33500__$1);

(statearr_33639[(18)] = inst_33517);

(statearr_33639[(16)] = inst_33499__$1);

(statearr_33639[(17)] = inst_33501__$1);

return statearr_33639;
})();
var statearr_33640_34908 = state_33620__$1;
(statearr_33640_34908[(2)] = null);

(statearr_33640_34908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (21))){
var inst_33544 = (state_33620[(2)]);
var state_33620__$1 = state_33620;
var statearr_33644_34915 = state_33620__$1;
(statearr_33644_34915[(2)] = inst_33544);

(statearr_33644_34915[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (31))){
var inst_33570 = (state_33620[(9)]);
var inst_33574 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33570);
var state_33620__$1 = state_33620;
var statearr_33645_34917 = state_33620__$1;
(statearr_33645_34917[(2)] = inst_33574);

(statearr_33645_34917[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (32))){
var inst_33563 = (state_33620[(10)]);
var inst_33564 = (state_33620[(19)]);
var inst_33565 = (state_33620[(11)]);
var inst_33562 = (state_33620[(20)]);
var inst_33576 = (state_33620[(2)]);
var inst_33577 = (inst_33565 + (1));
var tmp33641 = inst_33563;
var tmp33642 = inst_33564;
var tmp33643 = inst_33562;
var inst_33562__$1 = tmp33643;
var inst_33563__$1 = tmp33641;
var inst_33564__$1 = tmp33642;
var inst_33565__$1 = inst_33577;
var state_33620__$1 = (function (){var statearr_33646 = state_33620;
(statearr_33646[(10)] = inst_33563__$1);

(statearr_33646[(19)] = inst_33564__$1);

(statearr_33646[(11)] = inst_33565__$1);

(statearr_33646[(21)] = inst_33576);

(statearr_33646[(20)] = inst_33562__$1);

return statearr_33646;
})();
var statearr_33647_34920 = state_33620__$1;
(statearr_33647_34920[(2)] = null);

(statearr_33647_34920[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (40))){
var inst_33589 = (state_33620[(22)]);
var inst_33593 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33589);
var state_33620__$1 = state_33620;
var statearr_33648_34923 = state_33620__$1;
(statearr_33648_34923[(2)] = inst_33593);

(statearr_33648_34923[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (33))){
var inst_33580 = (state_33620[(23)]);
var inst_33582 = cljs.core.chunked_seq_QMARK_(inst_33580);
var state_33620__$1 = state_33620;
if(inst_33582){
var statearr_33649_34924 = state_33620__$1;
(statearr_33649_34924[(1)] = (36));

} else {
var statearr_33650_34925 = state_33620__$1;
(statearr_33650_34925[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (13))){
var inst_33511 = (state_33620[(24)]);
var inst_33514 = cljs.core.async.close_BANG_(inst_33511);
var state_33620__$1 = state_33620;
var statearr_33651_34927 = state_33620__$1;
(statearr_33651_34927[(2)] = inst_33514);

(statearr_33651_34927[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (22))){
var inst_33534 = (state_33620[(8)]);
var inst_33537 = cljs.core.async.close_BANG_(inst_33534);
var state_33620__$1 = state_33620;
var statearr_33652_34930 = state_33620__$1;
(statearr_33652_34930[(2)] = inst_33537);

(statearr_33652_34930[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (36))){
var inst_33580 = (state_33620[(23)]);
var inst_33584 = cljs.core.chunk_first(inst_33580);
var inst_33585 = cljs.core.chunk_rest(inst_33580);
var inst_33586 = cljs.core.count(inst_33584);
var inst_33562 = inst_33585;
var inst_33563 = inst_33584;
var inst_33564 = inst_33586;
var inst_33565 = (0);
var state_33620__$1 = (function (){var statearr_33653 = state_33620;
(statearr_33653[(10)] = inst_33563);

(statearr_33653[(19)] = inst_33564);

(statearr_33653[(11)] = inst_33565);

(statearr_33653[(20)] = inst_33562);

return statearr_33653;
})();
var statearr_33654_34934 = state_33620__$1;
(statearr_33654_34934[(2)] = null);

(statearr_33654_34934[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (41))){
var inst_33580 = (state_33620[(23)]);
var inst_33595 = (state_33620[(2)]);
var inst_33596 = cljs.core.next(inst_33580);
var inst_33562 = inst_33596;
var inst_33563 = null;
var inst_33564 = (0);
var inst_33565 = (0);
var state_33620__$1 = (function (){var statearr_33655 = state_33620;
(statearr_33655[(10)] = inst_33563);

(statearr_33655[(25)] = inst_33595);

(statearr_33655[(19)] = inst_33564);

(statearr_33655[(11)] = inst_33565);

(statearr_33655[(20)] = inst_33562);

return statearr_33655;
})();
var statearr_33656_34939 = state_33620__$1;
(statearr_33656_34939[(2)] = null);

(statearr_33656_34939[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (43))){
var state_33620__$1 = state_33620;
var statearr_33657_34941 = state_33620__$1;
(statearr_33657_34941[(2)] = null);

(statearr_33657_34941[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (29))){
var inst_33604 = (state_33620[(2)]);
var state_33620__$1 = state_33620;
var statearr_33658_34948 = state_33620__$1;
(statearr_33658_34948[(2)] = inst_33604);

(statearr_33658_34948[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (44))){
var inst_33613 = (state_33620[(2)]);
var state_33620__$1 = (function (){var statearr_33659 = state_33620;
(statearr_33659[(26)] = inst_33613);

return statearr_33659;
})();
var statearr_33660_34950 = state_33620__$1;
(statearr_33660_34950[(2)] = null);

(statearr_33660_34950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (6))){
var inst_33554 = (state_33620[(27)]);
var inst_33553 = cljs.core.deref(cs);
var inst_33554__$1 = cljs.core.keys(inst_33553);
var inst_33555 = cljs.core.count(inst_33554__$1);
var inst_33556 = cljs.core.reset_BANG_(dctr,inst_33555);
var inst_33561 = cljs.core.seq(inst_33554__$1);
var inst_33562 = inst_33561;
var inst_33563 = null;
var inst_33564 = (0);
var inst_33565 = (0);
var state_33620__$1 = (function (){var statearr_33661 = state_33620;
(statearr_33661[(10)] = inst_33563);

(statearr_33661[(19)] = inst_33564);

(statearr_33661[(11)] = inst_33565);

(statearr_33661[(27)] = inst_33554__$1);

(statearr_33661[(20)] = inst_33562);

(statearr_33661[(28)] = inst_33556);

return statearr_33661;
})();
var statearr_33662_34955 = state_33620__$1;
(statearr_33662_34955[(2)] = null);

(statearr_33662_34955[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (28))){
var inst_33580 = (state_33620[(23)]);
var inst_33562 = (state_33620[(20)]);
var inst_33580__$1 = cljs.core.seq(inst_33562);
var state_33620__$1 = (function (){var statearr_33663 = state_33620;
(statearr_33663[(23)] = inst_33580__$1);

return statearr_33663;
})();
if(inst_33580__$1){
var statearr_33664_34957 = state_33620__$1;
(statearr_33664_34957[(1)] = (33));

} else {
var statearr_33665_34960 = state_33620__$1;
(statearr_33665_34960[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (25))){
var inst_33564 = (state_33620[(19)]);
var inst_33565 = (state_33620[(11)]);
var inst_33567 = (inst_33565 < inst_33564);
var inst_33568 = inst_33567;
var state_33620__$1 = state_33620;
if(cljs.core.truth_(inst_33568)){
var statearr_33666_34965 = state_33620__$1;
(statearr_33666_34965[(1)] = (27));

} else {
var statearr_33667_34966 = state_33620__$1;
(statearr_33667_34966[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (34))){
var state_33620__$1 = state_33620;
var statearr_33668_34967 = state_33620__$1;
(statearr_33668_34967[(2)] = null);

(statearr_33668_34967[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (17))){
var state_33620__$1 = state_33620;
var statearr_33669_34969 = state_33620__$1;
(statearr_33669_34969[(2)] = null);

(statearr_33669_34969[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (3))){
var inst_33618 = (state_33620[(2)]);
var state_33620__$1 = state_33620;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33620__$1,inst_33618);
} else {
if((state_val_33621 === (12))){
var inst_33549 = (state_33620[(2)]);
var state_33620__$1 = state_33620;
var statearr_33670_34976 = state_33620__$1;
(statearr_33670_34976[(2)] = inst_33549);

(statearr_33670_34976[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (2))){
var state_33620__$1 = state_33620;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33620__$1,(4),ch);
} else {
if((state_val_33621 === (23))){
var state_33620__$1 = state_33620;
var statearr_33671_34979 = state_33620__$1;
(statearr_33671_34979[(2)] = null);

(statearr_33671_34979[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (35))){
var inst_33602 = (state_33620[(2)]);
var state_33620__$1 = state_33620;
var statearr_33672_34982 = state_33620__$1;
(statearr_33672_34982[(2)] = inst_33602);

(statearr_33672_34982[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (19))){
var inst_33521 = (state_33620[(7)]);
var inst_33525 = cljs.core.chunk_first(inst_33521);
var inst_33526 = cljs.core.chunk_rest(inst_33521);
var inst_33527 = cljs.core.count(inst_33525);
var inst_33499 = inst_33526;
var inst_33500 = inst_33525;
var inst_33501 = inst_33527;
var inst_33502 = (0);
var state_33620__$1 = (function (){var statearr_33673 = state_33620;
(statearr_33673[(13)] = inst_33502);

(statearr_33673[(15)] = inst_33500);

(statearr_33673[(16)] = inst_33499);

(statearr_33673[(17)] = inst_33501);

return statearr_33673;
})();
var statearr_33674_34984 = state_33620__$1;
(statearr_33674_34984[(2)] = null);

(statearr_33674_34984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (11))){
var inst_33521 = (state_33620[(7)]);
var inst_33499 = (state_33620[(16)]);
var inst_33521__$1 = cljs.core.seq(inst_33499);
var state_33620__$1 = (function (){var statearr_33675 = state_33620;
(statearr_33675[(7)] = inst_33521__$1);

return statearr_33675;
})();
if(inst_33521__$1){
var statearr_33676_34989 = state_33620__$1;
(statearr_33676_34989[(1)] = (16));

} else {
var statearr_33677_34990 = state_33620__$1;
(statearr_33677_34990[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (9))){
var inst_33551 = (state_33620[(2)]);
var state_33620__$1 = state_33620;
var statearr_33678_34991 = state_33620__$1;
(statearr_33678_34991[(2)] = inst_33551);

(statearr_33678_34991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (5))){
var inst_33497 = cljs.core.deref(cs);
var inst_33498 = cljs.core.seq(inst_33497);
var inst_33499 = inst_33498;
var inst_33500 = null;
var inst_33501 = (0);
var inst_33502 = (0);
var state_33620__$1 = (function (){var statearr_33679 = state_33620;
(statearr_33679[(13)] = inst_33502);

(statearr_33679[(15)] = inst_33500);

(statearr_33679[(16)] = inst_33499);

(statearr_33679[(17)] = inst_33501);

return statearr_33679;
})();
var statearr_33680_35001 = state_33620__$1;
(statearr_33680_35001[(2)] = null);

(statearr_33680_35001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (14))){
var state_33620__$1 = state_33620;
var statearr_33681_35004 = state_33620__$1;
(statearr_33681_35004[(2)] = null);

(statearr_33681_35004[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (45))){
var inst_33610 = (state_33620[(2)]);
var state_33620__$1 = state_33620;
var statearr_33682_35005 = state_33620__$1;
(statearr_33682_35005[(2)] = inst_33610);

(statearr_33682_35005[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (26))){
var inst_33554 = (state_33620[(27)]);
var inst_33606 = (state_33620[(2)]);
var inst_33607 = cljs.core.seq(inst_33554);
var state_33620__$1 = (function (){var statearr_33683 = state_33620;
(statearr_33683[(29)] = inst_33606);

return statearr_33683;
})();
if(inst_33607){
var statearr_33684_35007 = state_33620__$1;
(statearr_33684_35007[(1)] = (42));

} else {
var statearr_33685_35008 = state_33620__$1;
(statearr_33685_35008[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (16))){
var inst_33521 = (state_33620[(7)]);
var inst_33523 = cljs.core.chunked_seq_QMARK_(inst_33521);
var state_33620__$1 = state_33620;
if(inst_33523){
var statearr_33686_35011 = state_33620__$1;
(statearr_33686_35011[(1)] = (19));

} else {
var statearr_33687_35012 = state_33620__$1;
(statearr_33687_35012[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (38))){
var inst_33599 = (state_33620[(2)]);
var state_33620__$1 = state_33620;
var statearr_33688_35015 = state_33620__$1;
(statearr_33688_35015[(2)] = inst_33599);

(statearr_33688_35015[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (30))){
var state_33620__$1 = state_33620;
var statearr_33689_35016 = state_33620__$1;
(statearr_33689_35016[(2)] = null);

(statearr_33689_35016[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (10))){
var inst_33502 = (state_33620[(13)]);
var inst_33500 = (state_33620[(15)]);
var inst_33510 = cljs.core._nth(inst_33500,inst_33502);
var inst_33511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33510,(0),null);
var inst_33512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33510,(1),null);
var state_33620__$1 = (function (){var statearr_33690 = state_33620;
(statearr_33690[(24)] = inst_33511);

return statearr_33690;
})();
if(cljs.core.truth_(inst_33512)){
var statearr_33691_35018 = state_33620__$1;
(statearr_33691_35018[(1)] = (13));

} else {
var statearr_33692_35020 = state_33620__$1;
(statearr_33692_35020[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (18))){
var inst_33547 = (state_33620[(2)]);
var state_33620__$1 = state_33620;
var statearr_33693_35022 = state_33620__$1;
(statearr_33693_35022[(2)] = inst_33547);

(statearr_33693_35022[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (42))){
var state_33620__$1 = state_33620;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33620__$1,(45),dchan);
} else {
if((state_val_33621 === (37))){
var inst_33589 = (state_33620[(22)]);
var inst_33490 = (state_33620[(12)]);
var inst_33580 = (state_33620[(23)]);
var inst_33589__$1 = cljs.core.first(inst_33580);
var inst_33590 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33589__$1,inst_33490,done);
var state_33620__$1 = (function (){var statearr_33694 = state_33620;
(statearr_33694[(22)] = inst_33589__$1);

return statearr_33694;
})();
if(cljs.core.truth_(inst_33590)){
var statearr_33695_35026 = state_33620__$1;
(statearr_33695_35026[(1)] = (39));

} else {
var statearr_33696_35027 = state_33620__$1;
(statearr_33696_35027[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (8))){
var inst_33502 = (state_33620[(13)]);
var inst_33501 = (state_33620[(17)]);
var inst_33504 = (inst_33502 < inst_33501);
var inst_33505 = inst_33504;
var state_33620__$1 = state_33620;
if(cljs.core.truth_(inst_33505)){
var statearr_33697_35030 = state_33620__$1;
(statearr_33697_35030[(1)] = (10));

} else {
var statearr_33698_35031 = state_33620__$1;
(statearr_33698_35031[(1)] = (11));

}

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
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__32641__auto__ = null;
var cljs$core$async$mult_$_state_machine__32641__auto____0 = (function (){
var statearr_33699 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33699[(0)] = cljs$core$async$mult_$_state_machine__32641__auto__);

(statearr_33699[(1)] = (1));

return statearr_33699;
});
var cljs$core$async$mult_$_state_machine__32641__auto____1 = (function (state_33620){
while(true){
var ret_value__32642__auto__ = (function (){try{while(true){
var result__32643__auto__ = switch__32640__auto__(state_33620);
if(cljs.core.keyword_identical_QMARK_(result__32643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32643__auto__;
}
break;
}
}catch (e33700){var ex__32644__auto__ = e33700;
var statearr_33701_35034 = state_33620;
(statearr_33701_35034[(2)] = ex__32644__auto__);


if(cljs.core.seq((state_33620[(4)]))){
var statearr_33702_35035 = state_33620;
(statearr_33702_35035[(1)] = cljs.core.first((state_33620[(4)])));

} else {
throw ex__32644__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35036 = state_33620;
state_33620 = G__35036;
continue;
} else {
return ret_value__32642__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32641__auto__ = function(state_33620){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32641__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32641__auto____1.call(this,state_33620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32641__auto____0;
cljs$core$async$mult_$_state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32641__auto____1;
return cljs$core$async$mult_$_state_machine__32641__auto__;
})()
})();
var state__32780__auto__ = (function (){var statearr_33703 = f__32779__auto__();
(statearr_33703[(6)] = c__32778__auto___34867);

return statearr_33703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32780__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33705 = arguments.length;
switch (G__33705) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_35043 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35043(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35046 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35046(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35051 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35051(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35053 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35053(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35055 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35055(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35058 = arguments.length;
var i__4737__auto___35059 = (0);
while(true){
if((i__4737__auto___35059 < len__4736__auto___35058)){
args__4742__auto__.push((arguments[i__4737__auto___35059]));

var G__35060 = (i__4737__auto___35059 + (1));
i__4737__auto___35059 = G__35060;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33710){
var map__33711 = p__33710;
var map__33711__$1 = (((((!((map__33711 == null))))?(((((map__33711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33711):map__33711);
var opts = map__33711__$1;
var statearr_33713_35061 = state;
(statearr_33713_35061[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33714_35062 = state;
(statearr_33714_35062[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_33715_35063 = state;
(statearr_33715_35063[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33706){
var G__33707 = cljs.core.first(seq33706);
var seq33706__$1 = cljs.core.next(seq33706);
var G__33708 = cljs.core.first(seq33706__$1);
var seq33706__$2 = cljs.core.next(seq33706__$1);
var G__33709 = cljs.core.first(seq33706__$2);
var seq33706__$3 = cljs.core.next(seq33706__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33707,G__33708,G__33709,seq33706__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33716 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33716 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33717){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33717 = meta33717;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33718,meta33717__$1){
var self__ = this;
var _33718__$1 = this;
return (new cljs.core.async.t_cljs$core$async33716(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33717__$1));
}));

(cljs.core.async.t_cljs$core$async33716.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33718){
var self__ = this;
var _33718__$1 = this;
return self__.meta33717;
}));

(cljs.core.async.t_cljs$core$async33716.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33716.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33716.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33716.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33716.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33716.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33716.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33716.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33716.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33717","meta33717",734047340,null)], null);
}));

(cljs.core.async.t_cljs$core$async33716.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33716.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33716");

(cljs.core.async.t_cljs$core$async33716.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33716");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33716.
 */
cljs.core.async.__GT_t_cljs$core$async33716 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33716(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33717){
return (new cljs.core.async.t_cljs$core$async33716(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33717));
});

}

return (new cljs.core.async.t_cljs$core$async33716(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32778__auto___35066 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32779__auto__ = (function (){var switch__32640__auto__ = (function (state_33820){
var state_val_33821 = (state_33820[(1)]);
if((state_val_33821 === (7))){
var inst_33735 = (state_33820[(2)]);
var state_33820__$1 = state_33820;
var statearr_33822_35068 = state_33820__$1;
(statearr_33822_35068[(2)] = inst_33735);

(statearr_33822_35068[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (20))){
var inst_33747 = (state_33820[(7)]);
var state_33820__$1 = state_33820;
var statearr_33823_35069 = state_33820__$1;
(statearr_33823_35069[(2)] = inst_33747);

(statearr_33823_35069[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (27))){
var state_33820__$1 = state_33820;
var statearr_33824_35070 = state_33820__$1;
(statearr_33824_35070[(2)] = null);

(statearr_33824_35070[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (1))){
var inst_33722 = (state_33820[(8)]);
var inst_33722__$1 = calc_state();
var inst_33724 = (inst_33722__$1 == null);
var inst_33725 = cljs.core.not(inst_33724);
var state_33820__$1 = (function (){var statearr_33825 = state_33820;
(statearr_33825[(8)] = inst_33722__$1);

return statearr_33825;
})();
if(inst_33725){
var statearr_33826_35075 = state_33820__$1;
(statearr_33826_35075[(1)] = (2));

} else {
var statearr_33827_35076 = state_33820__$1;
(statearr_33827_35076[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (24))){
var inst_33780 = (state_33820[(9)]);
var inst_33794 = (state_33820[(10)]);
var inst_33771 = (state_33820[(11)]);
var inst_33794__$1 = (inst_33771.cljs$core$IFn$_invoke$arity$1 ? inst_33771.cljs$core$IFn$_invoke$arity$1(inst_33780) : inst_33771.call(null,inst_33780));
var state_33820__$1 = (function (){var statearr_33828 = state_33820;
(statearr_33828[(10)] = inst_33794__$1);

return statearr_33828;
})();
if(cljs.core.truth_(inst_33794__$1)){
var statearr_33829_35077 = state_33820__$1;
(statearr_33829_35077[(1)] = (29));

} else {
var statearr_33830_35078 = state_33820__$1;
(statearr_33830_35078[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (4))){
var inst_33738 = (state_33820[(2)]);
var state_33820__$1 = state_33820;
if(cljs.core.truth_(inst_33738)){
var statearr_33831_35079 = state_33820__$1;
(statearr_33831_35079[(1)] = (8));

} else {
var statearr_33832_35080 = state_33820__$1;
(statearr_33832_35080[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (15))){
var inst_33765 = (state_33820[(2)]);
var state_33820__$1 = state_33820;
if(cljs.core.truth_(inst_33765)){
var statearr_33833_35083 = state_33820__$1;
(statearr_33833_35083[(1)] = (19));

} else {
var statearr_33834_35084 = state_33820__$1;
(statearr_33834_35084[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (21))){
var inst_33770 = (state_33820[(12)]);
var inst_33770__$1 = (state_33820[(2)]);
var inst_33771 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33770__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33772 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33770__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33770__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33820__$1 = (function (){var statearr_33835 = state_33820;
(statearr_33835[(12)] = inst_33770__$1);

(statearr_33835[(13)] = inst_33772);

(statearr_33835[(11)] = inst_33771);

return statearr_33835;
})();
return cljs.core.async.ioc_alts_BANG_(state_33820__$1,(22),inst_33773);
} else {
if((state_val_33821 === (31))){
var inst_33802 = (state_33820[(2)]);
var state_33820__$1 = state_33820;
if(cljs.core.truth_(inst_33802)){
var statearr_33836_35089 = state_33820__$1;
(statearr_33836_35089[(1)] = (32));

} else {
var statearr_33837_35090 = state_33820__$1;
(statearr_33837_35090[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (32))){
var inst_33779 = (state_33820[(14)]);
var state_33820__$1 = state_33820;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33820__$1,(35),out,inst_33779);
} else {
if((state_val_33821 === (33))){
var inst_33770 = (state_33820[(12)]);
var inst_33747 = inst_33770;
var state_33820__$1 = (function (){var statearr_33838 = state_33820;
(statearr_33838[(7)] = inst_33747);

return statearr_33838;
})();
var statearr_33839_35095 = state_33820__$1;
(statearr_33839_35095[(2)] = null);

(statearr_33839_35095[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (13))){
var inst_33747 = (state_33820[(7)]);
var inst_33754 = inst_33747.cljs$lang$protocol_mask$partition0$;
var inst_33755 = (inst_33754 & (64));
var inst_33756 = inst_33747.cljs$core$ISeq$;
var inst_33757 = (cljs.core.PROTOCOL_SENTINEL === inst_33756);
var inst_33758 = ((inst_33755) || (inst_33757));
var state_33820__$1 = state_33820;
if(cljs.core.truth_(inst_33758)){
var statearr_33840_35102 = state_33820__$1;
(statearr_33840_35102[(1)] = (16));

} else {
var statearr_33841_35103 = state_33820__$1;
(statearr_33841_35103[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (22))){
var inst_33779 = (state_33820[(14)]);
var inst_33780 = (state_33820[(9)]);
var inst_33778 = (state_33820[(2)]);
var inst_33779__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33778,(0),null);
var inst_33780__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33778,(1),null);
var inst_33781 = (inst_33779__$1 == null);
var inst_33782 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33780__$1,change);
var inst_33783 = ((inst_33781) || (inst_33782));
var state_33820__$1 = (function (){var statearr_33842 = state_33820;
(statearr_33842[(14)] = inst_33779__$1);

(statearr_33842[(9)] = inst_33780__$1);

return statearr_33842;
})();
if(cljs.core.truth_(inst_33783)){
var statearr_33843_35108 = state_33820__$1;
(statearr_33843_35108[(1)] = (23));

} else {
var statearr_33844_35109 = state_33820__$1;
(statearr_33844_35109[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (36))){
var inst_33770 = (state_33820[(12)]);
var inst_33747 = inst_33770;
var state_33820__$1 = (function (){var statearr_33845 = state_33820;
(statearr_33845[(7)] = inst_33747);

return statearr_33845;
})();
var statearr_33846_35114 = state_33820__$1;
(statearr_33846_35114[(2)] = null);

(statearr_33846_35114[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (29))){
var inst_33794 = (state_33820[(10)]);
var state_33820__$1 = state_33820;
var statearr_33847_35115 = state_33820__$1;
(statearr_33847_35115[(2)] = inst_33794);

(statearr_33847_35115[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (6))){
var state_33820__$1 = state_33820;
var statearr_33848_35119 = state_33820__$1;
(statearr_33848_35119[(2)] = false);

(statearr_33848_35119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (28))){
var inst_33790 = (state_33820[(2)]);
var inst_33791 = calc_state();
var inst_33747 = inst_33791;
var state_33820__$1 = (function (){var statearr_33849 = state_33820;
(statearr_33849[(15)] = inst_33790);

(statearr_33849[(7)] = inst_33747);

return statearr_33849;
})();
var statearr_33850_35120 = state_33820__$1;
(statearr_33850_35120[(2)] = null);

(statearr_33850_35120[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (25))){
var inst_33816 = (state_33820[(2)]);
var state_33820__$1 = state_33820;
var statearr_33851_35127 = state_33820__$1;
(statearr_33851_35127[(2)] = inst_33816);

(statearr_33851_35127[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (34))){
var inst_33814 = (state_33820[(2)]);
var state_33820__$1 = state_33820;
var statearr_33852_35130 = state_33820__$1;
(statearr_33852_35130[(2)] = inst_33814);

(statearr_33852_35130[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (17))){
var state_33820__$1 = state_33820;
var statearr_33853_35131 = state_33820__$1;
(statearr_33853_35131[(2)] = false);

(statearr_33853_35131[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (3))){
var state_33820__$1 = state_33820;
var statearr_33854_35132 = state_33820__$1;
(statearr_33854_35132[(2)] = false);

(statearr_33854_35132[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (12))){
var inst_33818 = (state_33820[(2)]);
var state_33820__$1 = state_33820;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33820__$1,inst_33818);
} else {
if((state_val_33821 === (2))){
var inst_33722 = (state_33820[(8)]);
var inst_33727 = inst_33722.cljs$lang$protocol_mask$partition0$;
var inst_33728 = (inst_33727 & (64));
var inst_33729 = inst_33722.cljs$core$ISeq$;
var inst_33730 = (cljs.core.PROTOCOL_SENTINEL === inst_33729);
var inst_33731 = ((inst_33728) || (inst_33730));
var state_33820__$1 = state_33820;
if(cljs.core.truth_(inst_33731)){
var statearr_33855_35133 = state_33820__$1;
(statearr_33855_35133[(1)] = (5));

} else {
var statearr_33856_35137 = state_33820__$1;
(statearr_33856_35137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (23))){
var inst_33779 = (state_33820[(14)]);
var inst_33785 = (inst_33779 == null);
var state_33820__$1 = state_33820;
if(cljs.core.truth_(inst_33785)){
var statearr_33857_35139 = state_33820__$1;
(statearr_33857_35139[(1)] = (26));

} else {
var statearr_33858_35140 = state_33820__$1;
(statearr_33858_35140[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (35))){
var inst_33805 = (state_33820[(2)]);
var state_33820__$1 = state_33820;
if(cljs.core.truth_(inst_33805)){
var statearr_33859_35141 = state_33820__$1;
(statearr_33859_35141[(1)] = (36));

} else {
var statearr_33860_35143 = state_33820__$1;
(statearr_33860_35143[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (19))){
var inst_33747 = (state_33820[(7)]);
var inst_33767 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33747);
var state_33820__$1 = state_33820;
var statearr_33861_35147 = state_33820__$1;
(statearr_33861_35147[(2)] = inst_33767);

(statearr_33861_35147[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (11))){
var inst_33747 = (state_33820[(7)]);
var inst_33751 = (inst_33747 == null);
var inst_33752 = cljs.core.not(inst_33751);
var state_33820__$1 = state_33820;
if(inst_33752){
var statearr_33862_35150 = state_33820__$1;
(statearr_33862_35150[(1)] = (13));

} else {
var statearr_33863_35151 = state_33820__$1;
(statearr_33863_35151[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (9))){
var inst_33722 = (state_33820[(8)]);
var state_33820__$1 = state_33820;
var statearr_33864_35152 = state_33820__$1;
(statearr_33864_35152[(2)] = inst_33722);

(statearr_33864_35152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (5))){
var state_33820__$1 = state_33820;
var statearr_33865_35156 = state_33820__$1;
(statearr_33865_35156[(2)] = true);

(statearr_33865_35156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (14))){
var state_33820__$1 = state_33820;
var statearr_33866_35158 = state_33820__$1;
(statearr_33866_35158[(2)] = false);

(statearr_33866_35158[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (26))){
var inst_33780 = (state_33820[(9)]);
var inst_33787 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33780);
var state_33820__$1 = state_33820;
var statearr_33867_35161 = state_33820__$1;
(statearr_33867_35161[(2)] = inst_33787);

(statearr_33867_35161[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (16))){
var state_33820__$1 = state_33820;
var statearr_33868_35164 = state_33820__$1;
(statearr_33868_35164[(2)] = true);

(statearr_33868_35164[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (38))){
var inst_33810 = (state_33820[(2)]);
var state_33820__$1 = state_33820;
var statearr_33869_35165 = state_33820__$1;
(statearr_33869_35165[(2)] = inst_33810);

(statearr_33869_35165[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (30))){
var inst_33780 = (state_33820[(9)]);
var inst_33772 = (state_33820[(13)]);
var inst_33771 = (state_33820[(11)]);
var inst_33797 = cljs.core.empty_QMARK_(inst_33771);
var inst_33798 = (inst_33772.cljs$core$IFn$_invoke$arity$1 ? inst_33772.cljs$core$IFn$_invoke$arity$1(inst_33780) : inst_33772.call(null,inst_33780));
var inst_33799 = cljs.core.not(inst_33798);
var inst_33800 = ((inst_33797) && (inst_33799));
var state_33820__$1 = state_33820;
var statearr_33870_35166 = state_33820__$1;
(statearr_33870_35166[(2)] = inst_33800);

(statearr_33870_35166[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (10))){
var inst_33722 = (state_33820[(8)]);
var inst_33743 = (state_33820[(2)]);
var inst_33744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33743,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33743,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33746 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33743,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33747 = inst_33722;
var state_33820__$1 = (function (){var statearr_33871 = state_33820;
(statearr_33871[(16)] = inst_33745);

(statearr_33871[(17)] = inst_33746);

(statearr_33871[(18)] = inst_33744);

(statearr_33871[(7)] = inst_33747);

return statearr_33871;
})();
var statearr_33872_35167 = state_33820__$1;
(statearr_33872_35167[(2)] = null);

(statearr_33872_35167[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (18))){
var inst_33762 = (state_33820[(2)]);
var state_33820__$1 = state_33820;
var statearr_33873_35168 = state_33820__$1;
(statearr_33873_35168[(2)] = inst_33762);

(statearr_33873_35168[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (37))){
var state_33820__$1 = state_33820;
var statearr_33874_35169 = state_33820__$1;
(statearr_33874_35169[(2)] = null);

(statearr_33874_35169[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33821 === (8))){
var inst_33722 = (state_33820[(8)]);
var inst_33740 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33722);
var state_33820__$1 = state_33820;
var statearr_33875_35170 = state_33820__$1;
(statearr_33875_35170[(2)] = inst_33740);

(statearr_33875_35170[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__32641__auto__ = null;
var cljs$core$async$mix_$_state_machine__32641__auto____0 = (function (){
var statearr_33876 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33876[(0)] = cljs$core$async$mix_$_state_machine__32641__auto__);

(statearr_33876[(1)] = (1));

return statearr_33876;
});
var cljs$core$async$mix_$_state_machine__32641__auto____1 = (function (state_33820){
while(true){
var ret_value__32642__auto__ = (function (){try{while(true){
var result__32643__auto__ = switch__32640__auto__(state_33820);
if(cljs.core.keyword_identical_QMARK_(result__32643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32643__auto__;
}
break;
}
}catch (e33877){var ex__32644__auto__ = e33877;
var statearr_33878_35175 = state_33820;
(statearr_33878_35175[(2)] = ex__32644__auto__);


if(cljs.core.seq((state_33820[(4)]))){
var statearr_33879_35176 = state_33820;
(statearr_33879_35176[(1)] = cljs.core.first((state_33820[(4)])));

} else {
throw ex__32644__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35177 = state_33820;
state_33820 = G__35177;
continue;
} else {
return ret_value__32642__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32641__auto__ = function(state_33820){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32641__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32641__auto____1.call(this,state_33820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32641__auto____0;
cljs$core$async$mix_$_state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32641__auto____1;
return cljs$core$async$mix_$_state_machine__32641__auto__;
})()
})();
var state__32780__auto__ = (function (){var statearr_33880 = f__32779__auto__();
(statearr_33880[(6)] = c__32778__auto___35066);

return statearr_33880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32780__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35182 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35182(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35184 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35184(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35186 = (function() {
var G__35187 = null;
var G__35187__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35187__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35187 = function(p,v){
switch(arguments.length){
case 1:
return G__35187__1.call(this,p);
case 2:
return G__35187__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35187.cljs$core$IFn$_invoke$arity$1 = G__35187__1;
G__35187.cljs$core$IFn$_invoke$arity$2 = G__35187__2;
return G__35187;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33882 = arguments.length;
switch (G__33882) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35186(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35186(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33885 = arguments.length;
switch (G__33885) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33883_SHARP_){
if(cljs.core.truth_((p1__33883_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33883_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33883_SHARP_.call(null,topic)))){
return p1__33883_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33883_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33886 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33886 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33887){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33887 = meta33887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33888,meta33887__$1){
var self__ = this;
var _33888__$1 = this;
return (new cljs.core.async.t_cljs$core$async33886(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33887__$1));
}));

(cljs.core.async.t_cljs$core$async33886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33888){
var self__ = this;
var _33888__$1 = this;
return self__.meta33887;
}));

(cljs.core.async.t_cljs$core$async33886.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33886.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33886.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33886.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33886.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33886.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33886.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33886.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33887","meta33887",-1489048388,null)], null);
}));

(cljs.core.async.t_cljs$core$async33886.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33886.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33886");

(cljs.core.async.t_cljs$core$async33886.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33886");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33886.
 */
cljs.core.async.__GT_t_cljs$core$async33886 = (function cljs$core$async$__GT_t_cljs$core$async33886(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33887){
return (new cljs.core.async.t_cljs$core$async33886(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33887));
});

}

return (new cljs.core.async.t_cljs$core$async33886(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32778__auto___35197 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32779__auto__ = (function (){var switch__32640__auto__ = (function (state_33960){
var state_val_33961 = (state_33960[(1)]);
if((state_val_33961 === (7))){
var inst_33956 = (state_33960[(2)]);
var state_33960__$1 = state_33960;
var statearr_33962_35198 = state_33960__$1;
(statearr_33962_35198[(2)] = inst_33956);

(statearr_33962_35198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (20))){
var state_33960__$1 = state_33960;
var statearr_33963_35199 = state_33960__$1;
(statearr_33963_35199[(2)] = null);

(statearr_33963_35199[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (1))){
var state_33960__$1 = state_33960;
var statearr_33964_35200 = state_33960__$1;
(statearr_33964_35200[(2)] = null);

(statearr_33964_35200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (24))){
var inst_33939 = (state_33960[(7)]);
var inst_33948 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33939);
var state_33960__$1 = state_33960;
var statearr_33965_35201 = state_33960__$1;
(statearr_33965_35201[(2)] = inst_33948);

(statearr_33965_35201[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (4))){
var inst_33891 = (state_33960[(8)]);
var inst_33891__$1 = (state_33960[(2)]);
var inst_33892 = (inst_33891__$1 == null);
var state_33960__$1 = (function (){var statearr_33966 = state_33960;
(statearr_33966[(8)] = inst_33891__$1);

return statearr_33966;
})();
if(cljs.core.truth_(inst_33892)){
var statearr_33967_35205 = state_33960__$1;
(statearr_33967_35205[(1)] = (5));

} else {
var statearr_33968_35206 = state_33960__$1;
(statearr_33968_35206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (15))){
var inst_33933 = (state_33960[(2)]);
var state_33960__$1 = state_33960;
var statearr_33969_35207 = state_33960__$1;
(statearr_33969_35207[(2)] = inst_33933);

(statearr_33969_35207[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (21))){
var inst_33953 = (state_33960[(2)]);
var state_33960__$1 = (function (){var statearr_33970 = state_33960;
(statearr_33970[(9)] = inst_33953);

return statearr_33970;
})();
var statearr_33971_35208 = state_33960__$1;
(statearr_33971_35208[(2)] = null);

(statearr_33971_35208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (13))){
var inst_33915 = (state_33960[(10)]);
var inst_33917 = cljs.core.chunked_seq_QMARK_(inst_33915);
var state_33960__$1 = state_33960;
if(inst_33917){
var statearr_33972_35210 = state_33960__$1;
(statearr_33972_35210[(1)] = (16));

} else {
var statearr_33973_35211 = state_33960__$1;
(statearr_33973_35211[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (22))){
var inst_33945 = (state_33960[(2)]);
var state_33960__$1 = state_33960;
if(cljs.core.truth_(inst_33945)){
var statearr_33974_35212 = state_33960__$1;
(statearr_33974_35212[(1)] = (23));

} else {
var statearr_33975_35213 = state_33960__$1;
(statearr_33975_35213[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (6))){
var inst_33941 = (state_33960[(11)]);
var inst_33891 = (state_33960[(8)]);
var inst_33939 = (state_33960[(7)]);
var inst_33939__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33891) : topic_fn.call(null,inst_33891));
var inst_33940 = cljs.core.deref(mults);
var inst_33941__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33940,inst_33939__$1);
var state_33960__$1 = (function (){var statearr_33976 = state_33960;
(statearr_33976[(11)] = inst_33941__$1);

(statearr_33976[(7)] = inst_33939__$1);

return statearr_33976;
})();
if(cljs.core.truth_(inst_33941__$1)){
var statearr_33977_35214 = state_33960__$1;
(statearr_33977_35214[(1)] = (19));

} else {
var statearr_33978_35216 = state_33960__$1;
(statearr_33978_35216[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (25))){
var inst_33950 = (state_33960[(2)]);
var state_33960__$1 = state_33960;
var statearr_33979_35218 = state_33960__$1;
(statearr_33979_35218[(2)] = inst_33950);

(statearr_33979_35218[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (17))){
var inst_33915 = (state_33960[(10)]);
var inst_33924 = cljs.core.first(inst_33915);
var inst_33925 = cljs.core.async.muxch_STAR_(inst_33924);
var inst_33926 = cljs.core.async.close_BANG_(inst_33925);
var inst_33927 = cljs.core.next(inst_33915);
var inst_33901 = inst_33927;
var inst_33902 = null;
var inst_33903 = (0);
var inst_33904 = (0);
var state_33960__$1 = (function (){var statearr_33980 = state_33960;
(statearr_33980[(12)] = inst_33901);

(statearr_33980[(13)] = inst_33904);

(statearr_33980[(14)] = inst_33902);

(statearr_33980[(15)] = inst_33926);

(statearr_33980[(16)] = inst_33903);

return statearr_33980;
})();
var statearr_33981_35221 = state_33960__$1;
(statearr_33981_35221[(2)] = null);

(statearr_33981_35221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (3))){
var inst_33958 = (state_33960[(2)]);
var state_33960__$1 = state_33960;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33960__$1,inst_33958);
} else {
if((state_val_33961 === (12))){
var inst_33935 = (state_33960[(2)]);
var state_33960__$1 = state_33960;
var statearr_33982_35227 = state_33960__$1;
(statearr_33982_35227[(2)] = inst_33935);

(statearr_33982_35227[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (2))){
var state_33960__$1 = state_33960;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33960__$1,(4),ch);
} else {
if((state_val_33961 === (23))){
var state_33960__$1 = state_33960;
var statearr_33983_35230 = state_33960__$1;
(statearr_33983_35230[(2)] = null);

(statearr_33983_35230[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (19))){
var inst_33941 = (state_33960[(11)]);
var inst_33891 = (state_33960[(8)]);
var inst_33943 = cljs.core.async.muxch_STAR_(inst_33941);
var state_33960__$1 = state_33960;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33960__$1,(22),inst_33943,inst_33891);
} else {
if((state_val_33961 === (11))){
var inst_33901 = (state_33960[(12)]);
var inst_33915 = (state_33960[(10)]);
var inst_33915__$1 = cljs.core.seq(inst_33901);
var state_33960__$1 = (function (){var statearr_33984 = state_33960;
(statearr_33984[(10)] = inst_33915__$1);

return statearr_33984;
})();
if(inst_33915__$1){
var statearr_33985_35231 = state_33960__$1;
(statearr_33985_35231[(1)] = (13));

} else {
var statearr_33986_35232 = state_33960__$1;
(statearr_33986_35232[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (9))){
var inst_33937 = (state_33960[(2)]);
var state_33960__$1 = state_33960;
var statearr_33987_35234 = state_33960__$1;
(statearr_33987_35234[(2)] = inst_33937);

(statearr_33987_35234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (5))){
var inst_33898 = cljs.core.deref(mults);
var inst_33899 = cljs.core.vals(inst_33898);
var inst_33900 = cljs.core.seq(inst_33899);
var inst_33901 = inst_33900;
var inst_33902 = null;
var inst_33903 = (0);
var inst_33904 = (0);
var state_33960__$1 = (function (){var statearr_33988 = state_33960;
(statearr_33988[(12)] = inst_33901);

(statearr_33988[(13)] = inst_33904);

(statearr_33988[(14)] = inst_33902);

(statearr_33988[(16)] = inst_33903);

return statearr_33988;
})();
var statearr_33989_35235 = state_33960__$1;
(statearr_33989_35235[(2)] = null);

(statearr_33989_35235[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (14))){
var state_33960__$1 = state_33960;
var statearr_33993_35241 = state_33960__$1;
(statearr_33993_35241[(2)] = null);

(statearr_33993_35241[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (16))){
var inst_33915 = (state_33960[(10)]);
var inst_33919 = cljs.core.chunk_first(inst_33915);
var inst_33920 = cljs.core.chunk_rest(inst_33915);
var inst_33921 = cljs.core.count(inst_33919);
var inst_33901 = inst_33920;
var inst_33902 = inst_33919;
var inst_33903 = inst_33921;
var inst_33904 = (0);
var state_33960__$1 = (function (){var statearr_33994 = state_33960;
(statearr_33994[(12)] = inst_33901);

(statearr_33994[(13)] = inst_33904);

(statearr_33994[(14)] = inst_33902);

(statearr_33994[(16)] = inst_33903);

return statearr_33994;
})();
var statearr_33995_35243 = state_33960__$1;
(statearr_33995_35243[(2)] = null);

(statearr_33995_35243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (10))){
var inst_33901 = (state_33960[(12)]);
var inst_33904 = (state_33960[(13)]);
var inst_33902 = (state_33960[(14)]);
var inst_33903 = (state_33960[(16)]);
var inst_33909 = cljs.core._nth(inst_33902,inst_33904);
var inst_33910 = cljs.core.async.muxch_STAR_(inst_33909);
var inst_33911 = cljs.core.async.close_BANG_(inst_33910);
var inst_33912 = (inst_33904 + (1));
var tmp33990 = inst_33901;
var tmp33991 = inst_33902;
var tmp33992 = inst_33903;
var inst_33901__$1 = tmp33990;
var inst_33902__$1 = tmp33991;
var inst_33903__$1 = tmp33992;
var inst_33904__$1 = inst_33912;
var state_33960__$1 = (function (){var statearr_33996 = state_33960;
(statearr_33996[(12)] = inst_33901__$1);

(statearr_33996[(13)] = inst_33904__$1);

(statearr_33996[(14)] = inst_33902__$1);

(statearr_33996[(17)] = inst_33911);

(statearr_33996[(16)] = inst_33903__$1);

return statearr_33996;
})();
var statearr_33997_35244 = state_33960__$1;
(statearr_33997_35244[(2)] = null);

(statearr_33997_35244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (18))){
var inst_33930 = (state_33960[(2)]);
var state_33960__$1 = state_33960;
var statearr_33998_35245 = state_33960__$1;
(statearr_33998_35245[(2)] = inst_33930);

(statearr_33998_35245[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33961 === (8))){
var inst_33904 = (state_33960[(13)]);
var inst_33903 = (state_33960[(16)]);
var inst_33906 = (inst_33904 < inst_33903);
var inst_33907 = inst_33906;
var state_33960__$1 = state_33960;
if(cljs.core.truth_(inst_33907)){
var statearr_33999_35246 = state_33960__$1;
(statearr_33999_35246[(1)] = (10));

} else {
var statearr_34000_35247 = state_33960__$1;
(statearr_34000_35247[(1)] = (11));

}

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
var cljs$core$async$state_machine__32641__auto__ = null;
var cljs$core$async$state_machine__32641__auto____0 = (function (){
var statearr_34001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34001[(0)] = cljs$core$async$state_machine__32641__auto__);

(statearr_34001[(1)] = (1));

return statearr_34001;
});
var cljs$core$async$state_machine__32641__auto____1 = (function (state_33960){
while(true){
var ret_value__32642__auto__ = (function (){try{while(true){
var result__32643__auto__ = switch__32640__auto__(state_33960);
if(cljs.core.keyword_identical_QMARK_(result__32643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32643__auto__;
}
break;
}
}catch (e34002){var ex__32644__auto__ = e34002;
var statearr_34003_35248 = state_33960;
(statearr_34003_35248[(2)] = ex__32644__auto__);


if(cljs.core.seq((state_33960[(4)]))){
var statearr_34004_35249 = state_33960;
(statearr_34004_35249[(1)] = cljs.core.first((state_33960[(4)])));

} else {
throw ex__32644__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35250 = state_33960;
state_33960 = G__35250;
continue;
} else {
return ret_value__32642__auto__;
}
break;
}
});
cljs$core$async$state_machine__32641__auto__ = function(state_33960){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32641__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32641__auto____1.call(this,state_33960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32641__auto____0;
cljs$core$async$state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32641__auto____1;
return cljs$core$async$state_machine__32641__auto__;
})()
})();
var state__32780__auto__ = (function (){var statearr_34005 = f__32779__auto__();
(statearr_34005[(6)] = c__32778__auto___35197);

return statearr_34005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32780__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34007 = arguments.length;
switch (G__34007) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34009 = arguments.length;
switch (G__34009) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34011 = arguments.length;
switch (G__34011) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__32778__auto___35257 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32779__auto__ = (function (){var switch__32640__auto__ = (function (state_34054){
var state_val_34055 = (state_34054[(1)]);
if((state_val_34055 === (7))){
var state_34054__$1 = state_34054;
var statearr_34056_35258 = state_34054__$1;
(statearr_34056_35258[(2)] = null);

(statearr_34056_35258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (1))){
var state_34054__$1 = state_34054;
var statearr_34057_35259 = state_34054__$1;
(statearr_34057_35259[(2)] = null);

(statearr_34057_35259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (4))){
var inst_34015 = (state_34054[(7)]);
var inst_34014 = (state_34054[(8)]);
var inst_34017 = (inst_34015 < inst_34014);
var state_34054__$1 = state_34054;
if(cljs.core.truth_(inst_34017)){
var statearr_34058_35260 = state_34054__$1;
(statearr_34058_35260[(1)] = (6));

} else {
var statearr_34059_35261 = state_34054__$1;
(statearr_34059_35261[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (15))){
var inst_34040 = (state_34054[(9)]);
var inst_34045 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34040);
var state_34054__$1 = state_34054;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34054__$1,(17),out,inst_34045);
} else {
if((state_val_34055 === (13))){
var inst_34040 = (state_34054[(9)]);
var inst_34040__$1 = (state_34054[(2)]);
var inst_34041 = cljs.core.some(cljs.core.nil_QMARK_,inst_34040__$1);
var state_34054__$1 = (function (){var statearr_34060 = state_34054;
(statearr_34060[(9)] = inst_34040__$1);

return statearr_34060;
})();
if(cljs.core.truth_(inst_34041)){
var statearr_34061_35263 = state_34054__$1;
(statearr_34061_35263[(1)] = (14));

} else {
var statearr_34062_35264 = state_34054__$1;
(statearr_34062_35264[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (6))){
var state_34054__$1 = state_34054;
var statearr_34063_35265 = state_34054__$1;
(statearr_34063_35265[(2)] = null);

(statearr_34063_35265[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (17))){
var inst_34047 = (state_34054[(2)]);
var state_34054__$1 = (function (){var statearr_34065 = state_34054;
(statearr_34065[(10)] = inst_34047);

return statearr_34065;
})();
var statearr_34066_35266 = state_34054__$1;
(statearr_34066_35266[(2)] = null);

(statearr_34066_35266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (3))){
var inst_34052 = (state_34054[(2)]);
var state_34054__$1 = state_34054;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34054__$1,inst_34052);
} else {
if((state_val_34055 === (12))){
var _ = (function (){var statearr_34067 = state_34054;
(statearr_34067[(4)] = cljs.core.rest((state_34054[(4)])));

return statearr_34067;
})();
var state_34054__$1 = state_34054;
var ex34064 = (state_34054__$1[(2)]);
var statearr_34068_35267 = state_34054__$1;
(statearr_34068_35267[(5)] = ex34064);


if((ex34064 instanceof Object)){
var statearr_34069_35268 = state_34054__$1;
(statearr_34069_35268[(1)] = (11));

(statearr_34069_35268[(5)] = null);

} else {
throw ex34064;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (2))){
var inst_34013 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34014 = cnt;
var inst_34015 = (0);
var state_34054__$1 = (function (){var statearr_34070 = state_34054;
(statearr_34070[(7)] = inst_34015);

(statearr_34070[(8)] = inst_34014);

(statearr_34070[(11)] = inst_34013);

return statearr_34070;
})();
var statearr_34071_35269 = state_34054__$1;
(statearr_34071_35269[(2)] = null);

(statearr_34071_35269[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (11))){
var inst_34019 = (state_34054[(2)]);
var inst_34020 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34054__$1 = (function (){var statearr_34072 = state_34054;
(statearr_34072[(12)] = inst_34019);

return statearr_34072;
})();
var statearr_34073_35270 = state_34054__$1;
(statearr_34073_35270[(2)] = inst_34020);

(statearr_34073_35270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (9))){
var inst_34015 = (state_34054[(7)]);
var _ = (function (){var statearr_34074 = state_34054;
(statearr_34074[(4)] = cljs.core.cons((12),(state_34054[(4)])));

return statearr_34074;
})();
var inst_34026 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34015) : chs__$1.call(null,inst_34015));
var inst_34027 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34015) : done.call(null,inst_34015));
var inst_34028 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34026,inst_34027);
var ___$1 = (function (){var statearr_34075 = state_34054;
(statearr_34075[(4)] = cljs.core.rest((state_34054[(4)])));

return statearr_34075;
})();
var state_34054__$1 = state_34054;
var statearr_34076_35271 = state_34054__$1;
(statearr_34076_35271[(2)] = inst_34028);

(statearr_34076_35271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (5))){
var inst_34038 = (state_34054[(2)]);
var state_34054__$1 = (function (){var statearr_34077 = state_34054;
(statearr_34077[(13)] = inst_34038);

return statearr_34077;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34054__$1,(13),dchan);
} else {
if((state_val_34055 === (14))){
var inst_34043 = cljs.core.async.close_BANG_(out);
var state_34054__$1 = state_34054;
var statearr_34078_35272 = state_34054__$1;
(statearr_34078_35272[(2)] = inst_34043);

(statearr_34078_35272[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (16))){
var inst_34050 = (state_34054[(2)]);
var state_34054__$1 = state_34054;
var statearr_34079_35273 = state_34054__$1;
(statearr_34079_35273[(2)] = inst_34050);

(statearr_34079_35273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (10))){
var inst_34015 = (state_34054[(7)]);
var inst_34031 = (state_34054[(2)]);
var inst_34032 = (inst_34015 + (1));
var inst_34015__$1 = inst_34032;
var state_34054__$1 = (function (){var statearr_34080 = state_34054;
(statearr_34080[(7)] = inst_34015__$1);

(statearr_34080[(14)] = inst_34031);

return statearr_34080;
})();
var statearr_34081_35278 = state_34054__$1;
(statearr_34081_35278[(2)] = null);

(statearr_34081_35278[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (8))){
var inst_34036 = (state_34054[(2)]);
var state_34054__$1 = state_34054;
var statearr_34082_35279 = state_34054__$1;
(statearr_34082_35279[(2)] = inst_34036);

(statearr_34082_35279[(1)] = (5));


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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32641__auto__ = null;
var cljs$core$async$state_machine__32641__auto____0 = (function (){
var statearr_34083 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34083[(0)] = cljs$core$async$state_machine__32641__auto__);

(statearr_34083[(1)] = (1));

return statearr_34083;
});
var cljs$core$async$state_machine__32641__auto____1 = (function (state_34054){
while(true){
var ret_value__32642__auto__ = (function (){try{while(true){
var result__32643__auto__ = switch__32640__auto__(state_34054);
if(cljs.core.keyword_identical_QMARK_(result__32643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32643__auto__;
}
break;
}
}catch (e34084){var ex__32644__auto__ = e34084;
var statearr_34085_35284 = state_34054;
(statearr_34085_35284[(2)] = ex__32644__auto__);


if(cljs.core.seq((state_34054[(4)]))){
var statearr_34086_35285 = state_34054;
(statearr_34086_35285[(1)] = cljs.core.first((state_34054[(4)])));

} else {
throw ex__32644__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35286 = state_34054;
state_34054 = G__35286;
continue;
} else {
return ret_value__32642__auto__;
}
break;
}
});
cljs$core$async$state_machine__32641__auto__ = function(state_34054){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32641__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32641__auto____1.call(this,state_34054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32641__auto____0;
cljs$core$async$state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32641__auto____1;
return cljs$core$async$state_machine__32641__auto__;
})()
})();
var state__32780__auto__ = (function (){var statearr_34087 = f__32779__auto__();
(statearr_34087[(6)] = c__32778__auto___35257);

return statearr_34087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32780__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34090 = arguments.length;
switch (G__34090) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32778__auto___35290 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32779__auto__ = (function (){var switch__32640__auto__ = (function (state_34122){
var state_val_34123 = (state_34122[(1)]);
if((state_val_34123 === (7))){
var inst_34101 = (state_34122[(7)]);
var inst_34102 = (state_34122[(8)]);
var inst_34101__$1 = (state_34122[(2)]);
var inst_34102__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34101__$1,(0),null);
var inst_34103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34101__$1,(1),null);
var inst_34104 = (inst_34102__$1 == null);
var state_34122__$1 = (function (){var statearr_34124 = state_34122;
(statearr_34124[(7)] = inst_34101__$1);

(statearr_34124[(9)] = inst_34103);

(statearr_34124[(8)] = inst_34102__$1);

return statearr_34124;
})();
if(cljs.core.truth_(inst_34104)){
var statearr_34125_35291 = state_34122__$1;
(statearr_34125_35291[(1)] = (8));

} else {
var statearr_34126_35292 = state_34122__$1;
(statearr_34126_35292[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (1))){
var inst_34091 = cljs.core.vec(chs);
var inst_34092 = inst_34091;
var state_34122__$1 = (function (){var statearr_34127 = state_34122;
(statearr_34127[(10)] = inst_34092);

return statearr_34127;
})();
var statearr_34128_35293 = state_34122__$1;
(statearr_34128_35293[(2)] = null);

(statearr_34128_35293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (4))){
var inst_34092 = (state_34122[(10)]);
var state_34122__$1 = state_34122;
return cljs.core.async.ioc_alts_BANG_(state_34122__$1,(7),inst_34092);
} else {
if((state_val_34123 === (6))){
var inst_34118 = (state_34122[(2)]);
var state_34122__$1 = state_34122;
var statearr_34129_35294 = state_34122__$1;
(statearr_34129_35294[(2)] = inst_34118);

(statearr_34129_35294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (3))){
var inst_34120 = (state_34122[(2)]);
var state_34122__$1 = state_34122;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34122__$1,inst_34120);
} else {
if((state_val_34123 === (2))){
var inst_34092 = (state_34122[(10)]);
var inst_34094 = cljs.core.count(inst_34092);
var inst_34095 = (inst_34094 > (0));
var state_34122__$1 = state_34122;
if(cljs.core.truth_(inst_34095)){
var statearr_34131_35295 = state_34122__$1;
(statearr_34131_35295[(1)] = (4));

} else {
var statearr_34132_35296 = state_34122__$1;
(statearr_34132_35296[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (11))){
var inst_34092 = (state_34122[(10)]);
var inst_34111 = (state_34122[(2)]);
var tmp34130 = inst_34092;
var inst_34092__$1 = tmp34130;
var state_34122__$1 = (function (){var statearr_34133 = state_34122;
(statearr_34133[(11)] = inst_34111);

(statearr_34133[(10)] = inst_34092__$1);

return statearr_34133;
})();
var statearr_34134_35297 = state_34122__$1;
(statearr_34134_35297[(2)] = null);

(statearr_34134_35297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (9))){
var inst_34102 = (state_34122[(8)]);
var state_34122__$1 = state_34122;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34122__$1,(11),out,inst_34102);
} else {
if((state_val_34123 === (5))){
var inst_34116 = cljs.core.async.close_BANG_(out);
var state_34122__$1 = state_34122;
var statearr_34135_35298 = state_34122__$1;
(statearr_34135_35298[(2)] = inst_34116);

(statearr_34135_35298[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (10))){
var inst_34114 = (state_34122[(2)]);
var state_34122__$1 = state_34122;
var statearr_34136_35299 = state_34122__$1;
(statearr_34136_35299[(2)] = inst_34114);

(statearr_34136_35299[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34123 === (8))){
var inst_34101 = (state_34122[(7)]);
var inst_34092 = (state_34122[(10)]);
var inst_34103 = (state_34122[(9)]);
var inst_34102 = (state_34122[(8)]);
var inst_34106 = (function (){var cs = inst_34092;
var vec__34097 = inst_34101;
var v = inst_34102;
var c = inst_34103;
return (function (p1__34088_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34088_SHARP_);
});
})();
var inst_34107 = cljs.core.filterv(inst_34106,inst_34092);
var inst_34092__$1 = inst_34107;
var state_34122__$1 = (function (){var statearr_34137 = state_34122;
(statearr_34137[(10)] = inst_34092__$1);

return statearr_34137;
})();
var statearr_34138_35300 = state_34122__$1;
(statearr_34138_35300[(2)] = null);

(statearr_34138_35300[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__32641__auto__ = null;
var cljs$core$async$state_machine__32641__auto____0 = (function (){
var statearr_34139 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34139[(0)] = cljs$core$async$state_machine__32641__auto__);

(statearr_34139[(1)] = (1));

return statearr_34139;
});
var cljs$core$async$state_machine__32641__auto____1 = (function (state_34122){
while(true){
var ret_value__32642__auto__ = (function (){try{while(true){
var result__32643__auto__ = switch__32640__auto__(state_34122);
if(cljs.core.keyword_identical_QMARK_(result__32643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32643__auto__;
}
break;
}
}catch (e34140){var ex__32644__auto__ = e34140;
var statearr_34141_35301 = state_34122;
(statearr_34141_35301[(2)] = ex__32644__auto__);


if(cljs.core.seq((state_34122[(4)]))){
var statearr_34142_35302 = state_34122;
(statearr_34142_35302[(1)] = cljs.core.first((state_34122[(4)])));

} else {
throw ex__32644__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35303 = state_34122;
state_34122 = G__35303;
continue;
} else {
return ret_value__32642__auto__;
}
break;
}
});
cljs$core$async$state_machine__32641__auto__ = function(state_34122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32641__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32641__auto____1.call(this,state_34122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32641__auto____0;
cljs$core$async$state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32641__auto____1;
return cljs$core$async$state_machine__32641__auto__;
})()
})();
var state__32780__auto__ = (function (){var statearr_34143 = f__32779__auto__();
(statearr_34143[(6)] = c__32778__auto___35290);

return statearr_34143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32780__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34145 = arguments.length;
switch (G__34145) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32778__auto___35305 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32779__auto__ = (function (){var switch__32640__auto__ = (function (state_34169){
var state_val_34170 = (state_34169[(1)]);
if((state_val_34170 === (7))){
var inst_34151 = (state_34169[(7)]);
var inst_34151__$1 = (state_34169[(2)]);
var inst_34152 = (inst_34151__$1 == null);
var inst_34153 = cljs.core.not(inst_34152);
var state_34169__$1 = (function (){var statearr_34171 = state_34169;
(statearr_34171[(7)] = inst_34151__$1);

return statearr_34171;
})();
if(inst_34153){
var statearr_34172_35306 = state_34169__$1;
(statearr_34172_35306[(1)] = (8));

} else {
var statearr_34173_35307 = state_34169__$1;
(statearr_34173_35307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34170 === (1))){
var inst_34146 = (0);
var state_34169__$1 = (function (){var statearr_34174 = state_34169;
(statearr_34174[(8)] = inst_34146);

return statearr_34174;
})();
var statearr_34175_35311 = state_34169__$1;
(statearr_34175_35311[(2)] = null);

(statearr_34175_35311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34170 === (4))){
var state_34169__$1 = state_34169;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34169__$1,(7),ch);
} else {
if((state_val_34170 === (6))){
var inst_34164 = (state_34169[(2)]);
var state_34169__$1 = state_34169;
var statearr_34176_35312 = state_34169__$1;
(statearr_34176_35312[(2)] = inst_34164);

(statearr_34176_35312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34170 === (3))){
var inst_34166 = (state_34169[(2)]);
var inst_34167 = cljs.core.async.close_BANG_(out);
var state_34169__$1 = (function (){var statearr_34177 = state_34169;
(statearr_34177[(9)] = inst_34166);

return statearr_34177;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34169__$1,inst_34167);
} else {
if((state_val_34170 === (2))){
var inst_34146 = (state_34169[(8)]);
var inst_34148 = (inst_34146 < n);
var state_34169__$1 = state_34169;
if(cljs.core.truth_(inst_34148)){
var statearr_34178_35320 = state_34169__$1;
(statearr_34178_35320[(1)] = (4));

} else {
var statearr_34179_35321 = state_34169__$1;
(statearr_34179_35321[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34170 === (11))){
var inst_34146 = (state_34169[(8)]);
var inst_34156 = (state_34169[(2)]);
var inst_34157 = (inst_34146 + (1));
var inst_34146__$1 = inst_34157;
var state_34169__$1 = (function (){var statearr_34180 = state_34169;
(statearr_34180[(10)] = inst_34156);

(statearr_34180[(8)] = inst_34146__$1);

return statearr_34180;
})();
var statearr_34181_35324 = state_34169__$1;
(statearr_34181_35324[(2)] = null);

(statearr_34181_35324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34170 === (9))){
var state_34169__$1 = state_34169;
var statearr_34182_35325 = state_34169__$1;
(statearr_34182_35325[(2)] = null);

(statearr_34182_35325[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34170 === (5))){
var state_34169__$1 = state_34169;
var statearr_34183_35329 = state_34169__$1;
(statearr_34183_35329[(2)] = null);

(statearr_34183_35329[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34170 === (10))){
var inst_34161 = (state_34169[(2)]);
var state_34169__$1 = state_34169;
var statearr_34184_35330 = state_34169__$1;
(statearr_34184_35330[(2)] = inst_34161);

(statearr_34184_35330[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34170 === (8))){
var inst_34151 = (state_34169[(7)]);
var state_34169__$1 = state_34169;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34169__$1,(11),out,inst_34151);
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
});
return (function() {
var cljs$core$async$state_machine__32641__auto__ = null;
var cljs$core$async$state_machine__32641__auto____0 = (function (){
var statearr_34185 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34185[(0)] = cljs$core$async$state_machine__32641__auto__);

(statearr_34185[(1)] = (1));

return statearr_34185;
});
var cljs$core$async$state_machine__32641__auto____1 = (function (state_34169){
while(true){
var ret_value__32642__auto__ = (function (){try{while(true){
var result__32643__auto__ = switch__32640__auto__(state_34169);
if(cljs.core.keyword_identical_QMARK_(result__32643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32643__auto__;
}
break;
}
}catch (e34186){var ex__32644__auto__ = e34186;
var statearr_34187_35334 = state_34169;
(statearr_34187_35334[(2)] = ex__32644__auto__);


if(cljs.core.seq((state_34169[(4)]))){
var statearr_34188_35335 = state_34169;
(statearr_34188_35335[(1)] = cljs.core.first((state_34169[(4)])));

} else {
throw ex__32644__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35336 = state_34169;
state_34169 = G__35336;
continue;
} else {
return ret_value__32642__auto__;
}
break;
}
});
cljs$core$async$state_machine__32641__auto__ = function(state_34169){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32641__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32641__auto____1.call(this,state_34169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32641__auto____0;
cljs$core$async$state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32641__auto____1;
return cljs$core$async$state_machine__32641__auto__;
})()
})();
var state__32780__auto__ = (function (){var statearr_34189 = f__32779__auto__();
(statearr_34189[(6)] = c__32778__auto___35305);

return statearr_34189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32780__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34191 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34191 = (function (f,ch,meta34192){
this.f = f;
this.ch = ch;
this.meta34192 = meta34192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34193,meta34192__$1){
var self__ = this;
var _34193__$1 = this;
return (new cljs.core.async.t_cljs$core$async34191(self__.f,self__.ch,meta34192__$1));
}));

(cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34193){
var self__ = this;
var _34193__$1 = this;
return self__.meta34192;
}));

(cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34194 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34194 = (function (f,ch,meta34192,_,fn1,meta34195){
this.f = f;
this.ch = ch;
this.meta34192 = meta34192;
this._ = _;
this.fn1 = fn1;
this.meta34195 = meta34195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34196,meta34195__$1){
var self__ = this;
var _34196__$1 = this;
return (new cljs.core.async.t_cljs$core$async34194(self__.f,self__.ch,self__.meta34192,self__._,self__.fn1,meta34195__$1));
}));

(cljs.core.async.t_cljs$core$async34194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34196){
var self__ = this;
var _34196__$1 = this;
return self__.meta34195;
}));

(cljs.core.async.t_cljs$core$async34194.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34194.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34194.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34194.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34190_SHARP_){
var G__34197 = (((p1__34190_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34190_SHARP_) : self__.f.call(null,p1__34190_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34197) : f1.call(null,G__34197));
});
}));

(cljs.core.async.t_cljs$core$async34194.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34192","meta34192",1433121946,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34191","cljs.core.async/t_cljs$core$async34191",1235485391,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34195","meta34195",1859924080,null)], null);
}));

(cljs.core.async.t_cljs$core$async34194.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34194.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34194");

(cljs.core.async.t_cljs$core$async34194.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34194");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34194.
 */
cljs.core.async.__GT_t_cljs$core$async34194 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34194(f__$1,ch__$1,meta34192__$1,___$2,fn1__$1,meta34195){
return (new cljs.core.async.t_cljs$core$async34194(f__$1,ch__$1,meta34192__$1,___$2,fn1__$1,meta34195));
});

}

return (new cljs.core.async.t_cljs$core$async34194(self__.f,self__.ch,self__.meta34192,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34198 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34198) : self__.f.call(null,G__34198));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34191.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34191.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34192","meta34192",1433121946,null)], null);
}));

(cljs.core.async.t_cljs$core$async34191.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34191");

(cljs.core.async.t_cljs$core$async34191.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34191");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34191.
 */
cljs.core.async.__GT_t_cljs$core$async34191 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34191(f__$1,ch__$1,meta34192){
return (new cljs.core.async.t_cljs$core$async34191(f__$1,ch__$1,meta34192));
});

}

return (new cljs.core.async.t_cljs$core$async34191(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34199 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34199 = (function (f,ch,meta34200){
this.f = f;
this.ch = ch;
this.meta34200 = meta34200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34201,meta34200__$1){
var self__ = this;
var _34201__$1 = this;
return (new cljs.core.async.t_cljs$core$async34199(self__.f,self__.ch,meta34200__$1));
}));

(cljs.core.async.t_cljs$core$async34199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34201){
var self__ = this;
var _34201__$1 = this;
return self__.meta34200;
}));

(cljs.core.async.t_cljs$core$async34199.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34199.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34199.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34199.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34199.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34199.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34199.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34200","meta34200",-1220706268,null)], null);
}));

(cljs.core.async.t_cljs$core$async34199.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34199");

(cljs.core.async.t_cljs$core$async34199.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34199");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34199.
 */
cljs.core.async.__GT_t_cljs$core$async34199 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34199(f__$1,ch__$1,meta34200){
return (new cljs.core.async.t_cljs$core$async34199(f__$1,ch__$1,meta34200));
});

}

return (new cljs.core.async.t_cljs$core$async34199(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34202 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34202 = (function (p,ch,meta34203){
this.p = p;
this.ch = ch;
this.meta34203 = meta34203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34204,meta34203__$1){
var self__ = this;
var _34204__$1 = this;
return (new cljs.core.async.t_cljs$core$async34202(self__.p,self__.ch,meta34203__$1));
}));

(cljs.core.async.t_cljs$core$async34202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34204){
var self__ = this;
var _34204__$1 = this;
return self__.meta34203;
}));

(cljs.core.async.t_cljs$core$async34202.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34202.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34202.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34202.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34202.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34202.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34202.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34203","meta34203",-617028325,null)], null);
}));

(cljs.core.async.t_cljs$core$async34202.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34202");

(cljs.core.async.t_cljs$core$async34202.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34202");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34202.
 */
cljs.core.async.__GT_t_cljs$core$async34202 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34202(p__$1,ch__$1,meta34203){
return (new cljs.core.async.t_cljs$core$async34202(p__$1,ch__$1,meta34203));
});

}

return (new cljs.core.async.t_cljs$core$async34202(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34206 = arguments.length;
switch (G__34206) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32778__auto___35370 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32779__auto__ = (function (){var switch__32640__auto__ = (function (state_34227){
var state_val_34228 = (state_34227[(1)]);
if((state_val_34228 === (7))){
var inst_34223 = (state_34227[(2)]);
var state_34227__$1 = state_34227;
var statearr_34229_35371 = state_34227__$1;
(statearr_34229_35371[(2)] = inst_34223);

(statearr_34229_35371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34228 === (1))){
var state_34227__$1 = state_34227;
var statearr_34230_35372 = state_34227__$1;
(statearr_34230_35372[(2)] = null);

(statearr_34230_35372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34228 === (4))){
var inst_34209 = (state_34227[(7)]);
var inst_34209__$1 = (state_34227[(2)]);
var inst_34210 = (inst_34209__$1 == null);
var state_34227__$1 = (function (){var statearr_34231 = state_34227;
(statearr_34231[(7)] = inst_34209__$1);

return statearr_34231;
})();
if(cljs.core.truth_(inst_34210)){
var statearr_34232_35373 = state_34227__$1;
(statearr_34232_35373[(1)] = (5));

} else {
var statearr_34233_35374 = state_34227__$1;
(statearr_34233_35374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34228 === (6))){
var inst_34209 = (state_34227[(7)]);
var inst_34214 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34209) : p.call(null,inst_34209));
var state_34227__$1 = state_34227;
if(cljs.core.truth_(inst_34214)){
var statearr_34234_35375 = state_34227__$1;
(statearr_34234_35375[(1)] = (8));

} else {
var statearr_34235_35376 = state_34227__$1;
(statearr_34235_35376[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34228 === (3))){
var inst_34225 = (state_34227[(2)]);
var state_34227__$1 = state_34227;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34227__$1,inst_34225);
} else {
if((state_val_34228 === (2))){
var state_34227__$1 = state_34227;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34227__$1,(4),ch);
} else {
if((state_val_34228 === (11))){
var inst_34217 = (state_34227[(2)]);
var state_34227__$1 = state_34227;
var statearr_34236_35377 = state_34227__$1;
(statearr_34236_35377[(2)] = inst_34217);

(statearr_34236_35377[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34228 === (9))){
var state_34227__$1 = state_34227;
var statearr_34237_35378 = state_34227__$1;
(statearr_34237_35378[(2)] = null);

(statearr_34237_35378[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34228 === (5))){
var inst_34212 = cljs.core.async.close_BANG_(out);
var state_34227__$1 = state_34227;
var statearr_34238_35385 = state_34227__$1;
(statearr_34238_35385[(2)] = inst_34212);

(statearr_34238_35385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34228 === (10))){
var inst_34220 = (state_34227[(2)]);
var state_34227__$1 = (function (){var statearr_34239 = state_34227;
(statearr_34239[(8)] = inst_34220);

return statearr_34239;
})();
var statearr_34240_35386 = state_34227__$1;
(statearr_34240_35386[(2)] = null);

(statearr_34240_35386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34228 === (8))){
var inst_34209 = (state_34227[(7)]);
var state_34227__$1 = state_34227;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34227__$1,(11),out,inst_34209);
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
});
return (function() {
var cljs$core$async$state_machine__32641__auto__ = null;
var cljs$core$async$state_machine__32641__auto____0 = (function (){
var statearr_34241 = [null,null,null,null,null,null,null,null,null];
(statearr_34241[(0)] = cljs$core$async$state_machine__32641__auto__);

(statearr_34241[(1)] = (1));

return statearr_34241;
});
var cljs$core$async$state_machine__32641__auto____1 = (function (state_34227){
while(true){
var ret_value__32642__auto__ = (function (){try{while(true){
var result__32643__auto__ = switch__32640__auto__(state_34227);
if(cljs.core.keyword_identical_QMARK_(result__32643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32643__auto__;
}
break;
}
}catch (e34242){var ex__32644__auto__ = e34242;
var statearr_34243_35387 = state_34227;
(statearr_34243_35387[(2)] = ex__32644__auto__);


if(cljs.core.seq((state_34227[(4)]))){
var statearr_34244_35388 = state_34227;
(statearr_34244_35388[(1)] = cljs.core.first((state_34227[(4)])));

} else {
throw ex__32644__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35389 = state_34227;
state_34227 = G__35389;
continue;
} else {
return ret_value__32642__auto__;
}
break;
}
});
cljs$core$async$state_machine__32641__auto__ = function(state_34227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32641__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32641__auto____1.call(this,state_34227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32641__auto____0;
cljs$core$async$state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32641__auto____1;
return cljs$core$async$state_machine__32641__auto__;
})()
})();
var state__32780__auto__ = (function (){var statearr_34245 = f__32779__auto__();
(statearr_34245[(6)] = c__32778__auto___35370);

return statearr_34245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32780__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34247 = arguments.length;
switch (G__34247) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32778__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32779__auto__ = (function (){var switch__32640__auto__ = (function (state_34309){
var state_val_34310 = (state_34309[(1)]);
if((state_val_34310 === (7))){
var inst_34305 = (state_34309[(2)]);
var state_34309__$1 = state_34309;
var statearr_34311_35391 = state_34309__$1;
(statearr_34311_35391[(2)] = inst_34305);

(statearr_34311_35391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (20))){
var inst_34275 = (state_34309[(7)]);
var inst_34286 = (state_34309[(2)]);
var inst_34287 = cljs.core.next(inst_34275);
var inst_34261 = inst_34287;
var inst_34262 = null;
var inst_34263 = (0);
var inst_34264 = (0);
var state_34309__$1 = (function (){var statearr_34312 = state_34309;
(statearr_34312[(8)] = inst_34261);

(statearr_34312[(9)] = inst_34286);

(statearr_34312[(10)] = inst_34264);

(statearr_34312[(11)] = inst_34262);

(statearr_34312[(12)] = inst_34263);

return statearr_34312;
})();
var statearr_34313_35392 = state_34309__$1;
(statearr_34313_35392[(2)] = null);

(statearr_34313_35392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (1))){
var state_34309__$1 = state_34309;
var statearr_34314_35393 = state_34309__$1;
(statearr_34314_35393[(2)] = null);

(statearr_34314_35393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (4))){
var inst_34250 = (state_34309[(13)]);
var inst_34250__$1 = (state_34309[(2)]);
var inst_34251 = (inst_34250__$1 == null);
var state_34309__$1 = (function (){var statearr_34315 = state_34309;
(statearr_34315[(13)] = inst_34250__$1);

return statearr_34315;
})();
if(cljs.core.truth_(inst_34251)){
var statearr_34316_35396 = state_34309__$1;
(statearr_34316_35396[(1)] = (5));

} else {
var statearr_34317_35397 = state_34309__$1;
(statearr_34317_35397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (15))){
var state_34309__$1 = state_34309;
var statearr_34321_35398 = state_34309__$1;
(statearr_34321_35398[(2)] = null);

(statearr_34321_35398[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (21))){
var state_34309__$1 = state_34309;
var statearr_34322_35399 = state_34309__$1;
(statearr_34322_35399[(2)] = null);

(statearr_34322_35399[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (13))){
var inst_34261 = (state_34309[(8)]);
var inst_34264 = (state_34309[(10)]);
var inst_34262 = (state_34309[(11)]);
var inst_34263 = (state_34309[(12)]);
var inst_34271 = (state_34309[(2)]);
var inst_34272 = (inst_34264 + (1));
var tmp34318 = inst_34261;
var tmp34319 = inst_34262;
var tmp34320 = inst_34263;
var inst_34261__$1 = tmp34318;
var inst_34262__$1 = tmp34319;
var inst_34263__$1 = tmp34320;
var inst_34264__$1 = inst_34272;
var state_34309__$1 = (function (){var statearr_34323 = state_34309;
(statearr_34323[(14)] = inst_34271);

(statearr_34323[(8)] = inst_34261__$1);

(statearr_34323[(10)] = inst_34264__$1);

(statearr_34323[(11)] = inst_34262__$1);

(statearr_34323[(12)] = inst_34263__$1);

return statearr_34323;
})();
var statearr_34324_35400 = state_34309__$1;
(statearr_34324_35400[(2)] = null);

(statearr_34324_35400[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (22))){
var state_34309__$1 = state_34309;
var statearr_34325_35401 = state_34309__$1;
(statearr_34325_35401[(2)] = null);

(statearr_34325_35401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (6))){
var inst_34250 = (state_34309[(13)]);
var inst_34259 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34250) : f.call(null,inst_34250));
var inst_34260 = cljs.core.seq(inst_34259);
var inst_34261 = inst_34260;
var inst_34262 = null;
var inst_34263 = (0);
var inst_34264 = (0);
var state_34309__$1 = (function (){var statearr_34326 = state_34309;
(statearr_34326[(8)] = inst_34261);

(statearr_34326[(10)] = inst_34264);

(statearr_34326[(11)] = inst_34262);

(statearr_34326[(12)] = inst_34263);

return statearr_34326;
})();
var statearr_34327_35403 = state_34309__$1;
(statearr_34327_35403[(2)] = null);

(statearr_34327_35403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (17))){
var inst_34275 = (state_34309[(7)]);
var inst_34279 = cljs.core.chunk_first(inst_34275);
var inst_34280 = cljs.core.chunk_rest(inst_34275);
var inst_34281 = cljs.core.count(inst_34279);
var inst_34261 = inst_34280;
var inst_34262 = inst_34279;
var inst_34263 = inst_34281;
var inst_34264 = (0);
var state_34309__$1 = (function (){var statearr_34328 = state_34309;
(statearr_34328[(8)] = inst_34261);

(statearr_34328[(10)] = inst_34264);

(statearr_34328[(11)] = inst_34262);

(statearr_34328[(12)] = inst_34263);

return statearr_34328;
})();
var statearr_34329_35405 = state_34309__$1;
(statearr_34329_35405[(2)] = null);

(statearr_34329_35405[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (3))){
var inst_34307 = (state_34309[(2)]);
var state_34309__$1 = state_34309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34309__$1,inst_34307);
} else {
if((state_val_34310 === (12))){
var inst_34295 = (state_34309[(2)]);
var state_34309__$1 = state_34309;
var statearr_34330_35406 = state_34309__$1;
(statearr_34330_35406[(2)] = inst_34295);

(statearr_34330_35406[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (2))){
var state_34309__$1 = state_34309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34309__$1,(4),in$);
} else {
if((state_val_34310 === (23))){
var inst_34303 = (state_34309[(2)]);
var state_34309__$1 = state_34309;
var statearr_34331_35407 = state_34309__$1;
(statearr_34331_35407[(2)] = inst_34303);

(statearr_34331_35407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (19))){
var inst_34290 = (state_34309[(2)]);
var state_34309__$1 = state_34309;
var statearr_34332_35408 = state_34309__$1;
(statearr_34332_35408[(2)] = inst_34290);

(statearr_34332_35408[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (11))){
var inst_34275 = (state_34309[(7)]);
var inst_34261 = (state_34309[(8)]);
var inst_34275__$1 = cljs.core.seq(inst_34261);
var state_34309__$1 = (function (){var statearr_34333 = state_34309;
(statearr_34333[(7)] = inst_34275__$1);

return statearr_34333;
})();
if(inst_34275__$1){
var statearr_34334_35409 = state_34309__$1;
(statearr_34334_35409[(1)] = (14));

} else {
var statearr_34335_35412 = state_34309__$1;
(statearr_34335_35412[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (9))){
var inst_34297 = (state_34309[(2)]);
var inst_34298 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34309__$1 = (function (){var statearr_34336 = state_34309;
(statearr_34336[(15)] = inst_34297);

return statearr_34336;
})();
if(cljs.core.truth_(inst_34298)){
var statearr_34337_35417 = state_34309__$1;
(statearr_34337_35417[(1)] = (21));

} else {
var statearr_34338_35418 = state_34309__$1;
(statearr_34338_35418[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (5))){
var inst_34253 = cljs.core.async.close_BANG_(out);
var state_34309__$1 = state_34309;
var statearr_34339_35419 = state_34309__$1;
(statearr_34339_35419[(2)] = inst_34253);

(statearr_34339_35419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (14))){
var inst_34275 = (state_34309[(7)]);
var inst_34277 = cljs.core.chunked_seq_QMARK_(inst_34275);
var state_34309__$1 = state_34309;
if(inst_34277){
var statearr_34340_35421 = state_34309__$1;
(statearr_34340_35421[(1)] = (17));

} else {
var statearr_34341_35422 = state_34309__$1;
(statearr_34341_35422[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (16))){
var inst_34293 = (state_34309[(2)]);
var state_34309__$1 = state_34309;
var statearr_34342_35423 = state_34309__$1;
(statearr_34342_35423[(2)] = inst_34293);

(statearr_34342_35423[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34310 === (10))){
var inst_34264 = (state_34309[(10)]);
var inst_34262 = (state_34309[(11)]);
var inst_34269 = cljs.core._nth(inst_34262,inst_34264);
var state_34309__$1 = state_34309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34309__$1,(13),out,inst_34269);
} else {
if((state_val_34310 === (18))){
var inst_34275 = (state_34309[(7)]);
var inst_34284 = cljs.core.first(inst_34275);
var state_34309__$1 = state_34309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34309__$1,(20),out,inst_34284);
} else {
if((state_val_34310 === (8))){
var inst_34264 = (state_34309[(10)]);
var inst_34263 = (state_34309[(12)]);
var inst_34266 = (inst_34264 < inst_34263);
var inst_34267 = inst_34266;
var state_34309__$1 = state_34309;
if(cljs.core.truth_(inst_34267)){
var statearr_34343_35428 = state_34309__$1;
(statearr_34343_35428[(1)] = (10));

} else {
var statearr_34344_35429 = state_34309__$1;
(statearr_34344_35429[(1)] = (11));

}

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
var cljs$core$async$mapcat_STAR__$_state_machine__32641__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32641__auto____0 = (function (){
var statearr_34345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34345[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32641__auto__);

(statearr_34345[(1)] = (1));

return statearr_34345;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32641__auto____1 = (function (state_34309){
while(true){
var ret_value__32642__auto__ = (function (){try{while(true){
var result__32643__auto__ = switch__32640__auto__(state_34309);
if(cljs.core.keyword_identical_QMARK_(result__32643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32643__auto__;
}
break;
}
}catch (e34346){var ex__32644__auto__ = e34346;
var statearr_34347_35431 = state_34309;
(statearr_34347_35431[(2)] = ex__32644__auto__);


if(cljs.core.seq((state_34309[(4)]))){
var statearr_34348_35432 = state_34309;
(statearr_34348_35432[(1)] = cljs.core.first((state_34309[(4)])));

} else {
throw ex__32644__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35433 = state_34309;
state_34309 = G__35433;
continue;
} else {
return ret_value__32642__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32641__auto__ = function(state_34309){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32641__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32641__auto____1.call(this,state_34309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32641__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32641__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32641__auto__;
})()
})();
var state__32780__auto__ = (function (){var statearr_34349 = f__32779__auto__();
(statearr_34349[(6)] = c__32778__auto__);

return statearr_34349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32780__auto__);
}));

return c__32778__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34351 = arguments.length;
switch (G__34351) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34353 = arguments.length;
switch (G__34353) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34355 = arguments.length;
switch (G__34355) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32778__auto___35438 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32779__auto__ = (function (){var switch__32640__auto__ = (function (state_34379){
var state_val_34380 = (state_34379[(1)]);
if((state_val_34380 === (7))){
var inst_34374 = (state_34379[(2)]);
var state_34379__$1 = state_34379;
var statearr_34381_35439 = state_34379__$1;
(statearr_34381_35439[(2)] = inst_34374);

(statearr_34381_35439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34380 === (1))){
var inst_34356 = null;
var state_34379__$1 = (function (){var statearr_34382 = state_34379;
(statearr_34382[(7)] = inst_34356);

return statearr_34382;
})();
var statearr_34383_35441 = state_34379__$1;
(statearr_34383_35441[(2)] = null);

(statearr_34383_35441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34380 === (4))){
var inst_34359 = (state_34379[(8)]);
var inst_34359__$1 = (state_34379[(2)]);
var inst_34360 = (inst_34359__$1 == null);
var inst_34361 = cljs.core.not(inst_34360);
var state_34379__$1 = (function (){var statearr_34384 = state_34379;
(statearr_34384[(8)] = inst_34359__$1);

return statearr_34384;
})();
if(inst_34361){
var statearr_34385_35442 = state_34379__$1;
(statearr_34385_35442[(1)] = (5));

} else {
var statearr_34386_35443 = state_34379__$1;
(statearr_34386_35443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34380 === (6))){
var state_34379__$1 = state_34379;
var statearr_34387_35444 = state_34379__$1;
(statearr_34387_35444[(2)] = null);

(statearr_34387_35444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34380 === (3))){
var inst_34376 = (state_34379[(2)]);
var inst_34377 = cljs.core.async.close_BANG_(out);
var state_34379__$1 = (function (){var statearr_34388 = state_34379;
(statearr_34388[(9)] = inst_34376);

return statearr_34388;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34379__$1,inst_34377);
} else {
if((state_val_34380 === (2))){
var state_34379__$1 = state_34379;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34379__$1,(4),ch);
} else {
if((state_val_34380 === (11))){
var inst_34359 = (state_34379[(8)]);
var inst_34368 = (state_34379[(2)]);
var inst_34356 = inst_34359;
var state_34379__$1 = (function (){var statearr_34389 = state_34379;
(statearr_34389[(7)] = inst_34356);

(statearr_34389[(10)] = inst_34368);

return statearr_34389;
})();
var statearr_34390_35445 = state_34379__$1;
(statearr_34390_35445[(2)] = null);

(statearr_34390_35445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34380 === (9))){
var inst_34359 = (state_34379[(8)]);
var state_34379__$1 = state_34379;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34379__$1,(11),out,inst_34359);
} else {
if((state_val_34380 === (5))){
var inst_34356 = (state_34379[(7)]);
var inst_34359 = (state_34379[(8)]);
var inst_34363 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34359,inst_34356);
var state_34379__$1 = state_34379;
if(inst_34363){
var statearr_34392_35446 = state_34379__$1;
(statearr_34392_35446[(1)] = (8));

} else {
var statearr_34393_35447 = state_34379__$1;
(statearr_34393_35447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34380 === (10))){
var inst_34371 = (state_34379[(2)]);
var state_34379__$1 = state_34379;
var statearr_34394_35448 = state_34379__$1;
(statearr_34394_35448[(2)] = inst_34371);

(statearr_34394_35448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34380 === (8))){
var inst_34356 = (state_34379[(7)]);
var tmp34391 = inst_34356;
var inst_34356__$1 = tmp34391;
var state_34379__$1 = (function (){var statearr_34395 = state_34379;
(statearr_34395[(7)] = inst_34356__$1);

return statearr_34395;
})();
var statearr_34396_35449 = state_34379__$1;
(statearr_34396_35449[(2)] = null);

(statearr_34396_35449[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__32641__auto__ = null;
var cljs$core$async$state_machine__32641__auto____0 = (function (){
var statearr_34397 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34397[(0)] = cljs$core$async$state_machine__32641__auto__);

(statearr_34397[(1)] = (1));

return statearr_34397;
});
var cljs$core$async$state_machine__32641__auto____1 = (function (state_34379){
while(true){
var ret_value__32642__auto__ = (function (){try{while(true){
var result__32643__auto__ = switch__32640__auto__(state_34379);
if(cljs.core.keyword_identical_QMARK_(result__32643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32643__auto__;
}
break;
}
}catch (e34398){var ex__32644__auto__ = e34398;
var statearr_34399_35452 = state_34379;
(statearr_34399_35452[(2)] = ex__32644__auto__);


if(cljs.core.seq((state_34379[(4)]))){
var statearr_34400_35453 = state_34379;
(statearr_34400_35453[(1)] = cljs.core.first((state_34379[(4)])));

} else {
throw ex__32644__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35454 = state_34379;
state_34379 = G__35454;
continue;
} else {
return ret_value__32642__auto__;
}
break;
}
});
cljs$core$async$state_machine__32641__auto__ = function(state_34379){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32641__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32641__auto____1.call(this,state_34379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32641__auto____0;
cljs$core$async$state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32641__auto____1;
return cljs$core$async$state_machine__32641__auto__;
})()
})();
var state__32780__auto__ = (function (){var statearr_34401 = f__32779__auto__();
(statearr_34401[(6)] = c__32778__auto___35438);

return statearr_34401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32780__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34403 = arguments.length;
switch (G__34403) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32778__auto___35458 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32779__auto__ = (function (){var switch__32640__auto__ = (function (state_34441){
var state_val_34442 = (state_34441[(1)]);
if((state_val_34442 === (7))){
var inst_34437 = (state_34441[(2)]);
var state_34441__$1 = state_34441;
var statearr_34443_35459 = state_34441__$1;
(statearr_34443_35459[(2)] = inst_34437);

(statearr_34443_35459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34442 === (1))){
var inst_34404 = (new Array(n));
var inst_34405 = inst_34404;
var inst_34406 = (0);
var state_34441__$1 = (function (){var statearr_34444 = state_34441;
(statearr_34444[(7)] = inst_34405);

(statearr_34444[(8)] = inst_34406);

return statearr_34444;
})();
var statearr_34445_35461 = state_34441__$1;
(statearr_34445_35461[(2)] = null);

(statearr_34445_35461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34442 === (4))){
var inst_34409 = (state_34441[(9)]);
var inst_34409__$1 = (state_34441[(2)]);
var inst_34410 = (inst_34409__$1 == null);
var inst_34411 = cljs.core.not(inst_34410);
var state_34441__$1 = (function (){var statearr_34446 = state_34441;
(statearr_34446[(9)] = inst_34409__$1);

return statearr_34446;
})();
if(inst_34411){
var statearr_34447_35462 = state_34441__$1;
(statearr_34447_35462[(1)] = (5));

} else {
var statearr_34448_35463 = state_34441__$1;
(statearr_34448_35463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34442 === (15))){
var inst_34431 = (state_34441[(2)]);
var state_34441__$1 = state_34441;
var statearr_34449_35464 = state_34441__$1;
(statearr_34449_35464[(2)] = inst_34431);

(statearr_34449_35464[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34442 === (13))){
var state_34441__$1 = state_34441;
var statearr_34450_35466 = state_34441__$1;
(statearr_34450_35466[(2)] = null);

(statearr_34450_35466[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34442 === (6))){
var inst_34406 = (state_34441[(8)]);
var inst_34427 = (inst_34406 > (0));
var state_34441__$1 = state_34441;
if(cljs.core.truth_(inst_34427)){
var statearr_34451_35467 = state_34441__$1;
(statearr_34451_35467[(1)] = (12));

} else {
var statearr_34452_35468 = state_34441__$1;
(statearr_34452_35468[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34442 === (3))){
var inst_34439 = (state_34441[(2)]);
var state_34441__$1 = state_34441;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34441__$1,inst_34439);
} else {
if((state_val_34442 === (12))){
var inst_34405 = (state_34441[(7)]);
var inst_34429 = cljs.core.vec(inst_34405);
var state_34441__$1 = state_34441;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34441__$1,(15),out,inst_34429);
} else {
if((state_val_34442 === (2))){
var state_34441__$1 = state_34441;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34441__$1,(4),ch);
} else {
if((state_val_34442 === (11))){
var inst_34421 = (state_34441[(2)]);
var inst_34422 = (new Array(n));
var inst_34405 = inst_34422;
var inst_34406 = (0);
var state_34441__$1 = (function (){var statearr_34453 = state_34441;
(statearr_34453[(10)] = inst_34421);

(statearr_34453[(7)] = inst_34405);

(statearr_34453[(8)] = inst_34406);

return statearr_34453;
})();
var statearr_34454_35469 = state_34441__$1;
(statearr_34454_35469[(2)] = null);

(statearr_34454_35469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34442 === (9))){
var inst_34405 = (state_34441[(7)]);
var inst_34419 = cljs.core.vec(inst_34405);
var state_34441__$1 = state_34441;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34441__$1,(11),out,inst_34419);
} else {
if((state_val_34442 === (5))){
var inst_34409 = (state_34441[(9)]);
var inst_34405 = (state_34441[(7)]);
var inst_34414 = (state_34441[(11)]);
var inst_34406 = (state_34441[(8)]);
var inst_34413 = (inst_34405[inst_34406] = inst_34409);
var inst_34414__$1 = (inst_34406 + (1));
var inst_34415 = (inst_34414__$1 < n);
var state_34441__$1 = (function (){var statearr_34455 = state_34441;
(statearr_34455[(11)] = inst_34414__$1);

(statearr_34455[(12)] = inst_34413);

return statearr_34455;
})();
if(cljs.core.truth_(inst_34415)){
var statearr_34456_35475 = state_34441__$1;
(statearr_34456_35475[(1)] = (8));

} else {
var statearr_34457_35476 = state_34441__$1;
(statearr_34457_35476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34442 === (14))){
var inst_34434 = (state_34441[(2)]);
var inst_34435 = cljs.core.async.close_BANG_(out);
var state_34441__$1 = (function (){var statearr_34459 = state_34441;
(statearr_34459[(13)] = inst_34434);

return statearr_34459;
})();
var statearr_34460_35481 = state_34441__$1;
(statearr_34460_35481[(2)] = inst_34435);

(statearr_34460_35481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34442 === (10))){
var inst_34425 = (state_34441[(2)]);
var state_34441__$1 = state_34441;
var statearr_34461_35483 = state_34441__$1;
(statearr_34461_35483[(2)] = inst_34425);

(statearr_34461_35483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34442 === (8))){
var inst_34405 = (state_34441[(7)]);
var inst_34414 = (state_34441[(11)]);
var tmp34458 = inst_34405;
var inst_34405__$1 = tmp34458;
var inst_34406 = inst_34414;
var state_34441__$1 = (function (){var statearr_34462 = state_34441;
(statearr_34462[(7)] = inst_34405__$1);

(statearr_34462[(8)] = inst_34406);

return statearr_34462;
})();
var statearr_34463_35489 = state_34441__$1;
(statearr_34463_35489[(2)] = null);

(statearr_34463_35489[(1)] = (2));


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
}
});
return (function() {
var cljs$core$async$state_machine__32641__auto__ = null;
var cljs$core$async$state_machine__32641__auto____0 = (function (){
var statearr_34464 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34464[(0)] = cljs$core$async$state_machine__32641__auto__);

(statearr_34464[(1)] = (1));

return statearr_34464;
});
var cljs$core$async$state_machine__32641__auto____1 = (function (state_34441){
while(true){
var ret_value__32642__auto__ = (function (){try{while(true){
var result__32643__auto__ = switch__32640__auto__(state_34441);
if(cljs.core.keyword_identical_QMARK_(result__32643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32643__auto__;
}
break;
}
}catch (e34465){var ex__32644__auto__ = e34465;
var statearr_34466_35490 = state_34441;
(statearr_34466_35490[(2)] = ex__32644__auto__);


if(cljs.core.seq((state_34441[(4)]))){
var statearr_34467_35491 = state_34441;
(statearr_34467_35491[(1)] = cljs.core.first((state_34441[(4)])));

} else {
throw ex__32644__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35496 = state_34441;
state_34441 = G__35496;
continue;
} else {
return ret_value__32642__auto__;
}
break;
}
});
cljs$core$async$state_machine__32641__auto__ = function(state_34441){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32641__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32641__auto____1.call(this,state_34441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32641__auto____0;
cljs$core$async$state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32641__auto____1;
return cljs$core$async$state_machine__32641__auto__;
})()
})();
var state__32780__auto__ = (function (){var statearr_34468 = f__32779__auto__();
(statearr_34468[(6)] = c__32778__auto___35458);

return statearr_34468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32780__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34470 = arguments.length;
switch (G__34470) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32778__auto___35506 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32779__auto__ = (function (){var switch__32640__auto__ = (function (state_34512){
var state_val_34513 = (state_34512[(1)]);
if((state_val_34513 === (7))){
var inst_34508 = (state_34512[(2)]);
var state_34512__$1 = state_34512;
var statearr_34514_35512 = state_34512__$1;
(statearr_34514_35512[(2)] = inst_34508);

(statearr_34514_35512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34513 === (1))){
var inst_34471 = [];
var inst_34472 = inst_34471;
var inst_34473 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34512__$1 = (function (){var statearr_34515 = state_34512;
(statearr_34515[(7)] = inst_34473);

(statearr_34515[(8)] = inst_34472);

return statearr_34515;
})();
var statearr_34516_35520 = state_34512__$1;
(statearr_34516_35520[(2)] = null);

(statearr_34516_35520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34513 === (4))){
var inst_34476 = (state_34512[(9)]);
var inst_34476__$1 = (state_34512[(2)]);
var inst_34477 = (inst_34476__$1 == null);
var inst_34478 = cljs.core.not(inst_34477);
var state_34512__$1 = (function (){var statearr_34517 = state_34512;
(statearr_34517[(9)] = inst_34476__$1);

return statearr_34517;
})();
if(inst_34478){
var statearr_34518_35524 = state_34512__$1;
(statearr_34518_35524[(1)] = (5));

} else {
var statearr_34519_35525 = state_34512__$1;
(statearr_34519_35525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34513 === (15))){
var inst_34502 = (state_34512[(2)]);
var state_34512__$1 = state_34512;
var statearr_34520_35526 = state_34512__$1;
(statearr_34520_35526[(2)] = inst_34502);

(statearr_34520_35526[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34513 === (13))){
var state_34512__$1 = state_34512;
var statearr_34521_35528 = state_34512__$1;
(statearr_34521_35528[(2)] = null);

(statearr_34521_35528[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34513 === (6))){
var inst_34472 = (state_34512[(8)]);
var inst_34497 = inst_34472.length;
var inst_34498 = (inst_34497 > (0));
var state_34512__$1 = state_34512;
if(cljs.core.truth_(inst_34498)){
var statearr_34522_35529 = state_34512__$1;
(statearr_34522_35529[(1)] = (12));

} else {
var statearr_34523_35530 = state_34512__$1;
(statearr_34523_35530[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34513 === (3))){
var inst_34510 = (state_34512[(2)]);
var state_34512__$1 = state_34512;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34512__$1,inst_34510);
} else {
if((state_val_34513 === (12))){
var inst_34472 = (state_34512[(8)]);
var inst_34500 = cljs.core.vec(inst_34472);
var state_34512__$1 = state_34512;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34512__$1,(15),out,inst_34500);
} else {
if((state_val_34513 === (2))){
var state_34512__$1 = state_34512;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34512__$1,(4),ch);
} else {
if((state_val_34513 === (11))){
var inst_34476 = (state_34512[(9)]);
var inst_34480 = (state_34512[(10)]);
var inst_34490 = (state_34512[(2)]);
var inst_34491 = [];
var inst_34492 = inst_34491.push(inst_34476);
var inst_34472 = inst_34491;
var inst_34473 = inst_34480;
var state_34512__$1 = (function (){var statearr_34524 = state_34512;
(statearr_34524[(7)] = inst_34473);

(statearr_34524[(11)] = inst_34490);

(statearr_34524[(8)] = inst_34472);

(statearr_34524[(12)] = inst_34492);

return statearr_34524;
})();
var statearr_34525_35531 = state_34512__$1;
(statearr_34525_35531[(2)] = null);

(statearr_34525_35531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34513 === (9))){
var inst_34472 = (state_34512[(8)]);
var inst_34488 = cljs.core.vec(inst_34472);
var state_34512__$1 = state_34512;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34512__$1,(11),out,inst_34488);
} else {
if((state_val_34513 === (5))){
var inst_34473 = (state_34512[(7)]);
var inst_34476 = (state_34512[(9)]);
var inst_34480 = (state_34512[(10)]);
var inst_34480__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34476) : f.call(null,inst_34476));
var inst_34481 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34480__$1,inst_34473);
var inst_34482 = cljs.core.keyword_identical_QMARK_(inst_34473,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34483 = ((inst_34481) || (inst_34482));
var state_34512__$1 = (function (){var statearr_34526 = state_34512;
(statearr_34526[(10)] = inst_34480__$1);

return statearr_34526;
})();
if(cljs.core.truth_(inst_34483)){
var statearr_34527_35532 = state_34512__$1;
(statearr_34527_35532[(1)] = (8));

} else {
var statearr_34528_35533 = state_34512__$1;
(statearr_34528_35533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34513 === (14))){
var inst_34505 = (state_34512[(2)]);
var inst_34506 = cljs.core.async.close_BANG_(out);
var state_34512__$1 = (function (){var statearr_34530 = state_34512;
(statearr_34530[(13)] = inst_34505);

return statearr_34530;
})();
var statearr_34531_35534 = state_34512__$1;
(statearr_34531_35534[(2)] = inst_34506);

(statearr_34531_35534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34513 === (10))){
var inst_34495 = (state_34512[(2)]);
var state_34512__$1 = state_34512;
var statearr_34532_35536 = state_34512__$1;
(statearr_34532_35536[(2)] = inst_34495);

(statearr_34532_35536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34513 === (8))){
var inst_34476 = (state_34512[(9)]);
var inst_34472 = (state_34512[(8)]);
var inst_34480 = (state_34512[(10)]);
var inst_34485 = inst_34472.push(inst_34476);
var tmp34529 = inst_34472;
var inst_34472__$1 = tmp34529;
var inst_34473 = inst_34480;
var state_34512__$1 = (function (){var statearr_34533 = state_34512;
(statearr_34533[(14)] = inst_34485);

(statearr_34533[(7)] = inst_34473);

(statearr_34533[(8)] = inst_34472__$1);

return statearr_34533;
})();
var statearr_34534_35537 = state_34512__$1;
(statearr_34534_35537[(2)] = null);

(statearr_34534_35537[(1)] = (2));


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
}
});
return (function() {
var cljs$core$async$state_machine__32641__auto__ = null;
var cljs$core$async$state_machine__32641__auto____0 = (function (){
var statearr_34535 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34535[(0)] = cljs$core$async$state_machine__32641__auto__);

(statearr_34535[(1)] = (1));

return statearr_34535;
});
var cljs$core$async$state_machine__32641__auto____1 = (function (state_34512){
while(true){
var ret_value__32642__auto__ = (function (){try{while(true){
var result__32643__auto__ = switch__32640__auto__(state_34512);
if(cljs.core.keyword_identical_QMARK_(result__32643__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32643__auto__;
}
break;
}
}catch (e34536){var ex__32644__auto__ = e34536;
var statearr_34537_35541 = state_34512;
(statearr_34537_35541[(2)] = ex__32644__auto__);


if(cljs.core.seq((state_34512[(4)]))){
var statearr_34538_35542 = state_34512;
(statearr_34538_35542[(1)] = cljs.core.first((state_34512[(4)])));

} else {
throw ex__32644__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35544 = state_34512;
state_34512 = G__35544;
continue;
} else {
return ret_value__32642__auto__;
}
break;
}
});
cljs$core$async$state_machine__32641__auto__ = function(state_34512){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32641__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32641__auto____1.call(this,state_34512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32641__auto____0;
cljs$core$async$state_machine__32641__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32641__auto____1;
return cljs$core$async$state_machine__32641__auto__;
})()
})();
var state__32780__auto__ = (function (){var statearr_34539 = f__32779__auto__();
(statearr_34539[(6)] = c__32778__auto___35506);

return statearr_34539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32780__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
