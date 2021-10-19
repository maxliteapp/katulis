function $(id) {
    return document.getElementById(id);
}

function generatelink() {
 var add = $("cde").value.split('\n');
 $("linkURL").value = "";

for(var i = 0;i < add.length;i++){
    var drive = add[i].indexOf("google.com/file/d/");
	var drivedoc = add[i].indexOf("docs.google.com/document/d/");
	var drivexls = add[i].indexOf("docs.google.com/spreadsheets/d/");
	var driveppt = add[i].indexOf("docs.google.com/presentation/d/");
    var dbox = add[i].indexOf("dropbox.com/s");
    var odrive = add[i].indexOf("onedrive.live.com");

    if (drive != -1) {
        var start = add[i].indexOf("d/");
        var end = add[i].indexOf("/view");
        var reString = add[i].slice(start + 2, end);
        var link = "https://drive.google.com/uc?export=download&id=" + reString + "";
        $("linkURL").value =  $("linkURL").value + "\n" + link;
        $("linkURL").select();
    } else if (drivedoc != -1) {
        var start = add[i].indexOf("d/");
        var end = add[i].indexOf("/edit");
        var reString = add[i].slice(start + 2, end);
        var link = "https://drive.google.com/uc?export=download&id=" + reString + "";
        $("linkURL").value =  $("linkURL").value + "\n" + link;
        $("linkURL").select();
    } else if (drivexls != -1) {
        var start = add[i].indexOf("d/");
        var end = add[i].indexOf("/edit");
        var reString = add[i].slice(start + 2, end);
        var link = "https://drive.google.com/uc?export=download&id=" + reString + "";
        $("linkURL").value =  $("linkURL").value + "\n" + link;
        $("linkURL").select();
    } else if (driveppt != -1) {
        var start = add[i].indexOf("d/");
        var end = add[i].indexOf("/edit");
        var reString = add[i].slice(start + 2, end);
        var link = "https://drive.google.com/uc?export=download&id=" + reString + "";
        $("linkURL").value =  $("linkURL").value + "\n" + link;
        $("linkURL").select();
    } else if (dbox != -1) {
        var link = add[i].replace("?dl=0", "?dl=1");
        $("linkURL").value = $("linkURL").value + "\n" + link;
        $("linkURL").select();
    } else if (odrive != -1) {
        var link = add[i].replace("redir", "download");
        $("linkURL").value = $("linkURL").value + "\n" + link;
        $("linkURL").select();
    } else {
        $("linkURL").value = $("linkURL").value + "\n" + "Enter a Valid URL";
    }
}
}
window.onload = function() {
    $("cde").focus();
    $("genButton").onclick = generatelink;
};
