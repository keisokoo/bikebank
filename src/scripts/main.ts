function runModal(_id: string) {
  const modalTarget = document.querySelector(`#modal-${_id}`)
  if (modalTarget) {
    modalTarget.removeAttribute("disabled")
    modalTarget.setAttribute("active", "")
  } else {
    closeModal()
  }
}
function closeModal() {
  const activeModal = document.querySelector(".modal-wrap[active]")
  if (!activeModal) return
  activeModal.removeAttribute("active")
  activeModal.setAttribute("disabled", "")
  const url = new URL(window.location as any)
  url.searchParams.delete("modal")
  window.history.pushState({}, null, url)
}
window.addEventListener("popstate", (event) => {
  const params = new URLSearchParams(
    (event.currentTarget as Window).location.search
  )
  const id = params.get("modal")
  if (id) {
    runModal(id)
  } else {
    closeModal()
  }
})
document.addEventListener("DOMContentLoaded", async () => {
  const closeModals = document.querySelectorAll(".close-modal")
  for (let i = 0; i < closeModals.length; i++) {
    closeModals[i].addEventListener("click", closeModal)
  }
  const modalButton = document.querySelectorAll(
    ".s2-motors-wrapper img[data-href]"
  )
  for (let i = 0; i < modalButton.length; i++) {
    modalButton[i].addEventListener("click", (e) => {
      const target = e.currentTarget as HTMLButtonElement
      const attr = target.getAttribute("data-href")
      const url = new URL(window.location as any)
      url.searchParams.set("modal", attr)
      runModal(attr)
      window.history.pushState({ modal: attr }, attr, url)
    })
  }
  const params = new URLSearchParams(window.location.search)
  const id = params.get("modal")
  if (id) {
    runModal(id)
  }
  document.body.querySelector(".burger").addEventListener("click", () => {
    console.log("a")
    if (document.body.querySelector("#menu").classList.contains("active")) {
      document.body.querySelector("#menu").classList.remove("active")
    } else {
      document.body.querySelector("#menu").classList.add("active")
    }
  })
})
