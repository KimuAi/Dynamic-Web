
const formateerTweet = tekst => tekst.length > 20 ? tekst.substring(0, 20) + "..." : tekst;

const formateerPost = tekst => `${tekst} #awsome`;

const formateerBericht = tekst => formateerTweet(formateerPost(tekst));


function formatText() {
    const tekst = document.getElementById('inputText').value;

    document.getElementById('tweetOutput').textContent = 
    formateerTweet(tekst);
    document.getElementById('postOutput').textContent = 
    formateerPost(tekst)
    document.getElementById('comboOutput').textContent = 
    formateerBericht(tekst);

}