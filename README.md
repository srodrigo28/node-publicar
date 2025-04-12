#### Comandos para publicar

* 1. Logar
```
npm login
```

* 2 para privado ( Opcional )
```
npm publish 
```

* 3 para publico
```
npm publish --access public
```

* href
```
https://alunos.fullstackclub.com.br/area/produto/item/2835031
```

#### usando 

* npm publicado
```
npm i srodrigo28_project
```

* usando 
``` package.json precisa ser type="module"
import { FormMoeda, FormData, FormText } from "srodrigo28_project"

console.log(FormMoeda(100.99))
console.log(FormData('2020-10-10'))
console.log(FormText('queria muito ser um dos melhores programdores', 20))

```