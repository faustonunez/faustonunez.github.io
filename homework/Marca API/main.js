

$.ajax({
  type: 'GET',
  url: 'https://newsapi.org/v2/everything?sources=marca&apiKey=5a05d3e3fe1b4e68a858dd4836cafbe5',
  success: function (news) {
    
   
 

   	var myNews = news.articles.splice(0, 10)

   	console.log(myNews)

   	myNews.forEach(topTen);

  function topTen(top) {
    var topTitle = top.title
    var topAuthor = top.author
    var topDate = top.publishedAt
    var topDescripion = top.description

    $("#myTopNews").append(


    	'<div class="topNewsStyling">' + '<h1>' + topTitle + '</h1>' + '<h4>' + topAuthor + '</h4>' + '<br>' + topDate + '<br>' + topDescripion + '</div>')


  }


    



    
  },
});