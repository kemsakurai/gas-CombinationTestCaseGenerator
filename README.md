# gas-CombinationTestCaseGenerator     

Google スプレッドシートで、組み合わせテストケースの生成をする。コンテナバインドスクリプトです。     

-------------------------------------------------------
## 生成できる組み合わせテストケースについて     
以下のテストケースの生成が可能です。    

* 全網羅テスト    

* ワンワイズ     

* ペアワイズ      

全網羅と、ワンワイズ テストの生成、ペアワイズ　テストの生成が可能です。       

--------------------------------------------------------
## 使い方    

以下、使い方について記載します。       

1. コンテナバインドスクリプトのデプロイ方法                                            

2. スプレッドシートのメニューの説明       

3. テストケース生成        

---------------------------------------------------------
## 1. コンテナバインドスクリプトのデプロイ方法                                            

### clasp のインストール      
コンテナバインドスクリプトをデプロイするため、clasp をインストールする必要があります。      
* clasp のインストール      
```console
npm i @google/clasp -g    
```

* clasp login    
```console
clasp login    
```

使用しているGoogle アカウントに対して、clasp　から `Google Apps Script ののプロジェクトの作成と更新`、`Google Apps Script のデプロイの作成と更新` を許可する必要があります。     

### Script の デプロイ     
* git repository を cloneします。       
```console
git clone https://github.com/kemsakurai/gas-CombinationTestCaseGenerator.git <project_name>   
```

* npm install   
```console
cd <project_name>
npm install  
```

* スプレッドシート を作成する場合                          
スプレッドシート を新規で作成する場合は、`npm run setup` を実行します。                   
`.clasp.json` の初期化、スプレッドシート を作成します。        

* 既存のスプレッドシート を使う場合            
以下、既存のスプレッドシートを使用する場合の手順を記載します。         
  * 
  
  * .clasp.json の スクリプトIDを変更する          
  .clasp.json の scriptId を、デプロイ先のコンテナバインドスクリプトのscriptIdに変更します。      
  ```console
  {"scriptId":"<your_script_id>", "rootDir": "dist" }
  ```

  * 補足.コンテナバインドスクリプトのscriptIdの入手方法        
      1. デプロイ先のスプレッドシート を作成し、メニューのツールから、スクリプトエディタを開きます。         
      2. スクリプトエディタのファイルから、プロジェクトのプロパティを選択します。     
      [![Image from Gyazo](https://i.gyazo.com/662c1553f57d34cd2f14d4c211e1e152.png)](https://gyazo.com/662c1553f57d34cd2f14d4c211e1e152)      
      3. ダイアログに表示されるスクリプトIDをコピー、ペーストします。     
      [![Image from Gyazo](https://i.gyazo.com/3e7be62edfb9bebba99684f485fff7f1.png)](https://gyazo.com/3e7be62edfb9bebba99684f485fff7f1)      

### dist ディレクトリ配下のスクリプトのコピー、ペースト         
clasp、npm の環境構築が面倒な場合、[dist](https://github.com/kemsakurai/gas-CombinationTestCaseGenerator/tree/master/dist)配下の、`bundle.js` と、`appsscript.json` をスクリプトエディタからコピー、ペーストすることで登録できます。        

---------------------------------------------------------
## 2. スプレッドシートのメニューの説明         

コンテナバインドスクリプトを、デプロイすると、スプレッドシートに以下のメニューが追加されます。      
![2019-11-30 15.23.15.png - Google ドライブ](https://drive.google.com/uc?export=view&id=1KgAuvvSBW_tIVaS-ZBmzSltxJgJtDM8f)     

----

### Settings     
[![Image from Gyazo](https://i.gyazo.com/1da10dfc5bbed034dcb10bfaf3b917ec.png)](https://gyazo.com/1da10dfc5bbed034dcb10bfaf3b917ec)     

* Create Factor&Level Sheet     
因子と水準を記録するシートを作成します。       

----

### Create test case      
![2019-11-30 15.23.38.png - Google ドライブ](https://drive.google.com/uc?export=view&id=1XXIZIW8iwgSoD7hxFjTMGXRwdDNb88Gs)                

* Create all combination test case     
全網羅組み合わせテストを生成します。        

* Create one-wise test case       
one-wise テストケースを生成します。        

* Create pair-wise test case           
pair-wise テストケースを生成します。        

-----------------------    
## ペアワイズ テストのライブラリについて                

[walkframe/covertable: It makes combinations covering pairs for pairwise testing.](https://github.com/walkframe/covertable) を使用しています。           
設定オプションは以下の通りです。        

```javascript
import { default as make, sorters } from '../libs/covertable/index';
export const pairWise = (values): any => {
  return make(values, {
    // optional
    length: 2, // default: 2
    sorter: sorters.greedy, // default: sorters.sequential
    sortArgs: {} // default: {}
  });
};
```

-----------------------
## ライセンス      
MIT
