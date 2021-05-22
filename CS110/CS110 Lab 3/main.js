const url = "http://ec2-54-219-224-129.us-west-1.compute.amazonaws.com:2000/feed/random?q=weather";
	
	var myData;
	var j = 0;
	var id_list = [];
	var tweets_list = [];
    var flag = 1;
    var intervalID;
    var searchString = "" // here we use a global variable
    var filteredResult = [];

    window.onload=function(){
                //SEARCHBAR EVENT
                const handleSearch = event => {
                    searchString = event.target.value.trim().toLowerCase(); 
                    refreshTweets(tweets_list);
                }
                document.getElementById("searchBar").addEventListener("input", handleSearch)

        intervalID = setInterval(test, 5000);
        document.querySelector("input[type=checkbox]").addEventListener("change", function() {
            flag = 1 - flag;
            if (flag == 1) {
                intervalID = setInterval(test, 5000);
            }
            
            else {
                clearInterval(intervalID);
            }
        }, false);
            

            function test(){
                fetch(url)
                .then(res => res.json()) .then(data => {  
                    myData = data;
                    myFunc();
                }).catch(err => {console.log(err) })
            }
    
            function myFunc() {
                console.log("myFunc", tweets_list.length)
                var isID = 0;
                for(var j = 0; j < 10; ++j) {
                    for(var i = 0; i < id_list.length; ++i) {
                        if (myData.statuses[j].id == id_list[i]) {
                            isID = 1;
                        }
                    }
                    if(isID == 0) {
                        id_list.push(myData.statuses[j].id);
                        tweets_list.push(myData.statuses[j]);
                    }
                }
            }

            const tweetContainer = document.getElementById('tweet-container');

            /**
             * Removes all existing tweets from tweetList and then append all tweets back in
             *
             * @param {Array<Object>} tweets - A list of tweets
             * @returns None, the tweets will be renewed
             */
            function refreshTweets(tweet_list) {
                // feel free to use a more complicated heuristics like in-place-patch, for simplicity, we will clear all tweets and append all tweets back
                // {@link https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript}
                while (tweetContainer.firstChild) {
                    tweetContainer.removeChild(tweetContainer.firstChild);
                }

                // create an unordered list to hold the tweets
                // {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement}
                const tweetList = document.createElement("ul");
                // append the tweetList to the tweetContainer
                // {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild}
                tweetContainer.appendChild(tweetList);

                // all tweet objects (no duplicates) stored in tweets variable

                // filter on search text
                // {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter}
                filteredResult = tweet_list.filter(tweet_list => tweet_list.text.search(searchString) != -1);
                // sort by date
                // {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort}
                const sortedResult = filteredResult.sort(function(a, b){
                    return new Date(a.created_at) - new Date(b.created_at);
                });
                
                console.log(sortedResult);
                // console.log(filteredResult.created_at);
                // execute the arrow function for each tweet
                // {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach}
                sortedResult.forEach(tweetObject => {
                    // create a container for individual tweet
                    const tweet = document.createElement("li");
                    
                    // const moment = require('moment');
                    var date = moment(tweetObject.created_at).format("MMM M");
                    var tweetTime = document.createTextNode(date);
                    // e.g. create a div holding tweet content
                    const tweetContent = document.createElement("div");
                    tweetContent.style.backgroundColor = "white";
                    tweetContent.style.padding = "25px"
                    tweetContent.style.borderBottom = "1px solid #e6ecf0";
                    
                    var bold = document.createElement('b');
                    var dateDiv = document.createElement('p');
                    dateDiv.style.color = "grey";
                    dateDiv.style.display = "inline";
                    dateDiv.style.paddingLeft = "13px";
                    // create a text node "safely" with HTML characters escaped
                    // {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode}
                    var tweetAuthor = document.createTextNode(tweetObject.user.screen_name);
                    const tweetText = document.createTextNode(tweetObject.text);
                    var tweetImg = document.createElement("img");
                    const newline2 = document.createElement("br");
                    const newline = document.createElement("br");
                    tweetImg.src = tweetObject.user.profile_image_url;
                    tweetImg.style.borderRadius = "50%";
                    tweetImg.style.paddingRight = "10px";
                    // append the text node to the div
                    tweetContent.appendChild(tweetImg);
                    bold.appendChild(tweetAuthor);
                    dateDiv.appendChild(tweetTime)
                    tweetContent.appendChild(bold);
                    tweetContent.appendChild(dateDiv);
                    tweetContent.appendChild(newline);
                    tweetContent.appendChild(tweetText);
                    tweetContent.appendChild(newline2);

                    // you may want to put more stuff here like time, username...
                    tweet.appendChild(tweetContent);

                    // finally append your tweet into the tweet list
                    tweetList.appendChild(tweet);
                });
            }
    }