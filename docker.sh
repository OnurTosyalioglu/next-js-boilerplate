#  $1: container name

docker build -t $1 .
docker run -p 3000:3000 $1
