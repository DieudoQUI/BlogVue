<script lang="ts" setup>
    import Navbar from '@/components/Navbar.vue';
</script>

<template>
    <div class="wrapper">
     
          <main>
            <div class="main__content">
               <div class="main__content__top">
                    <div class="main__content__top__left">
                        <img src="@assets/sidebar.svg" alt="">
                    </div>
                    <div class="main__content__top__right">
                        bonjour
                    </div>
               </div>
               <div class="main__content__bottom">
                    <div class="main__content__bottom__">
                        <img src="" alt="">
                    </div>
                    
               </div>
            </div>
          </main>
       


    </div>

</template>


<style >

   body{
    background-color: #796a50;
   }
   .main__content{
    display: flex;
    flex-direction: column;
    gap: 25px;
   /*  justify-content: center; */
   }
   .main__content__top{
    display: flex;
    justify-content: space-between;
    align-items: center;
   }
   
</style>