const button = document.getElementById('bakusan');
button.addEventListener('click', function () {
  if (confirm('DBの全データ消しますよ？')) { 
    axios.post(API_URL + '/bakusan')
      .then(() => {
      alert('消しました')
    })
  }
});