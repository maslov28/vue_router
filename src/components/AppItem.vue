<template>
    <div>
        <h2>{{item.title}}</h2>
        <p>{{item.description}}</p>
        <p>{{item.price}}</p>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
    props: {
        products: Array
    },
    setup(props) {
        const route = useRoute()

        const item = computed(() => {
            return props.products.find(el => el.id === route.params.id)
        })

        return {
            item
        }
    }
}
</script>