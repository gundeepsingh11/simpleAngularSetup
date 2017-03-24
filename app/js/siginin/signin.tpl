
<div>
  <md-content  layout="row" layout-align="space-around" layout-padding="layout-padding" ng-cloak="ng-cloak" class="login-form">
    <md-card flex="flex" flex-gt-sm="50" flex-gt-md="33">
      <md-toolbar>
        <div class="md-toolbar-tools black" layout-align="center center" >
          <h2><span>Registration</span></h2>
        </div>
      </md-toolbar>
      <md-card-content>
        <form name="Form" novalidate>
          <div layout="row" layout-align="center center">
            <img src="app/imgs/HRLogo.png" width="200" height="180">
          </div>
          <md-input-container class="md-block">
            <label>Name</label>
            <input type="Name" name="Name" ng-model="loginCtrl.user.email" placeholder="name" required/>
            <div ng-messages="Form.email.$error"  multiple="">
              <div ng-message="required" class="my-message">Please enter your Name.</div>
            </div>
          </md-input-container>
        
          <md-input-container class="md-block">
            <label>SurName</label>
            <input type="SurName" name="SurName" ng-model="loginCtrl.user.password" placeholder="surname" required md-maxlength="16"/>
            <div ng-messages="Form.password.$error" ng-if="Form.password.$invalid&&(Form.password.$dirty||Form.$submitted)" >
              <div ng-message="required" class="my-message">Please enter your SurName.</div>
              <div ng-message="md-maxlength" class="my-message">Too long.</div>
            </div></md-input-container>
            <md-input-container class="md-block">
            <label>Email</label>
            <input type="Email" name="Email" ng-model="loginCtrl.user.password" placeholder="Email" required md-maxlength="16"/>
            <div ng-messages="Form.password.$error" ng-if="Form.password.$invalid&&(Form.password.$dirty||Form.$submitted)" >
              <div ng-message="required" class="my-message">Please enter your EmailId.</div>
              <div ng-message="md-maxlength" class="my-message">Too long.</div>
            </div></md-input-container>
             <md-input-container class="md-block">
            <label>Mobile Num</label>
            <input type="Mobile" name="Mobile" ng-model="loginCtrl.user.password" placeholder="mobile Num" required md-maxlength="10"/>
            <div ng-messages="Form.password.$error" ng-if="Form.password.$invalid&&(Form.password.$dirty||Form.$submitted)" >
              <div ng-message="required" class="my-message">Please enter your EmailId.</div>
              <div ng-message="md-maxlength" class="my-message">Too long.</div>
            </div>
          </md-input-container>
            <md-button ng-disabled="!Form.$valid" ng-click="submit(Form)" layout-align="end" class="md-raised md-primary">&nbsp Submit &nbsp</md-button>
            <div layout="row" layout-align="end center" class="right" flex>  
          </div>
        </form>
      </md-card-content>
    </md-card>
  </md-content>
  <!-- Angular Material Dependencies-->
</div>