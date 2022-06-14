function runModal(_id: string) {
  console.log("run modal", _id)
}
window.addEventListener("popstate", (event) => {
  const params = new URLSearchParams(
    (event.currentTarget as Window).location.search
  )
  const id = params.get("modal")
  if (id) {
    runModal(id)
  }
})
document.addEventListener("DOMContentLoaded", async () => {
  const modalButton = document.querySelectorAll(".s2-motors-wrapper > button")
  for (let i = 0; i < modalButton.length; i++) {
    modalButton[i].addEventListener("click", (e) => {
      const target = e.currentTarget as HTMLButtonElement
      const attr = target.getAttribute("data-href")
      const url = new URL(window.location as any)
      url.searchParams.set("modal", attr)
      window.history.pushState({ modal: attr }, attr, url)
    })
  }
  const params = new URLSearchParams(window.location.search)
  const id = params.get("modal")
  if (id) {
    runModal(id)
  }
})
