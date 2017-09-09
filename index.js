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
  element.className = "col-md-3 col-xs-6";
  // 子要素の作成
  var childElement = document.createElement('div');
  childElement.className = 'app'
  // 画像リンクを作成
  var a = document.createElement('a');
  a.href = appInfo.url;
  a.target = "_blank";
  var image = document.createElement('img');
  image.src = appInfo.src;
  a.appendChild(image);
  // 文字リンクを作成
  var p = document.createElement('p')
  p.innerHTML = appInfo.name + '<br><a href="' + appInfo.url + '">' + appInfo.url + '</a>';
  // 子要素に作成した要素を反映
  childElement.appendChild(a);
  childElement.appendChild(p);
  // 作成した子要素を親要素へ格納し返却
  element.appendChild(childElement);
  return element;
}

// Blog用HTML生成メソッド
function createBlogHtml(element, index) {
  // Classの設定
  element.className = 'col-md-2 col-xs-5';
  // 最初の要素のみクラスを追加
  element.className += (index == 1 ? ' col-md-offset-1 ' : '');
  // 子要素の生成
  var image = document.createElement('img');
  image.src = 'images/hatenablog.png';
  // 作成した子要素を親要素へ格納し返却
  element.appendChild(image);
  return element;
}

// ページ読み込み時の処理
window.onload = function () {
  // My Appsを生成
  apps.forEach(function (appInfo) {
    document.getElementById("myapps").appendChild(createAppHtml(appInfo));
  });
  // BlogのHTMLを取得
  $.ajax({
    url: 'http://madogiwa0124.hatenablog.com/',
    dataType: 'html'
  })
  .done(function (data) {
    // 最新の記事の部分を抽出
    var blogs = $(data).find('.recent-entries');
    // 抽出した要素の整形
    var index = 1;
    blogs.find('.recent-entries-item').each(function () {
      createBlogHtml(this, index);
      index++;
    });
    // HPに埋め込み
    $('#blogs').append(blogs);
  });
}