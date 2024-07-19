<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Prueba Tecnica

API REST para manejo de transacciones integrado con wompi.

## Ejecutar el Proyecto

1. Clonar el repositorio
2. Copiar el archivo ```.env.template``` y renombrarlo a .env
3. Agregar las variables de entorno
4. ejecutar comando para instalar las dependencias

```
npm install
```

5. levantar la base de datos con el comando

```
docker-compose up -d
```

6. Ejecutar el seed de productos

```
http://localhost:3000/products/insert
```
