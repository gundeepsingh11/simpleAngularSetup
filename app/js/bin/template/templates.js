angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("dashboard/dashboard.tpl","<style>md-toast {\n  /*left: calc(50vw - 150px);*/\n  width: 100%;\n  bottom: 0;\n  margin-bottom: 0;\n}\nmd-toast.md-success-toast-theme .md-toast-content {\n  background-color: #ADFF2F;\n  text-align: center;\n}</style><div>hello</div><div ng-model=\"dashboardCtrl.id\"></div>");
$templateCache.put("forgetPass/forgetPass.tpl","<style type=\"text/css\">.my-message{\n  font-size: 13px;\n}\n.right span{\n  display: flex;\n  padding: 10px;\n  cursor: pointer;\n}\n.right span:hover{\n  color: rgb(63,81,181);\n  text-decoration: underline;\n}</style><md-content layout=\"row\" layout-align=\"space-around\" layout-padding=\"layout-padding\" ng-cloak=\"ng-cloak\" class=\"login-form\"><md-card flex=\"flex\" flex-gt-sm=\"50\" flex-gt-md=\"33\"><md-toolbar><div class=\"md-toolbar-tools black\" layout-align=\"center center\"><h2><span>Forget Password</span></h2></div></md-toolbar><md-card-content><form name=\"Form\" novalidate><div layout=\"row\" layout-align=\"center center\"><img src=\"app/imgs/HRLogo.png\" width=\"200\" height=\"180\"></div><md-input-container class=\"md-block\"><label>Email ID</label><input type=\"email\" name=\"email\" ng-model=\"loginCtrl.user.email\" placeholder=\"Email ID\" required><div ng-messages=\"Form.email.$error\" multiple=\"multiple\"><div ng-message=\"required\" class=\"my-message\">Please enter your email.</div></div></md-input-container><md-input-container class=\"md-block\"><label>Mobile</label><input type=\"number\" name=\"password\" ng-model=\"loginCtrl.user.password\" placeholder=\"Mobile\" required md-maxlength=\"10\"><div ng-messages=\"Form.password.$error\" ng-if=\"Form.password.$invalid&&(Form.password.$dirty||Form.$submitted)\"><div ng-message=\"required\" class=\"my-message\">Please enter your password.</div><div ng-message=\"md-maxlength\" class=\"my-message\">Too long.</div></div></md-input-container><md-button ng-disabled=\"!Form.$valid\" ng-click=\"submit(Form)\" layout-align=\"end\" class=\"md-raised md-primary\">&nbsp Send OTP &nbsp</md-button><div layout=\"row\" layout-align=\"end center\" class=\"right\" flex><span ng-click=\"sign()\">Sign In</span></div></form></md-card-content></md-card></md-content>");
$templateCache.put("footer/footer.tpl","<style type=\"text/css\">.abc{\n  background-color: rgba(0,0,0,0.30) !important; \n}</style><md-toolbar sticky-subheader show-after=\"50\" toggle-class=\"scroll-height\" id=\"parent-header\" class=\"min-header-height scroll-height abc\"><div>Footer</div></md-toolbar>");
$templateCache.put("header/head.tpl","<style type=\"text/css\">.header-main {\n  display: flex;\n  justify-content: space-between;\n  padding: 0px 100px;\n  width: 100%;\n  height: 60px;\n}\n\n\n.nav ul li {\n  font-size: 1.5vw;\n  list-style: none;\n  display: inline;\n  padding: 0 10px;\n  display: inline-block;\n}\n\n.nav a {\n  color: #fff;\n  text-decoration: none;\n}\n\n.nav a:hover {\n  text-decoration: underline;\n  cursor: pointer;\n  transition: .5s;\n}\n\n.nav a.active {\n  color: #07D566;\n}\n\n.fixed-header {\n  display: flex;\n  justify-content: space-between;\n  z-index: 1;\n  padding: 0px 100px;\n  width: 100%;\n  background-color: black;\n  position: fixed;\n  top: 0px;\n  transition-duration: 1s;\n  height: 60px;\n}\n\n.fixed-header .nav ul li {\n  font-size: 15px;\n}\n\n.fixed-header .nav ul li a:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}</style><md-toolbar sticky-subheader show-after=\"50\" toggle-class=\"scroll-height\" id=\"parent-header\" class=\"min-header-height scroll-height\"><header id=\"myP\" class=\"header-main\"><div><a></a></div><div class=\"nav\"><ul><li ui-view=\"home.welcome\"><a>HOME</a></li><li><a>ABOUT US</a></li><li><a>SERVICES</a></li><li><a>PLANS</a></li><li><a>CONTACT</a></li></ul></div></header></md-toolbar>");
$templateCache.put("home/home.tpl","<div ng-include=\"\'app/js/header/head.tpl\'\"></div><div ui-view=\"\" autoscroll=\"!isUnlimited\" flex=\"noshrink\"></div><div ng-include=\"\'app/js/footer/footer.tpl\'\"></div>");
$templateCache.put("login/login.tpl","<style type=\"text/css\">.login-form {\nmd-card {\n  padding: 0!important;\n\n  md-card-title {\n    background-color: blue;\n  }\n}\n}\nmd-toast {\n  /*left: calc(50vw - 150px);*/\n  width: 100%;\n  bottom: 0;\n  margin-bottom: 0;\n}\nmd-toast.md-error-toast-theme .md-toast-content {\n  background-color: maroon;\n  color: white;\n  text-align: center;\n}\n\n.black{\n  background-color: white;\n  color: #a9a9a9;\n  font-size: 30px;\n}\n.right span{\n  display: flex;\n  padding: 10px;\n  cursor: pointer;\n}\n.right span:hover{\n  color: rgb(63,81,181);\n  text-decoration: underline;\n}\n.my-message{\n  font-size: 13px;\n}</style><div class=\"abc\"><md-content layout=\"row\" layout-align=\"space-around\" layout-padding=\"layout-padding\" ng-cloak=\"ng-cloak\" class=\"login-form\"><md-card flex=\"flex\" flex-gt-sm=\"50\" flex-gt-md=\"33\"><md-toolbar><div class=\"md-toolbar-tools black\" layout-align=\"center center\"><h2><span>Login</span></h2></div></md-toolbar><md-card-content><form name=\"Form\" novalidate><div layout=\"row\" layout-align=\"center center\"><img src=\"app/imgs/HRLogo.png\" width=\"200\" height=\"180\"></div><md-input-container class=\"md-block\"><label>Login</label><input type=\"email\" name=\"email\" ng-model=\"loginCtrl.user.email\" placeholder=\"login\" required><div ng-messages=\"Form.email.$error\" multiple=\"multiple\"><div ng-message=\"required\" class=\"my-message\">Please enter your email.</div></div></md-input-container><md-input-container class=\"md-block\"><label>Password</label><input type=\"password\" name=\"password\" ng-model=\"loginCtrl.user.password\" placeholder=\"password\" required md-maxlength=\"16\"><div ng-messages=\"Form.password.$error\" ng-if=\"Form.password.$invalid&&(Form.password.$dirty||Form.$submitted)\"><div ng-message=\"required\" class=\"my-message\">Please enter your password.</div><div ng-message=\"md-maxlength\" class=\"my-message\">Too long.</div></div></md-input-container><md-button ng-disabled=\"!Form.$valid\" ng-click=\"submit(Form)\" layout-align=\"end\" class=\"md-raised md-primary\">&nbsp Login &nbsp</md-button><div layout=\"row\" layout-align=\"end center\" class=\"right\" flex><span ng-click=\"passPage()\">Forget Password</span> <span ng-click=\"sign()\">Sign Up</span></div></form></md-card-content></md-card></md-content></div>");
$templateCache.put("siginin/signin.tpl","<div><md-content layout=\"row\" layout-align=\"space-around\" layout-padding=\"layout-padding\" ng-cloak=\"ng-cloak\" class=\"login-form\"><md-card flex=\"flex\" flex-gt-sm=\"50\" flex-gt-md=\"33\"><md-toolbar><div class=\"md-toolbar-tools black\" layout-align=\"center center\"><h2><span>Registration</span></h2></div></md-toolbar><md-card-content><form name=\"Form\" novalidate><div layout=\"row\" layout-align=\"center center\"><img src=\"app/imgs/HRLogo.png\" width=\"200\" height=\"180\"></div><md-input-container class=\"md-block\"><label>Name</label><input type=\"Name\" name=\"Name\" ng-model=\"loginCtrl.user.email\" placeholder=\"name\" required><div ng-messages=\"Form.email.$error\" multiple=\"multiple\"><div ng-message=\"required\" class=\"my-message\">Please enter your Name.</div></div></md-input-container><md-input-container class=\"md-block\"><label>SurName</label><input type=\"SurName\" name=\"SurName\" ng-model=\"loginCtrl.user.password\" placeholder=\"surname\" required md-maxlength=\"16\"><div ng-messages=\"Form.password.$error\" ng-if=\"Form.password.$invalid&&(Form.password.$dirty||Form.$submitted)\"><div ng-message=\"required\" class=\"my-message\">Please enter your SurName.</div><div ng-message=\"md-maxlength\" class=\"my-message\">Too long.</div></div></md-input-container><md-input-container class=\"md-block\"><label>Email</label><input type=\"Email\" name=\"Email\" ng-model=\"loginCtrl.user.password\" placeholder=\"Email\" required md-maxlength=\"16\"><div ng-messages=\"Form.password.$error\" ng-if=\"Form.password.$invalid&&(Form.password.$dirty||Form.$submitted)\"><div ng-message=\"required\" class=\"my-message\">Please enter your EmailId.</div><div ng-message=\"md-maxlength\" class=\"my-message\">Too long.</div></div></md-input-container><md-input-container class=\"md-block\"><label>Mobile Num</label><input type=\"Mobile\" name=\"Mobile\" ng-model=\"loginCtrl.user.password\" placeholder=\"mobile Num\" required md-maxlength=\"10\"><div ng-messages=\"Form.password.$error\" ng-if=\"Form.password.$invalid&&(Form.password.$dirty||Form.$submitted)\"><div ng-message=\"required\" class=\"my-message\">Please enter your EmailId.</div><div ng-message=\"md-maxlength\" class=\"my-message\">Too long.</div></div></md-input-container><md-button ng-disabled=\"!Form.$valid\" ng-click=\"submit(Form)\" layout-align=\"end\" class=\"md-raised md-primary\">&nbsp Submit &nbsp</md-button><div layout=\"row\" layout-align=\"end center\" class=\"right\" flex></div></form></md-card-content></md-card></md-content></div>");
$templateCache.put("welcome/welcome.tpl","<md-button layout-align=\"end\" class=\"md-raised md-primary\" ng-click=\"nextPage()\">Button</md-button>");}]);