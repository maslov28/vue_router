<template>
    <div>
        <h1>Товары</h1>
        <ul>
            <li v-for="item in products" :key="item.id">
                <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        products: Array
    }
}
</script>