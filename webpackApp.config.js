const path = require('path');
module.exports = {
	// モード値を production に設定すると最適化された状態で、
	// development に設定するとソースマップ有効でJSファイルが出力される
	mode: 'none',
	//mode: 'development',

	// メインとなるJavaScriptファイル（エントリーポイント）
	entry: {
		function: path.resolve(__dirname, 'src/js/entry.js'),
	},
	// ファイルの出力設定
	
	output: {
		// 出力ファイル名
		filename: "[name].js"
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: {
				include: /node_modules/,
				// node_modulesの中のモジュールを除外対象とする。
	
				exclude: /node_modules\/grapesjs\//,
				// fooパッケージのモジュールを除外対象から除外する。
				// パターンの末尾に"\/"がないと、名前がfooで始まるすべてのパッケージのモジュールが
				// 除外対象から除外されてしまうので注意。
			},
			use: [{
				loader: 'babel-loader',
				options: {
					presets: [
						['env', {modules: false}]
					]
				}
			}]
		}]
	}
};
