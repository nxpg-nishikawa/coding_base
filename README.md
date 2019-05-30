# インストール
    npm install
    gulp

# ファイル構成
    pugとstylusは同じ関係になるようにディレクトリ・ファイルを作成する。
    ■ pug
        |--● include           // (↓範囲大きい順)
           |--□ settings       // head、meta、グローバル変数、mixinなど 初期設定群
           |--□ layout         // レイアウト（wrapperやcontents幅など）外側のパーツ
           |--□ components     // コンポーネント・共通パーツ（ヘッダー、フッター）などのパーツ
           |--□ modules        // モジュール(ボタン、タイトルなど)内側のパーツ
           |--□ template       // テンプレート（setting + layout）、基本表示のかたまり
           |--□ pages          // ページ固有のコンポーネント群
              |--○ _p_home     // トップページ用 コンポーネント群 
        |-- about.pug          // html用 pug
        |-- index.pug          // html用 pug

    ■ stylus
        |--● include           // (↓範囲大きい順)
           |--□ settings       // グローバル変数、reset、mixinなど 初期設定群（順番注意）
           |--□ layout         // レイアウト（wrapperやcontents幅など）外側のパーツ
           |--□ components     // コンポーネント・共通パーツ（ヘッダー、フッター）などのパーツ
           |--□ modules        // モジュール(ボタン、タイトルなど)内側のパーツ
           |--□ pages          // ページ固有のcss
               |--○ _p_home    // トップページ用css
        |-- stylus.styl        // style.css

    ■ js
        |--● include
           |--□ _modules
           |--□ _pages
              |--○ _p_common
              |--○ _p_home
        |-- entry.js           //　読み込み用

# 命名規則
    ■ コンポーネント、モジュールの名前の付け方
    　接頭詞_種類_名前 = _c_component_iconTitleContents

    ■ よくつかうレイアウトclass名（大きい順）
        wrapper
        inner
        block
        area
        box

    ■ レイアウト切り替えclass
        left-area
        right-block

    ■ module以下での汎用class名
        title
        sub-title
        text
        btn

    ■ ステート切り替えclass
        is-名前 = is-red、is-left、is-animateなど


# pugについて
## 基本
    ・= の後ろにはスペースを入れる
    ・各ページの頭にある変数で、ヘッダー、フッター、サイドメニューの表示非表示できる
    ・階層は「RELATIVE_PATH」を使用する
    ・インデントはタブで（distに書き出したらスペースになるので、みやすさ重視）

## 新規ページ追加
    ・ページの「KEY」変数を変更するとbodyのclassを変更することができる
    ・変更した場合、_s_meta.pugに配列を追加しないとエラーが出るので注意
    ・「～のコピー」などのファイルができると、distに書き出されるので注意

## コンポーネント化、モジュール化
    ・共通で使うパーツは適宜、コンポーネント化、モジュール化する
    ・コンポーネント化の際は、名前の付け方、ディレクトリの場所に注意


# stylusについて

## 基本
    ・ネストを深くしない。
    ・広い範囲で、titleやtextなどのclassにスタイルを当てない（他のページに影響するので）
    ・スタイルを当てるときは、親子関係を意識する
    ・importantは極力使わない
    ・プロパティ、疑似要素、ブレイクポイントの前などは改行を入れるなどして、
    　あとで見たときわかりやすくしておく
    ・「：」と「；」は省略
    ・インデントはタブで（distに書き出したらスペースになるので、みやすさ重視）

## コンポーネント化、モジュール化
    ・モジュールにあまり細かい指定をしない
    （フォントサイズやマージンなどはコンポーネントで指定する）

## レスポンシブ、ブレイクポイント
    ・ブレイクポイントの記述は離しすぎない（どこに行ったかわからなくなるので）


# distについて

## images
    ・共通画像はcommonへ
    ・ページごとの画像はcontents以下へ
