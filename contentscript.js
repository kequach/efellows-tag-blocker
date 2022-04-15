var tags = document.getElementsByClassName('tag');
blocklist = ["jura"]

counter = 0;
for (var i=0; i < tags.length; i++) {
    if(blocklist.includes(tags[i].textContent.toLowerCase())) {
        console.log(`Matched tag: ${tags[i].textContent}`);
        tags[i].closest(".questionbox").remove()
        counter ++;
    }
}
console.log(`Removed ${counter} questions`);