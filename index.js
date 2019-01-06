// MyApps用HTML生成メソッド
function createAppHtml(appInfo) {
  // 親要素の作成
  var element = document.createElement('div');
  element.className = "col-md-3 col-xs-6";
  // 子要素の作成
  var childElement = document.createElement('div');
  childElement.className = 'app'
  // 画像を作成
  var image = document.createElement('img');
  image.src = appInfo.src;
  // 文字リンクを作成
  var a = document.createElement('a');
  a.href = appInfo.url;
  a.target = "_blank";
  var p = document.createElement('p')
  p.innerHTML = appInfo.name + '<br>' + appInfo.url;
  a.appendChild(p)
  // 子要素に作成した要素を反映
  childElement.appendChild(image);
  childElement.appendChild(a);
  // 作成した子要素を親要素へ格納し返却
  element.appendChild(childElement);
  // マウスオーバー時に説明欄を広げる
  $(element).hover(
    function () {
      var target = this.querySelector('p')
      target.classList.add('link_open');
      $(target).animate({ height: "100%" });
    },
    function () {
      var target = this.querySelector('p')
      target.classList.remove('link_open');
      $(target).animate({ height: "30%" });
    }
  );
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

// 各要素の高さを揃える
function makeEvenHeight(elements) {
  // スキルの各要素の高さを取得
  var elements_size = [];
  Array.prototype.forEach.call(elements, function (element) {
    elements_size.push(element.clientHeight);
  });
  // スキルの各要素の高さを最大値に揃える
  Array.prototype.forEach.call(elements, function (element) {
    element.style.height = Math.max.apply(null, elements_size) + "px";
  });
}

// ページ読み込み時の処理
window.onload = function () {
  // スキルの各要素を取得
  var skills = document.getElementsByClassName("skill");
  // 要素の高さを揃える
  makeEvenHeight(skills);

  // My Appsを生成
  apps.forEach(function (appInfo) {
    document.getElementById("myapps").appendChild(createAppHtml(appInfo));
  });
}
