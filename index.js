// 作成したアプリケーションのリスト
var apps = [
  {
    name: 'キーワードミキサー',
    url: 'http://madogiwa0124.github.io/KeywordMixer/',
    src: 'images/myapps/keywordmixer.png'
  },
  {
    name: 'TaskBorder',
    url: 'https://madogiwa0124.github.io/TaskBorder/',
    src: 'images/myapps/taskborder.png'
  },
  {
    name: 'rubyで言語処理100本ノック',
    url: 'https://gist.github.com/Madogiwa0124/3c388b8570052b9269fd6022beb7cc6e',
    src: 'images/myapps/ruby100nock.png'
  },
  {
    name: 'Facebookクローンアプリ',
    url: 'https://thawing-brushlands-32817.herokuapp.com/',
    src: 'images/myapps/facebook_clone.png'
  },
  {
    name: 'ruby勉強bot',
    url: 'https://twitter.com/ruby_study_bot',
    src: 'images/myapps/ruby_study_bot.png'
  },
  {
    name: 'ページ更新管理ツール Moook',
    url: 'https://moook.herokuapp.com',
    src: 'images/myapps/moook.png'
  },
  {
    name: '教えてgoo!スクレイピングツール',
    url: 'https://gist.github.com/Madogiwa0124/6863fdde58c12e7403724c6055df75a5',
    src: 'images/myapps/oshiete_goo.png'
  },
]

// MyApps用HTML生成メソッド
function createAppHtml(appInfo) {
  // 親要素の作成
  var element = document.createElement('div');
  element.className = "col-md-3";
  
  // 子要素の作成
  var childElement = document.createElement('div');
  childElement.className = 'app'
  var image = document.createElement('img');
  image.src = appInfo.src;
  var p = document.createElement('p')
  p.innerHTML = appInfo.name + '<br><a href="' + appInfo.url + '">' + appInfo.url + '</a>';
  childElement.appendChild(image);
  childElement.appendChild(p);

  // 作成した子要素を親要素へ格納
  element.appendChild(childElement);

  return element;
}

// ページ読み込み時の処理
window.onload = function () {
  // My Appsを生成
  apps.forEach(function (appInfo) {
    document.getElementById("myapps").appendChild(createAppHtml(appInfo));
  });
  // 最新BLOG記事取得
  $.ajax({
    url: 'http://madogiwa0124.hatenablog.com/',
    dataType: 'html'
  })
  .done(function (data) {
    var blogs = $(data).find('.recent-entries-item');
    blogs.each(function () {
      $('#blog').append($(this));
    });
  });
}