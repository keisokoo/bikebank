const kakao = (window as any).kakao
let mapContainer = document.getElementById("map"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(36.2683, 127.6358), // 지도의 중심좌표
    level: 12, // 지도의 확대 레벨
  }

let map = new kakao.maps.Map(mapContainer, mapOption) // 지도를 생성합니다

// 마커를 표시할 위치와 title 객체 배열입니다
let positions = [
  {
    title: "카카오",
    content: `<div data-id="카카오" class='map-at'></div>`,
    latlng: new kakao.maps.LatLng(33.450705, 126.570677),
  },
  {
    title: "중심",
    content: `<div data-id="중심" class='map-at'></div>`,
    latlng: new kakao.maps.LatLng(36.2683, 127.6358),
  },
  {
    title: `텃밭`,
    content: `<div data-id="텃밭" class='map-at'></div>`,
    latlng: new kakao.maps.LatLng(33.450879, 126.56994),
  },
  {
    title: `근린공원`,
    content: `<div data-id="근린공원" class='map-at'></div>`,
    latlng: new kakao.maps.LatLng(33.451393, 126.570738),
  },
]

// 마커 이미지의 이미지 주소입니다
let imageSrc = "/sources/pin-large.png"

for (let i = 0; i < positions.length; i++) {
  // 마커 이미지의 이미지 크기 입니다
  let imageSize = new kakao.maps.Size(36, 44)

  // 마커에 표시할 인포윈도우를 생성합니다
  let infowindow = new kakao.maps.InfoWindow({
    content: positions[i].content, // 인포윈도우에 표시할 내용
  })
  var customOverlay = new kakao.maps.CustomOverlay({
    position: positions[i].latlng,
    content: positions[i].content,
    zIndex: 3,
  })
  customOverlay.setMap(map)
  // 마커 이미지를 생성합니다
  let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize)

  // 마커를 생성합니다
  let marker = new kakao.maps.Marker({
    map: map, // 마커를 표시할 지도
    position: positions[i].latlng, // 마커를 표시할 위치
    title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
    image: markerImage, // 마커 이미지
    clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
  })
  let targetPosition = positions[i].latlng
  let targetDataId = positions[i].title
  function searchDetailAddrFromCoords() {
    let targetLo = Object.values(targetPosition) as [number, number]
    getAddr(targetLo[1], targetLo[0], targetDataId)
  }

  kakao.maps.event.addListener(marker, "click", searchDetailAddrFromCoords)
}
function getAddr(lat: number, lng: number, targetDataId: any) {
  let geocoder = new kakao.maps.services.Geocoder()

  let coord = new kakao.maps.LatLng(lat, lng)
  let callback = function (result: any, status: any) {
    if (status === kakao.maps.services.Status.OK) {
      let detailAddr = !!result[0].road_address
        ? result[0].road_address.address_name
        : ""
      detailAddr += result[0].address.address_name

      let content = "<span>" + detailAddr + "</span>"

      let allDom = document.querySelectorAll(`[data-id]`)
      for (let i = 0; i < allDom.length; i++) {
        allDom[i].innerHTML = ""
      }
      document.querySelector(`[data-id="${targetDataId}"]`).innerHTML = content
    }
  }
  geocoder.coord2Address(coord.getLng(), coord.getLat(), callback)
}
