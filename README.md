# javascriptChallenges
Javascript Challenges for differents levels.

## PASOS PARA RESOLVER

### 1. Clonar

git clone https://github.com/cmessoftware/javascriptChallenges

Para clonar el repo te recomendamos crear una nueva carpeta,  (asegurate de no utilizar la misma que el prep curse). Una vez clonado entrá a esa carpeta y ejecutá los siguientes comandos:

    npm install
    npm test

>Si ves los tests fallando, estás listo para comenzar, si no lee bien el output para identificar el error.


### 2. RESOLVER EL CHALLENGE

Tu tarea es completar el código en los archivos que estan dentro de la carpeta javascript
En la carpeta tests estan los test correspondientes.
Para saber si se hicieron bien cada ejercicio TODOS los tests de cada ejercicios deben dar OK.  






### 3. ENTREGAR TU EJRCICIOS

Correr por ultima vez los tests y verificar cuantos pasan. Tene en cuenta que si te aparece "1 failed;1 total" es porque tienes un error de sintaxis: seguramente falta o sobra una llave, paréntesis, punto y coma, etc.
Saca un print de pantalla de tus tests.
Luego, debes subir un commit a tu repo. Para hacerlo, debes ejecutar el siguiente comando:

    git add .
    git commit -m 'ejercicios a hasta b'
    git push origin main

### EXTENSIONES DE VSCODE RECOMENDADAS

Test Explorer: vscode-jest
Live Server


### ¿TENES ALGUN PROBLEMA / CONSULTA?

1. Anotalos y lo vemos en clase. Pero primero analiza, codifica , prueba, comete errores, vuelve a analizar , a codificar y a probar y asi.

### GUIA DE ERRORES COMUNES

Para identificar el error, vas a tener que leerlo en la consola.


* "jest" no se reconoce como un comando externo o interno...:
    1. Borrar la carpeta `node_modules` y el archivo `package-lock.json` e instalar nuevamente ( `npm install` ).
    2. Si esto no funciona, instalar test con el comando `npm install jest`.


* 1 failed, 1 total:
    1. Tenes un error de sintaxis. Revisa el último ejercicio que hayas hecho, seguramente falta o sobra una llave, paréntesis, punto y coma, etc.

* Author identity unknown.  
    1. Intenta ejecutar los siguientes comandos para configurar tu cuenta:
        * git config --global user.name "Tu usuario de GitHub aca"
        * git config --global user.email "Tu email aca"

    2. Ingresa a [Github](https://docs.github.com/es/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) y sigue las instrucciones para configurar tu token. 

* La consola se tilda en `Runs`:
    1. Revisa tu código, tenes un bucle infinito. Tenes que checkear la condición de corte de tus bucles.

