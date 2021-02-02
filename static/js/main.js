

// https://github.com/HENRY-2016/susan-admin-apk-repo

function CreateCustomAlertBox()
{
    this.render = function(dialog){
        let winW = window.innerWidth;
        let winH = window.innerHeight;
        let AlertBoxDisplayArea = document.getElementById('alert-box-display-area');
        let HtmlAlertBox = document.getElementById('alert-box');
        AlertBoxDisplayArea.style.display = "block";
        AlertBoxDisplayArea.style.height = winH+"px";
        HtmlAlertBox.style.left = (winW/2) - (550 * .5)+"px";
        HtmlAlertBox.style.top = "100px";
        HtmlAlertBox.style.display = "block";
        document.getElementById('alert-box-header').innerHTML = "Network Error ";
        document.getElementById('alert-box-body').innerHTML = dialog;
        document.getElementById('alert-box-footer').innerHTML = '<button class="ok-alert-btn" onclick="Alert.ok()">OK</button>';
    }
    this.ok = function()
        {
            document.getElementById('alert-box').style.display = "none";
            document.getElementById('alert-box-display-area').style.display = "none";
        }
}
var Alert = new CreateCustomAlertBox();

function ShowAlertBox (){Alert.render('<center>Please turn on <br> your network <br>and <br> Try Again</center>')}

function ReloadPage () 
{
    location.reload()
    // if(!navigator.onLine) {ShowAlertBox ()}
    // else if (navigator.onLine) {location.reload()}
}


function LoadInterfacePage ()
{
    password = document.getElementById('password').value;

    if (!(password == "Susan"))
        {document.getElementById('invalid-label').style.display='block';}
    else 
        {
            // window.location="interface.html";
            if(!navigator.onLine) {ShowAlertBox ()}
            else if (navigator.onLine) {window.location="interface.html"}
        }

}

function ShowVideoDiv ()
{ 
    document.getElementById('video-id').style.display="block"
}