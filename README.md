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
両者を分離し開発を行った背景は以下の判断に基づく。  
・`Railsの真の強さ`は、*「RowDataGateWay + ビジネスロジック + バリデーション + コールバック」* を実現する`Active Record`である
・一方で、Railsが実装する一枚絵のテンプレートビューはビューを複雑化させ、複雑なフロントエンドのロジックを実装するには不適合

そうした判断に基づき、Railsの役割をモデルとビジネスロジックを組み立てるコントローラーに集中させる一方で、ビューの実装をReact.jsとそのフレームワークのNext.jsに担わせることにした。

## 技術選定の理由2 「Docker、CircleCI,ECSの導入」
上記技術の導入理由は下記の通り

*前提：*  
[State of DevOps](https://circleci.com/ja/resources/state-of-devops-report-2020/)により、企業の競争力とソフトウェアの競争力が強い相関を持ち、且つソフトウェアの競争力を決定する2つの要因が`「デプロイの容易性」`と`「テストの容易性」`であることを統計的に証明されたことに私自身が大きな影響を受けている。
以下、『State of DevOps』に基づいた技術選定の理由を説明する。

*導入理由：*  

`Docker`  
・Dockerの登場により、`ローカル開発環境と本番環境の環境の差をほとんど吸収する`ことが可能になった。  
つまり、ローカル環境による動作の保証ができれば、ほとんどの場合で本番環境での動作を保証できるわけである。
とするならば、Dockerの導入により`「デプロイ容易性」`もっと言えば「変更失敗率」を下げることができると判断し採用した。

`CircleCI`  
・Dockerを導入したとしても、テストによる動作検証を手動で行い、デプロイも手動で行っている場合は、デプロイ回数に大きな制約が発生してしまう。  
そうした事態を避けるためにも、 `「テストの自動実行」`並びに`「デプロイの自動化」`を行うCircleCIを採用した。   

`ECS`  
デプロイが容易になったとしても、アプリケーションを段階的にスケールアップすることができなければ、デプロイに制約がかかってしまう。  
そのため、`アプリケーションの段階的なスケールアップが可能`であるクラウドサービスの利用が適切であると判断。
クラウドサービスの中でも`Dockerと極めて相性の良い`ECS
をデプロイ環境として採用した。  
※そもそもクラウドサービスを利用するしかないという背景ももちろんあります。  













