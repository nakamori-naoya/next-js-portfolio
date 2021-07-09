  //ローカル環境と本番環境で画像のURLを変更する。imageを使う場合は必須でConverterが必要
 export const imageUrlConverter = (imageUrl) => {
    if (imageUrl.includes("app_server")){
      return imageUrl.replace("app_server", "naoyanakamori.com")
    }else{
      return imageUrl
    }
  }