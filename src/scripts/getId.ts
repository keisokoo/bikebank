const dummyData = {
  title: "제목",
  title_image: "/assets/image/dog.jpeg",
  contents: "내용",
}

const fetchNews = async (_id: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyData)
    }, 2000)
  })
}

document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search)
  const id = params.get("id")
  if (id) {
    let response = (await fetchNews(id)) as typeof dummyData
    let idDOM = document.querySelector("#response-id")
    let wrapDOM = document.querySelector("#response")
    let titleDOM = document.querySelector("#response .title")
    let contentsDOM = document.querySelector("#response .contents")
    if (!titleDOM || !contentsDOM || !idDOM || !wrapDOM) return
    wrapDOM.classList.remove("inactive")
    idDOM.innerHTML = id
    titleDOM.innerHTML = response.title
    contentsDOM.innerHTML = response.contents
  }
})
