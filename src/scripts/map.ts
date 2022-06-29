const kakao = (window as any).kakao
let mapContainer = document.getElementById("map"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(36.2683, 127.6358), // 지도의 중심좌표
    level: 12, // 지도의 확대 레벨
  }

let map = new kakao.maps.Map(mapContainer, mapOption) // 지도를 생성합니다

const stations = [
  {
    title: "바이크뱅크 강남대리점",
    address: "서울시 강남구 도곡로 245, 1층 (역삼동)",
    address_name: "서울 강남구 역삼동 785-21",
    coords: {
      y: "37.4940231208839",
      x: "127.045261303984",
    },
  },
  {
    title: "바이크뱅크 대치동 사무실",
    address: "서울시 강남구 삼성로71길 16 (대치동)",
    address_name: "서울 강남구 대치동 912-30",
    coords: {
      y: "37.5021468311725",
      x: "127.057553292843",
    },
  },
  {
    title: "바이크뱅크 영동협력점",
    address: "서울시 강남구 봉은사로33길 33 (논현동)",
    address_name: "서울 강남구 논현동 227-4",
    coords: {
      y: "37.5100176381198",
      x: "127.034758780517",
    },
  },
  {
    title: "바이크소유",
    address: "서울 강남구 역삼로 156",
    address_name: "서울 강남구 역삼동 789-7",
    coords: {
      y: "37.4947636235131",
      x: "127.036217927404",
    },
  },
  {
    title: "맛대맛 배달대행",
    address: "서울시 강북구 월계로3길 26 (미아동)",
    address_name: "서울 강북구 미아동 42-74",
    coords: {
      y: "37.6108560762031",
      x: "127.031389704593",
    },
  },
  {
    title: "준모터스",
    address: "서울시 동대문구 왕산로 53 (용두동)",
    address_name: "서울 동대문구 용두동 232-20",
    coords: {
      y: "37.577680322657",
      x: "127.029200839743",
    },
  },
  {
    title: "바이크뱅크양재동 사무실",
    address: "서울시 서초구 남부순환로356길 99 (양재동)",
    address_name: "서울 서초구 양재동 16-17",
    coords: {
      y: "37.4807195236922",
      x: "127.039314773004",
    },
  },
  {
    title: "메케니멀",
    address: "서울시 광진구 뚝섬로 710-1",
    address_name: "서울 광진구 자양동 683-5",
    coords: {
      y: "37.5333241111263",
      x: "127.088154430772",
    },
  },
  {
    title: "바이크뱅크 광진개러지",
    address: "서울시 광진구 동일로 306 ",
    address_name: "서울 광진구 군자동 464-1",
    coords: {
      y: "37.5584692598155",
      x: "127.073576627061",
    },
  },
  {
    title: "플리즈",
    address: "서울시 광진구 광나루로 426",
    address_name: "서울 광진구 화양동 490-1",
    coords: {
      y: "37.5459255860531",
      x: "127.076661570151",
    },
  },
  {
    title: "대림 관악",
    address: "서울시 관악구 남부 순환로 1573-1 ",
    address_name: "서울 관악구 신림동 1464-98",
    coords: {
      y: "37.4839124328609",
      x: "126.925376975229",
    },
  },
  {
    title: "스피드샵",
    address: "서울시 송파구 가락로 234",
    address_name: "서울 송파구 방이동 126-4",
    coords: {
      y: "37.5090166540061",
      x: "127.117752648465",
    },
  },
  {
    title: "올림픽오토바이",
    address: "서울시 송파구 삼전로 41 ",
    address_name: "서울 송파구 잠실동 340-19",
    coords: {
      y: "37.5030729737667",
      x: "127.086515287914",
    },
  },
  {
    title: "이케루",
    address: "서울시 영등포구 경인로 706 ",
    address_name: "서울 영등포구 문래동1가 96-4",
    coords: {
      y: "37.5109974343909",
      x: "126.892563932322",
    },
  },
  {
    title: "삼성오토바이",
    address: "서울시 중랑구 상봉로 29 ",
    address_name: "서울 중랑구 면목동 71-61",
    coords: {
      y: "37.5885346349941",
      x: "127.093792586653",
    },
  },
  {
    title: "BTS",
    address: "대구시 남구 현충로 204",
    address_name: "대구 남구 대명동 1921-8",
    coords: {
      y: "35.8506835298023",
      x: "128.581742432361",
    },
  },
  {
    title: "생각대로 수성직영센터",
    address: "대구시 수성구 희망로 225 1층",
    address_name: "대구 수성구 황금동 689-1",
    coords: {
      y: "35.8464701726345",
      x: "128.623579587247",
    },
  },
  {
    title: "바이크뱅크 부품물류",
    address: "대구시 달성군 다사읍 세천로 21 길 21 ",
    address_name: "대구 달성군 다사읍 세천리 1678-11",
    coords: {
      y: "35.8756410976457",
      x: "128.473011582246",
    },
  },
  {
    title: "바이크뱅크성서점",
    address: "대구시 달서구 선원로 18 ",
    address_name: "대구 달서구 신당동 1697-11",
    coords: {
      y: "35.8590644479538",
      x: "128.494048374957",
    },
  },
  {
    title: "고스테이션 대구월배",
    address: "대구시 달서구 월배로 23 길 70 ",
    address_name: "대구 달서구 대천동 570-13",
    coords: {
      y: "35.817715068004",
      x: "128.525458725491",
    },
  },
  {
    title: "바이크뱅크상인점",
    address: "대구시 달서구 상화북로 74",
    address_name: "대구 달서구 상인동 1458-28",
    coords: {
      y: "35.8115714895294",
      x: "128.534273576901",
    },
  },
  {
    title: "생각대로 송현지점",
    address: "대구시 달서구 송현로 12 길 14 ",
    address_name: "대구 달서구 송현동 1946-2",
    coords: {
      y: "35.8237489134893",
      x: "128.546773829617",
    },
  },
]
// 마커 이미지의 이미지 주소입니다
let imageSrc = "/sources/pin-large.png"
function getCoord(item: { title: string; address: string; read_addr: string }) {
  return new Promise((resolve, rej) => {
    let geocoder = new kakao.maps.services.Geocoder()
    geocoder.addressSearch(item.read_addr, (res: any, status: any) => {
      if (status === kakao.maps.services.Status.OK) {
        let xxx = {
          title: item.title,
          address: item.address,
          address_name: res[0].address.address_name,
          coords: { y: res[0].y, x: res[0].x },
        }
        resolve(xxx)
      } else {
        rej("failed")
      }
    })
  })
}
async function getCoordsWithAddr(
  arr: { title: string; address: string; read_addr: string }[]
) {
  let addrPlusCoords: any = []
  for await (let item of arr) {
    const result = await getCoord(item)
    addrPlusCoords.push(result)
  }

  return addrPlusCoords
}
for (let i = 0; i < stations.length; i++) {
  // 마커 이미지의 이미지 크기 입니다
  let imageSize = new kakao.maps.Size(36, 44)
  let latlng = new kakao.maps.LatLng(stations[i].coords.y, stations[i].coords.x)
  console.log("latlng", latlng)

  // 마커에 표시할 인포윈도우를 생성합니다
  var customOverlay = new kakao.maps.CustomOverlay({
    position: latlng,
    content: `<div data-id="${stations[i].title}" class='map-at'></div>`,
    zIndex: 3,
  })
  customOverlay.setMap(map)
  // 마커 이미지를 생성합니다
  let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize)

  // 마커를 생성합니다
  let marker = new kakao.maps.Marker({
    map: map, // 마커를 표시할 지도
    position: latlng, // 마커를 표시할 위치
    title: stations[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
    image: markerImage, // 마커 이미지
    clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
  })
  function searchDetailAddrFromCoords() {
    let allDom = document.querySelectorAll(`[data-id]`)
    for (let i = 0; i < allDom.length; i++) {
      allDom[i].innerHTML = ""
    }
    document.querySelector(`[data-id="${stations[i].title}"]`).innerHTML =
      "<span>" + stations[i].title + "</span>"
    let mapDetails = document.querySelector(".map-details")
    if (!document.body.querySelector(".map-details")) {
      mapDetails = document.createElement("div")
      mapDetails.classList.add("map-details")
      document.body.appendChild(mapDetails)
    }
    mapDetails.innerHTML = `<div class="t1">${stations[i].title}</div><div class="sub">${stations[i].address}</div>`
  }
  kakao.maps.event.addListener(marker, "click", searchDetailAddrFromCoords)
}
