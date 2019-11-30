# gas-CombinationTestCaseGenerator     

Google スプレッドシートで、組み合わせテストケースの生成をする。コンテナバインドスクリプトです。     

-------------------------------------------------------
## 生成できる組み合わせテストケースについて     
以下のテストケースの生成が可能です。    

* 全網羅テスト    

* ワンワイズ     

* ペアワイズ      

全網羅と、ワンワイズ テストの生成は、コンテナバインドスクリプトのみで可能ですが、ペアワイズテストは Google Cloud Functions のデプロイが必要になります。     

--------------------------------------------------------
## 使い方    

以下、使い方について記載します。       

1. スプレッドシートを作成し、[gas-CombinationTestCaseGenerator/gas at master · kemsakurai/gas-CombinationTestCaseGenerator](https://github.com/kemsakurai/gas-CombinationTestCaseGenerator/tree/master/gas) をデプロイする。      

2. [gas-CombinationTestCaseGenerator/gcf at master · kemsakurai/gas-CombinationTestCaseGenerator](https://github.com/kemsakurai/gas-CombinationTestCaseGenerator/tree/master/gcf) をCloud Function として、GCPにデプロイする。       

3. `2.` の Cloud Function の URL を コンテナバインドスクリプトのスクリプトプロパティとして設定する。      

4. テスト因子抽出       

5. テストケース生成        

---------------------------------------------------------
## コンテナバインドスクリプトのデプロイ方法                                            

---------------------------------------------------------
## Cloud Function のデプロイ方法         

---------------------------------------------------------
## スプレッドシートのメニューの説明         

コンテナバインドスクリプトを、デプロイすると、スプレッドシートに以下のメニューが追加されます。      
![2019-11-30 15.23.15.png - Google ドライブ](https://drive.google.com/uc?export=view&id=1KgAuvvSBW_tIVaS-ZBmzSltxJgJtDM8f)     

----

### Settings     
![2019-11-30 15.23.28.png - Google ドライブ](https://drive.google.com/uc?export=view&id=1fFpcGNcv_g1LFsjQlzpEoBmbSWcn-n8T)     
* Create Factor&Level Sheet     
因子と水準を記録するシートを作成します。       

* Set pair-wise API URL     
Cloud Function の API URL を設定します。オールペア法のテストケース生成に使用します。        

----

### Create test case      
![2019-11-30 15.23.38.png - Google ドライブ](https://drive.google.com/uc?export=view&id=1XXIZIW8iwgSoD7hxFjTMGXRwdDNb88Gs)                
* Create all combination test case     
全網羅組み合わせテストを生成します。        

* Create one-wise test case       
one-wise テストケースを生成します。        

* Create pair-wise test case           
pair-wise テストケースを生成します。        

