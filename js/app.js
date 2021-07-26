//vanilla function?
function onClickSearch(text) {
    alert(text);
}




const displayWikipediaData = function () {
    // take search string
    const searchString = $('#searchString').val();
    // talk with wikepedia
    const wikipedia = "https://en.wikipedia.org/";
    const wikipediaEntrypoint = wikipedia + "w/api.php";
    const action = "?action=opensearch&search=" + searchString + "&format=json&callback=wikiCallback";

    // take 10 results

    const linksElement = $('#links');
    // make linkable list

    const makeListItem = (pageName) => {
        const pageUrl = wikipedia + 'wiki/' + pageName;
        return `<li><a href="${pageUrl}">${pageName}</a></li>`;
    }

    $.ajax({
        url: wikipediaEntrypoint + action,
        dataType: "jsonp",
        jsonp: "callback",
        success: function (res) {
            const linksList = res[1]

            linksList.forEach(item => {
                linksElement.append(makeListItem(item));
                //why are we returnning?
                return item;
            });

        },
        error: function (data) {
            console.log("error")
        }
    })
    //why are we returnning false??
    return false;

};



//jQuery
$('.search-button').click(function () { });
$('#form').submit(displayWikipediaData);