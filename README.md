# The Exhibition of Portfolios ver 2.0

## :octocat:使用技術
<p align="center">
  <a href="https://ja.reactjs.org/">
    <img   alt="スクリーンショット 2020-11-14 12 45 52" src="https://user-images.githubusercontent.com/73022482/99139136-889fbb80-2679-11eb-8e05-362e2704a06b.png" height="100px;">
  </a>
  <a href="https://nextjs.org/">
    <img   alt="スクリーンショット 2020-11-14 12 45 52" src="https://user-images.githubusercontent.com/73022482/125081426-f44f0100-e100-11eb-9f87-1fd5aded5d1b.png" height="100px;">
  </a>

  <a href="https://aws.amazon.com/jp/">
    <img   alt="スクリーンショット 2020-11-14 12 45 52" src="https://user-images.githubusercontent.com/73022482/102885377-9de8e080-4496-11eb-8f72-dd9e153a2bea.png" height="100px;">
  </a>
   <a href="https://www.docker.com/">
    <img   alt="スクリーンショット 2020-11-14 12 45 52" src="https://user-images.githubusercontent.com/73022482/102885366-9a555980-4496-11eb-90fb-c68704b2206e.png" height="100px;">
  </a>
  <br>
  <a href="https://circleci.com/ja/">
    <img   alt="スクリーンショット 2020-11-14 12 45 52" src="https://user-images.githubusercontent.com/73022482/102885362-97f2ff80-4496-11eb-9a3b-b6dfc3f58175.png" height="100px;">
  </a>
  <a href="https://basecamp.com/">
    <img   alt="スクリーンショット 2020-11-14 12 45 52" src="https://user-images.githubusercontent.com/73022482/102885794-4eef7b00-4497-11eb-848e-ee260f89fd9a.jpg" height="100px;">
  </a>
<a href="https://material-ui.com/"><img src="https://user-images.githubusercontent.com/73022482/99183709-27fba600-2781-11eb-9976-690fa6b676b2.png" height="80px;" />
  </a>
  <a href="https://www.chartjs.org/"><img src="https://user-images.githubusercontent.com/73022482/101280943-7a276880-380f-11eb-912c-25d4945f105a.png" height="80px;" />
  </a>
</p> 

## 技術選定の理由1 「フロントとバックエンドの分離」
The Exhibition of Portfolios ver 2.0は、フロントエンドとバックエンドをそれぞれ分離し開発を行っています。
両者を分離し開発を行った背景は以下の判断に基づきます。  
・`Railsの真の強さ`は、*「RowDataGateWay + ビジネスロジック + (バリデーション + コールバック = アプリケーションサービス)」* を実現する`Active Record`である  
<img   alt="スクリーンショット 2020-11-14 12 45 52" src="https://user-images.githubusercontent.com/73022482/125159187-d2ad5280-e1b0-11eb-82cf-c83c0e0af48b.png" > 

・一方で、Railsが実装する一枚絵のテンプレートビューはビューを複雑化させ、複雑なフロントエンドの複雑なロジックを実装するには不適合である

そうした判断に基づき、Railsの役割を`モデルとビジネスロジックを組み立てるコントローラーに集中`させる一方で、ビューの実装をReact.jsとそのフレームワークのNext.jsに担わせることにした。

## 技術選定の理由2 「Docker、CircleCI,ECSの導入」
上記技術の導入理由は下記の通り

*前提：*  
[State of DevOps](https://circleci.com/ja/resources/state-of-devops-report-2020/)並びに 
[『LeanとDevOpsの科学』](https://www.amazon.co.jp/Lean%E3%81%A8DevOps%E3%81%AE%E7%A7%91%E5%AD%A6%EF%BC%BBAccelerate%EF%BC%BD-%E3%83%86%E3%82%AF%E3%83%8E%E3%83%AD%E3%82%B8%E3%83%BC%E3%81%AE%E6%88%A6%E7%95%A5%E7%9A%84%E6%B4%BB%E7%94%A8%E3%81%8C%E7%B5%84%E7%B9%94%E5%A4%89%E9%9D%A9%E3%82%92%E5%8A%A0%E9%80%9F%E3%81%99%E3%82%8B-impress-top-gear%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA-ebook/dp/B07L2R3LTN/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=34WA1PBWOKQHI&dchild=1&keywords=lean%E3%81%A8devops%E3%81%AE%E7%A7%91%E5%AD%A6&qid=1625893283&sprefix=lean%E3%81%A8%2Caps%2C361&sr=8-1)により、企業の競争力とソフトウェアの競争力が強い相関を持ち、且つソフトウェアの競争力を決定する2つの要因が`「デプロイの容易性」`と`「テストの容易性」`であることが統計的に証明された。
以下、`「デプロイの容易性」`と`「テストの容易性」`の観点に基づき技術選定の理由を説明する。  
<img   alt="スクリーンショット 2020-11-14 12 45 52" src="https://user-images.githubusercontent.com/73022482/125152383-286d0500-e187-11eb-8e6c-ab94b003ef5d.png" > 

*導入理由：*  

`Docker`  
・Dockerの登場により、`ローカル開発環境と本番環境の環境の差をほとんど吸収する`ことが可能になった。  
つまり、ローカル環境による動作の保証ができれば、ほとんどの場合で本番環境での動作を保証できるわけである。
とするならば、Dockerの導入により`「デプロイ容易性」`が実現できると判断した。

`CircleCI`  
・Dockerを導入したとしても、テストによる動作検証を手動で行い、デプロイも手動で行っている場合は、デプロイ回数に大きな制約が発生してしまう。  
そうした事態を避けるためにも、 `「テストの自動実行」`並びに`「デプロイの自動化」`を行うCircleCIを採用した。   

`ECS`  
たとえ、デプロイが容易になったとしても、アプリケーションを段階的にスケールアップすることができなければ、デプロイに制約がかかってしまう。  
そのため、`アプリケーションの段階的なスケールアップが可能`であるクラウドサービスの利用が適切であると判断。
クラウドサービスの中でも`Dockerと極めて相性の良い`ECS
をデプロイ環境として採用した。  
※そもそもクラウドサービスを利用するしかないという背景ももちろんあります。  

## 技術的なこだわり1 「再利用可能なコンポーネント作成」
`こだわり`
1. Reactの実装においては、ロジックの再利用を可能にするために、`「Custom Hook」` を使用しました。
2. また、見た目だけに責務に持つ`「Presentational Component」` とデータや振る舞いを他のコンポーネントに受け渡す`「 Container Component」`に分割しロジックの組み上げを行いました。
<img   alt="スクリーンショット 2020-11-14 12 45 52" src="https://user-images.githubusercontent.com/73022482/125151886-5ef55080-e184-11eb-9d0e-9371f809836d.png" >

3. さらに、「見た目に関するロジック = `レイアウト(配置)に関するロジック` + `各コンポーネントのデザインに関するロジック`」であると考え、レイアウトが複雑化する場合は、レイアウト用のコンポーネントを別途用意することにしました。   
ex)[PortfolioDetailPresenter.js](https://github.com/nakamori-naoya/next-js-portfolio/blob/master/components/PortfolioDetail/PortfolioDetailPresenter.js)

<img   alt="スクリーンショット 2020-11-14 12 45 52" src="https://user-images.githubusercontent.com/73022482/125156500-b1446a80-e1a0-11eb-9af3-966b19baa014.png" >


## 技術的なこだわり2 「サービスオブジェクトの導入」
Railsの実装においては、複数のオブジェクトから利用される`「特定のドメインモデルに紐づかない」ロジック`かつ`データベースでの永続化を目的としないロジック`は`サービスオブジェクト`として実装しました。
今回は、[検索機能](https://github.com/nakamori-naoya/rails-docker-ecs/blob/master/backend/app/services/search_service.rb)をサービスオブジェクトとして実装しました。
<img   alt="スクリーンショット 2020-11-14 12 45 52" src="https://user-images.githubusercontent.com/73022482/125159719-0b026000-e1b4-11eb-960a-2b747742a862.png" >
※ドメインに固有のロジックまでサービスオブジェクトにしないように注意

## 制作手順

















