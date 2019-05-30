# インストール
    ■初期設定のとき
        npm install
        gulp
    
    ■gitプルしたとき
        gulp build


# git
    ■除外ファイルはプッシュしない(gitignoreで設定)
        node_module/
        dist/


# ファイル構成
    pugとstylusは同じ関係になるようにディレクトリ・ファイルを作成する。
    ■ pug
        |-- ● include           // (↓範囲大きい順)
            |-- □ settings       // head、meta、グローバル変数、mixinなど 初期設定群
            |-- □ layout         // レイアウト（wrapperやcontents幅など）外側のパーツ
            |-- □ components     // コンポーネント・共通パーツ（ヘッダー、フッター）などのパーツ
            |-- □ modules        // モジュール(ボタン、タイトルなど)内側のパーツ
            |-- □ template       // テンプレート（setting + layout）、基本表示のかたまり
            |-- □ pages          // ページ固有のコンポーネント群
                |-- ○ _p_home     // トップページ用 コンポーネント群 
        |-- about.pug          // html用 pug
        |-- index.pug          // html用 pug

    ■ stylus
        |-- ● include           // (↓範囲大きい順)
            |-- □ settings       // グローバル変数、reset、mixinなど 初期設定群（順番注意）
            |-- □ layout         // レイアウト（wrapperやcontents幅など）外側のパーツ
            |-- □ components     // コンポーネント・共通パーツ（ヘッダー、フッター）などのパーツ
            |-- □ modules        // モジュール(ボタン、タイトルなど)内側のパーツ
            |-- □ pages          // ページ固有のcss
                |-- ○ _p_home     // トップページ用css
        |-- stylus.styl        // style.css

    ■ js
        |-- ● include
            |-- □ _modules
            |-- □ _pages
                |--○ _p_common   //　共通.js
                |--○ _p_home     //　トップページ用.js
        |-- entry.js           //　読み込み用

    ■ images
        |-- common
        |-- ● contents
            |-- □ home
                |--○ home_image01.png
            |-- □ about
            |-- □ news


# class命名規則
    ■ コンポーネント、モジュールの名前の付け方
        接頭詞-種類-名前 = c-component-iconTitleContents

    ■ よくつかうレイアウトclass名（大きい順）
        wrapper
        inner
        block
        area
        box

    ■ レイアウトclass参考
        .leftArea, .rightArea
        .leftBlock .rightBlock

    ■ module以下での汎用class名
        .btn
        .bg
        .icon
        .image
        .list
        .subTitle
        .text
        .title

    ■ ステート切り替えclass
        is-名前 = is-red、is-left、is-animateなど
        .is-left, .is-right
        .is-pc, .is-sp
        .is-imageLeft, .is-imageRight
        .is-active, .is-current
        .is-white, .is-red
    
    ■ 参考
        .l-contentsWrapper                                  <= 接頭詞+レイアウト名
            .c-imageSet.is-three                            <= 接頭詞+コンポーネント名.ステート名
                ul
                    li
                        .box
                            .p-imageSet                     <= 接頭詞+パーツ名
                                p.image                     <= 汎用class名
                                    img(src="" alt="")
                            .textArea
                                h3.title タイトル            <= 汎用class名
                                p.text テキスト              <= 汎用class名
                                .p-btnSet.is-white          <= 接頭詞+パーツ名.ステート名
                                    a(href="")
                                        span ボタン


## images
    ■ディレクトリについて
        ・共通画像はcommonへ
        ・ページごとの画像はcontents以下へ
    ■ 画像命名規則
        ページ_名前_パーツ番号 = home_mainvisual_image01.png
        common_header_arrow01.png、common_btn_arrow01.png


# pugについて
## 基本
    ・= の後ろにはスペースを入れる
    ・各ページの頭にある変数で、ヘッダー、フッター、サイドメニューの表示非表示できる
    ・階層は「RELATIVE_PATH」を利用する
        a(href= RELATIVE_PATH + "index.html")
            img(src= RELATIVE_PATH + "images/contents/home/image01.png" alt="")
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
    ・ネストを深くしない。3階層以下がベスト
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

## cssサンプル
    ■影響範囲の広さ、外側から内側へむかって書く

        content ""
        cursor pointer
        overflow hidden

        ・ディスプレイ
        display flex
        order 1
        flex-wrap wrap
        justify-contents space-between
        align-items center

        list-style-type decimal
        table-layout fixed
        border-collapse collapse

        ・float
        clear both
        float left

        ・ポジション
        position absolute
        top 0
        right 0
        bottom 0
        left 0
        z-index 10

        ・サイズ
        max-width 100px
        min-width 100px
        width 100px
        max-height 100px
        min-height 100px
        height 100px

        ・間隔
        margin 10px 20px
        padding 10px 20px

        ・色
        color #fff
        background-color #fff
        background-image url("")
        background-repeat no-repeat
        background-position left top
        background-size cover
        border 1px solid #fff
        border-radius 10px

        ・文字
        font-family ""
        font-size 10px
        text-align center
        line-height 1.0
        vertical-align middle
        text-decoration: underline;

        ・トランスフォーム
        transform-origine center
        transform translate3d(-50%, -50%, 0) rotate(180deg)

        ・アニメーション
        animation-name fadeIn
        animation-duration 3s
        animation-timing-function linear
        transition all 0.3s ease

# HTML制作ルール
    ■文字コード
        原則、UTF-8 とする
        ※システム要件/言語/サーバの仕様で Shift-JIS や EUC-JP などが必要な場合は適宜変更する。
    ■DOCTYPE
        原則、HTML5 とする。仕様に応じて適宜変更する。
    ■マークアップ
        文法に則った HTML を記述する。 
    ■書式ルール
        インデントは、半角スペース 2つもしくは、タブを使用する。
        混在しないように気をつける。
    ■改行
        適切なブロックごとに改行する。
        pugで出力されたもので制御できない場合もある。