# API REST de Reservas de Habitaciones

Desarrolla una API REST utilizando Spring Boot que permita gestionar reservas de habitaciones en un hotel. La API debe contar con autenticación y autorización, lo que significa que ciertas funcionalidades solo estarán disponibles para usuarios con el rol de administrador.

## Requisitos

- Java 11 o superior
- Maven
- MySQL

## Endpoints
La API debe tener los siguientes endpoints:

### Obtener Reservas

```
GET /api/v1/reservas
```
Este endpoint solo puede ser accesible desde el rol de admin. Devuelve un array con objetos de este tipo:
```json
{
  "id": 1,
  "user": "user1",
  "rooms": [
    {
      "id": 1,
      "room": 1
    }
  ],
  "totalPrice": 20
}
```
#### Excepciones:
- Si el usuario no tiene el rol de admin, se devuelve un error 403 Forbidden.
- Si la reserva no existe, se devuelve un error 404 Not Found.

### Obtener reserva específica
```
GET /api/v1/reservas/{id}
```
Este endpoint solo puede ser accesible desde el rol de admin. Devuelve un objeto de este tipo:
```json
{
  "id": 1,
  "user": "user1",
  "rooms": [
    {
      "id": 1,
      "room": 1
    }
  ],
  "fechaInicial": "20/01/23",
  "fechaFinal": "21/01/23",
  "totalPrice": 20
}
```
#### Excepciones:
- Si el usuario no tiene el rol de admin, se devuelve un error 403 Forbidden.
- Si la reserva no existe, se devuelve un error 404 Not Found.

### Hacer una reserva
```
POST /api/v1/reservas
```
Este endpoint solo estará disponible para admins. Añade una nueva reserva. Se debe pasar el usuario y un array con las habitaciones que se van a reservar.
Este debe ser el cuerpo de la petición: 
```json
{
    "user":"user1",
    "rooms":[1,2,3]
}
```
#### Excepciones:

- Si el usuario no tiene el rol de admin, se devuelve un error 403 Forbidden.
- Si la habitación no existe, se devuelve un error 404 Not Found.
- Si la habitación está reservada, se devuelve un error 409 Conflict.

## Editar una reserva
```
PUT /api/v1/reservas/{id}
```
Este endpoint cambia la reserva. Se debe recibir la habitación que se quiere editar y por cuál se va a editar.
Este debe ser el cuerpo de la petición: 
```json
{
    "acutalRoom":1,
    "newRoom":2
}
```
#### Excepciones:
- Si el usuario no tiene el rol de admin, se devuelve un error 403 Forbidden.
- Si la reserva no existe, se devuelve un error 404 Not Found.
- Si la habitación no existe, se devuelve un error 404 Not Found.
- Si la habitación está reservada, se devuelve un error 409 Conflict.

## Borrar una reserva
```
DELETE /api/v1/reserva/{id}
```
Este endpoint elimina la reserva y la reserva de las habitaciones.

#### Excepciones:

- Si el usuario no tiene el rol de admin, se devuelve un error 403 Forbidden.
- Si la reserva no existe, se devuelve un error 404 Not Found.