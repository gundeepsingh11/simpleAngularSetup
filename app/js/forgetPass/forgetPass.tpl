
<style type="text/css">
  .my-message{
  font-size: 13px;
}
.right span{
  display: flex;
  padding: 10px;
  cursor: pointer;
}
.right span:hover{
  color: rgb(63,81,181);
  text-decoration: underline;
}
</style>

<md-content  layout="row" layout-align="space-around" layout-padding="layout-padding" ng-cloak="ng-cloak" class="login-form">
    <md-card flex="flex" flex-gt-sm="50" flex-gt-md="33">
      <md-toolbar>
        <div class="md-toolbar-tools black" layout-align="center center" >
          <h2><span>Forget Password</span></h2>
        </div>
      </md-toolbar>
      <md-card-content>
        <form name="Form" novalidate>
          <div layout="row" layout-align="center center">
            <img src="app/imgs/HRLogo.png" width="200" height="180">
          </div>
          <md-input-container class="md-block">
            <label>Email ID</label>
            <input type="email" name="email" ng-model="loginCtrl.user.email" placeholder="Email ID" required/>
            <div ng-messages="Form.email.$error"  multiple="">
              <div ng-message="required" class="my-message">Please enter your email.</div>
            </div>
          </md-input-container>
          <md-input-container class="md-block">
            <label>Mobile</label>
            <input type="number" name="password" ng-model="loginCtrl.user.password" placeholder="Mobile" required md-maxlength="10"/>
            <div ng-messages="Form.password.$error" ng-if="Form.password.$invalid&&(Form.password.$dirty||Form.$submitted)" >
              <div ng-message="required" class="my-message">Please enter your password.</div>
              <div ng-message="md-maxlength" class="my-message">Too long.</div>
            </div>
          </md-input-container>
            <md-button ng-disabled="!Form.$valid" ng-click="submit(Form)" layout-align="end" class="md-raised md-primary">&nbsp Send OTP &nbsp</md-button>
            <div layout="row" layout-align="end center" class="right" flex>
              <span ng-click="sign()">Sign In</span>
          </div>
        </form>
      </md-card-content>
    </md-card>
  </md-content>