# subir container docker com o DB postgreSQL
sudo docker-compose down
sudo docker-compose up 

# executa migration 
npx prisma migrate dev --schema=./prisma/schema.prisma;   

# start projeto node.js
yarn dev

