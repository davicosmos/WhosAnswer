// インポート
const admin = require("./firestore");
const fireStore = new admin.firestore.Firestore();

//詳しい使い方は下記参照
//https://www.wakuwakubank.com/posts/723-firebase-firestore-query/
//https://firebase.google.com/docs/firestore/query-data/queries?hl=ja

async function deleteCollection(collectionPath) {
  const collectionRef = fireStore.collection(collectionPath);

  // バッチ削除を使用して、コレクション内のすべてのドキュメントを取得し、削除する
  const querySnapshot = await collectionRef.get();
  const batchSize = querySnapshot.size;
  if (batchSize === 0) {
    // コレクションが空の場合は処理終了
    return;
  }

  const batch = fireStore.batch();
  querySnapshot.docs.forEach((doc) => {
    batch.delete(doc.ref);
  });

  // バッチでドキュメントを削除
  await batch.commit();

}

exports.go = async function (request, response) {  
    const collections = ['selection', 'game', 'room', 'active_user'];
    collections.forEach((collection) => {
        deleteCollection(collection)
            .then(() => {
                console.log(`コレクション '${collection}' のドキュメントが正常に削除されました。`);
            })
            .catch((error) => {
                console.error(`コレクション '${collection}' のドキュメントの削除中にエラーが発生しました:`, error);
            });
    });
    response.send()
};
