#

docker build -t bikebank.obj.kr .

kubectl rollout restart deploy bikebank-deployment
