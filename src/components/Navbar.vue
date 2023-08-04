<script lang="ts" setup>

</script>

<template>
    <div class="wrapper">
        <div class="header">
            <div class="logo"><img src="@assets/sidebar.svg" alt=""></div>
            <ul class="navLinks">
                <li><a href="#">Accueil</a></li>
                <li><a href="#">A propos</a></li>
            </ul>
        </div>

    </div>

</template>


<style scoped>
    *{
        padding: 0;
        margin: 0;
        font-size: 14px;
        box-sizing: border-box;
        position: relative;

    }
    ul li{
        list-style-type: none;
    }
    a{
        text-decoration: none;
    }

    .wrapper{
        display: flex;
        flex-direction: column;
    }
    .header{
        padding: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .navLinks{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 25px;
    }
    .navLinks li a{
        font-size: 1.5rem;
        color: #eee;
    }

</style>