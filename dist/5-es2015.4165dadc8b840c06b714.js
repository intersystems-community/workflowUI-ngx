(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{qrMm:function(t,i,e){"use strict";e.r(i),e.d(i,"WorklistModule",(function(){return ni}));var n,s=e("SVse"),r=e("s7LF"),c=e("UKGz"),a=e("sYmb"),o=e("3CNY"),l=e("iInd"),u=e("nWvw"),p=Array.isArray,b="object"==typeof global&&global&&global.Object===Object&&global,d="object"==typeof self&&self&&self.Object===Object&&self,h=b||d||Function("return this")(),f=h.Symbol,g=Object.prototype,y=g.hasOwnProperty,m=g.toString,_=f?f.toStringTag:void 0,O=Object.prototype.toString,k=f?f.toStringTag:void 0,v=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":k&&k in Object(t)?function(t){var i=y.call(t,_),e=t[_];try{t[_]=void 0;var n=!0}catch(r){}var s=m.call(t);return n&&(i?t[_]=e:delete t[_]),s}(t):function(t){return O.call(t)}(t)},w=function(t){return"symbol"==typeof t||function(t){return null!=t&&"object"==typeof t}(t)&&"[object Symbol]"==v(t)},S=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,T=/^\w*$/,P=function(t){var i=typeof t;return null!=t&&("object"==i||"function"==i)},x=h["__core-js_shared__"],A=(n=/[^.]+$/.exec(x&&x.keys&&x.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"",I=Function.prototype.toString,R=/^\[object .+?Constructor\]$/,$=RegExp("^"+Function.prototype.toString.call(Object.prototype.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),C=function(t,i){var e=function(t,i){return null==t?void 0:t[i]}(t,i);return function(t){return!(!P(t)||(i=t,A&&A in i))&&(function(t){if(!P(t))return!1;var i=v(t);return"[object Function]"==i||"[object GeneratorFunction]"==i||"[object AsyncFunction]"==i||"[object Proxy]"==i}(t)?$:R).test(function(t){if(null!=t){try{return I.call(t)}catch(i){}try{return t+""}catch(i){}}return""}(t));var i}(e)?e:void 0},E=C(Object,"create"),L=Object.prototype.hasOwnProperty,M=Object.prototype.hasOwnProperty;function F(t){var i=-1,e=null==t?0:t.length;for(this.clear();++i<e;){var n=t[i];this.set(n[0],n[1])}}F.prototype.clear=function(){this.__data__=E?E(null):{},this.size=0},F.prototype.delete=function(t){var i=this.has(t)&&delete this.__data__[t];return this.size-=i?1:0,i},F.prototype.get=function(t){var i=this.__data__;if(E){var e=i[t];return"__lodash_hash_undefined__"===e?void 0:e}return L.call(i,t)?i[t]:void 0},F.prototype.has=function(t){var i=this.__data__;return E?void 0!==i[t]:M.call(i,t)},F.prototype.set=function(t,i){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=E&&void 0===i?"__lodash_hash_undefined__":i,this};var z=F,j=function(t,i){for(var e=t.length;e--;)if((n=t[e][0])===(s=i)||n!=n&&s!=s)return e;var n,s;return-1},B=Array.prototype.splice;function K(t){var i=-1,e=null==t?0:t.length;for(this.clear();++i<e;){var n=t[i];this.set(n[0],n[1])}}K.prototype.clear=function(){this.__data__=[],this.size=0},K.prototype.delete=function(t){var i=this.__data__,e=j(i,t);return!(e<0||(e==i.length-1?i.pop():B.call(i,e,1),--this.size,0))},K.prototype.get=function(t){var i=this.__data__,e=j(i,t);return e<0?void 0:i[e][1]},K.prototype.has=function(t){return j(this.__data__,t)>-1},K.prototype.set=function(t,i){var e=this.__data__,n=j(e,t);return n<0?(++this.size,e.push([t,i])):e[n][1]=i,this};var D=K,W=C(h,"Map"),H=function(t,i){var e,n,s=t.__data__;return("string"==(n=typeof(e=i))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?s["string"==typeof i?"string":"hash"]:s.map};function N(t){var i=-1,e=null==t?0:t.length;for(this.clear();++i<e;){var n=t[i];this.set(n[0],n[1])}}N.prototype.clear=function(){this.size=0,this.__data__={hash:new z,map:new(W||D),string:new z}},N.prototype.delete=function(t){var i=H(this,t).delete(t);return this.size-=i?1:0,i},N.prototype.get=function(t){return H(this,t).get(t)},N.prototype.has=function(t){return H(this,t).has(t)},N.prototype.set=function(t,i){var e=H(this,t),n=e.size;return e.set(t,i),this.size+=e.size==n?0:1,this};var J=N;function q(t,i){if("function"!=typeof t||null!=i&&"function"!=typeof i)throw new TypeError("Expected a function");var e=function(){var n=arguments,s=i?i.apply(this,n):n[0],r=e.cache;if(r.has(s))return r.get(s);var c=t.apply(this,n);return e.cache=r.set(s,c)||r,c};return e.cache=new(q.Cache||J),e}q.Cache=J;var U,G,Y=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Q=/\\(\\)?/g,V=(U=q((function(t){var i=[];return 46===t.charCodeAt(0)&&i.push(""),t.replace(Y,(function(t,e,n,s){i.push(n?s.replace(Q,"$1"):e||t)})),i}),(function(t){return 500===G.size&&G.clear(),t})),G=U.cache,U),Z=f?f.prototype:void 0,X=Z?Z.toString:void 0,tt=function(t,i){return p(t)?t:function(t,i){if(p(t))return!1;var e=typeof t;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!w(t))||T.test(t)||!S.test(t)||null!=i&&t in Object(i)}(t,i)?[t]:V(function(t){return null==t?"":function t(i){if("string"==typeof i)return i;if(p(i))return function(t,i){for(var e=-1,n=null==t?0:t.length,s=Array(n);++e<n;)s[e]=i(t[e],e,t);return s}(i,t)+"";if(w(i))return X?X.call(i):"";var e=i+"";return"0"==e&&1/i==-1/0?"-0":e}(t)}(t))},it=function(t){if("string"==typeof t||w(t))return t;var i=t+"";return"0"==i&&1/t==-1/0?"-0":i},et=function(t,i,e){var n=null==t?void 0:function(t,i){for(var e=0,n=(i=tt(i,t)).length;null!=t&&e<n;)t=t[it(i[e++])];return e&&e==n?t:void 0}(t,i);return void 0===n?e:n},nt=e("yaqY"),st=e("Pn5l"),rt=e("mFWn"),ct=e("1G5W"),at=e("8Y7J");let ot=(()=>{class t extends st.a{constructor(t,i){super(),this._config=t,this._ref=i,this._authService=rt.a.injector.get(nt.a),this._fb=rt.a.injector.get(r.b),this._authService.isLoggedIn$$.pipe(Object(ct.a)(this.ngUnsubscribe$)).subscribe(t=>{t||this._ref.close()})}}return t.\u0275fac=function(i){return new(i||t)(at.Jb(u.b),at.Jb(u.d))},t.\u0275cmp=at.Db({type:t,selectors:[["app-modal-base"]],features:[at.vb],decls:1,vars:0,template:function(t,i){1&t&&at.zc(0,"no template")},encapsulation:2}),t})();var lt=e("hhfa"),ut=e("F5nt"),pt=e("IheW");let bt=(()=>{class t{constructor(t){this._http=t}getTasks(){return this._http.get(`${ut.a.REST_API_URL}/tasks/${ut.a.TASKS_LIMIT}`)}getTask(t){return this._http.get(`${ut.a.REST_API_URL}/task/${t}`)}saveTask(t){return this._http.post(`${ut.a.REST_API_URL}/task/${t.id}`,t)}}return t.\u0275fac=function(i){return new(i||t)(at.Tb(pt.b))},t.\u0275prov=at.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var dt=e("p8hY"),ht=e("c/fn"),ft=e("xCnN"),gt=e("ZBr/"),yt=e("lR5k"),mt=e("gtx6");let _t=(()=>{class t{constructor(){this.relAttr="",this.targetAttr="",this.hrefAttr="",this.href=""}ngOnChanges(){this.hrefAttr=this.href,this.isLinkAbsolute()&&(this.relAttr="noopener noreferrer",this.targetAttr="_blank")}isLinkAbsolute(){return this.href.includes("://")}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275dir=at.Eb({type:t,selectors:[["","handleLink",""]],hostVars:3,hostBindings:function(t,i){2&t&&at.zb("rel",i.relAttr)("target",i.targetAttr)("href",i.hrefAttr,at.tc)},inputs:{href:"href"},features:[at.wb]}),t})(),Ot=(()=>{class t{constructor(){}transform(t,i){return et(t,i)}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275pipe=at.Ib({name:"get",type:t,pure:!0}),t})();function kt(t,i){if(1&t&&(at.Pb(0,"span",12),at.bc(1,"translate"),at.Kb(2,"i",13),at.Pb(3,"span",14),at.zc(4),at.bc(5,"date"),at.Ob(),at.Ob()),2&t){const t=at.ac();at.hc("title",at.cc(1,2,"TASK_MODAL.TIME_CREATED")),at.yb(4),at.Bc(" ",at.dc(5,4,null==t.task?null:t.task.timeCreated,"dd.MM.yyyy HH:mm:ss")," ")}}function vt(t,i){if(1&t&&(at.Pb(0,"span",12),at.bc(1,"translate"),at.Kb(2,"i",15),at.Pb(3,"span",14),at.zc(4),at.Ob(),at.Ob()),2&t){const t=at.ac();at.hc("title",at.cc(1,2,"TASK_MODAL.ROLE")),at.yb(4),at.Bc(" ",null==t.task?null:t.task.role," ")}}function wt(t,i){1&t&&at.Kb(0,"i",21)}function St(t,i){1&t&&at.Kb(0,"i",22)}function Tt(t,i){if(1&t&&(at.Pb(0,"div",16),at.bc(1,"translate"),at.Pb(2,"span",17),at.zc(3),at.bc(4,"translate"),at.Ob(),at.Pb(5,"span",18),at.xc(6,wt,1,0,"i",19),at.xc(7,St,1,0,"i",20),at.zc(8),at.Ob(),at.Ob()),2&t){const t=at.ac();at.hc("title",at.cc(1,15,"TASK_MODAL.PRIORITY")),at.yb(3),at.Bc(" ",at.cc(4,17,"TASK_MODAL.PRIORITY")," "),at.yb(2),at.Bb("is-danger",t.task&&1===t.task.priority)("is-warning",t.task&&2===t.task.priority)("is-success",t.task&&3===t.task.priority)("is-primary",t.task&&4===t.task.priority)("is-info",t.task&&t.task.priority<4),at.yb(1),at.hc("ngIf",(null==t.task?null:t.task.priority)<=3),at.yb(1),at.hc("ngIf",(null==t.task?null:t.task.priority)>3),at.yb(1),at.Bc(" ",null==t.task?null:t.task.priority," ")}}function Pt(t,i){if(1&t&&(at.Pb(0,"div",3),at.Kb(1,"markdown",23),at.Ob()),2&t){const t=at.ac();at.yb(1),at.hc("data",null==t.task?null:t.task.message)}}function xt(t,i){if(1&t){const t=at.Qb();at.Pb(0,"div",27),at.Pb(1,"label",28),at.zc(2),at.Ob(),at.Pb(3,"input",29),at.Wb("ngModelChange",(function(i){at.rc(t);const e=at.ac().$implicit,n=at.ac();return(null==n.task?null:n.task.formFields)[e.key]=i})),at.Ob(),at.Ob()}if(2&t){const t=at.ac().$implicit,i=at.ac();at.yb(1),at.hc("for",t.key),at.yb(1),at.Ac(t.key),at.yb(1),at.hc("id",t.key)("ngModel",null==i.task?null:i.task.formFields[t.key])}}function At(t,i){if(1&t&&(at.Pb(0,"div"),at.Pb(1,"label",30),at.zc(2),at.Ob(),at.Pb(3,"a",31),at.zc(4),at.Ob(),at.Ob()),2&t){const t=at.ac().$implicit;at.yb(1),at.hc("for",t.key),at.yb(1),at.Bc(" ",t.key,": "),at.yb(1),at.hc("href",t.value,at.sc),at.yb(1),at.Ac(t.value)}}function It(t,i){if(1&t&&(at.Pb(0,"div"),at.Pb(1,"label",28),at.zc(2),at.Ob(),at.Pb(3,"a",31),at.Pb(4,"div",32),at.Kb(5,"img",33),at.Ob(),at.Ob(),at.Ob()),2&t){const t=at.ac().$implicit;at.yb(1),at.hc("for",t.key),at.yb(1),at.Bc(" ",t.key," "),at.yb(1),at.hc("href",t.value,at.sc),at.yb(2),at.hc("src",t.value,at.sc)}}const Rt=function(){return["link","img"]},$t=function(){return["link"]},Ct=function(){return["img"]};function Et(t,i){if(1&t&&(at.Pb(0,"div",24),at.xc(1,xt,4,4,"div",25),at.bc(2,"get"),at.xc(3,At,5,4,"div",26),at.bc(4,"get"),at.xc(5,It,6,4,"div",26),at.bc(6,"get"),at.Ob()),2&t){const t=i.$implicit,e=at.ac();at.hc("hidden","$$$Handler"===t.key),at.yb(1),at.hc("ngIf",!at.ic(13,Rt).includes(at.dc(2,4,null==e.formFields?null:e.formFields.$$$Handler,t.key))),at.yb(2),at.hc("ngIf",at.ic(14,$t).includes(at.dc(4,7,null==e.formFields?null:e.formFields.$$$Handler,t.key))),at.yb(2),at.hc("ngIf",at.ic(15,Ct).includes(at.dc(6,10,null==e.formFields?null:e.formFields.$$$Handler,t.key)))}}function Lt(t,i){if(1&t){const t=at.Qb();at.Pb(0,"button",34),at.Wb("throttleClick",(function(){at.rc(t);const e=i.$implicit;return at.ac().performAction(e)})),at.Ob()}if(2&t){const t=i.$implicit,e=at.ac();at.hc("disabled",e.loading)("label",t)}}let Mt=(()=>{class t extends ot{constructor(t,i,e,n,s,r){super(t,s),this._config=t,this._el=i,this._i18n=e,this._messageService=n,this._ref=s,this._worklistService=r,this.formFields=null,this.loading=!0,this.placeholder="assets/images/placeholder.jpg",this.task=null}ngOnInit(){this.loading=!0,this._worklistService.getTask(this._config.data.id).subscribe(t=>{this.task=t,this.formFields=Object.assign({},t.formFields),this.loading=!1},t=>{const i=et(t,"error.summary","");this._messageService.add({severity:"error",summary:this._i18n.instant("TASK_MODAL.LOADING_ERROR"),detail:i}),console.error(t),this.closeModal(),this.loading=!1})}getBlockableElement(){return this._el.nativeElement.parentElement.parentElement}performAction(t){this.loading=!0;const i=Object.assign({},this.task);i.action=t,i.formFields&&i.formFields.$$$Handler&&(i.formFields.$$$Handler=JSON.stringify(i.formFields.$$$Handler)),this._worklistService.saveTask(i).subscribe(()=>{setTimeout(()=>{this._messageService.add("$Save"!==t?{severity:"success",summary:this._i18n.instant("TASK_MODAL.SUCCESS_MESSAGE"),detail:this._i18n.instant("TASK_MODAL.ACTION_COMPLETE",{action:t})}:{severity:"success",summary:this._i18n.instant("TASK_MODAL.SAVING_COMPLETE")}),this.closeModal(t),this.loading=!1},300)},t=>{const i=et(t,"error.summary","");this._messageService.add({severity:"error",summary:this._i18n.instant("TASK_MODAL.SAVING_ERROR"),detail:i}),console.error(t),this.loading=!1})}closeModal(t=""){this._ref.close(t)}}return t.\u0275fac=function(i){return new(i||t)(at.Jb(u.b),at.Jb(at.l),at.Jb(a.d),at.Jb(lt.c),at.Jb(u.d),at.Jb(bt))},t.\u0275cmp=at.Db({type:t,selectors:[["app-task-modal"]],features:[at.vb],decls:16,vars:18,consts:[[3,"target","blocked"],[1,"pi","pi-spin","pi-spinner",2,"font-size","2rem"],[1,"columns","is-multiline","p-dialog-content",2,"max-height","60vh","overflow","auto","padding","0"],[1,"column","is-full"],["class","details-header","style","display: inline-block; margin-right: 32px",3,"title",4,"ngIf"],["style","display: inline-flex;","class","details-header tags has-addons",3,"title",4,"ngIf"],["class","column is-full",4,"ngIf"],["class","column is-full",3,"hidden",4,"ngFor","ngForOf"],[1,"p-dialog-footer",2,"padding","0","text-align","right"],["pButton","","pRipple","","style","margin-right: 8px","class","is-fullwidth-mobile",3,"disabled","label","throttleClick",4,"ngFor","ngForOf"],["pButton","","pRipple","","icon","pi pi-save",1,"button","is-success","is-fullwidth-mobile",2,"margin-right","8px",3,"disabled","label","throttleClick"],["pButton","","pRipple","","icon","pi pi-times",1,"p-button-secondary","is-fullwidth-mobile",3,"disabled","label","click"],[1,"details-header",2,"display","inline-block","margin-right","32px",3,"title"],[1,"pi","pi-clock",2,"font-weight","bold","vertical-align","middle","margin-right","4px"],[2,"font-size","13px","font-weight","600"],[1,"pi","pi-user",2,"font-weight","bold","vertical-align","middle","margin-right","4px"],[1,"details-header","tags","has-addons",2,"display","inline-flex",3,"title"],[1,"tag","is-light",2,"margin-bottom","0","font-size","12px"],[1,"tag",2,"margin-bottom","0","font-size","12px"],["class","pi pi-arrow-up","style","font-size: 9px; font-weight: bold; vertical-align: middle; margin-right: 4px",4,"ngIf"],["class","pi pi-arrow-down","style","font-size: 9px; font-weight: bold; vertical-align: middle; margin-right: 4px",4,"ngIf"],[1,"pi","pi-arrow-up",2,"font-size","9px","font-weight","bold","vertical-align","middle","margin-right","4px"],[1,"pi","pi-arrow-down",2,"font-size","9px","font-weight","bold","vertical-align","middle","margin-right","4px"],[1,"markdown-body",3,"data"],[1,"column","is-full",3,"hidden"],["class","field",4,"ngIf"],[4,"ngIf"],[1,"field"],[1,"label",3,"for"],["type","text","pInputText","",2,"width","100%",3,"id","ngModel","ngModelChange"],[1,"label",2,"display","inline",3,"for"],["handleLink","",3,"href"],[1,"img-placeholder"],[2,"height","100px",3,"src"],["pButton","","pRipple","",1,"is-fullwidth-mobile",2,"margin-right","8px",3,"disabled","label","throttleClick"]],template:function(t,i){1&t&&(at.Pb(0,"p-blockUI",0),at.Kb(1,"i",1),at.Ob(),at.Pb(2,"div",2),at.Pb(3,"div",3),at.xc(4,kt,6,7,"span",4),at.xc(5,vt,5,4,"span",4),at.xc(6,Tt,9,19,"div",5),at.Ob(),at.xc(7,Pt,2,1,"div",6),at.xc(8,Et,7,16,"div",7),at.bc(9,"keyvalue"),at.Ob(),at.Pb(10,"div",8),at.xc(11,Lt,1,2,"button",9),at.Pb(12,"button",10),at.Wb("throttleClick",(function(){return i.performAction("$Save")})),at.bc(13,"translate"),at.Ob(),at.Pb(14,"button",11),at.Wb("click",(function(){return i.closeModal()})),at.bc(15,"translate"),at.Ob(),at.Ob()),2&t&&(at.hc("target",i)("blocked",i.loading),at.yb(4),at.hc("ngIf",null==i.task?null:i.task.timeCreated),at.yb(1),at.hc("ngIf",null==i.task?null:i.task.role),at.yb(1),at.hc("ngIf",null==i.task?null:i.task.priority),at.yb(1),at.hc("ngIf",null==i.task?null:i.task.message),at.yb(1),at.hc("ngForOf",at.cc(9,12,i.formFields)),at.yb(3),at.hc("ngForOf",null==i.task||null==i.task.actions?null:i.task.actions.split(",")),at.yb(1),at.hc("disabled",i.loading)("label",at.cc(13,14,"TASK_MODAL.SAVE_BUTTON")),at.yb(2),at.hc("disabled",i.loading)("label",at.cc(15,16,"TASK_MODAL.CLOSE_BUTTON")))},directives:[dt.a,s.m,s.l,ht.a,ft.a,gt.a,yt.a,r.a,mt.a,r.h,r.j,_t],pipes:[s.g,a.c,s.e,Ot],styles:[".priority-top[_ngcontent-%COMP%]{color:#e54343}.priority-2nd[_ngcontent-%COMP%]{color:#e8912f}.priority-3rd[_ngcontent-%COMP%]{color:#f5da2c}.priority-4th[_ngcontent-%COMP%]{color:#268226}.priority-low[_ngcontent-%COMP%]{color:#2088cd}.img-placeholder[_ngcontent-%COMP%]{height:100px;background-repeat:no-repeat;background-size:contain;background-image:url(placeholder.26c5501417f0a21d2c61.gif)}.details-header[_ngcontent-%COMP%], .p-dialog-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:8px}@media screen and (min-width:769px){.details-header[_ngcontent-%COMP%], .p-dialog-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:0}}"]}),t})();var Ft=e("8aBz"),zt=e("ZRSf");function jt(t,i){if(1&t){const t=at.Qb();at.Pb(0,"div",6),at.zc(1),at.bc(2,"translate"),at.Pb(3,"span",7),at.Kb(4,"i",8),at.Pb(5,"input",9),at.Wb("input",(function(i){return at.rc(t),at.ac(),at.qc(1).filterGlobal(i.target.value,"contains")})),at.bc(6,"translate"),at.Ob(),at.Ob(),at.Pb(7,"button",10),at.Wb("throttleClick",(function(){return at.rc(t),at.ac().onRefresh()})),at.bc(8,"translate"),at.Ob(),at.Ob()}2&t&&(at.yb(1),at.Bc(" ",at.cc(2,3,"WORKLIST.TABLE_TITLE")," "),at.yb(4),at.hc("placeholder",at.cc(6,5,"WORKLIST.SEARCH_PLACEHOLDER")),at.yb(2),at.hc("label",at.cc(8,7,"WORKLIST.REFRESH_BUTTON")))}function Bt(t,i){if(1&t&&at.Kb(0,"p-sortIcon",16),2&t){const t=at.ac().$implicit;at.hc("field",t.field)}}function Kt(t,i){if(1&t&&(at.Pb(0,"th",14),at.zc(1),at.xc(2,Bt,1,1,"p-sortIcon",15),at.Ob()),2&t){const t=i.$implicit;at.wc("width",t.width),at.hc("pSortableColumn",t.isSortable?t.field:null),at.yb(1),at.Bc(" ",t.header," "),at.yb(1),at.hc("ngIf",t.isSortable)}}function Dt(t,i){if(1&t&&(at.Pb(0,"tr"),at.Pb(1,"th",11),at.zc(2,"#"),at.Ob(),at.xc(3,Kt,3,5,"th",12),at.Kb(4,"th",13),at.Ob()),2&t){const t=at.ac();at.yb(3),at.hc("ngForOf",t.cols)}}function Wt(t,i){1&t&&(at.Pb(0,"span",27),at.zc(1,"New"),at.Ob())}function Ht(t,i){if(1&t&&(at.Pb(0,"span"),at.xc(1,Wt,2,0,"span",26),at.Ob()),2&t){const t=at.ac().$implicit,i=at.ac().$implicit;at.yb(1),at.hc("ngIf",i[t.field])}}function Nt(t,i){if(1&t&&(at.Pb(0,"span"),at.zc(1),at.bc(2,"date"),at.Ob()),2&t){const t=at.ac().$implicit,i=at.ac().$implicit;at.yb(1),at.Bc(" ",at.dc(2,1,i[t.field],"dd.MM.yyyy HH:mm:ss")," ")}}function Jt(t,i){if(1&t&&(at.Pb(0,"span"),at.zc(1),at.Ob()),2&t){const t=at.ac().$implicit,i=at.ac().$implicit;at.yb(1),at.Bc(" ",i[t.field]," ")}}function qt(t,i){if(1&t&&(at.Pb(0,"td",23),at.xc(1,Ht,2,1,"span",24),at.xc(2,Nt,3,4,"span",24),at.xc(3,Jt,2,1,"span",25),at.Ob()),2&t){const t=i.$implicit;at.wc("width",t.width)("text-align",t.align),at.Bb("tagged-cell","isNew"===t.field),at.hc("ngSwitch",t.field),at.yb(1),at.hc("ngSwitchCase","isNew"),at.yb(1),at.hc("ngSwitchCase","timeCreated")}}function Ut(t,i){if(1&t){const t=at.Qb();at.Pb(0,"button",28),at.Wb("click",(function(){at.rc(t);const i=at.ac().$implicit;return at.ac().onAccept(i)})),at.bc(1,"translate"),at.Ob()}2&t&&at.hc("title",at.cc(1,1,"WORKLIST.ACCEPT_BUTTON"))}function Gt(t,i){if(1&t){const t=at.Qb();at.Pb(0,"button",29),at.Wb("click",(function(){at.rc(t);const i=at.ac().$implicit;return at.ac().onDetails(i)})),at.bc(1,"translate"),at.Ob()}2&t&&at.hc("title",at.cc(1,1,"WORKLIST.DETAILS_BUTTON"))}function Yt(t,i){if(1&t){const t=at.Qb();at.Pb(0,"button",30),at.Wb("click",(function(){at.rc(t);const i=at.ac().$implicit;return at.ac().onRelinquish(i)})),at.bc(1,"translate"),at.Kb(2,"i",31),at.Ob()}2&t&&at.hc("title",at.cc(1,1,"WORKLIST.RELINQUISH_BUTTON"))}function Qt(t,i){if(1&t&&(at.Pb(0,"tr"),at.Pb(1,"td",17),at.zc(2),at.Ob(),at.xc(3,qt,4,9,"td",18),at.Pb(4,"td",19),at.xc(5,Ut,2,3,"button",20),at.xc(6,Gt,2,3,"button",21),at.xc(7,Yt,3,3,"button",22),at.Ob(),at.Ob()),2&t){const t=i.$implicit,e=i.rowIndex,n=at.ac();at.yb(2),at.Ac(e+1),at.yb(1),at.hc("ngForOf",n.cols),at.yb(2),at.hc("ngIf",t.isNew),at.yb(1),at.hc("ngIf",!t.isNew),at.yb(1),at.hc("ngIf",!t.isNew)}}function Vt(t,i){if(1&t&&(at.Pb(0,"div",32),at.zc(1),at.bc(2,"translate"),at.Ob()),2&t){at.ac();const t=at.qc(1);at.yb(1),at.Cc("",at.cc(2,2,"WORKLIST.TOTAL"),": ",t.totalRecords,"")}}const Zt=function(){return[10,25,50,100]},Xt=function(){return{minWidth:"1024px"}};let ti=(()=>{class t{constructor(t){this._i18n=t,this.items=[],this.loading=!1,this.accept=new at.n,this.details=new at.n,this.refresh=new at.n,this.relinquish=new at.n,this.cols=[{field:"isNew",header:"",width:"60px",align:"center",isSortable:!0},{field:"priority",header:this._i18n.instant("WORKLIST.TABLE_HEADERS.PRIORITY"),width:"130px",align:"right",isSortable:!0},{field:"subject",header:this._i18n.instant("WORKLIST.TABLE_HEADERS.SUBJECT"),isSortable:!0},{field:"message",header:this._i18n.instant("WORKLIST.TABLE_HEADERS.MESSAGE"),isSortable:!0},{field:"role",header:this._i18n.instant("WORKLIST.TABLE_HEADERS.ROLE"),isSortable:!0},{field:"timeCreated",header:this._i18n.instant("WORKLIST.TABLE_HEADERS.TIME_CREATED"),width:"160px",align:"center",isSortable:!0}],this.filterCols=["priority","subject","message","role","timeCreated"]}onAccept(t){this.accept.emit(t)}onRelinquish(t){this.relinquish.emit(t)}onDetails(t){this.details.emit(t)}onRefresh(){this.refresh.emit()}}return t.\u0275fac=function(i){return new(i||t)(at.Jb(a.d))},t.\u0275cmp=at.Db({type:t,selectors:[["app-tasks-table"]],inputs:{items:"items",loading:"loading"},outputs:{accept:"accept",details:"details",refresh:"refresh",relinquish:"relinquish"},decls:6,vars:11,consts:[["dataKey","id","sortField","timeCreated","styleClass","p-datatable-sm p-datatable-gridlines",3,"loading","globalFilterFields","paginator","rows","rowsPerPageOptions","value","scrollable","tableStyle","sortOrder"],["table",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","paginatorleft"],[1,"table-header"],[1,"p-input-icon-left",2,"margin-left","16px","width","40%"],[1,"pi","pi-search"],["pInputText","","type","text",2,"width","100%",3,"placeholder","input"],["pButton","","pRipple","","icon","pi pi-refresh",1,"is-pulled-right","no-label-mobile",3,"label","throttleClick"],[2,"width","60px"],[3,"width","pSortableColumn",4,"ngFor","ngForOf"],[2,"width","85px"],[3,"pSortableColumn"],[3,"field",4,"ngIf"],[3,"field"],[2,"width","60px","text-align","right"],[3,"width","text-align","tagged-cell","ngSwitch",4,"ngFor","ngForOf"],[1,"button-cell",2,"width","85px","vertical-align","middle"],["type","button","pButton","","pRipple","","icon","pi pi-check","iconPos","left","class","button is-success",3,"title","click",4,"ngIf"],["type","button","pButton","","pRipple","","icon","pi pi-search","iconPos","left","style","margin-right: 8px",3,"title","click",4,"ngIf"],["type","button","pButton","","pRipple","","icon","pi pi-minus-circle","iconPos","left","class","p-button-danger",3,"title","click",4,"ngIf"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["class","tag is-info is-light",4,"ngIf"],[1,"tag","is-info","is-light"],["type","button","pButton","","pRipple","","icon","pi pi-check","iconPos","left",1,"button","is-success",3,"title","click"],["type","button","pButton","","pRipple","","icon","pi pi-search","iconPos","left",2,"margin-right","8px",3,"title","click"],["type","button","pButton","","pRipple","","icon","pi pi-minus-circle","iconPos","left",1,"p-button-danger",3,"title","click"],[1,"fa","fa-copy"],[1,"total"]],template:function(t,i){1&t&&(at.Pb(0,"p-table",0,1),at.xc(2,jt,9,9,"ng-template",2),at.xc(3,Dt,5,1,"ng-template",3),at.xc(4,Qt,8,5,"ng-template",4),at.xc(5,Vt,3,4,"ng-template",5),at.Ob()),2&t&&at.hc("loading",i.loading)("globalFilterFields",i.filterCols)("paginator",!0)("rows",25)("rowsPerPageOptions",at.ic(9,Zt))("value",i.items)("scrollable",!0)("tableStyle",at.ic(10,Xt))("sortOrder",-1)},directives:[zt.c,lt.e,mt.a,ht.a,ft.a,gt.a,s.l,zt.b,s.m,zt.a,s.o,s.p,s.q],pipes:[a.c,s.e],styles:[""],changeDetection:0}),t})();const ii=[{path:"",pathMatch:"full",component:(()=>{class t{constructor(t,i,e){this._dialogService=t,this._i18n=i,this._worklistService=e,this.loading=!0,this.tasks=[]}ngOnInit(){this.loadTasks()}loadTasks(){this.loading=!0,this._worklistService.getTasks().subscribe(t=>{this.tasks=t,this.loading=!1},()=>{this.tasks=[],this.loading=!1})}acceptTask(t){t=Object.assign(Object.assign({},t),{action:"$Accept",formFields:{}}),this._worklistService.saveTask(t).subscribe(()=>this.loadTasks())}relinquishTask(t){t=Object.assign(Object.assign({},t),{action:"$Relinquish",formFields:{}}),this._worklistService.saveTask(t).subscribe(()=>this.loadTasks())}showTaskDetails(t){this._dialogService.open(Mt,{contentStyle:{overflow:"hidden"},data:{id:t.id},header:t.subject||this._i18n.instant("TASK_MODAL.TITLE"),dismissableMask:!1,transitionOptions:"350ms cubic-bezier(0.25, 0.8, 0.25, 1)",modal:!0,style:{"max-width":"1200px"},styleClass:"details-modal"}).onClose.subscribe(t=>t?this.loadTasks():null)}}return t.\u0275fac=function(i){return new(i||t)(at.Jb(u.a),at.Jb(a.d),at.Jb(bt))},t.\u0275cmp=at.Db({type:t,selectors:[["app-worklist-container"]],features:[at.xb([u.a])],decls:5,vars:2,consts:[[1,"hero","fullheight-with-navbar","main-bg"],["position","top-right"],[1,"container","is-fluid",2,"padding-top","32px","padding-bottom","32px"],[1,"card","border-rounded",2,"padding","16px","overflow","auto"],[3,"loading","items","refresh","accept","relinquish","details"]],template:function(t,i){1&t&&(at.Pb(0,"div",0),at.Kb(1,"p-toast",1),at.Pb(2,"div",2),at.Pb(3,"div",3),at.Pb(4,"app-tasks-table",4),at.Wb("refresh",(function(){return i.loadTasks()}))("accept",(function(t){return i.acceptTask(t)}))("relinquish",(function(t){return i.relinquishTask(t)}))("details",(function(t){return i.showTaskDetails(t)})),at.Ob(),at.Ob(),at.Ob(),at.Ob()),2&t&&(at.yb(4),at.hc("loading",i.loading)("items",i.tasks))},directives:[Ft.a,ti],styles:[""]}),t})()}];let ei=(()=>{class t{}return t.\u0275mod=at.Hb({type:t}),t.\u0275inj=at.Gb({factory:function(i){return new(i||t)},imports:[[l.b.forChild(ii)],l.b]}),t})(),ni=(()=>{class t{}return t.\u0275mod=at.Hb({type:t}),t.\u0275inj=at.Gb({factory:function(i){return new(i||t)},imports:[[s.c,r.f,r.k,c.a,a.b,o.a,ei]]}),t})()}}]);