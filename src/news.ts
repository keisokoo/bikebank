const dummyData = {
  title: '제목',
  title_image: '/assets/image/dog.jpeg',
  contents: '내용',
}

const fetchNews = async (_id: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyData)
    }, 1000)
  })
}

document.addEventListener('DOMContentLoaded', async () => {
  const params = new URLSearchParams(window.location.search)
  const id = params.get('id')
  if (id) {
    let response = await fetchNews(id)
    console.log('response', response)
  }
})
