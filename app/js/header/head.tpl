<style type="text/css">
.header-main {
  display: flex;
  justify-content: space-between;
  padding: 0px 100px;
  width: 100%;
  height: 60px;
}


.nav ul li {
  font-size: 1.5vw;
  list-style: none;
  display: inline;
  padding: 0 10px;
  display: inline-block;
}

.nav a {
  color: #fff;
  text-decoration: none;
}

.nav a:hover {
  text-decoration: underline;
  cursor: pointer;
  transition: .5s;
}

.nav a.active {
  color: #07D566;
}

.fixed-header {
  display: flex;
  justify-content: space-between;
  z-index: 1;
  padding: 0px 100px;
  width: 100%;
  background-color: black;
  position: fixed;
  top: 0px;
  transition-duration: 1s;
  height: 60px;
}

.fixed-header .nav ul li {
  font-size: 15px;
}

.fixed-header .nav ul li a:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
<md-toolbar sticky-subheader show-after="50" toggle-class="scroll-height" id="parent-header" class="min-header-height scroll-height">
  <!-- <div ng-controller="HeadCtrl" layout="column" style="height: 100%;">
    <section layout="row" flex>
      <md-sidenav class="md-sidenav-left" md-component-id="left" md-disable-backdrop md-whiteframe="4">
         <md-toolbar class="md-theme-indigo">
          <h1 class="md-toolbar-tools">Disabled Backdrop</h1>
        </md-toolbar> 
        <md-content layout-margin>
          <p> This sidenav is not showing any backdrop, where users can click on it, to close the sidenav. </p>
          <md-button ng-click="toggleLeft()" class="md-accent"> Close this Sidenav </md-button>
        </md-content>
      </md-sidenav>
      <div>
        <md-button ng-click="toggleLeft()" class="md-raised"> Toggle Sidenav </md-button>
      </div>
    </section>
  </div> -->
  <header id="myP" class="header-main">
    <div>
      <a>
        <!-- <img src="app/imgs/HRLogoTrans.png" width="150" height="120"> -->
      </a>
    </div>
    <div class="nav">
      <ul>
        <li ui-view="home.welcome"><a>HOME</a></li>
        <li><a>ABOUT US</a></li>
        <li><a>SERVICES</a></li>
        <li><a>PLANS</a></li>
        <li><a>CONTACT</a></li>
      </ul>
    </div>
  </header>
</md-toolbar>
