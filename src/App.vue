<template>
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