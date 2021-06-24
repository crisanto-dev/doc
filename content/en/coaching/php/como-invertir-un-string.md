---
title: Como invertir un string
description: 'En este entrenamiento vamo a aprender varias maneras de invertir un string.'
slug: como-invertir-un-string
path: /en/coaching/php/como-invertir-un-string
createdAt: DateTime
---
## Metodo 1

```php
$string = "Este es una cadena";
$string_reverse = "";

for($i = strlen($string); $i > 0; $i--) {
  $string_reverse .= $string[$i - 1];
}

echo $string_reverse;
```

```
anedac anu se etsE
```


## Metodo 2: Utilizando una funcion definida

```php
$string = "Invertir por el metodo 2";

echo strrev($string);
```