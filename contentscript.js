var tags = document.getElementsByClassName('tag');
blocklist = ["jura"]

counter = 0;
// Sicherstellen, dass wir in den EF Thread übersichten sind
// Deckt alles von Neuste bis Beliebteste Fragen ab
// Meine Beiträge haben eine andere URL und das ist gut so.
taburl = document.location.href;
//console.log(`Scanning the following url for named tags ${taburl}`);

if (taburl.includes("community.e-fellows.net/qanda")){
		for (var i=0; i < tags.length; i++) {
				if(blocklist.includes(tags[i].textContent.toLowerCase())) {
						console.log(`Matched tag: ${tags[i].textContent}`);
						tags[i].closest(".questionbox.menu-data-container.questionbox-type--overview").remove()
						counter ++;
				}
		}
}

console.log(`Removed ${counter} questions`);
