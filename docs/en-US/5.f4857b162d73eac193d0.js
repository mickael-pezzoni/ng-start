(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Yj9t:function(e,t,r){"use strict";r.r(t),r.d(t,"AuthModule",function(){return Ke});var o=r("ofXK"),i=r("tyNb"),a=r("lJxs"),n=r("fXoL"),s=r("oQ8E"),c=r("f4AX");let b=(()=>{class e{constructor(e,t,r){this.logService=e,this.router=t,this.userService=r}canActivate(){return this.userService.user$.pipe(Object(a.a)(e=>void 0===e||(this.logService.info("guard",this.constructor.name),this.router.parseUrl("/"))))}}return e.\u0275fac=function(t){return new(t||e)(n.Wb(s.a),n.Wb(i.b),n.Wb(c.a))},e.\u0275prov=n.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),d=(()=>{class e{constructor(e,t,r){this.logService=e,this.router=t,this.userService=r}canActivate(){const e=this.userService.jwt;return this.userService.user$.pipe(Object(a.a)(t=>void 0!==e&&void 0!==t||(this.logService.info("guard",this.constructor.name),this.router.parseUrl("/auth"))))}}return e.\u0275fac=function(t){return new(t||e)(n.Wb(s.a),n.Wb(i.b),n.Wb(c.a))},e.\u0275prov=n.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var l=r("PCNd"),u=r("Wp6s"),f=r("wZkO"),m=r("3Pt+"),p=r("XNiG"),h=r("1G5W"),g=r("LRne"),P=r("z6cu"),O=r("3E0/"),v=r("eIep"),w=r("vkgz"),y=r("tk/3");let z=(()=>{class e{constructor(e,t){this.userService=e,this.http=t}signin$(e){return"johndoe"!==e.identifier.toLowerCase()&&"johndoe@test.com"!==e.identifier.toLowerCase()?Object(g.a)(void 0).pipe(Object(O.a)(2e3),Object(v.a)(()=>Object(P.a)(new Error("Auth.form.identifier.invalid")))):"johndoepass"!==e.password?Object(g.a)(void 0).pipe(Object(O.a)(2e3),Object(v.a)(()=>Object(P.a)(new Error("Auth.form.password.invalid")))):Object(g.a)({jwt:"ey...",user:{id:0,createdAt:new Date,updatedAt:new Date,username:"johndoe",email:"johndoe@test.com",isConfirmed:!0}}).pipe(Object(O.a)(2e3),Object(w.a)(e=>this.userService.update(e.user,e.jwt)))}signup$(e){return"johndoe@test.com"===e.email.toLowerCase()?Object(g.a)(void 0).pipe(Object(O.a)(2e3),Object(v.a)(()=>Object(P.a)(new Error("Auth.form.error.email.taken")))):"johndoe"===e.username.toLowerCase()?Object(g.a)(void 0).pipe(Object(O.a)(2e3),Object(v.a)(()=>Object(P.a)(new Error("Auth.form.error.username.taken")))):Object(g.a)({jwt:"ey...",user:{id:0,createdAt:new Date,updatedAt:new Date,username:e.username,email:e.email,isConfirmed:!1}}).pipe(Object(O.a)(2e3),Object(w.a)(e=>this.userService.update(e.user,e.jwt)))}requestConfirmEmailToken$(e){return Object(g.a)({}).pipe(Object(O.a)(2e3))}verifyConfirmEmailToken$(e){return"johndoeToken"!==e.token?Object(g.a)(void 0).pipe(Object(O.a)(2e3),Object(v.a)(()=>Object(P.a)(new Error("Auth.form.identifier.invalid")))):Object(g.a)({jwt:"ey...",user:{id:0,createdAt:new Date,updatedAt:new Date,username:"johndoe",email:"johndoe@test.com",isConfirmed:!0}}).pipe(Object(O.a)(2e3),Object(w.a)(e=>this.userService.update(e.user,e.jwt)))}requestResetPasswordToken$(e){return"johndoe@test.com"!==e.email.toLowerCase()?Object(g.a)(void 0).pipe(Object(O.a)(2e3),Object(v.a)(()=>Object(P.a)(new Error("Auth.form.error.user.not-exist")))):Object(g.a)({}).pipe(Object(O.a)(2e3))}verifyResetPasswordToken$(e){return"johndoe"!==e.token?Object(g.a)(void 0).pipe(Object(O.a)(2e3),Object(v.a)(()=>Object(P.a)(new Error("Auth.form.identifier.invalid")))):Object(g.a)({}).pipe(Object(O.a)(2e3))}setNewPassword$(e){return Object(g.a)({}).pipe(Object(O.a)(2e3))}}return e.\u0275fac=function(t){return new(t||e)(n.Wb(c.a),n.Wb(y.b))},e.\u0275prov=n.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var $=r("dNgK");let k=(()=>{class e{constructor(e){this.snackBar=e,this.horizontalPosition="center",this.verticalPosition="top"}open(e,t){return this.snackBar.open(e,void 0,{duration:3e3,horizontalPosition:this.horizontalPosition,verticalPosition:this.verticalPosition,panelClass:["mat-toolbar","mat-"+t]})}}return e.\u0275fac=function(t){return new(t||e)(n.Wb($.a))},e.\u0275prov=n.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var I=r("kmnG"),j=r("qFsG"),T=r("bTqV"),C=r("NFeN"),S=r("bv9b");function D(e,t){1&e&&(n.Pb(0,"mat-error"),n.Tb(1,12),n.Ob())}function M(e,t){1&e&&(n.Pb(0,"mat-error"),n.Tb(1,13),n.Ob())}function A(e,t){if(1&e){const e=n.Qb();n.Pb(0,"button",14),n.Zb("click",function(){n.qc(e);const t=n.dc();return t.isPasswordHidden=!t.isPasswordHidden}),n.Pb(1,"mat-icon"),n.Ac(2),n.Ob(),n.Ob()}if(2&e){const e=n.dc();n.zb(2),n.Cc(" ",e.isPasswordHidden?"visibility_off":"visibility"," ")}}function H(e,t){1&e&&(n.Pb(0,"mat-error"),n.Tb(1,15),n.Ob())}function E(e,t){1&e&&(n.Pb(0,"mat-error"),n.Tb(1,16),n.Ob())}function R(e,t){1&e&&n.Kb(0,"mat-progress-bar",17)}function G(e,t){1&e&&(n.Pb(0,"button",18),n.Tb(1,19),n.Ob())}function q(e,t){if(1&e&&(n.Pb(0,"button",20),n.Pb(1,"span"),n.Tb(2,21),n.Ob(),n.Pb(3,"mat-icon"),n.Ac(4,"send"),n.Ob(),n.Ob()),2&e){const e=n.dc();n.ic("disabled",!e.formGroup.valid)}}let L=(()=>{class e{constructor(e,t,r,o){this.formBuilder=e,this.authService=t,this.router=r,this.snackbarService=o,this.errorHappens=new n.n,this.isLoading=!1,this.isPasswordHidden=!0,this.errorMessage="",this.isDestroyed$=new p.a,this.formGroup=this.createFormGroup("change")}get f(){return this.formGroup.controls}ngOnInit(){}ngOnDestroy(){this.isDestroyed$.next(!0),this.isDestroyed$.complete()}onSubmit(){var e,t;return this.isLoading=!0,this.formGroup.disable(),this.isPasswordHidden=!0,this.authService.signin$({identifier:null===(e=this.f.identifier)||void 0===e?void 0:e.value,password:null===(t=this.f.password)||void 0===t?void 0:t.value}).pipe(Object(h.a)(this.isDestroyed$)).subscribe(e=>this.router.navigate(["/"]),e=>{this.errorHappens.emit(e.message),this.errorMessage=e.message,this.isLoading=!1,this.formGroup.enable()})}createFormGroup(e,t){const r=this.formBuilder.group({identifier:[void 0,[m.m.required]],password:[void 0,[m.m.required]]},{updateOn:e,validators:this.mustNotBeRejectedValidator()});return void 0!==t&&r.setValue(t),r}mustNotBeRejectedValidator(){return()=>{"Auth.form.identifier.invalid"===this.errorMessage?this.f.identifier.setErrors({mustNotBeRejected:!0}):"Auth.form.password.invalid"===this.errorMessage?this.f.password.setErrors({mustNotBeRejected:!0}):""!==this.errorMessage&&this.snackbarService.open(this.errorMessage,"warn"),this.errorMessage=""}}}return e.\u0275fac=function(t){return new(t||e)(n.Jb(m.b),n.Jb(z),n.Jb(i.b),n.Jb(k))},e.\u0275cmp=n.Db({type:e,selectors:[["app-signin-form"]],outputs:{errorHappens:"errorHappens"},decls:18,vars:10,consts:function(){let e,t,r,o,i,a,n,s,c,b;return e=" Username or email ",t="Password",r="Toggle password visibility",o=" You must enter a value ",i=" Please check your identifier ",a="Toggle password visibility",n=" You must enter a value ",s=" Please check your password ",c=" Forgot password ",b="Submit",[[3,"formGroup","ngSubmit"],["appearance","outline","color","accent",1,"form-field"],e,["matInput","","formControlName","identifier"],[4,"ngIf"],["matInput","","formControlName","password",3,"type"],t,["type","button","mat-icon-button","","matSuffix","","aria-label",r,3,"click",4,"ngIf"],[1,"button-group","mt-20"],["mode","indeterminate","color","accent",4,"ngIf"],["type","button","mat-button","","color","accent","routerLink","/auth/forgot-password",4,"ngIf"],["mat-raised-button","","class","icon-after rounded","color","accent","type","submit",3,"disabled",4,"ngIf"],o,i,["type","button","mat-icon-button","","matSuffix","","aria-label",a,3,"click"],n,s,["mode","indeterminate","color","accent"],["type","button","mat-button","","color","accent","routerLink","/auth/forgot-password"],c,["mat-raised-button","","color","accent","type","submit",1,"icon-after","rounded",3,"disabled"],b]},template:function(e,t){1&e&&(n.Pb(0,"form",0),n.Zb("ngSubmit",function(){return t.onSubmit()}),n.Pb(1,"mat-form-field",1),n.Pb(2,"mat-label"),n.Tb(3,2),n.Ob(),n.Kb(4,"input",3),n.yc(5,D,2,0,"mat-error",4),n.yc(6,M,2,0,"mat-error",4),n.Ob(),n.Pb(7,"mat-form-field",1),n.Kb(8,"input",5),n.Pb(9,"mat-label"),n.Tb(10,6),n.Ob(),n.yc(11,A,3,1,"button",7),n.yc(12,H,2,0,"mat-error",4),n.yc(13,E,2,0,"mat-error",4),n.Ob(),n.Pb(14,"div",8),n.yc(15,R,1,0,"mat-progress-bar",9),n.yc(16,G,2,0,"button",10),n.yc(17,q,5,1,"button",11),n.Ob(),n.Ob()),2&e&&(n.ic("formGroup",t.formGroup),n.zb(5),n.ic("ngIf",null==t.f.identifier||null==t.f.identifier.errors?null:t.f.identifier.errors.required),n.zb(1),n.ic("ngIf",null==t.f.identifier||null==t.f.identifier.errors?null:t.f.identifier.errors.mustNotBeRejected),n.zb(2),n.ic("type",t.isPasswordHidden?"password":"text"),n.zb(3),n.ic("ngIf",!t.isLoading),n.zb(1),n.ic("ngIf",null==t.f.password||null==t.f.password.errors?null:t.f.password.errors.required),n.zb(1),n.ic("ngIf",null==t.f.password||null==t.f.password.errors?null:t.f.password.errors.mustNotBeRejected),n.zb(2),n.ic("ngIf",t.isLoading),n.zb(1),n.ic("ngIf",!t.isLoading),n.zb(1),n.ic("ngIf",!t.isLoading))},directives:[m.n,m.i,m.d,I.c,I.f,j.a,m.a,m.h,m.c,o.k,I.b,T.b,I.g,C.a,S.a,i.c],styles:[".form-field[_ngcontent-%COMP%]{width:100%}.button-group[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap-reverse;justify-content:space-between}"],changeDetection:0}),e})();var N=r("0IaG");let x=(()=>{class e{constructor(e){this.dialogRef=e}ngOnInit(){}onClose(){this.dialogRef.close()}}return e.\u0275fac=function(t){return new(t||e)(n.Jb(N.e))},e.\u0275cmp=n.Db({type:e,selectors:[["app-confirm-email-dialog"]],decls:8,vars:0,consts:function(){let e,t,r;return e="Check your mailbox",t=" A confirmation email has been sent, please check your inbox and follow the link in the email to confirm your registration. ",r=" Ok ",[["matDialogTitle",""],e,t,["mat-dialog-actions",""],["mat-raised-button","","color","accent",1,"rounded",3,"click"],r]},template:function(e,t){1&e&&(n.Pb(0,"h2",0),n.Tb(1,1),n.Ob(),n.Pb(2,"mat-dialog-content"),n.Pb(3,"p"),n.Tb(4,2),n.Ob(),n.Ob(),n.Pb(5,"div",3),n.Pb(6,"button",4),n.Zb("click",function(){return t.onClose()}),n.Tb(7,5),n.Ob(),n.Ob())},directives:[N.f,N.c,N.b,T.b],styles:[""],changeDetection:0}),e})();function J(e,t){1&e&&(n.Pb(0,"mat-error"),n.Tb(1,17),n.Ob())}function B(e,t){1&e&&(n.Pb(0,"mat-error"),n.Tb(1,18),n.Ob())}function K(e,t){1&e&&(n.Pb(0,"mat-error"),n.Tb(1,19),n.Ob())}function _(e,t){1&e&&(n.Pb(0,"mat-error"),n.Tb(1,20),n.Ob())}function V(e,t){1&e&&(n.Pb(0,"mat-error"),n.Tb(1,21),n.Ob())}function F(e,t){1&e&&(n.Pb(0,"mat-error"),n.Tb(1,22),n.Ob())}function Y(e,t){1&e&&(n.Pb(0,"mat-error"),n.Tb(1,23),n.Ob())}function Z(e,t){1&e&&(n.Pb(0,"mat-error"),n.Tb(1,24),n.Ob())}function W(e,t){1&e&&(n.Pb(0,"mat-error"),n.Tb(1,25),n.Ob())}function U(e,t){1&e&&(n.Pb(0,"mat-error"),n.Tb(1,26),n.Ob())}function Q(e,t){1&e&&n.Kb(0,"mat-progress-bar",27)}function X(e,t){if(1&e&&(n.Pb(0,"button",28),n.Pb(1,"span"),n.Tb(2,29),n.Ob(),n.Pb(3,"mat-icon"),n.Ac(4,"send"),n.Ob(),n.Ob()),2&e){const e=n.dc();n.ic("disabled",!e.formGroup.valid)}}let ee=(()=>{class e{constructor(e,t,r,o,i){this.formBuilder=e,this.authService=t,this.router=r,this.snackbarService=o,this.dialog=i,this.errorHappens=new n.n,this.isLoading=!1,this.isPasswordHidden=!0,this.errorMessage="",this.isDestroyed$=new p.a,this.formGroup=this.createFormGroup("change")}get f(){return this.formGroup.controls}ngOnInit(){}ngOnDestroy(){this.isDestroyed$.next(!0),this.isDestroyed$.complete()}onSubmit(){var e,t,r;return this.isLoading=!0,this.formGroup.disable(),this.isPasswordHidden=!0,this.authService.signup$({username:null===(e=this.f.username)||void 0===e?void 0:e.value,email:null===(t=this.f.email)||void 0===t?void 0:t.value,password:null===(r=this.f.password)||void 0===r?void 0:r.value}).pipe(Object(v.a)(e=>this.dialog.open(x).afterClosed()),Object(h.a)(this.isDestroyed$)).subscribe(e=>this.router.navigate(["/"]),e=>{this.errorHappens.emit(e.message),this.errorMessage=e.message,this.isLoading=!1,this.formGroup.enable()})}onCloseDialog(){return this.dialog.closeAll(),this.router.navigate(["home"])}createFormGroup(e,t){const r=this.formBuilder.group({username:[null,[m.m.required,m.m.pattern(/^(?=.{3,20}$)[a-z][a-z0-9]+(?:-[a-z0-9]+)?$/)]],email:[null,[m.m.required,m.m.pattern(/^(?=.{4,64}$)[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],password:[null,[m.m.required,m.m.pattern(/^.{8,191}$/)]],confirmPassword:[null,[m.m.required]]},{updateOn:e,validators:[this.mustMatchValidator("password","confirmPassword"),this.mustNotBeRejectedValidator()]});return void 0!==t&&r.setValue(t),r}mustMatchValidator(e,t){return r=>{const o=r.controls[t];(null===o.errors||o.errors.mustMatch)&&o.setErrors(r.controls[e].value!==o.value?{mustMatch:!0}:null)}}mustNotBeRejectedValidator(){return e=>{"Auth.form.error.email.taken"===this.errorMessage?e.controls.email.setErrors({mustNotBeRejected:!0}):"Auth.form.error.username.taken"===this.errorMessage?e.controls.username.setErrors({mustNotBeRejected:!0}):""!==this.errorMessage&&this.snackbarService.open(this.errorMessage,"warn"),this.errorMessage=""}}}return e.\u0275fac=function(t){return new(t||e)(n.Jb(m.b),n.Jb(z),n.Jb(i.b),n.Jb(k),n.Jb(N.a))},e.\u0275cmp=n.Db({type:e,selectors:[["app-signup-form"]],outputs:{errorHappens:"errorHappens"},decls:37,vars:21,consts:function(){let e,t,r,o,i,a,n,s,c,b,d,l,u,f,m,p,h;return e="Email address",t="Username",r="Password",o="Toggle password visibility",i="Confirm password",a="Toggle password visibility",n=" You must enter a value ",s=" Not a valid email ",c=" Email is already taken ",b=" You must enter a value ",d=" Must contain 3-20 alphanumeric characters ",l=" Username is already taken ",u="You must enter a value",f=" Must contain 8+ characters ",m="Passwords doesn't match",p="You must enter a value ",h="Submit",[[3,"formGroup","ngSubmit"],["appearance","outline","color","accent",1,"form-field"],e,["matInput","","formControlName","email","color","primary","required",""],[4,"ngIf"],t,["matInput","","formControlName","username","color","primary","required",""],["matInput","","formControlName","password","required","",3,"type"],r,["type","button","mat-icon-button","","matSuffix","","aria-label",o,3,"click"],["matInput","","formControlName","confirmPassword","required","",3,"type"],i,["type","button","mat-icon-button","","matSuffix","","aria-label",a,3,"click"],[1,"button-group","mt-20"],["mode","indeterminate","color","accent",4,"ngIf"],[1,"fill-remaining-space"],["mat-raised-button","","class","icon-after rounded","color","accent","type","submit",3,"disabled",4,"ngIf"],n,s,c,b,d,l,u,f,m,p,["mode","indeterminate","color","accent"],["mat-raised-button","","color","accent","type","submit",1,"icon-after","rounded",3,"disabled"],h]},template:function(e,t){1&e&&(n.Pb(0,"form",0),n.Zb("ngSubmit",function(){return t.onSubmit()}),n.Pb(1,"mat-form-field",1),n.Pb(2,"mat-label"),n.Tb(3,2),n.Ob(),n.Kb(4,"input",3),n.yc(5,J,2,0,"mat-error",4),n.yc(6,B,2,0,"mat-error",4),n.yc(7,K,2,0,"mat-error",4),n.Ob(),n.Pb(8,"mat-form-field",1),n.Pb(9,"mat-label"),n.Tb(10,5),n.Ob(),n.Kb(11,"input",6),n.yc(12,_,2,0,"mat-error",4),n.yc(13,V,2,0,"mat-error",4),n.yc(14,F,2,0,"mat-error",4),n.Ob(),n.Pb(15,"mat-form-field",1),n.Kb(16,"input",7),n.Pb(17,"mat-label"),n.Tb(18,8),n.Ob(),n.Pb(19,"button",9),n.Zb("click",function(){return t.isPasswordHidden=!t.isPasswordHidden}),n.Pb(20,"mat-icon"),n.Ac(21),n.Ob(),n.Ob(),n.yc(22,Y,2,0,"mat-error",4),n.yc(23,Z,2,0,"mat-error",4),n.Ob(),n.Pb(24,"mat-form-field",1),n.Kb(25,"input",10),n.Pb(26,"mat-label"),n.Tb(27,11),n.Ob(),n.Pb(28,"button",12),n.Zb("click",function(){return t.isPasswordHidden=!t.isPasswordHidden}),n.Pb(29,"mat-icon"),n.Ac(30),n.Ob(),n.Ob(),n.yc(31,W,2,0,"mat-error",4),n.yc(32,U,2,0,"mat-error",4),n.Ob(),n.Pb(33,"div",13),n.yc(34,Q,1,0,"mat-progress-bar",14),n.Kb(35,"span",15),n.yc(36,X,5,1,"button",16),n.Ob(),n.Ob()),2&e&&(n.ic("formGroup",t.formGroup),n.zb(5),n.ic("ngIf",null==t.f.email||null==t.f.email.errors?null:t.f.email.errors.required),n.zb(1),n.ic("ngIf",null==t.f.email||null==t.f.email.errors?null:t.f.email.errors.pattern),n.zb(1),n.ic("ngIf",null==t.f.email||null==t.f.email.errors?null:t.f.email.errors.mustNotBeRejected),n.zb(5),n.ic("ngIf",null==t.f.username||null==t.f.username.errors?null:t.f.username.errors.required),n.zb(1),n.ic("ngIf",null==t.f.username||null==t.f.username.errors?null:t.f.username.errors.pattern),n.zb(1),n.ic("ngIf",null==t.f.username||null==t.f.username.errors?null:t.f.username.errors.mustNotBeRejected),n.zb(2),n.ic("type",t.isPasswordHidden?"password":"text"),n.zb(3),n.Ab("aria-label","isPasswordHidden password")("aria-pressed",t.isPasswordHidden),n.zb(2),n.Bc(t.isPasswordHidden?"visibility_off":"visibility"),n.zb(1),n.ic("ngIf",null==t.f.password||null==t.f.password.errors?null:t.f.password.errors.required),n.zb(1),n.ic("ngIf",null==t.f.password||null==t.f.password.errors?null:t.f.password.errors.pattern),n.zb(2),n.ic("type",t.isPasswordHidden?"password":"text"),n.zb(3),n.Ab("aria-label","isPasswordHidden password")("aria-pressed",t.isPasswordHidden),n.zb(2),n.Cc(" ",t.isPasswordHidden?"visibility_off":"visibility"," "),n.zb(1),n.ic("ngIf",null==t.f.confirmPassword||null==t.f.confirmPassword.errors?null:t.f.confirmPassword.errors.mustMatch),n.zb(1),n.ic("ngIf",null==t.f.confirmPassword||null==t.f.confirmPassword.errors?null:t.f.confirmPassword.errors.required),n.zb(2),n.ic("ngIf",t.isLoading),n.zb(2),n.ic("ngIf",!t.isLoading))},directives:[m.n,m.i,m.d,I.c,I.f,j.a,m.a,m.h,m.c,m.l,o.k,T.b,I.g,C.a,I.b,S.a],styles:[".form-field[_ngcontent-%COMP%]{width:100%}.button-group[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between}"],changeDetection:0}),e})();function te(e,t){if(1&e){const e=n.Qb();n.Pb(0,"mat-card-content",7),n.Pb(1,"app-signin-form",8),n.Zb("errorHappens",function(t){return n.qc(e),n.dc().onErrorHappens(t)}),n.Ob(),n.Ob()}}function re(e,t){if(1&e){const e=n.Qb();n.Pb(0,"mat-card-content",7),n.Pb(1,"app-signup-form",8),n.Zb("errorHappens",function(t){return n.qc(e),n.dc().onErrorHappens(t)}),n.Ob(),n.Ob()}}const oe=function(e){return{"anime-wobble":e}};let ie=(()=>{class e{constructor(e){this.changeDetectorRef=e,this.errorMessage=""}ngOnInit(){}onErrorHappens(e){this.errorMessage=e,this.changeDetectorRef.detectChanges(),setTimeout(()=>{this.errorMessage=""},500)}}return e.\u0275fac=function(t){return new(t||e)(n.Jb(n.h))},e.\u0275cmp=n.Db({type:e,selectors:[["app-auth"]],decls:11,vars:3,consts:function(){let e,t;return e="Sign in",t="Sign up",[[1,"centred","anime-zoom-in"],[1,"p-0","card-alone",3,"ngClass"],["mat-stretch-tabs","","animationDuration","0ms","color","accent"],["label",e],["matTabContent",""],["label",t],[2,"margin","10px"],[1,"m-0","p-16"],[3,"errorHappens"]]},template:function(e,t){1&e&&(n.Pb(0,"section",0),n.Pb(1,"mat-card",1),n.Pb(2,"mat-tab-group",2),n.Pb(3,"mat-tab",3),n.yc(4,te,2,0,"ng-template",4),n.Ob(),n.Pb(5,"mat-tab",5),n.yc(6,re,2,0,"ng-template",4),n.Ob(),n.Ob(),n.Ob(),n.Pb(7,"p",6),n.Pb(8,"b"),n.Ac(9,"Test:"),n.Ob(),n.Ac(10," johndoe / johndoepass"),n.Ob(),n.Ob()),2&e&&(n.zb(1),n.ic("ngClass",n.lc(1,oe,!!t.errorMessage)))},directives:[u.a,o.i,f.c,f.a,f.b,u.b,L,ee],styles:[""],changeDetection:0}),e})();var ae=r("nYR2"),ne=r("Xa2L");function se(e,t){1&e&&n.Lb(0)}function ce(e,t){if(1&e&&(n.Nb(0),n.yc(1,se,1,0,"ng-container",9),n.Mb()),2&e){const e=n.dc(3),t=n.oc(5),r=n.oc(9);n.zb(1),n.ic("ngIf",null==e.user?null:e.user.isConfirmed)("ngIfThen",t)("ngIfElse",r)}}function be(e,t){if(1&e&&(n.Nb(0),n.yc(1,ce,2,3,"ng-container",8),n.Mb()),2&e){const e=n.dc(2),t=n.oc(7);n.zb(1),n.ic("ngIf",e.token)("ngIfElse",t)}}function de(e,t){if(1&e&&(n.Pb(0,"mat-card",7),n.yc(1,be,2,2,"ng-container",8),n.Ob()),2&e){const e=n.dc(),t=n.oc(11);n.zb(1),n.ic("ngIf",!e.isUserAlreadyConfirmed)("ngIfElse",t)}}function le(e,t){1&e&&n.Kb(0,"mat-spinner",10)}function ue(e,t){if(1&e&&(n.Pb(0,"div",11),n.Pb(1,"mat-icon",12),n.Ac(2,"done"),n.Ob(),n.Ob(),n.Pb(3,"p"),n.Tb(4,13),n.Ob(),n.Pb(5,"div",14),n.Kb(6,"span",15),n.Pb(7,"button",16),n.Tb(8,17),n.Ob(),n.Ob()),2&e){const e=n.dc();n.zb(4),n.Vb(e.user.username),n.Ub(4)}}function fe(e,t){1&e&&n.Kb(0,"mat-progress-bar",23)}function me(e,t){if(1&e){const e=n.Qb();n.Pb(0,"button",24),n.Zb("click",function(){return n.qc(e),n.dc(2).onRequestConfirmEmailToken()}),n.Pb(1,"span"),n.Tb(2,25),n.Ob(),n.Pb(3,"mat-icon"),n.Ac(4,"send"),n.Ob(),n.Ob()}}function pe(e,t){if(1&e&&(n.Pb(0,"div",11),n.Pb(1,"mat-icon",12),n.Ac(2,"error_outline"),n.Ob(),n.Ob(),n.Pb(3,"p"),n.Tb(4,18),n.Ob(),n.Pb(5,"p"),n.Tb(6,19),n.Ob(),n.Pb(7,"div",14),n.yc(8,fe,1,0,"mat-progress-bar",20),n.Kb(9,"span",21),n.yc(10,me,5,0,"button",22),n.Ob()),2&e){const e=n.dc();n.zb(8),n.ic("ngIf",e.isProcessing),n.zb(2),n.ic("ngIf",!e.isProcessing)}}function he(e,t){1&e&&n.Kb(0,"mat-progress-bar",23)}function ge(e,t){if(1&e){const e=n.Qb();n.Pb(0,"button",24),n.Zb("click",function(){return n.qc(e),n.dc(2).onRequestConfirmEmailToken()}),n.Pb(1,"span"),n.Tb(2,29),n.Ob(),n.Pb(3,"mat-icon"),n.Ac(4,"send"),n.Ob(),n.Ob()}}function Pe(e,t){if(1&e&&(n.Pb(0,"div",11),n.Pb(1,"mat-icon",12),n.Ac(2,"error_outline"),n.Ob(),n.Ob(),n.Pb(3,"p",26),n.Tb(4,27),n.Ob(),n.Pb(5,"p"),n.Tb(6,28),n.Ob(),n.Pb(7,"div",14),n.yc(8,he,1,0,"mat-progress-bar",20),n.Kb(9,"span",21),n.yc(10,ge,5,0,"button",22),n.Ob()),2&e){const e=n.dc();n.zb(8),n.ic("ngIf",e.isProcessing),n.zb(2),n.ic("ngIf",!e.isProcessing)}}function Oe(e,t){1&e&&(n.Pb(0,"div",11),n.Pb(1,"mat-icon",12),n.Ac(2,"done"),n.Ob(),n.Ob(),n.Pb(3,"p"),n.Tb(4,30),n.Ob(),n.Pb(5,"div",14),n.Kb(6,"span",15),n.Pb(7,"button",16),n.Tb(8,31),n.Ob(),n.Ob())}let ve=(()=>{class e{constructor(e,t,r,o,i,a){this.activatedRoute=e,this.changeDetectorRef=t,this.authService=r,this.userService=o,this.dialog=i,this.router=a,this.isLoading=!1,this.isProcessing=!1,this.isUserAlreadyConfirmed=!1,this.token=void 0,this.user=void 0,this.isDestroyed$=new p.a}ngOnInit(){this.userService.user$.pipe(Object(h.a)(this.isDestroyed$)).subscribe(e=>{var t,r;return this.isUserAlreadyConfirmed=null!==(t=null==e?void 0:e.isConfirmed)&&void 0!==t&&t,this.token=null!==(r=this.activatedRoute.snapshot.paramMap.get("token"))&&void 0!==r?r:void 0,void 0===this.token?void 0:this.verifyToken(this.token)}).unsubscribe()}ngOnDestroy(){this.isDestroyed$.next(!0),this.isDestroyed$.complete()}onRequestConfirmEmailToken(){return this.isProcessing=!0,this.userService.user$.pipe(Object(v.a)(e=>this.authService.requestConfirmEmailToken$(e)),Object(v.a)(e=>this.dialog.open(x).afterClosed()),Object(h.a)(this.isDestroyed$)).subscribe(e=>this.router.navigate(["/"]))}verifyToken(e){return this.isUserAlreadyConfirmed=!1,this.isLoading=!0,this.authService.verifyConfirmEmailToken$({token:e}).pipe(Object(ae.a)(()=>{this.isLoading=!1,this.changeDetectorRef.detectChanges()}),Object(h.a)(this.isDestroyed$)).subscribe(e=>{this.user=e.user,this.changeDetectorRef.detectChanges()},e=>{var t;"email already confirmed"===(null===(t=e)||void 0===t?void 0:t.message)&&(this.isUserAlreadyConfirmed=!0,this.changeDetectorRef.detectChanges())})}}return e.\u0275fac=function(t){return new(t||e)(n.Jb(i.a),n.Jb(n.h),n.Jb(z),n.Jb(c.a),n.Jb(N.a),n.Jb(i.b))},e.\u0275cmp=n.Db({type:e,selectors:[["app-confirm-email"]],decls:12,vars:2,consts:function(){let e,t,r,o,i,a,n,s,c,b;return e="Welcome " + "\ufffd0\ufffd" + " ! Your are now a confirmed user !",t=" Continue ",r=" You have not confirmed your email address, verify your inbox and click on the link in the email to continue. ",o=" You can request a new verification link if the old one has expired. ",i="Resend",a=" Could not confirm your address. ",n=" You can request a new verification link if the old one has expired. ",s="Resend",c=" Everything is ready, your email address has already been verified. ",b=" Continue ",[[1,"centred"],["class","card-alone",4,"ngIf","ngIfElse"],["loadingTemplate",""],["emailConfirmedTemplate",""],["emailNotConfirmedTemplate",""],["emailConfirmErrorTemplate",""],["alreadyConfirmedEmailTemplate",""],[1,"card-alone"],[4,"ngIf","ngIfElse"],[4,"ngIf","ngIfThen","ngIfElse"],["color","accent","diameter","60",1,"m-16"],[1,"center","pb-16"],[1,"status-icon"],e,[1,"button-group","mt-16"],[1,"fill-remain-space"],["mat-raised-button","","color","accent","routerLink","/",1,"rounded"],t,r,o,["mode","indeterminate","color","accent","class","mt-16",4,"ngIf"],[1,"fill-remaining-space"],["mat-raised-button","","class","icon-after rounded","color","accent",3,"click",4,"ngIf"],["mode","indeterminate","color","accent",1,"mt-16"],["mat-raised-button","","color","accent",1,"icon-after","rounded",3,"click"],i,[1,"center"],a,n,s,c,b]},template:function(e,t){if(1&e&&(n.Pb(0,"section",0),n.yc(1,de,2,2,"mat-card",1),n.Ob(),n.yc(2,le,1,0,"ng-template",null,2,n.zc),n.yc(4,ue,9,1,"ng-template",null,3,n.zc),n.yc(6,pe,11,2,"ng-template",null,4,n.zc),n.yc(8,Pe,11,2,"ng-template",null,5,n.zc),n.yc(10,Oe,9,0,"ng-template",null,6,n.zc)),2&e){const e=n.oc(3);n.zb(1),n.ic("ngIf",!t.isLoading)("ngIfElse",e)}},directives:[o.k,u.a,ne.b,C.a,T.b,i.c,S.a],styles:[".button-group[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.status-icon[_ngcontent-%COMP%]{font-size:75px;height:75px;width:75px}"],changeDetection:0}),e})(),we=(()=>{class e{constructor(e){this.dialogRef=e}ngOnInit(){}onClose(){this.dialogRef.close()}}return e.\u0275fac=function(t){return new(t||e)(n.Jb(N.e))},e.\u0275cmp=n.Db({type:e,selectors:[["app-forgot-password-dialog"]],decls:8,vars:0,consts:function(){let e,t,r;return e="Check your mailbox",t=" If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes. ",r=" Ok ",[["matDialogTitle",""],e,t,["mat-dialog-actions",""],["mat-raised-button","","color","accent",1,"rounded",3,"click"],r]},template:function(e,t){1&e&&(n.Pb(0,"h2",0),n.Tb(1,1),n.Ob(),n.Pb(2,"mat-dialog-content"),n.Pb(3,"p"),n.Tb(4,2),n.Ob(),n.Ob(),n.Pb(5,"div",3),n.Pb(6,"button",4),n.Zb("click",function(){return t.onClose()}),n.Tb(7,5),n.Ob(),n.Ob())},directives:[N.f,N.c,N.b,T.b],styles:[""],changeDetection:0}),e})();function ye(e,t){1&e&&(n.Pb(0,"mat-error"),n.Tb(1,14),n.Ob())}function ze(e,t){1&e&&(n.Pb(0,"mat-error"),n.Tb(1,15),n.Ob())}function $e(e,t){1&e&&(n.Pb(0,"mat-error"),n.Tb(1,16),n.Ob())}function ke(e,t){1&e&&n.Kb(0,"mat-progress-bar",17)}function Ie(e,t){1&e&&(n.Pb(0,"button",18),n.Tb(1,19),n.Ob())}function je(e,t){if(1&e&&(n.Pb(0,"button",20),n.Pb(1,"span"),n.Tb(2,21),n.Ob(),n.Pb(3,"mat-icon"),n.Ac(4,"send"),n.Ob(),n.Ob()),2&e){const e=n.dc();n.ic("disabled",!e.formGroup.valid)}}function Te(e,t){1&e&&n.Lb(0)}function Ce(e,t){if(1&e&&(n.Nb(0),n.yc(1,Te,1,0,"ng-container",7),n.Mb()),2&e){const e=n.dc(2),t=n.oc(6),r=n.oc(8);n.zb(1),n.ic("ngIf",e.isValidToken)("ngIfThen",t)("ngIfElse",r)}}function Se(e,t){if(1&e&&(n.Nb(0),n.yc(1,Ce,2,3,"ng-container",2),n.Mb()),2&e){const e=n.dc(),t=n.oc(4);n.zb(1),n.ic("ngIf",!e.isLoading)("ngIfElse",t)}}function De(e,t){1&e&&n.Kb(0,"mat-spinner",8)}function Me(e,t){1&e&&(n.Pb(0,"mat-error"),n.Tb(1,24),n.Ob())}function Ae(e,t){1&e&&(n.Pb(0,"mat-error"),n.Tb(1,25),n.Ob())}function He(e,t){1&e&&(n.Pb(0,"mat-error"),n.Tb(1,26),n.Ob())}function Ee(e,t){1&e&&(n.Pb(0,"mat-error"),n.Tb(1,27),n.Ob())}function Re(e,t){1&e&&n.Kb(0,"mat-progress-bar",28)}function Ge(e,t){if(1&e&&(n.Pb(0,"button",29),n.Pb(1,"span"),n.Tb(2,30),n.Ob(),n.Pb(3,"mat-icon"),n.Ac(4,"send"),n.Ob(),n.Ob()),2&e){const e=n.dc(2);n.ic("disabled",!e.formGroup.valid)}}function qe(e,t){if(1&e){const e=n.Qb();n.Pb(0,"mat-card-title"),n.Tb(1,9),n.Ob(),n.Pb(2,"mat-card-content",10),n.Pb(3,"form",11),n.Zb("ngSubmit",function(){return n.qc(e),n.dc().onSubmit()}),n.Pb(4,"mat-form-field",12),n.Kb(5,"input",13),n.Pb(6,"mat-label"),n.Tb(7,14),n.Ob(),n.Pb(8,"button",15),n.Zb("click",function(){n.qc(e);const t=n.dc();return t.isPasswordHidden=!t.isPasswordHidden}),n.Pb(9,"mat-icon"),n.Ac(10),n.Ob(),n.Ob(),n.yc(11,Me,2,0,"mat-error",16),n.yc(12,Ae,2,0,"mat-error",16),n.Ob(),n.Pb(13,"mat-form-field",12),n.Kb(14,"input",17),n.Pb(15,"mat-label"),n.Tb(16,18),n.Ob(),n.Pb(17,"button",19),n.Zb("click",function(){n.qc(e);const t=n.dc();return t.isPasswordHidden=!t.isPasswordHidden}),n.Pb(18,"mat-icon"),n.Ac(19),n.Ob(),n.Ob(),n.yc(20,He,2,0,"mat-error",16),n.yc(21,Ee,2,0,"mat-error",16),n.Ob(),n.Pb(22,"div",20),n.yc(23,Re,1,0,"mat-progress-bar",21),n.Kb(24,"span",22),n.yc(25,Ge,5,1,"button",23),n.Ob(),n.Ob(),n.Ob()}if(2&e){const e=n.dc();n.zb(3),n.ic("formGroup",e.formGroup),n.zb(2),n.ic("type",e.isPasswordHidden?"password":"text"),n.zb(3),n.Ab("aria-label","isPasswordHidden password")("aria-pressed",e.isPasswordHidden),n.zb(2),n.Bc(e.isPasswordHidden?"visibility_off":"visibility"),n.zb(1),n.ic("ngIf",null==e.f.password||null==e.f.password.errors?null:e.f.password.errors.required),n.zb(1),n.ic("ngIf",null==e.f.password||null==e.f.password.errors?null:e.f.password.errors.pattern),n.zb(2),n.ic("type",e.isPasswordHidden?"password":"text"),n.zb(3),n.Ab("aria-label","isPasswordHidden password")("aria-pressed",e.isPasswordHidden),n.zb(2),n.Cc(" ",e.isPasswordHidden?"visibility_off":"visibility"," "),n.zb(1),n.ic("ngIf",null==e.f.confirmPassword||null==e.f.confirmPassword.errors?null:e.f.confirmPassword.errors.mustMatch),n.zb(1),n.ic("ngIf",null==e.f.confirmPassword||null==e.f.confirmPassword.errors?null:e.f.confirmPassword.errors.required),n.zb(2),n.ic("ngIf",e.isProcessing),n.zb(2),n.ic("ngIf",!e.isProcessing)}}function Le(e,t){1&e&&n.Kb(0,"mat-progress-bar",28)}function Ne(e,t){1&e&&(n.Pb(0,"button",36),n.Pb(1,"span"),n.Tb(2,37),n.Ob(),n.Pb(3,"mat-icon"),n.Ac(4,"open_in_new"),n.Ob(),n.Ob())}function xe(e,t){if(1&e&&(n.Pb(0,"div",0),n.Pb(1,"mat-icon",31),n.Ac(2,"error_outline"),n.Ob(),n.Ob(),n.Pb(3,"p",32),n.Tb(4,33),n.Ob(),n.Pb(5,"p"),n.Tb(6,34),n.Ob(),n.Pb(7,"div",20),n.yc(8,Le,1,0,"mat-progress-bar",21),n.Kb(9,"span",22),n.yc(10,Ne,5,0,"button",35),n.Ob()),2&e){const e=n.dc();n.zb(8),n.ic("ngIf",e.isProcessing),n.zb(2),n.ic("ngIf",!e.isProcessing)}}function Je(e,t){1&e&&(n.Pb(0,"div",0),n.Pb(1,"mat-icon",31),n.Ac(2,"done"),n.Ob(),n.Ob(),n.Pb(3,"p",32),n.Tb(4,38),n.Ob(),n.Pb(5,"div",20),n.Kb(6,"span",39),n.Pb(7,"button",40),n.Pb(8,"span"),n.Tb(9,41),n.Ob(),n.Pb(10,"mat-icon"),n.Ac(11,"open_in_new"),n.Ob(),n.Ob(),n.Ob())}const Be=[{path:"",component:ie,canActivate:[b]},{path:"confirm-email",component:ve,canActivate:[d]},{path:"confirm-email/:token",component:ve,canActivate:[d]},{path:"forgot-password",component:(()=>{class e{constructor(e,t,r,o,i){this.formBuilder=e,this.authService=t,this.router=r,this.snackbarService=o,this.dialog=i,this.isLoading=!1,this.isPasswordHidden=!0,this.errorMessage="",this.isDestroyed$=new p.a,this.formGroup=this.createFormGroup("change")}get f(){return this.formGroup.controls}ngOnInit(){}ngOnDestroy(){this.isDestroyed$.next(!0),this.isDestroyed$.complete()}onSubmit(){var e;return this.isLoading=!0,this.formGroup.disable(),this.authService.requestResetPasswordToken$({email:null===(e=this.f.email)||void 0===e?void 0:e.value}).pipe(Object(v.a)(e=>this.dialog.open(we).afterClosed()),Object(h.a)(this.isDestroyed$)).subscribe(e=>this.router.navigate(["/auth"]),e=>{var t;this.errorMessage=null===(t=e)||void 0===t?void 0:t.message,this.isLoading=!1,this.formGroup.enable()})}createFormGroup(e){return this.formBuilder.group({email:[null,[m.m.required,m.m.pattern(/^(?=.{4,64}$)[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]]},{updateOn:e,validators:this.mustNotBeRejectedValidator()})}mustNotBeRejectedValidator(){return()=>{"Auth.form.error.user.not-exist"===this.errorMessage?this.f.email.setErrors({mustNotBeRejected:!0}):""!==this.errorMessage&&this.snackbarService.open(this.errorMessage,"warn"),this.errorMessage=""}}}return e.\u0275fac=function(t){return new(t||e)(n.Jb(m.b),n.Jb(z),n.Jb(i.b),n.Jb(k),n.Jb(N.a))},e.\u0275cmp=n.Db({type:e,selectors:[["app-forgot-password"]],decls:19,vars:7,consts:function(){let e,t,r,o,i,a,n,s;return e="Forgot password",t=" Enter your email address to receive instructions on how to change your password. ",r="Email address",o=" You must enter a value ",i=" Not a valid email ",a=" Please check your email address ",n=" Sign in ",s="Submit",[[1,"centred"],[1,"card-alone"],e,[1,"pt-10"],t,[3,"formGroup","ngSubmit"],["appearance","outline","color","accent",1,"form-field"],r,["matInput","","formControlName","email","color","primary","required",""],[4,"ngIf"],[1,"button-group"],["class","mt-20","mode","indeterminate","color","accent",4,"ngIf"],["type","button","mat-button","","color","accent","routerLink","/auth",4,"ngIf"],["mat-raised-button","","class","icon-after rounded","color","accent","type","submit",3,"disabled",4,"ngIf"],o,i,a,["mode","indeterminate","color","accent",1,"mt-20"],["type","button","mat-button","","color","accent","routerLink","/auth"],n,["mat-raised-button","","color","accent","type","submit",1,"icon-after","rounded",3,"disabled"],s]},template:function(e,t){1&e&&(n.Pb(0,"section",0),n.Pb(1,"mat-card",1),n.Pb(2,"mat-card-title"),n.Tb(3,2),n.Ob(),n.Pb(4,"p",3),n.Tb(5,4),n.Ob(),n.Pb(6,"mat-card-content"),n.Pb(7,"form",5),n.Zb("ngSubmit",function(){return t.onSubmit()}),n.Pb(8,"mat-form-field",6),n.Pb(9,"mat-label"),n.Tb(10,7),n.Ob(),n.Kb(11,"input",8),n.yc(12,ye,2,0,"mat-error",9),n.yc(13,ze,2,0,"mat-error",9),n.yc(14,$e,2,0,"mat-error",9),n.Ob(),n.Pb(15,"div",10),n.yc(16,ke,1,0,"mat-progress-bar",11),n.yc(17,Ie,2,0,"button",12),n.yc(18,je,5,1,"button",13),n.Ob(),n.Ob(),n.Ob(),n.Ob(),n.Ob()),2&e&&(n.zb(7),n.ic("formGroup",t.formGroup),n.zb(5),n.ic("ngIf",null==t.f.email||null==t.f.email.errors?null:t.f.email.errors.required),n.zb(1),n.ic("ngIf",null==t.f.email||null==t.f.email.errors?null:t.f.email.errors.pattern),n.zb(1),n.ic("ngIf",null==t.f.email||null==t.f.email.errors?null:t.f.email.errors.mustNotBeRejected),n.zb(2),n.ic("ngIf",t.isLoading),n.zb(1),n.ic("ngIf",!t.isLoading),n.zb(1),n.ic("ngIf",!t.isLoading))},directives:[u.a,u.d,u.b,m.n,m.i,m.d,I.c,I.f,j.a,m.a,m.h,m.c,m.l,o.k,I.b,S.a,T.b,i.c,C.a],styles:[".form-field[_ngcontent-%COMP%]{width:100%}.button-group[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"],changeDetection:0}),e})(),canActivate:[b]},{path:"reset-password/:token",component:(()=>{class e{constructor(e,t,r,o,i){this.formBuilder=e,this.authService=t,this.snackbarService=r,this.changeDetectorRef=o,this.activatedRoute=i,this.isDone=!1,this.isLoading=!1,this.isProcessing=!1,this.isValidToken=!1,this.isPasswordHidden=!0,this.token="",this.errorMessage="",this.isDestroyed$=new p.a,this.formGroup=this.createFormGroup("change")}get f(){return this.formGroup.controls}ngOnInit(){var e;return this.token=null!==(e=this.activatedRoute.snapshot.paramMap.get("token"))&&void 0!==e?e:"",""===this.token?void 0:this.verifyToken(this.token)}ngOnDestroy(){this.isDestroyed$.next(!0),this.isDestroyed$.complete()}onSubmit(){var e;return this.isProcessing=!0,this.formGroup.disable(),this.isPasswordHidden=!0,this.authService.setNewPassword$({password:null===(e=this.f.password)||void 0===e?void 0:e.value}).pipe(Object(ae.a)(()=>{this.isProcessing=!1,this.formGroup.enable(),this.changeDetectorRef.detectChanges()}),Object(h.a)(this.isDestroyed$)).subscribe(e=>this.isDone=!0,e=>{var t;return this.errorMessage=null===(t=e)||void 0===t?void 0:t.message})}createFormGroup(e,t){const r=this.formBuilder.group({password:[null,[m.m.required,m.m.pattern(/^.{8,191}$/)]],confirmPassword:[null,[m.m.required]]},{updateOn:e,validators:[this.mustNotBeRejectedValidator(),this.mustMatchValidator("password","confirmPassword")]});return void 0!==t&&r.setValue(t),r}verifyToken(e){return this.isLoading=!0,this.authService.verifyResetPasswordToken$({token:e}).pipe(Object(ae.a)(()=>{this.isLoading=!1,this.changeDetectorRef.detectChanges()}),Object(h.a)(this.isDestroyed$)).subscribe(e=>this.isValidToken=!0,e=>this.isValidToken=!1)}mustNotBeRejectedValidator(){return()=>{""!==this.errorMessage&&this.snackbarService.open(this.errorMessage,"warn"),this.errorMessage=""}}mustMatchValidator(e,t){return r=>{const o=r.controls[t];(null===o.errors||o.errors.mustMatch)&&o.setErrors(r.controls[e].value!==o.value?{mustMatch:!0}:null)}}}return e.\u0275fac=function(t){return new(t||e)(n.Jb(m.b),n.Jb(z),n.Jb(k),n.Jb(n.h),n.Jb(i.a))},e.\u0275cmp=n.Db({type:e,selectors:[["app-reset-password"]],decls:11,vars:2,consts:function(){let e,t,r,o,i,a,n,s,c,b,d,l,u,f,m;return e="Set your new password",t="Password",r="Toggle password visibility",o="Confirm password",i="Toggle password visibility",a="You must enter a value",n=" Must contain 8+ characters ",s="Passwords doesn't match",c="You must confirm the password ",b="Submit",d=" Could not reset your password. ",l=" You can request a new verification link if the old one has expired. ",u="Forgot password",f=" You have just changed your password, you can now authenticate yourself. ",m="Sign in",[[1,"centred"],[1,"p-20","auth-card"],[4,"ngIf","ngIfElse"],["loadingTemplate",""],["setNewPasswordTemplate",""],["verifyTokenErrorTemplate",""],["resetPasswordSuccessTemplate",""],[4,"ngIf","ngIfThen","ngIfElse"],["color","accent"],e,[1,"pt-10"],[3,"formGroup","ngSubmit"],["appearance","outline","color","accent",1,"form-field"],["matInput","","formControlName","password","required","",3,"type"],t,["type","button","mat-icon-button","","matSuffix","","aria-label",r,3,"click"],[4,"ngIf"],["matInput","","formControlName","confirmPassword","required","",3,"type"],o,["type","button","mat-icon-button","","matSuffix","","aria-label",i,3,"click"],[1,"button-group"],["mode","indeterminate","color","accent",4,"ngIf"],[1,"fill-remaining-space"],["mat-raised-button","","class","icon-after rounded","color","accent","type","submit",3,"disabled",4,"ngIf"],a,n,s,c,["mode","indeterminate","color","accent"],["mat-raised-button","","color","accent","type","submit",1,"icon-after","rounded",3,"disabled"],b,[1,"status-icon"],[1,"py-10"],d,l,["mat-raised-button","","class","icon-after rounded","color","accent","routerLink","/auth/forgot-password",4,"ngIf"],["mat-raised-button","","color","accent","routerLink","/auth/forgot-password",1,"icon-after","rounded"],u,f,[1,"fill-remain-space"],["mat-raised-button","","color","accent","routerLink","/auth",1,"icon-after","rounded"],m]},template:function(e,t){if(1&e&&(n.Pb(0,"section",0),n.Pb(1,"mat-card",1),n.yc(2,Se,2,2,"ng-container",2),n.Ob(),n.Ob(),n.yc(3,De,1,0,"ng-template",null,3,n.zc),n.yc(5,qe,26,15,"ng-template",null,4,n.zc),n.yc(7,xe,11,2,"ng-template",null,5,n.zc),n.yc(9,Je,12,0,"ng-template",null,6,n.zc)),2&e){const e=n.oc(10);n.zb(2),n.ic("ngIf",!t.isDone)("ngIfElse",e)}},directives:[u.a,o.k,ne.b,u.d,u.b,m.n,m.i,m.d,I.c,j.a,m.a,m.h,m.c,m.l,I.f,T.b,I.g,C.a,I.b,S.a,i.c],styles:[".auth-card[_ngcontent-%COMP%]{max-width:400px}.status-icon[_ngcontent-%COMP%]{font-size:75px;height:75px;width:75px}.form-field[_ngcontent-%COMP%]{width:100%}.button-group[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"],changeDetection:0}),e})()}];let Ke=(()=>{class e{}return e.\u0275mod=n.Hb({type:e}),e.\u0275inj=n.Gb({factory:function(t){return new(t||e)},imports:[[o.c,i.f.forChild(Be),l.a]]}),e})()}}]);