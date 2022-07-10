<template>
  <ul>
    <li>Реализовать страницу /products на которой будет отображен список товаров</li>
    <li>Реализовать страницу вида /products/:id, на которой будет отображен конкретный товар</li>
    <li>
      Карточка товара рендерит
      <ul>
        <li>Наименование товара</li>
        <li>Описание товара</li>
        <li>Стоимость</li>
        <li>Картинку товара</li>
      </ul>
    </li>
    <li>
      Данные о товарах получать с сервера mockapi -
      <ul>
        <li>GET https://6204eefd161670001741b078.mockapi.io/api/v1/products - список товаров</li>
        <li>GET https://6204eefd161670001741b078.mockapi.io/api/v1/products/:id - получение конкретного товара</li>
      </ul>
    </li>
    <li>Использовать http client axios</li>
  </ul>
  <div>
    <router-view :products="products"></router-view>
  </div>
</template>

<script>
import {ref, onMounted} from 'vue'
import axios from 'axios'

export default {
  setup() {
    const products = ref(null)
 
    onMounted(async() => {
      const response = await axios.get('https://6204eefd161670001741b078.mockapi.io/api/v1/products')
      products.value = response.data
    })

    return {
      products
    }
  }
}
</script>