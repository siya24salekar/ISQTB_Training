//{profile}

var uid="";
var login="kwalsh";
var password="kwalsh";
var email="";
var login_last="09/23/2013";
var login_count="5";
var exp_days="";
var exp_hits="";
var group_name="default";
var reg_type="M";

var auth_res="ok";
var auth_fail_url="http://www.testing4success.com/problem.html";
var auth_ip="83.71.194.181";

var adcode="";

var pp_user="testing4success";
var pp_exp="60";
var pp_drc="1";
var pp_drc_mes="";
var pp_dst="1";
var pp_dsb="1";
var pp_redir=true;
var pp_top=false;

verify_login();

if (adcode != '') { document.writeln(adcode); }

function verify_login() {
  if (auth_res=="fail") {
    if (pp_redir) {
      if (document.body) document.body.style.visibility='hidden';
      if (auth_fail_url=='return') auth_fail_url='http://www.authpro.com/auth/'+pp_user+'/?action=ppreturn&url='+escape(document.location.href);
      if (pp_top) {
        top.location.replace(auth_fail_url);
      } else {
        document.location.replace(auth_fail_url);
      }
    }
    return false;
  }
  if (auth_res=="ok") {
    return true;
  }
}
function go_eurl(url) { document.location.href=unescape(url.replace(/(..)/g,"%$1")); }

//DRC Disable right click
if (pp_drc==1) {
  function right_click(e) {
    if (navigator.appName == 'Netscape' && (e.which == 3 || e.which == 2)) return false;
    else if (navigator.appName == 'Microsoft Internet Explorer' && (event.button == 2 || event.button == 3)) {
	//alert(pp_drc_mes);
	return false;
    }
    return true;
  }
  document.onmousedown=right_click;
  document.onmouseup=right_click;
  if (document.layers) window.captureEvents(Event.MOUSEDOWN);
  if (document.layers) window.captureEvents(Event.MOUSEUP);
  window.onmousedown=right_click;
  window.onmouseup=right_click;
  document.oncontextmenu=new Function("return false")
}
//!DRC
//DST Disable select text
if (pp_dst==1) {
  window.onload = function() {
    document.onselectstart = function() {return false;} // ie
    document.onmousedown = function() {return false;} // mozilla
  }
}
//!DST
//DSB Disable status bar
if (pp_dsb==1) {
  function pp_hidestatus() {window.status='';return true}
  if (document.layers) 
    document.captureEvents(Event.MOUSEOVER | Event.MOUSEOUT | Event.MOUSEDOWN);
    document.onmouseover=pp_hidestatus;
    document.onmouseout=pp_hidestatus;
    document.onmousedown=pp_hidestatus;
}
//!DSB
